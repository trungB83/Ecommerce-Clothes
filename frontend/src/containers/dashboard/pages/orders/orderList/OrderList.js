import { Button, Col, Row, Table, Input, Space, Form, Modal, TreeSelect, Select, Divider, Radio } from "antd";
import "./OrderList.scss";
import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from 'react-redux';
import { deleteOrder, fetchOrder, updateOrder } from 'store/orders/actions';
import moment from 'moment';
import { fetchPayment } from 'store/payments/actions';
import { fetchDeliver } from 'store/delivers/actions';
import { fetchOrderItem } from "store/order-items/actions";
import { getObjectLocal } from 'core-authent/utils/localStorage';
import { auth } from 'core-authent/constants/constant';

const { TextArea } = Input;
const { Option } = Select;

function OrderList() {
  const order = useSelector(state => state.orders.list.result)
  const paymentState = useSelector((state) => state.payments);
  const deliverState = useSelector((state) => state.delivers);
  const [searchedText, setSearchedText] = useState("");
  let [dataDetailOrderTable, setDataDetailOrderTable] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [currentOrder, setCurrentOrder] = useState(null);
  const [isModalOpenDeleteOrder, setIsModalOpenDeleteOrder] =
    useState(false);
  const [isModalOpenUpdateOrder, setIsModalOpenUpdateOrder] =
    useState(false);
  const [valueStatus, setValueStatus] = useState("");
  const [valueDeliver, setValueDeliver] = useState("");
  const [valuePayment, setValuePayment] = useState("");
  const [statusTreeData, setStatusTreeData] = useState([
    {
      value: "active",
      title: "Kích hoạt",
    },
    {
      value: "inactive",
      title: "Không kích hoạt",
    },
    {
      value: "completed",
      title: "Hoàn thành",
    },
    {
      value: "cancelled",
      title: "Hủy bỏ",
    },

  ]);
  const orderData = order.data
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOrder())
    dispatch(fetchPayment());
    dispatch(fetchDeliver())
    return () => {
      setCurrentId();
      setCurrentOrder(null);
    };
  }, []);

  const handleStatus = (newValue) => {
    setValueStatus(newValue);
  };

  const handlePayment = (newValue) => {
    setValuePayment(newValue);
  };
  const handleDelivery = (newValue) => {
    setValueDeliver(newValue);
  };

  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  const [userInfo] = useState(() => {
    const userInfoLocal = localStorage.getItem(auth.USER_INFO);
    if (userInfoLocal) {
      return getObjectLocal(auth.USER_INFO);
    } else {
      return {};
    }
  });

  const showModalDeleteOrder = (id) => {
    setCurrentId(id);
    setIsModalOpenDeleteOrder(true);

  };

  const handleOkDeleteOrder = () => {
    handleDeleteOrder(currentId);
    setIsModalOpenDeleteOrder(false);
  };

  const handleDeleteOrder = (id) => {
    dispatch(deleteOrder(id));
  };

  const handleCancelDeleteOrder = () => {
    setIsModalOpenDeleteOrder(false);
  };

  const [formUpdateOrder] = Form.useForm();
  const showModalUpdateOrder = (value) => {
    setDataDetailOrderTable(dataDetailOrderTable = value.order_items)
    setCurrentId(value.order_id);
    setCurrentOrder(value);
    formUpdateOrder.setFieldsValue(value);
    setIsModalOpenUpdateOrder(true);
  };

  const handleOkUpdateOrder = () => {
    onFinishUpdateOrder()
    setIsModalOpenUpdateOrder(false);
  };

  const onFinishUpdateOrder = (values) => {
    if (
      (values && values?.fullname?.trim() !== currentOrder?.fullname) ||
      values?.description?.trim() !== currentOrder?.description ||
      values?.status?.trim() !== currentOrder?.status ||
      values?.order_items !== currentOrder?.order_items
    ) {
      const body = {
        id: currentId,
        fullname: values.fullname ? values.fullname.trim() : "",
        phone: values.phone ? values.phone.trim() : "",
        address: values.address ? values.address.trim() : "",
        description: values.description ? values.description.trim() : "",
        status: values.status ? values.status.trim() : "",
        order_total_price: values.order_total_price ? values.order_total_price : 0,
        deliver_id: values.deliver_id,
        payment_id: values.payment_id,
        order_items: dataDetailOrderTable,
      };
      dispatch(updateOrder(body));
    }
    else {
      return;
    }
  };

  const handleCancelUpdateOrder = () => {
    formUpdateOrder.resetFields();
    setIsModalOpenUpdateOrder(false);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "order_id",
      key: "order_id",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Tên khách hàng",
      dataIndex: "fullname",
      key: "fullname",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Điện thoại",
      dataIndex: "phone",
      key: "phone",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Tổng tiền đơn hàng",
      dataIndex: "order_total_price",
      key: "order_total_price",
      render: (text) => <p>{text ? VND.format(text) : "--"}</p>,
    },
    {
      title: "Phương thức vận chuyển",
      dataIndex: "deliver",
      key: "deliver",
      render: (deliver) => <p>{deliver?.name ? deliver?.name : "--"}</p>,
    },
    {
      title: "Phương thức thanh toán",
      dataIndex: "payment",
      key: "payment",
      render: (payment) => <p>{payment?.name ? payment?.name : "--"}</p>,
    },
    {
      title: "Tạo vào lúc",
      dataIndex: "created_at",
      render: (text) => (
        <span className="p_info">
          {text ? moment(text).format("DD/MM/YYYY | HH:mm") : "--"}
        </span>
      ),
      filter: [
        statusTreeData
      ],
      onFilter: (value, record) => {
        return record.completed === value
      }
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "name",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Hành động",
      dataIndex: "action",
      align: "center",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button
              onClick={() => showModalUpdateOrder(record)}
              type="primary"
              size="large"
              className="button-control"
            >
              Chi tiết
            </Button>
            <Button
              onClick={() => showModalDeleteOrder(record?.order_id)}
              style={{ color: "red" }}
              size="large"
              className="button-control"
            >
              Xóa
            </Button>
          </Space>
        );
      },
    },
  ];

  const columnItems = [
    {
      title: "Id ",
      dataIndex: "order_item_id",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      width: '30%',
      key: "name",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (text) => <img src={text} className="order-detail_image" />,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
  ]

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const deleteAll = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const handleMultipeUpdateStatus = () => {

  }

  return (
    <>
      <div className="page-post-list">
        <Row gutter={16} className="first-row">
          <Col className="gutter-row" span={8}>
            <h2>Đơn hàng</h2>
          </Col>
        </Row>
        <Row gutter={16} className="select-action-group second-row">
          <Col className="gutter-row" span={12}>
            <Input.Search placeholder="Tìm kiếm"
              style={{ marginBottom: 8 }}
              onSearch={(value) => {
                setSearchedText(value)
              }}
              onChange={(e) => {
                setSearchedText(e.target.value)
              }}
            />
          </Col>
          <Col className="right-actions" span={12}>
          </Col>
        </Row>
        <div>
          <Button type="primary" onClick={deleteAll} disabled={!hasSelected} loading={loading}>
            Cập nhật trạng thái
          </Button>
          <span
            style={{
              marginLeft: 8,
            }}
          >
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
          <Divider />
          <Table
            pagination={{
              onChange: (page) => {
              },
              pageSize: 10,
            }}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={orderData}
            rowKey="order_id"
            onSelectModelChange={(data) => {
              console.log(data)
            }}
          />
        </div>
      </div>
      <Modal
        title="CẬP NHẬT ĐƠN HÀNG"
        open={isModalOpenUpdateOrder}
        onOk={handleOkUpdateOrder}
        onCancel={handleCancelUpdateOrder}
        footer={null}
        width={1000}
      >
        <Form
          name="basic"
          onFinish={onFinishUpdateOrder}
          autoComplete="off"
          form={formUpdateOrder}
          labelCol={{ span: 9 }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Table
                pagination={{
                  onChange: (page) => {
                  },
                  pageSize: 10,
                }}
                columns={columnItems}
                dataSource={dataDetailOrderTable}
                rowKey="order_item_id"
              />
            </Col>
            <Col span={12}>
              <Form.Item
                label="Tên người đặt"
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên người đặt!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Tên Tên người đặt"
                  size="large"
                />
              </Form.Item>
              <Form.Item label="Địa chỉ" name="address">
                <Input
                  placeholder="Địa chỉ"
                  size="large"
                />
              </Form.Item>
              <Form.Item label="Số điện thoại" name="phone">
                <Input
                  placeholder="Số điện thoại"
                  size="large"
                />
              </Form.Item>
              <Form.Item label="Mô tả" name="description">
                <TextArea
                  placeholder="Mô tả"
                  size="large"
                />
              </Form.Item>
              <Form.Item label="Tổng giá đơn hàng" name="order_total_price">
                <Input
                  placeholder="Tổng giá đơn hàng"
                  size="large"
                  disabled
                />
              </Form.Item>
              <Form.Item
                label="Trạng thái"
                className="input-col"
                name="status"
              >
                <TreeSelect
                  style={{ width: "100%" }}
                  value={valueStatus}
                  dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                  treeDefaultExpandAll
                  onChange={handleStatus}
                  treeData={statusTreeData}
                ></TreeSelect>
              </Form.Item>
              <Form.Item
                label="Phương thức thanh toán"
                name="payment_id" size="large" rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn phương thức thanh toán!",
                  },
                ]}>
                <Select
                  showSearch={false}
                  value={valuePayment}
                  loading={paymentState.loading}
                  onChange={handlePayment}
                >
                  {
                    paymentState.list.result.data ?
                      paymentState.list.result.data.map((item) => (
                        <Option key={item.payment_id} value={item.payment_id}>
                          {item.name}
                        </Option>
                      ))
                      : null
                  }
                </Select>
              </Form.Item>
              <Form.Item
                label="Phương thức giao hàng"
                name="deliver_id" size="large" rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn phương thức giao hàng!",
                  },
                ]}>
                <Select
                  showSearch={false}
                  value={valueDeliver}
                  loading={deliverState.loading}
                  onChange={handleDelivery}
                >
                  {deliverState.list.result.data ? deliverState.list.result.data.map((item) => (
                    <Option key={item.deliver_id} value={item.deliver_id}>
                      {item.name}
                    </Option>)) : null}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block>
                  Cập nhật
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
      <Modal
        title="XÁC NHẬN XÓA"
        open={isModalOpenDeleteOrder}
        onOk={handleOkDeleteOrder}
        onCancel={handleCancelDeleteOrder}
      >
        <p>Bạn có chắc chắn muốn xóa đơn hàng này?</p>
      </Modal>
    </>
  );
}

export default OrderList;

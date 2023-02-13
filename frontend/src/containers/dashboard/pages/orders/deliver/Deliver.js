import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Space,
  Table,
  TreeSelect,
} from "antd";
import "./Deliver.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeliver,
  deleteDeliver,
  addDeliver,
  updateDeliver,
} from "store/delivers/actions";
import moment from "moment";

function Deliver() {
  const deliverState = useSelector((state) => state.delivers);
  const deliverData = deliverState.list.result.data

  const [currentId, setCurrentId] = useState("");
  const [currentDeliver, setCurrentDeliver] = useState(null);
  const [isModalOpenDeleteDeliver, setIsModalOpenDeleteDeliver] =
    useState(false);
  const [isModalOpenUpdateDeliver, setIsModalOpenUpdateDeliver] =
    useState(false);
  const { TextArea } = Input;
  const dispatch = useDispatch()

  const [valueStatus, setValueStatus] = useState("");
  const [treeData, setTreeData] = useState([
    {
      value: "active",
      title: "Kích hoạt",
    },
    {
      value: "inactive",
      title: "Không kích hoạt",
    },
  ]);
  const handleStatus = (newValue) => {
    setValueStatus(newValue);
  };

  useEffect(() => {
    dispatch(fetchDeliver());
  }, []);

  const reload = () => window.location.reload();

  // Handle add deliver
  const [formAddDeliver] = Form.useForm();
  const onFinishAddDeliver = (values) => {
    if ((values && values.name) || values.price || values.status) {
      const body = {
        name: values.name.trim(),
        price: values.price ? values.price: null,
        status: values.status ? values.status.trim() : "",
      };
      dispatch(addDeliver(body));
  
    } else {
      return;
    }
    formAddDeliver.resetFields();
  };

  // // Handle update deliver
  const [formUpdateDeliver] = Form.useForm();
  const showModalUpdateDeliver = (data) => {
    setCurrentId(data.deliver_id);
    setCurrentDeliver(data);
    formUpdateDeliver.setFieldsValue({
      name: data.name,
      price: data.price,
      status: data.status,
    });
    setIsModalOpenUpdateDeliver(true);
  };

  const handleOkUpdateDeliver = () => {
    formUpdateDeliver.resetFields();
    setIsModalOpenUpdateDeliver(false);
  };

  const handleCancelUpdateDeliver = () => {
    formUpdateDeliver.resetFields();
    setIsModalOpenUpdateDeliver(false);
  };

  const onFinishUpdateDeliver = (values) => {
    if (
      (values && values?.name?.trim() !== currentDeliver?.name) ||
      values?.price?.trim() !== currentDeliver?.price ||
      values?.status?.trim() !== currentDeliver?.status
    ) {
      const body = {
        id: currentId,
        name: values.name ? values.name.trim() : "",
        price: values.price ? values.price : null,
        status: values.status ? values.status.trim() : "",
      };

      dispatch(updateDeliver(body));
      setIsModalOpenUpdateDeliver(false);
      formUpdateDeliver.resetFields();
 
    } else {
      setIsModalOpenUpdateDeliver(false);
      formUpdateDeliver.resetFields();
      return;
    }
  };

  const onFinishFailedUpdateDeliver = (errorInfo) => {};

  // Handle delete deliver
  const showModalDeleteDeliver = (id) => {
    setCurrentId(id);
    setIsModalOpenDeleteDeliver(true);
  };

  const handleOkDeleteDeliver = () => {
    handleDeleteDeliver(currentId);
    setIsModalOpenDeleteDeliver(false);
  };

  const handleCancelDeleteDeliver = () => {
    setIsModalOpenDeleteDeliver(false);
  };

  const handleDeleteDeliver = (id) => {
    dispatch(deleteDeliver(id));

  };

  useEffect(() => {
    dispatch(fetchDeliver());
    return () => {
      setCurrentId();
      setCurrentDeliver(null);
    };
  }, []);

  const columns = [
    {
      title: "Tên đơn vị",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Ngày tạo",
      dataIndex: "created_at",
      key: "created_at",
      render: (text) => (
        <span className="p_info">
          {text ? moment(text).format("DD/MM/YYYY | HH:mm") : "--"}
        </span>
      ),
    },

    {
      title: "Hành động",
      dataIndex: "action",
      align: "center",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button
              onClick={() => showModalUpdateDeliver(record)}
              type="primary"
              size="large"
              className="button-control"
            >
              Sửa
            </Button>
            <Button
              onClick={() => showModalDeleteDeliver(record?.deliver_id)}
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

  return (
    <>
      <div className="page-post-list">
        <Row gutter={16} className="select-action-group second-row">
          <Col className="gutter-row" xl={6} sm={24} xs={24}>
            <h2>Thêm mới </h2>
            <Form
              layout="vertical"
              className="category-form"
              form={formAddDeliver}
              onFinish={onFinishAddDeliver}
            >
              <Form.Item
                className="input-col"
                label="Tên nhà vân chuyển"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Tên nhà vân chuyển là trường bắt buộc.",
                  },
                ]}
              >
                <Input name="name" placeholder="" />
              </Form.Item>
              <Form.Item className="input-col" label="Giá" name="price">
                <TextArea placeholder="" />
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
                  placeholder="Vui lòng chọn"
                  treeDefaultExpandAll
                  onChange={handleStatus}
                  treeData={treeData}
                ></TreeSelect>
              </Form.Item>

              <Form.Item className="button-col">
                <Button shape="round" type="primary" htmlType="submit">
                  Thêm mới
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col className="right-actions" xl={18} sm={24} xs={24}>
            <h2>ĐƠN VỊ VẬN CHUYỂN</h2>
            <Table
              pagination={{
                onChange: (page) => {},
                pageSize: 10,
              }}
              columns={columns}
              dataSource={deliverData}
              rowKey="deliver_id"
            />
            <Modal
              title="SỬA ĐƠN VỊ VẬN CHUYỂN"
              open={isModalOpenUpdateDeliver}
              onOk={handleOkUpdateDeliver}
              onCancel={handleCancelUpdateDeliver}
              footer={null}
            >
              <Form
                name="basic"
                onFinish={onFinishUpdateDeliver}
                onFinishFailed={onFinishFailedUpdateDeliver}
                autoComplete="off"
                form={formUpdateDeliver}
                labelCol={{ span: 9 }}
              >
                <Form.Item
                  label="Tên đơn vị"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tên đơn vị!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Tên đơn vị"
                    size="large"
                  />
                </Form.Item>

                <Form.Item label="Giá" name="price">
                  <Input
                    placeholder="Giá"
                    size="large"
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
                    placeholder="Vui lòng chọn"
                    treeDefaultExpandAll
                    onChange={handleStatus}
                    treeData={treeData}
                  ></TreeSelect>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large" block>
                    Sửa
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
            <Modal
              title="XÁC NHẬN XÓA ĐƠN VỊ VẬN CHUYỂN"
              open={isModalOpenDeleteDeliver}
              onOk={handleOkDeleteDeliver}
              onCancel={handleCancelDeleteDeliver}
            >
              <p>Bạn có chắc chắn muốn nhà vân chuyển này?</p>
            </Modal>
          </Col>
        </Row>
        <div></div>
      </div>
    </>
  );
}

export default Deliver;

import {
  Button,
  Col,
  Form,
  Input,
  message,
  Modal,
  Row,
  Space,
  Table,
  TreeSelect,
  Upload,
} from "antd";
import "./Payment.scss";
import React, { useEffect, useState } from "react";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "config";
import routes from "core-authent/constants/routes";
import {
  fetchPayment,
  deletePayment,
  addPayment,
  updatePayment,
} from "store/payments/actions";
import moment from "moment";

function Payment() {
  const paymentState = useSelector((state) => state.payments);
  const paymentData = paymentState.list.result.data
  const [currentId, setCurrentId] = useState("");
  const [currentPayment, setCurrentPayment] = useState(null);
  const [isModalOpenDeletePayment, setIsModalOpenDeletePayment] =
    useState(false);
  const [isModalOpenUpdatePayment, setIsModalOpenUpdatePayment] =
    useState(false);
  const { TextArea } = Input;

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
  const dispatch = useDispatch();
  const handleStatus = (newValue) => {
    setValueStatus(newValue);
  };

  const reload = () => window.location.reload();

  const fileInfor = {
    name: 'file',
    action: 'https://localhost:5000/v2/file',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  // Handle add deliver
  const [formAddPayment] = Form.useForm();
  const onFinishAddPayment = (values) => {
    if ((values && values.name) || values.description || values.status) {
      const body = {
        name: values.name.trim(),
        description: values.description ? values.description.trim() : "",
        status: values.status ? values.status.trim() : "",
      };
      dispatch(addPayment(body));
    } else {
      return;
    }
    formAddPayment.resetFields();
  };

  // // Handle update deliver
  const [formUpdatePayment] = Form.useForm();
  const showModalUpdatePayment = (data) => {
    setCurrentId(data.payment_id);
    setCurrentPayment(data);
    formUpdatePayment.setFieldsValue(data);
    setIsModalOpenUpdatePayment(true);
  };

  const handleOkUpdatePayment = () => {
    formUpdatePayment.resetFields();
    setIsModalOpenUpdatePayment(false);
  };

  const handleCancelUpdatePayment = () => {
    formUpdatePayment.resetFields();
    setIsModalOpenUpdatePayment(false);
  };

  const onFinishUpdatePayment = (values) => {
    if (
      (values && values?.name?.trim() !== currentPayment?.name) ||
      values?.description?.trim() !== currentPayment?.description ||
      values?.status?.trim() !== currentPayment?.status
    ) {
      const body = {
        id: currentId,
        name: values.name ? values.name.trim() : "",
        description: values.description ? values.description.trim() : "",
        status: values.status ? values.status.trim() : "",
      };

      dispatch(updatePayment(body));
      setIsModalOpenUpdatePayment(false);
      formUpdatePayment.resetFields();
    } else {
      setIsModalOpenUpdatePayment(false);
      formUpdatePayment.resetFields();
      return;
    }
  };

  // Handle delete deliver
  const showModalDeletePayment = (id) => {
    setCurrentId(id);
    setIsModalOpenDeletePayment(true);
  };

  const handleOkDeletePayment = () => {
    handleDeletePayment(currentId);
    setIsModalOpenDeletePayment(false);
  };

  const handleCancelDeletePayment = () => {
    setIsModalOpenDeletePayment(false);
  };

  const handleDeletePayment = (id) => {
    dispatch(deletePayment(id));
  };

  useEffect(() => {
    dispatch(fetchPayment());
    return () => {
      setCurrentId();
      setCurrentPayment(null);
    };
  }, []);

  const columns = [
    {
      title: "Tên thanh toán",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Trạng thái",
      dataIndex: "image",
      key: "image",
      render: (image) => <img src={image ? image : "--"} alt="thumbnail" />,
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
              onClick={() => showModalUpdatePayment(record)}
              type="primary"
              size="large"
              className="button-control"
            >
              Sửa
            </Button>
            <Button
              onClick={() => showModalDeletePayment(record?.payment_id)}
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
              form={formAddPayment}
              onFinish={onFinishAddPayment}
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
              <Form.Item className="input-col" label="Mô tả" name="description">
                <TextArea placeholder="" />
              </Form.Item>
              <Form.Item
                label="Ảnh đại diện "
                className="input-col"
                name="image"
              >
                <Upload {...fileInfor}>
                  <Button icon={<UploadOutlined />}>Tải tệp tin</Button>
                </Upload>
              </Form.Item>

              <Form.Item className="button-col">
                <Button shape="round" type="primary" htmlType="submit">
                  Thêm mới
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col className="right-actions" xl={18} sm={24} xs={24}>
            <h2>PHƯƠNG THỨC THANH TOÁN</h2>
            <Table
              pagination={{
                onChange: (page) => { },
                pageSize: 10,
              }}
              columns={columns}
              dataSource={paymentData}
              rowKey="payment_id"
            />
            <Modal
              title="SỬA PHƯƠNG THỨC THANH TOÁN"
              open={isModalOpenUpdatePayment}
              onOk={handleOkUpdatePayment}
              onCancel={handleCancelUpdatePayment}
              footer={null}
            >
              <Form
                name="basic"
                onFinish={onFinishUpdatePayment}
                autoComplete="off"
                form={formUpdatePayment}
                labelCol={{ span: 9 }}
              >
                <Form.Item
                  label="Tên thanh toán"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tên thanh toán!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Tên thanh toán"
                    size="large"
                  />
                </Form.Item>

                <Form.Item label="Mô tả" name="description">
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Mô tả"
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
              title="XÁC NHẬN XÓA PHƯƠNG THỨC THANH TOÁN"
              open={isModalOpenDeletePayment}
              onOk={handleOkDeletePayment}
              onCancel={handleCancelDeletePayment}
            >
              <p>Bạn có chắc chắn muốn xóa phương thức thanh toán này?</p>
            </Modal>
          </Col>
        </Row>
        <div></div>
      </div>
    </>
  );
}

export default Payment;

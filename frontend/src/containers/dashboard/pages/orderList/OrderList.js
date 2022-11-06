import "./OrderList.css";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Menu,
  message,
  Radio,
  Row,
  Select,
  Space,
  Table,
  TreeSelect,
  Modal,
  Form,
  Input,
} from "antd";
import { Link } from "react-router-dom";
import routes from "../../../../core-authent/constants/routes";

import React, { useEffect, useState } from "react";
import {
  DownOutlined,
  PlusOutlined,
  UserOutlined,
  MailOutlined,
  DeleteOutlined,
  LockOutlined,
  EditOutlined,
} from "@ant-design/icons";
import Search from "antd/lib/input/Search";
import { TreeNode } from "antd/lib/tree-select";
import { pathApi } from "../../../../core-authent/constants/pathApi";
import { BASE_URL } from "../../../../config";

const onSearch = (value) => console.log(value);

const { RangePicker } = DatePicker;

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const itemsCheckbox = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const menucheckbox = <Menu onClick={handleMenuClick} items={itemsCheckbox} />;

const { Option } = Select;

function OrderList() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [value, setValue] = useState();
  const [gridData, SetGridData] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isModalOpenDeleteUser, setIsModalOpenDeleteUser] = useState(false);
  const [isModalOpenAddUser, setIsModalOpenAddUser] = useState(false);
  const [isModalOpenUpdateUser, setIsModalOpenUpdateUser] = useState(false);
  const dispatch = useAppDispatch();

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(`${BASE_URL}${pathApi.profile.profiles}`);
    const jsonData = await response.json();
    const data = jsonData.data;
    SetGridData(data);
  };
  console.log("gridData", gridData);

  const handleCategories = (newValue) => {
    console.log("handleCategories", newValue);
    setValue(newValue);
  };

  // Handle delete user
  const showModalDeleteUser = (id) => {
    setCurrentId(id);
    setIsModalOpenDeleteUser(true);
  };

  const handleOkDeleteUser = () => {
    handleDeleteUser(currentId);
    setIsModalOpenDeleteUser(false);
  };

  const handleCancelDeleteUser = () => {
    setIsModalOpenDeleteUser(false);
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  // Handle add user
  const [formAddUser] = Form.useForm();
  const showModalAddUser = () => {
    formAddUser.resetFields();
    setIsModalOpenAddUser(true);
  };

  const handleOkAddUser = () => {
    setIsModalOpenAddUser(false);
  };

  const handleCancelAddUser = () => {
    setIsModalOpenAddUser(false);
  };

  const onFinishAddUser = (values) => {
    if (
      values &&
      values.ten_tai_khoan &&
      values.ten_nhan_vien &&
      values.email &&
      values.mat_khau &&
      values.xac_nhan_mat_khau
    ) {
      const body = {
        ten_tai_khoan: values.ten_tai_khoan.trim(),
        ten_nhan_vien: values.ten_nhan_vien.trim(),
        email: values.email.trim(),
        mat_khau: values.mat_khau.trim(),
        xac_nhan_mat_khau: values.xac_nhan_mat_khau.trim(),
      };
      dispatch(addUser(body));
      setIsModalOpenAddUser(false);
    } else {
      setIsModalOpenAddUser(false);
      return;
    }
  };

  const onFinishFailedAddUser = (errorInfo) => {};

  // Handle update user
  const [formUpdateUser] = Form.useForm();
  const showModalUpdateUser = (data) => {
    setCurrentId(data.nhan_vien_id);
    setCurrentUser(data);
    formUpdateUser.setFieldsValue({
      ten_tai_khoan: data.ten_tai_khoan,
      ten_nhan_vien: data.ten_nhan_vien,
    });
    setIsModalOpenUpdateUser(true);
  };

  const handleOkUpdateUser = () => {
    formUpdateUser.resetFields();
    setIsModalOpenUpdateUser(false);
  };

  const handleCancelUpdateUser = () => {
    formUpdateUser.resetFields();
    setIsModalOpenUpdateUser(false);
  };

  const onFinishUpdateUser = (values) => {
    if (
      (values &&
        values?.ten_tai_khoan?.trim() !== currentUser?.ten_tai_khoan) ||
      values?.ten_nhan_vien?.trim() !== currentUser?.ten_nhan_vien ||
      (values.mat_khau &&
        values.xac_nhan_mat_khau &&
        values.mat_khau.trim() &&
        values.xac_nhan_mat_khau.trim())
    ) {
      const body = {
        ten_tai_khoan: values.ten_tai_khoan ? values.ten_tai_khoan.trim() : "",
        ten_nhan_vien: values.ten_nhan_vien ? values.ten_nhan_vien.trim() : "",
        id: currentId,
      };
      if (values.mat_khau) {
        body.mat_khau = values.mat_khau.trim();
      }
      dispatch(updateUser(body));
      setIsModalOpenUpdateUser(false);
      formUpdateUser.resetFields();
    } else {
      setIsModalOpenUpdateUser(false);
      formUpdateUser.resetFields();
      return;
    }
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "nhan_vien_id",
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "anh_dai_dien",
    },
    {
      title: "Họ và tên",
      dataIndex: "ten_nhan_vien",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Địa chỉ",
      dataIndex: "dia_chi",
    },
    {
      title: "Số điện thoại",
      dataIndex: "so_dien_thoai",
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngay_tao",
    },
    {
      title: "Hành động",
      dataIndex: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => showModalUpdateUser(record)}
            type="primary"
            size="small"
            icon={<EditOutlined />}
          >
            Sửa
          </Button>
          <Button
            onClick={() => showModalDeleteUser(record?.nhan_vien_id)}
            type="primary"
            size="small"
            icon={<DeleteOutlined />}
            danger
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="pagePostList">
        <Row gutter={16} className="first-row">
          <Col className="gutter-row" span={8}>
            <h2>Người dùng</h2>
          </Col>
          <Col className="gutter-row" span={16}>
            <Row gutter={16}>
              <Col span={6}>
                <TreeSelect
                  showSearch
                  style={{
                    width: "100%",
                  }}
                  value={value}
                  dropdownStyle={{
                    maxHeight: 400,
                    overflow: "auto",
                  }}
                  placeholder="Danh mục dữ liệu"
                  allowClear
                  multiple
                  treeDefaultExpandAll
                  onChange={handleCategories}
                >
                  <TreeNode value="1" title="Tin tức" />
                  <TreeNode value="2" title="Hỏi đáp" />
                </TreeSelect>
              </Col>
              <Col span={6}>
                {/* <Select
                  defaultValue="working"
                  style={{ width: 120 }}
                  onChange={handleStatus}
                >
                  <Option value="tosting">Tất cả trạng thái</Option>
                  <Option value="working">Đang hoạt động</Option>
                  <Option value="blocked">Bị khóa</Option>
                </Select> */}
              </Col>
              <Col span={6}>
                <RangePicker />
              </Col>
              <Col span={6}>
                <Search
                  placeholder="Tìm kiếm...."
                  onSearch={onSearch}
                  style={{
                    width: 200,
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={16} className="select-action-group second-row">
          <Col className="gutter-row" span={12}>
            <Dropdown overlay={menucheckbox}>
              <Button>
                <Space>
                  Chọn hành động
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </Col>
          <Col className="right-actions" span={12}>
            <Button className="button-add-post ant-btn-round">
              <PlusOutlined />
              <Link to={`${routes.dashboard}${routes.adduser}`}>
                Thêm mới người dùng
              </Link>
            </Button>
          </Col>
        </Row>
        <div>
          <Divider />

          <Table
            rowSelection={rowSelection}
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 10,
            }}
            columns={columns}
            dataSource={gridData}
            rowKey="nhan_vien_id"
          />
        </div>
        <Modal
          title="XÁC NHẬN XÓA NGƯỜI DÙNG"
          open={isModalOpenDeleteUser}
          onOk={handleOkDeleteUser}
          onCancel={handleCancelDeleteUser}
        >
          <p>Bạn có chắc chắn muốn xóa người dùng này?</p>
        </Modal>
        {/* Modal add user */}
        <Modal
          title="THÊM NGƯỜI DÙNG"
          open={isModalOpenAddUser}
          onOk={handleOkAddUser}
          onCancel={handleCancelAddUser}
          footer={null}
        >
          <Form
            name="basic"
            onFinish={onFinishAddUser}
            onFinishFailed={onFinishFailedAddUser}
            autoComplete="off"
            form={formAddUser}
          >
            <Form.Item
              name="ten_tai_khoan"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên đăng nhập!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Tên đăng nhập"
                size="large"
                autoFocus={true}
              />
            </Form.Item>

            <Form.Item
              name="ten_nhan_vien"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên nhân viên!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Tên nhân viên"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Vui lòng nhập đúng định dạng email!",
                },
                {
                  required: true,
                  message: "Vui lòng nhập email!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="mat_khau"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Mật khẩu"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="xac_nhan_mat_khau"
              dependencies={["mat_khau"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("mat_khau") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Không trùng khớp mật khẩu!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Xác nhận mật khẩu"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Thêm
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="SỬA NGƯỜI DÙNG"
          open={isModalOpenUpdateUser}
          onOk={handleOkUpdateUser}
          onCancel={handleCancelUpdateUser}
          footer={null}
        >
          <Form
            name="basic"
            onFinish={onFinishUpdateUser}
            autoComplete="off"
            form={formUpdateUser}
            labelCol={{ span: 9 }}
          >
            <Form.Item
              label="Tên tài khoản"
              name="ten_tai_khoan"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên đăng nhập!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Tên đăng nhập"
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Tên nhân viên"
              name="ten_nhan_vien"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên nhân viên!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Tên nhân viên"
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Mật khẩu mới"
              name="mat_khau"
              rules={[
                {
                  required: false,
                  message: "Vui lòng nhập mật khẩu mới!",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Mật khẩu mới"
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Xác nhận mật khẩu mới"
              name="xac_nhan_mat_khau"
              dependencies={["mat_khau"]}
              hasFeedback
              rules={[
                {
                  required: false,
                  message: "Vui lòng nhập mật khẩu mới!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("mat_khau") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Không trùng khớp mật khẩu mới!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Xác nhận mật khẩu mới"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Sửa
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default OrderList;

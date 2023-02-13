import { LockOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Radio, Row, Select } from "antd";
import React, { useState, useEffect } from "react";
import FormItem from "antd/es/form/FormItem";
import TreeSelect, { TreeNode } from "antd/lib/tree-select";
import routes from "core-authent/constants/routes";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./UserForm.scss";
import { addUser, updateUser, fetchDetailUser } from "store/users/actions";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserCates } from "store/user-cates/actions";

const { Option } = Select;
const { TextArea } = Input;

function UserForm() {
  const userState = useSelector((state) => state.users)
  const userCateState = useSelector((state) => state.user_cates);
  const [valueGender, setValueGender] = useState("");
  const [valueStatus, setValueStatus] = useState("");
  const [valueCategory, setValueCategory] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [form] = Form.useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const defaultUser = {
    fullname: "",
    username: "",
    email: "",
    phone: "",
    image: "",
    password: "",
    status: "active",
    gender: "",
    user_cate_id: 3
  };

  const defaultForm = {
    ...defaultUser,
    isChanged: false,
  };
  const [state, setState] = useState(defaultForm);

  useEffect(() => {
    dispatch(fetchUserCates());
    if (params?.id) {
      dispatch(fetchDetailUser(params.id));
    } else {
      form.setFieldsValue(defaultUser);
    }
  }, []);
  const userData = userState.item.result?.data
  useEffect(() => {
    form.setFieldsValue({
      fullname : userData?.fullname,
      password : userData?.password,
      re_password : userData?.password,
      email : userData?.email,
      username : userData?.username,
      phone : userData?.phone,
      address : userData?.address,
      gender : userData?.gender,
      status: userData?.status,
      user_cate_id : userData?.user_cate_id
    })
  }, [userState.item]);

  const resetField = () => {
    form.resetFields();
    if (params?.id) {
      form.setFieldsValue(userData)
    } else {
      form.setFieldsValue(defaultUser);
    }
  };

  const handleGender = (value) => {
    setValueGender(value);
  };

  const handleStatus = (newValue) => {
    setValueStatus(newValue);
  };

  const handleCategory = (newValue) => {
    setValueCategory(newValue);
  };


  const onSubmit = (values) => {
    setCurrentId(params.id);
    if (params?.id) {
      setCurrentUser(values);
      if (
        (values && values?.username?.trim() !== currentUser?.username) ||
        values?.fullname?.trim() !== currentUser?.fullname ||
        values?.password !== currentUser?.password ||
        values?.re_password !== currentUser?.re_password ||
        values?.user_cate_id !== currentUser?.user_cate_id
      ) {
        const body = {
          id: params?.id,
          username: values.username.trim(),
          password: values.password.trim(),
          re_password: values.re_password.trim(),
          fullname: values.fullname ? values.fullname.trim() : "",
          email: values.email ? values.email.trim() : "",
          user_cate_id: values.user_cate_id ? values.user_cate_id : 3,
          address: values.address ? values.address.trim() : "",
          phone: values.phone ? values.phone : null,
          gender: values.gender ? values.gender : null
        };
        dispatch(updateUser(body));
        navigate(`${routes.dashboard}${routes.user.main_route}`)
      } else {
        return;
      }
    } else {
      if (
        values &&
        values.username &&
        values.fullname &&
        values.password &&
        values.re_password &&
        values.user_cate_id
      ) {
        const body = {
          username: values.username.trim(),
          password: values.password.trim(),
          re_password: values.re_password.trim(),
          fullname: values.fullname ? values.fullname.trim() : "",
          email: values.email ? values.email.trim() : "",
          user_cate_id: values.user_cate_id ? values.user_cate_id : 3,
          address: values.address ? values.address.trim() : "",
          gender: values.gender ? values.gender : null
        };
        dispatch(addUser(body));
        navigate(`${routes.dashboard}${routes.user.main_route}`)
      } else {
        return;
      }
    }
  };


  return (
    <>
      <div className="pageAddUser">
        <Row gutter={16} className="first-row">
          <Col span={18}>
            <h1 className="pageAddUser_title">Thêm Mới Thành Viên</h1>
          </Col>
          <Col span={6} className="back-to-list">
            <Link to={`${routes.dashboard}${routes.user.main_route}`}>
              <Button className="pageAddUser_toList ant-btn-round">
                Danh sách thành viên
              </Button>
            </Link>
          </Col>
        </Row>
        <Row gutter={16} className="FormDetail">
          <Form
            form={form}
            onFinish={onSubmit}
            initialValues={defaultUser}
            className="form-father"
          >
            <Col span={18} className="FormDetail_left">
              <div className="FormDetail_left-inner">
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Họ và tên"
                      name="fullname"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng điền đủ trường này",
                        },
                      ]}
                    >
                      <Input placeholder="Tên đăng nhập" />
                    </Form.Item>

                    <Form.Item
                      label="Tên đăng nhập"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng điền đủ trường này",
                        },
                      ]}
                    >
                      <Input placeholder="Tên đăng nhập" />
                    </Form.Item>

                    <Form.Item
                      label="E-mail"
                      name="email"
                      rules={[
                        {
                          type: "email",
                          message: "Vui lòng nhập đúng định dạng email!",
                        },
                      ]}
                    >
                      <Input placeholder="E-mail" />
                    </Form.Item>

                    <Form.Item
                      label="Số điện thoại"
                      name="phone"
                    >
                      <Input placeholder="Số điện thoại" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Mật khẩu"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập đủ trường này!",
                        },
                      ]}
                    >
                      <Input.Password placeholder="Mật khẩu" />
                    </Form.Item>
                    <Form.Item
                      label="Nhập lại mật khẩu"
                      name="re_password"
                      dependencies={["password"]}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập mật khẩu!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
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
                      />
                    </Form.Item>
                    <Form.Item label="Địa chỉ" name="address">
                      <Input placeholder="Địa chỉ" />
                    </Form.Item>
                    <Form.Item
                      label="Giới tính"
                      name="gender"
                      rules={[
                        {
                          required: false,
                          message: "Vui lòng điền đủ trường này",
                        },
                      ]}
                    >
                      <Radio.Group
                        options={[
                          { label: "Nam", value: 1 },
                          { label: "Nữ", value: 0 },
                        ]}
                        onChange={handleGender}
                        value={valueGender}
                        optionType="button"
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={6} className="FormDetail_right">
              <div className="FormDetail_right-inner">
                <div className="FormDetail_right-item">
                  <div className="FormDetail_right-item__title">
                    <h2>Xuất bản</h2>
                  </div>
                  <div className="FormDetail_right-item__content">
                    <Button className="btn-control red-6" onClick={resetField}>
                      Làm lại
                    </Button>
                    <Button className="btn-control green-6" htmlType="submit">
                      {params?.id ? "Cập nhật" : "Thêm Mới"}
                    </Button>
                  </div>
                </div>
                <div className="FormDetail_right-item">
                  <div className="FormDetail_right-item__title">
                    <h2>Trạng thái</h2>
                  </div>
                  <div className="FormDetail_right-item__content">
                    <FormItem name="status">
                      <TreeSelect
                        showSearch
                        style={{ width: "100%" }}
                        value={valueStatus}
                        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                        placeholder="Please select"
                        allowClear
                        treeDefaultExpandAll
                        onChange={handleStatus}
                      >
                        <TreeNode value="inactive" title="Không kích hoạt" />
                        <TreeNode value="active" title="Kích hoạt" />
                      </TreeSelect>
                    </FormItem>
                  </div>
                </div>
                <div className="FormDetail_right-item">
                  <div className="FormDetail_right-item__title">
                    <h2>Phân quyền</h2>
                  </div>
                  <div className="FormDetail_right-item__content">
                    <FormItem name="user_cate_id">
                      <Form.Item
                        name="user_cate_id" size="large" rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn Phân quyền!",
                          },
                        ]}>
                        <Select
                          showSearch={false}
                          value={valueCategory}
                          loading={userCateState.loading}
                          onChange={handleCategory}
                        >
                          {userCateState.list.result.data ?
                            userCateState.list.result.data.map((cate) => (
                              <Option key={cate.user_cate_id} value={cate.user_cate_id}>
                                {cate.name}
                              </Option>)) : null}
                        </Select>
                      </Form.Item>
                    </FormItem>
                  </div>
                </div>
                {/* <div className="FormDetail_right-item">
                  <div className="FormDetail_right-item__title">
                    <h2>Ảnh đại diện</h2>
                  </div>
                  <div className="FormDetail_right-item__content">
                    <FormItem name="image">
                      <TextArea rows={4} placeholder="Url hình ảnh" />
                    </FormItem>
                  </div>
                </div> */}
              </div>
            </Col>
          </Form>
        </Row>
      </div>
    </>
  );
}

export default UserForm;

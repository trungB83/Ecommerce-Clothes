import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Space,
  Table,
  TreeSelect,
} from "antd";
import "./UserCate.scss";
import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserCates,
  deleteUserCate,
  addUserCate,
  updateUserCate,
} from "store/user-cates/actions";
import { fetchPermissions } from "store/permissions/actions";

const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;

function UserCate() {
  const permissionState = useSelector((state) => state.permissions);
  const userCateState = useSelector(state => state.user_cates)
  const [currentId, setCurrentId] = useState("");
  const [currentUserCate, setCurrentUserCate] = useState(null);
  const [isModalOpenDeleteUserCate, setIsModalOpenDeleteUserCate] =
    useState(false);
  const [isModalOpenUpdateUserCate, setIsModalOpenUpdateUserCate] =
    useState(false);
  const [isModalOpenPermission, setIsModalOpenPermission] =
    useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserCates());
    dispatch(fetchPermissions());
    return () => {
      setCurrentId();
      setCurrentUserCate(null);
    };
  }, [dispatch]);

  const userCateData = userCateState.list.result?.data
  const permissionData = permissionState.list.result?.data

  const [formAddUserCate] = Form.useForm();
  const onFinishAddUserCate = (values) => {
    if ((values && values.name) || values.description) {
      const body = {
        name: values.name.trim(),
        description: values.description ? values.description.trim() : "",
      };
      dispatch(addUserCate(body));
    } else {
      return;
    }
    formAddUserCate.resetFields();
  };

  const [formUpdateUserCate] = Form.useForm();
  const showModalUpdateUserCate = (values) => {
    setCurrentId(values.user_cate_id);
    setCurrentUserCate(values);
    formUpdateUserCate.setFieldsValue({
      name: values.name,
      description: values.description,
    });
    setIsModalOpenUpdateUserCate(true);
  };

  const handleOkUpdateUserCate = () => {
    formUpdateUserCate.resetFields();
    setIsModalOpenUpdateUserCate(false);

  };

  const handleCancelUpdateUserCate = () => {
    formUpdateUserCate.resetFields();
    setIsModalOpenUpdateUserCate(false);
  };

  const onFinishUpdateUserCate = (values) => {
    if (
      (values && values?.name?.trim() !== currentUserCate?.name) ||
      values?.description?.trim() !== currentUserCate?.description
    ) {
      const body = {
        id: currentId,
        name: values.name ? values.name.trim() : "",
        description: values.description ? values.description.trim() : "",
      };

      dispatch(updateUserCate(body));
      setIsModalOpenUpdateUserCate(false);
      formUpdateUserCate.resetFields();
    } else {
      setIsModalOpenUpdateUserCate(false);
      formUpdateUserCate.resetFields();
      return;
    }
  };

  const showModalDeleteUserCate = (id) => {
    setCurrentId(id);
    setIsModalOpenDeleteUserCate(true);
  };

  const handleOkDeleteUserCate = () => {
    handleDeleteUserCate(currentId);
    setIsModalOpenDeleteUserCate(false);
  };

  const handleCancelDeleteUserCate = () => {
    setIsModalOpenDeleteUserCate(false);
  };

  const handleDeleteUserCate = (id) => {
    dispatch(deleteUserCate(id));
  };

  const showModalPermission = (id) => {
    setIsModalOpenPermission(true);
    setCurrentId(id);
  }

  const handleOkPermission = () => {
    handlePermission(currentId);
    setIsModalOpenPermission(false);
  };

  const handleCancelPermission = () => {
    setIsModalOpenPermission(false);
  };

  const handlePermission = (id) => {
    console.log("clicked role");
  };


  const columns = [
    {
      title: "Tên vai trò",
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
      title: "Số lượng tài khoản",
      dataIndex: "users",
      key: "users",
      render: (text) => <p>{text?.length ? text?.length : "--"}</p>,
    },
    {
      title: "Hành động",
      dataIndex: "action",
      align: "center",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button
              onClick={() => showModalPermission(record?.user_cate_id)}
              style={{ color: "white", background: "Green" }}
              size="large"
              className="button-control"
            >
              Phân quyền
            </Button>
            <Button
              onClick={() => showModalUpdateUserCate(record)}
              type="primary"
              size="large"
              className="button-control"
            >
              Sửa
            </Button>
            <Button
              onClick={() => showModalDeleteUserCate(record?.user_cate_id)}
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


  // dataSource.map((data, index) => {
  //   return (
  //     <tr key={data.key ? data.key : index}>
  //      {((rowSelection && columnsLeft.length === 0) ? [
  //       <td>
  //         <Checkbox onChange={(e) => { this.onBodyCheckChange(e, index); }} checked={data.checked} />
  //         </td>] : []).concat(columns.map((column) => {
  //       return <td key={column.key}>{typeof (column.render) === 'function' ? column.render(data[column.dataIndex], data, index) : data[column.dataIndex]}</td>;
  //     }))}
  //     </tr>);
  // })


  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const defaultCheckedList = ['Apple', 'Orange'];
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <>{permissionState.list.result?.data && userCateState.list.result?.data ? (<div className="page-post-list">
      <Row gutter={16} className="select-action-group second-row">
        <Col className="gutter-row" xl={6} sm={24} xs={24}>
          <h2>Thêm mới </h2>
          <Form
            layout="vertical"
            className="category-form"
            form={formAddUserCate}
            onFinish={onFinishAddUserCate}
          >
            <Form.Item
              className="input-col"
              label="Tên danh mục"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Tên danh mục là trường bắt buộc.",
                },
              ]}
            >
              <Input name="name" placeholder="" />
            </Form.Item>
            <Form.Item className="input-col" label="Mô tả" name="description">
              <TextArea placeholder="" />
            </Form.Item>

            <Form.Item className="button-col">
              <Button shape="round" type="primary" htmlType="submit">
                Thêm mới
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col className="right-actions" xl={18} sm={24} xs={24}>
          <h2>VAI TRÒ NGƯỜI DÙNG</h2>
          <Table
            pagination={{
              onChange: (page) => { },
              pageSize: 10,
            }}
            columns={columns}
            dataSource={userCateData}
            rowKey="user_cate_id"
          />
          <Modal
            title="SỬA VAI TRÒ"
            open={isModalOpenUpdateUserCate}
            onOk={handleOkUpdateUserCate}
            onCancel={handleCancelUpdateUserCate}
            footer={null}

          >
            <Form
              name="basic"
              onFinish={onFinishUpdateUserCate}
              autoComplete="off"
              form={formUpdateUserCate}
              labelCol={{ span: 9 }}
            >
              <Form.Item
                label="Tên phân quyền"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên phân quyền!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Tên phân quyền"
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

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block>
                  Sửa
                </Button>
              </Form.Item>
            </Form>
          </Modal>
          <Modal
            title="XÁC NHẬN XÓA VAI TRÒ"
            open={isModalOpenDeleteUserCate}
            onOk={handleOkDeleteUserCate}
            onCancel={handleCancelDeleteUserCate}
          >
            <p>Bạn có chắc chắn muốn xóa phân quyền này?</p>
          </Modal>
          <Modal
            width={1400}
            title="CẬP NHẬT PHÂN QUYỀN"
            open={isModalOpenPermission}
            onOk={handleOkPermission}
            onCancel={handleCancelPermission}>
            <Card
              title="Card title"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                Check all
              </Checkbox>
              <Divider />
              <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
            </Card>
          </Modal>
        </Col>
      </Row>
      <div></div>
    </div>) : "đang tải"}

    </>
  );
}

export default UserCate;

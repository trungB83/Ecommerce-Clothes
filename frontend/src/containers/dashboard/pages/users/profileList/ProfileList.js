import { Button, Col, Modal, Row, Space, Input, Table } from "antd";
import "./ProfileList.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "config";
import {
  fetchUsers,
  deleteUser,
} from "store/users/actions";
import routes from "core-authent/constants/routes";
import moment from "moment";
import { Link } from 'react-router-dom';

function ProfileList() {
  const userState = useSelector((state) => state.users);
  const [currentId, setCurrentId] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [searchedText, setSearchedText] = useState("");
  const [isModalOpenDeleteUser, setIsModalOpenDeleteUser] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, []);
  const userData = userState.list.result.data



  const reload = () => window.location.reload();

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

  useEffect(() => {

    dispatch(fetchUsers());
    return () => {
      setCurrentId();
      setCurrentUser(null);
    };
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "user_id",
      key: "user_id",
      render: (text) => <p>{text ? text : "--"}</p>,
      sorter: (a, b) => a.user_id - b.user_id,
    },
    {
      title: "Tên đăng nhập",
      dataIndex: "username",
      key: "username",
      render: (text) => <p>{text ? text : "--"}</p>,
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return (
          String(record.username).toLowerCase().includes(value.toLowerCase()) ||
          String(record.user_cate?.name).toLowerCase().includes(value.toLowerCase()) ||
          String(record.fullname).toLowerCase().includes(value.toLowerCase())
        )
      },
      sorter: (a, b) => a.username.localeCompare(b.username)
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Họ và tên",
      dataIndex: "fullname",
      key: "fullname",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Phân quyền",
      dataIndex: "user_cate",
      key: "user_cate",
      render: (text) => <p>{text?.name ? text?.name : "--"}</p>,
      filters: [

        {
          text: 'Admin',
          value: 'Admin',
        },

      ],
     
      onFilter: (value, record) => record.user_cate?.name.indexOf(value) === 0,
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
      sorter: (a, b) => moment(a.created_at).unix() - moment(b.created_at).unix()
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (text) => <p>{text ? text : "--"}</p>,
      filters: [
        {
          text: 'active',
          value: 'active',
        },
        {
          text: 'block',
          value: 'block',
        },
      ],
      onFilter: (value, record) => record.status == value
    },
    {
      title: "Hành động",
      dataIndex: "action",
      align: "center",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button
              type="primary"
              size="large"
              className="button-control"
            >
              <Link
                to={`${routes.dashboard}${routes.user.addUserPage}/${record.user_id}`}
              >
                Sửa
              </Link>
            </Button>
            <Button
              onClick={() => showModalDeleteUser(record?.user_id)}
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
        <Row gutter={16} className="first-row">
          <Col className="gutter-row" span={8}>
            <h2>Người dùng</h2>
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
            <Button
              className="button-add-post ant-btn-round"
            >
              <Link to={`${routes.dashboard}${routes.user.addUserPage}`}>
                Thêm mới
              </Link>
            </Button>
            <Modal
              title="XÁC NHẬN XÓA NGƯỜI DÙNG"
              open={isModalOpenDeleteUser}
              onOk={handleOkDeleteUser}
              onCancel={handleCancelDeleteUser}
            >
              <p>Bạn có chắc chắn muốn xóa người dùng này?</p>
            </Modal>
          </Col>
        </Row>
        <div>
          <Table
            pagination={{
              onChange: (page) => {
              },
              pageSize: 10,
            }}
            columns={columns}
            dataSource={userData}
            rowKey="user_id"
          />
        </div>
      </div>
    </>
  );
}

export default ProfileList;

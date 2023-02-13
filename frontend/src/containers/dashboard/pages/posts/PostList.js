import {
  Button,
  Col,
  Divider,
  Input,
  Modal,
  Row,
  Space,
  Table,
} from "antd";
import "./PostList.scss";
import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import routes from "core-authent/constants/routes";
import {
  fetchPosts,
  deletePost,
} from "store/posts/actions";
import postImageDefault from "assets/images/img-default-post.jpg"
import moment from "moment";
import { Link } from "react-router-dom";

function PostList() {
  const posts = useSelector((state) => state.posts);
  const [currentId, setCurrentId] = useState("");
  const [currentPost, setCurrentPost] = useState(null);
  const [isModalOpenDeletePost, setIsModalOpenDeletePost] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const postData = posts.list.result.data;
  const dispatch = useDispatch();

  const reload = () => window.location.reload();

  // Handle delete post
  const showModalDeletePost = (id) => {
    setCurrentId(id);
    setIsModalOpenDeletePost(true);
  };

  const handleOkDeletePost = () => {
    handleDeletePost(currentId);
    setIsModalOpenDeletePost(false);

  };

  const handleCancelDeletePost = () => {
    setIsModalOpenDeletePost(false);
  };

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  useEffect(() => {
    dispatch(fetchPosts());
    return () => {
      setCurrentId();
      setCurrentPost(null);
    };
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "post_id",
      key: "post_id",
      render: (text) => <p>{text ? text : "--"}</p>,
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.post_id - b.post_id,
    },
    {
      title: "Tên bài viết",
      dataIndex: "name",
      key: "name",
      width: '30%',
      render: (text) => <p>{text ? text : "--"}</p>,
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return (
          String(record.name).toLowerCase().includes(value.toLowerCase()) ||
          String(record.post_cate?.name).toLowerCase().includes(value.toLowerCase()) ||
          String(record.status).toLowerCase().includes(value.toLowerCase())
        )
      },
      sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "image",
      key: "image",
      width: '10%',
      render: (image) => <img className="image-card" src={image ? image : postImageDefault} alt="thumbnail"></img>,
    },
    {
      title: "Danh mục",
      dataIndex: "post_cate",
      key: "post_cate",
      render: (text) => <p>{text?.name ? text?.name : "--"}</p>,
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },

      ],
      onFilter: (value, record) => record.post_cate.name.indexOf(value) === 0,
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
    // {
    //   title: "Ngày sửa",
    //   dataIndex: "updated_at",
    //   key: "updated_at",
    //   render: (text) => (
    //     <span className="p_info">
    //       {text ? moment(text).format("DD/MM/YYYY | HH:mm") : "--"}
    //     </span>
    //   ),
    //   sorter: (a, b) => moment(a.updated_at).unix() - moment(b.updated_at).unix()
    // },
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
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      title: "Hành động",
      dataIndex: "action",
      align: "center",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button type="primary" size="large" className="button-control" style={{ background: "green" }}>
              <Link
                to={`${routes.post.detail}/${record.post_id}`}
              >
                Xem
              </Link>
            </Button>
            <Button type="primary" size="large" className="button-control">
              <Link
                to={`${routes.dashboard}${routes.post.addPostPage}/${record.post_id}`}
              >
                Sửa
              </Link>
            </Button>
            <Button
              onClick={() => showModalDeletePost(record?.post_id)}
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
            <h2>BÀI VIẾT</h2>
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
            <Button className="button-add-post ant-btn-round">
              <PlusOutlined />
              <Link to={`${routes.dashboard}${routes.post.addPostPage}`}>
                Thêm mới
              </Link>
            </Button>
            <Modal
              title="XÁC NHẬN XÓA BÀI VIẾT"
              open={isModalOpenDeletePost}
              onOk={handleOkDeletePost}
              onCancel={handleCancelDeletePost}
              onHide={reload}
            >
              <p>Bạn có chắc chắn muốn xóa bài viết này?</p>
            </Modal>
          </Col>
        </Row>
        <div>
        <Divider />
          <Table
            pagination={{
              onChange: (page) => { },
              pageSize: 10,
            }}
            columns={columns}
            dataSource={postData}
            rowKey="post_id"
          />
        </div>
      </div>
    </>
  );
}

export default PostList;

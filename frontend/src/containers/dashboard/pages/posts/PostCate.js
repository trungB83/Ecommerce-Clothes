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
import "./PostCate.scss";
import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostCates,
  deletePostCate,
  addPostCate,
  updatePostCate,
} from "store/post-cates/actions";
import moment from "moment";

const { TextArea } = Input;


function PostCate() {
  const postCateState = useSelector((state) => state.post_cates);
  const [currentId, setCurrentId] = useState("");
  const [currentPostCate, setCurrentPostCate] = useState(null);
  const [isModalOpenDeletePostCate, setIsModalOpenDeletePostCate] =
    useState(false);
  const [isModalOpenUpdatePostCate, setIsModalOpenUpdatePostCate] =
    useState(false);
  const postCateData = postCateState.list.result.data
  const dispatch = useDispatch();

  const reload = () =>
    dispatch(fetchPostCates());



  // Handle add post category
  const [formAddPostCate] = Form.useForm();
  const onFinishAddPostCate = (values) => {
    if ((values && values.name) || values.description) {
      const body = {
        name: values.name.trim(),
        description: values.description ? values.description.trim() : "",
      };
      dispatch(addPostCate(body));
      formAddPostCate.resetFields();
    } else {
      return;
    }
    formAddPostCate.resetFields();
  };

  // // Handle update post category
  const [formUpdatePostCate] = Form.useForm();
  const showModalUpdatePostCate = (data) => {
    setCurrentId(data.post_cate_id);
    setCurrentPostCate(data);
    formUpdatePostCate.setFieldsValue({
      name: data.name,
      description: data.description,
    });
    setIsModalOpenUpdatePostCate(true);
  };

  const handleOkUpdatePostCate = () => {
    formUpdatePostCate.resetFields();
    setIsModalOpenUpdatePostCate(false);
  };

  const handleCancelUpdatePostCate = () => {
    formUpdatePostCate.resetFields();
    setIsModalOpenUpdatePostCate(false);
  };

  const onFinishUpdatePostCate = (values) => {
    if (
      (values && values?.name?.trim() !== currentPostCate?.name) ||
      values?.price?.trim() !== currentPostCate?.price ||
      values?.description?.trim() !== currentPostCate?.description
    ) {
      const body = {
        id: currentId,
        name: values.name ? values.name.trim() : "",
        description: values.description ? values.description.trim() : "",
      };
      dispatch(updatePostCate(body));
      setIsModalOpenUpdatePostCate(false);
      formUpdatePostCate.resetFields();
    } else {
      setIsModalOpenUpdatePostCate(false);
      formUpdatePostCate.resetFields();
      return;
    }
  };

  const onFinishFailedUpdatePostCate = (errorInfo) => { };

  // Handle delete post category
  const showModalDeletePostCate = (id) => {
    setCurrentId(id);
    setIsModalOpenDeletePostCate(true);
  };

  const handleOkDeletePostCate = () => {
    handleDeletePostCate(currentId);
    setIsModalOpenDeletePostCate(false);
    dispatch(fetchPostCates())
  };

  const handleCancelDeletePostCate = () => {
    setIsModalOpenDeletePostCate(false);
  };

  const handleDeletePostCate = (id) => {
    dispatch(deletePostCate(id));
  };

  useEffect(() => {
    dispatch(fetchPostCates());
    return () => {
      setCurrentId();
      setCurrentPostCate(null);
    };
  }, []);

  const columns = [
    {
      title: "Tên danh mục",
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
      title: "Số lượng bài viết",
      dataIndex: "posts",
      key: "posts",
      render: (text) => <p>{text?.length ? text?.length : "--"}</p>,
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
              onClick={() => showModalUpdatePostCate(record)}
              type="primary"
              size="large"
              className="button-control"
            >
              Sửa
            </Button>
            <Button
              onClick={() => showModalDeletePostCate(record?.post_cate_id)}
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
              form={formAddPostCate}
              onFinish={onFinishAddPostCate}
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
            <h2>DANH MỤC BÀI VIẾT</h2>
            <Table
              pagination={{
                onChange: (page) => { },
                pageSize: 10,
              }}
              columns={columns}
              dataSource={postCateData}
              rowKey="post_cate_id"
            />
            <Modal
              title="SỬA DANH MỤC"
              open={isModalOpenUpdatePostCate}
              onOk={handleOkUpdatePostCate}
              onCancel={handleCancelUpdatePostCate}
              footer={null}
            >
              <Form
                name="basic"
                onFinish={onFinishUpdatePostCate}
                onFinishFailed={onFinishFailedUpdatePostCate}
                autoComplete="off"
                form={formUpdatePostCate}
                labelCol={{ span: 9 }}
              >
                <Form.Item
                  label="Tên danh mục"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tên danh mục!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Tên danh mục"
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
              title="XÁC NHẬN XÓA DANH MỤC"
              open={isModalOpenDeletePostCate}
              onOk={handleOkDeletePostCate}
              onCancel={handleCancelDeletePostCate}
            >
              <p>Bạn có chắc chắn muốn xóa danh mục này?</p>
            </Modal>
          </Col>
        </Row>
        <div></div>
      </div>
    </>
  );
}

export default PostCate;

import { UnorderedListOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select } from "antd";
import React, { useState, useEffect } from "react";
import FormItem from "antd/es/form/FormItem";
import TreeSelect, { TreeNode } from "antd/lib/tree-select";
import routes from "core-authent/constants/routes";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./PostForm.scss";
import {
  addPost,
  fetchDetailPost,
  updatePost,
} from "store/posts/actions";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { fetchPostCates } from "store/post-cates/actions";

const { TextArea } = Input;
const { Option } = Select;

function PostForm(props) {
  const postState = useSelector((state) => state.posts);
  const postCateState = useSelector((state) => state.post_cates);
  const [valueStatus, setValueStatus] = useState("");
  const [valueCategory, setValueCategory] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [currentPost, setCurrentPost] = useState(null);
  const [form] = Form.useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchPostCates());
    if (params?.id) {
      dispatch(fetchDetailPost(params.id));
    } else {
      form.setFieldsValue(defaultPost);
    }
  }, []);
  const postData = postState.item.result.data

  useEffect(() => {
    form.setFieldsValue(postData)
  }, [postState.item]);
  

  const resetField = () => {
    form.resetFields();
    if (params?.id) {
      form.setFieldsValue(postData)
    } else {
      form.setFieldsValue(defaultPost);
    }
  };

  const formats = [
    "header",
    "font",
    "color",
    "align",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "formula",
    "width",
  ];

  const modules = {
    toolbar: [
      [
        { header: "1" },
        { header: "2" },
        { font: [] },
        { color: [] },
        { align: [] },
      ],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video", "formula"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const fetchDataPost = () => {

  }
  const defaultPost = {
    name: "",
    description: "",
    content: "",
    image: "",
    post_cate_id: "",
    status: "active",
  };
  const editPost = {
    name: postState.name,
    description: postState.description,
    content: postState.content,
    image: postState.image,
    post_cate_id: postState.post_cate_id,
    status: postState.status,
  };



  const defaultForm = {
    ...defaultPost,
    isChanged: false,
    // uploadLoading: false,
    // openMediaLibrary: false,
    // insertMedia: {
    //   open: false,
    //   editor: null,
    // },
  };
  const [state, setState] = useState(defaultForm);


  const handleStatus = (newValue) => {
    setValueStatus(newValue);
  };

  const handleCategory = (newValue) => {
    setValueCategory(newValue);
  };
  const renderPostCategories = () => {
    let options = [];
    if (postCateState.list.result && postCateState.list.result.data) {
      options = postCateState.list.result.data.map((cate) => (
        <Option key={cate.post_cate_id} value={cate.post_cate_id}>
          {cate.name}
        </Option>
      ));
      return (
        <Select
          showSearch={false}
          value={valueCategory}
          loading={postCateState.loading}
          onChange={handleCategory}
          placeholder="Danh mục"
        >
          {options}
        </Select>
      );
    }
  };

  const onSubmitPost = (values) => {
    if (params?.id) {
      setCurrentPost(values);
      if (
        (values && values?.name?.trim() !== currentPost?.name) ||
        values?.description?.trim() !== currentPost?.description ||
        values?.content?.trim() !== currentPost?.content ||
        values?.image?.trim() !== currentPost?.image ||
        values?.post_cate_id !== currentPost?.post_cate_id ||
        values.status.trim() !== currentPost?.status
      ) {
        const body = {
          id: params.id,
          name: values.name.trim(),
          description: values.description ? values.description.trim() : "",
          content: values.content ? values.content.trim() : "",
          image: values.image ? values.image.trim() : "",
          post_cate_id: values.post_cate_id ? values.post_cate_id : null,
          status: values.status ? values.status.trim() : "",
        };
        dispatch(updatePost(body));
      } else {
        return;
      }
    } else {
      if (
        (values && values.name) ||
        values.description ||
        values.content ||
        values.image ||
        values.post_cate_id ||
        values.status
      ) {
        const body = {
          name: values.name.trim(),
          description: values.description ? values.description.trim() : "",
          content: values.content ? values.content.trim() : "",
          image: values.image ? values.image.trim() : "",
          post_cate_id: values.post_cate_id ? values.post_cate_id : null,
          status: values.status ? values.status.trim() : "",
        };
        dispatch(addPost(body));
        navigate(`${routes.dashboard}${routes.post.main_route}`)
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
            <h1 className="pageAddUser_title">
              {params?.id ? "Cập nhật bài viết" : "Thêm Mới Bài viết"}
            </h1>
          </Col>
          <Col span={6} className="back-to-list">
            <Link to={`${routes.dashboard}${routes.post.main_route}`}>
              <Button className="pageAddUser_toList ant-btn-round">
                Danh sách bài viết
              </Button>
            </Link>
          </Col>
        </Row>
        <Row gutter={16} className="FormDetail">
          <Form
            form={form}
            onFinish={onSubmitPost}
            initialValues={defaultPost}
            className="form-father"
          >
            <Col span={18} className="FormDetail_left">
              <div className="FormDetail_left-inner">
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      label="Tiêu đề bài viết"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng điền đủ trường này",
                        },
                      ]}
                    >
                      <Input placeholder="Tiêu đề bài viết" />
                    </Form.Item>

                    <Form.Item label="Mô tả" name="description">
                      <ReactQuill
                        theme="snow"
                        value={postDescription}
                        onChange={setPostDescription}
                        formats={formats}
                        modules={modules}
                      />
                    </Form.Item>
                    <Form.Item label="Nội dung" name="content">
                      <ReactQuill
                        theme="snow"
                        value={postContent}
                        onChange={setPostContent}
                        formats={formats}
                        modules={modules}
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
                    <h2>Danh mục bài viết</h2>
                  </div>
                  <div className="FormDetail_right-item__content">
                    <FormItem name="post_cate_id">
                      {renderPostCategories()}
                    </FormItem>
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
                        <TreeNode value="active" title="Kích hoạt"/> 
                        <TreeNode value="inactive" title="Không kích hoạt"/>
                      </TreeSelect>
                    </FormItem>
                  </div>
                </div>
                <div className="FormDetail_right-item">
                  <div className="FormDetail_right-item__title">
                    <h2>Ảnh đại diện</h2>
                  </div>
                  <div className="FormDetail_right-item__content">
                    <FormItem name="image">
                      {/* <Button style={{ width: "100%" }}>Chọn file</Button>
                       */}
                      <TextArea rows={4} placeholder="Url hình ảnh" />
                    </FormItem>

                  </div>
                </div>
              </div>
            </Col>
          </Form>
        </Row>
      </div>
    </>
  );
}

export default PostForm;

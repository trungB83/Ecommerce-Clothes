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
import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductCates,
  deleteProductCate,
  addProductCate,
  updateProductCate,
} from "store/product-cates/actions";

function ProductCate() {
  const productCateState = useSelector((state) => state.product_cates);
  const [currentId, setCurrentId] = useState("");
  const [currentProductCate, setCurrentProductCate] = useState(null);
  const [isModalOpenDeleteProductCate, setIsModalOpenDeleteProductCate] =
    useState(false);
  const [isModalOpenUpdateProductCate, setIsModalOpenUpdateProductCate] =
    useState(false);
  const { TextArea } = Input;
  const productCateData = productCateState.list.result.data

  const dispatch = useDispatch();

  const reload = () => window.location.reload();

  const [formAddProductCate] = Form.useForm();
  const onFinishAddProductCate = (values) => {
    if ((values && values.name) || values.description) {
      const body = {
        name: values.name.trim(),
        description: values.description ? values.description.trim() : "",
      };
      dispatch(addProductCate(body));
    } else {
      return;
    }
    formAddProductCate.resetFields();
  };

  const [formUpdateProductCate] = Form.useForm();
  const showModalUpdateProductCate = (values) => {
    setCurrentId(values.product_cate_id);
    setCurrentProductCate(values);
    formUpdateProductCate.setFieldsValue({
      name: values.name,
      description: values.description,
      // status : values.status
    });
    setIsModalOpenUpdateProductCate(true);
  };

  const handleOkUpdateProductCate = () => {
    formUpdateProductCate.resetFields();
    setIsModalOpenUpdateProductCate(false);
  };

  const handleCancelUpdateProductCate = () => {
    formUpdateProductCate.resetFields();
    setIsModalOpenUpdateProductCate(false);
  };

  const onFinishUpdateProductCate = (values) => {
    if (
      (values && values?.name?.trim() !== currentProductCate?.name) ||
      values?.description?.trim() !== currentProductCate?.description
    ) {
      const body = {
        id: currentId,
        name: values.name ? values.name.trim() : "",
        description: values.description ? values.description.trim() : "",
      };

      dispatch(updateProductCate(body));
      setIsModalOpenUpdateProductCate(false);
      formUpdateProductCate.resetFields();
 
    } else {
      setIsModalOpenUpdateProductCate(false);
      formUpdateProductCate.resetFields();
      return;
    }
  };



  const showModalDeleteProductCate = (id) => {
    setCurrentId(id);
    setIsModalOpenDeleteProductCate(true);
  };

  const handleOkDeleteProductCate = () => {
    handleDeleteProductCate(currentId);
    setIsModalOpenDeleteProductCate(false);
  };

  const handleCancelDeleteProductCate = () => {
    setIsModalOpenDeleteProductCate(false);
  };

  const handleDeleteProductCate = (id) => {
    dispatch(deleteProductCate(id));
  };

  useEffect(() => {
    dispatch(fetchProductCates());
    return () => {
      setCurrentId();
      setCurrentProductCate(null);
    };
  }, []);

  const columns = [
    {
      title: "Tên phân quyền",
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
      title: "Số lượng sản phẩm",
      dataIndex: "products",
      key: "products",
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
              onClick={() => showModalUpdateProductCate(record)}
              type="primary"
              size="large"
              className="button-control"
            >
              Sửa
            </Button>
            <Button
              onClick={() => showModalDeleteProductCate(record?.product_cate_id)}
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
              form={formAddProductCate}
              onFinish={onFinishAddProductCate}
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
            <h2>Danh mục sản phẩm</h2>
            <Table
              pagination={{
                onChange: (page) => { },
                pageSize: 10,
              }}
              columns={columns}
              dataSource={productCateData}
              rowKey="product_cate_id"
            />
            <Modal
              title="SỬA DANH MỤC"
              open={isModalOpenUpdateProductCate}
              onOk={handleOkUpdateProductCate}
              onCancel={handleCancelUpdateProductCate}
              footer={null}
            >
              <Form
                name="basic"
                onFinish={onFinishUpdateProductCate}
                autoComplete="off"
                form={formUpdateProductCate}
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
              title="XÁC NHẬN XÓA PHÂN QUYỀN"
              open={isModalOpenDeleteProductCate}
              onOk={handleOkDeleteProductCate}
              onCancel={handleCancelDeleteProductCate}
            >
              <p>Bạn có chắc chắn muốn xóa phân quyền này?</p>
            </Modal>
          </Col>
        </Row>
        <div></div>
      </div>
    </>
  );
}

export default ProductCate;

import { UnorderedListOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Radio, Row, Select } from "antd";
import React, { useState, useEffect } from "react";
import TreeSelect, { TreeNode } from "antd/lib/tree-select";
import routes from "core-authent/constants/routes";
import { Link, useParams } from "react-router-dom";
import "./ProductForm.scss";
import { addProduct, updateProduct, fetchDetailProduct } from "store/products/actions";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import { fetchProductCates } from "store/product-cates/actions";

const { Option } = Select;
const { TextArea } = Input;

function ProductForm(props) {
  const [valueStatus, setValueStatus] = useState("");
  const [valueCategory, setValueCategory] = useState("");
  const [currentProduct, setCurrentProduct] = useState(null);
  const [productDescription, setProductDescription] = useState("");
  const [productContent, setProductContent] = useState("");
  const productState = useSelector((state) => state.products);
  const productCateState = useSelector((state) => state.product_cates);
  const [form] = Form.useForm();
  const params = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProductCates());
    if (params.id) {
      dispatch(fetchDetailProduct(params.id));
    } else {
      form.setFieldsValue(defaultProduct);
    }
  }, []);
  const productData = productState.item.result.data

  useEffect(() => {
    form.setFieldsValue(
      {
        name: productData?.name,
        sku: productData?.sku,
        price: productData?.price,
        sale_price: productData?.sale_price,
        image: productData?.image,
        content: productData?.content,
        description: productData?.description,
        product_cate_id: productData?.product_cate_id,
        status: productData?.status,
      })
  }, [productState.item]);

  const resetField = () => {
    form.resetFields();
    if (params?.id) {
      form.setFieldsValue(productData)
    }
    else {
      form.setFieldsValue(defaultProduct);
    }
  };

  const handleCategory = (newValue) => {
    setValueCategory(newValue);
  };
  const handleStatus = (newValue) => {
    setValueStatus(newValue);
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

  const defaultProduct = {
    name: "",
    sku: "",
    price: "",
    sale_price: "",
    image: "",
    content: "",
    description: "",
    product_cate_id: 1,
    status: "active",
  };

  const defaultForm = {
    ...defaultProduct,
    isChanged: false,
  };
  const [state, setState] = useState(defaultForm);


  const renderProductCategories = () => {
    let options = [];
    if (productCateState.list.result && productCateState.list.result.data) {
      options = productCateState.list.result.data.map((cate) => (
        <Option key={cate.product_cate_id} value={cate.product_cate_id}>
          {cate.name}
        </Option>
      ));
      return (
        <Select
          showSearch={false}
          value={valueCategory}
          loading={productCateState.loading}
          onChange={handleCategory}
          placeholder="Danh mục"
        >
          {options}
        </Select>
      );
    }
  };

  const onSubmit = (values) => {
    if (params?.id) {
      setCurrentProduct(values);
      if (
        (values && values?.name?.trim() !== currentProduct?.name) ||
        values?.description?.trim() !== currentProduct?.description ||
        values?.content?.trim() !== currentProduct?.content ||
        values?.image?.trim() !== currentProduct?.image ||
        values?.price !== currentProduct?.price ||
        values?.sale_price !== currentProduct?.sale_price ||
        values?.product_cate_id !== currentProduct?.product_cate_id ||
        values.status.trim() !== currentProduct?.status
      ) {
        const body = {
          id: params.id,
          name: values.name.trim(),
          price: values.price ? values.price : null,
          sale_price: values.sale_price ? values.sale_price : null,
          description: values.description ? values.description.trim() : "",
          content: values.content ? values.content.trim() : "",
          image: values.image ? values.image.trim() : "",
          product_cate_id: values.product_cate_id
            ? values.product_cate_id
            : null,
          status: values.status ? values.status.trim() : "",
        };
        dispatch(updateProduct(body));
      } else {
        return;
      }
    } else {
      if (
        values && values.name || values.price ||
        values.sale_price ||
        values.description ||
        values.content ||
        values.image ||
        values.product_cate_id ||
        values.status
      ) {
        const body = {
          name: values.name.trim(),
          price: values.price ? values.price.trim() : null,
          sale_price: values.sale_price ? values.sale_price.trim() : null,
          description: values.description ? values.description.trim() : "",
          content: values.content ? values.content.trim() : "",
          image: values.image ? values.image.trim() : "",
          product_cate_id: values.product_cate_id
            ? values.product_cate_id
            : null,
          status: values.status ? values.status.trim() : "",
        };
        dispatch(addProduct(body));
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
              {params?.id ? "Cập nhật sản phẩm" : "Thêm Mới sản phẩm"}
            </h1>
          </Col>
          <Col span={6} className="back-to-list">
            <Link to={`${routes.dashboard}${routes.product.main_route}`}>
              <Button className="pageAddUser_toList ant-btn-round">
                Danh sách
              </Button>
            </Link>
          </Col>
        </Row>
        <Row gutter={16} className="FormDetail">
          <Form
            form={form}
            onFinish={onSubmit}
            initialValues={defaultProduct}
            className="form-father"
          >
            <Col span={18} className="FormDetail_left">
              <div className="FormDetail_left-inner">
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Tên sản phẩm"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng điền đủ trường này",
                        },
                      ]}
                    >
                      <Input placeholder="Tên sản phẩm" />
                    </Form.Item>

                    <Form.Item label="SKU" name="sku">
                      <Input placeholder="SKU" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Giá"
                      name="price"
                      rules={[
                        {
                          type: "price",
                          message: "Vui lòng nhập đúng định dạng price!",
                        },
                      ]}
                    >
                      <Input placeholder="Giá" />
                    </Form.Item>

                    <Form.Item label="Giảm giá" name="sale_price">
                      <Input placeholder="Giảm giá" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item label="Mô tả" name="description">
                      <ReactQuill
                        theme="snow"
                        value={productDescription}
                        onChange={setProductDescription}
                        formats={formats}
                        modules={modules}
                      />
                    </Form.Item>

                    <Form.Item label="Nội dung" name="content">
                      <ReactQuill
                        theme="snow"
                        value={productContent}
                        onChange={setProductContent}
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
                      Xuất bản
                    </Button>
                  </div>
                </div>
                <div className="FormDetail_right-item">
                  <div className="FormDetail_right-item__title">
                    <h2>Trạng thái</h2>
                  </div>
                  <div className="FormDetail_right-item__content">
                    <Form.Item name="status">
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
                    </Form.Item>
                  </div>
                </div>
                <div className="FormDetail_right-item">
                  <div className="FormDetail_right-item__title">
                    <h2>Danh mục</h2>
                  </div>
                  <div className="FormDetail_right-item__content">
                    <Form.Item name="product_cate_id">
                      {renderProductCategories()}
                    </Form.Item>
                  </div>
                </div>
                <div className="FormDetail_right-item">
                  <div className="FormDetail_right-item__title">
                    <h2>Ảnh đại diện</h2>
                  </div>
                  <div className="FormDetail_right-item__content">
                    <Form.Item name="image">
                      {/* <Button style={{ width: "100%" }}>Chọn file</Button> */}
                      <TextArea rows={4} placeholder="URL hình ảnh" />
                    </Form.Item>
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

export default ProductForm;

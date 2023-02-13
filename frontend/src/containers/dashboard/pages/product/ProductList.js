import "./ProductList.scss";
import {
  Button,
  Col,
  Divider,
  Row,
  Space,
  Table,
  Modal,
  Input,
} from "antd";
import {
  fetchProducts,
  deleteProduct,
} from "store/products/actions";
import React, { useEffect, useState } from "react";
import routes from "core-authent/constants/routes";
import {
  PlusOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import moment from 'moment';

const { TextArea } = Input;

function ProductList() {
  const products = useSelector((state) => state.products);
  const [currentId, setCurrentId] = useState("");
  const [currentProduct, setCurrentProduct] = useState(null);
  const [searchedText, setSearchedText] = useState("");
  const [isModalOpenDeleteProduct, setIsModalOpenDeleteProduct] =
    useState(false);
  const dispatch = useDispatch();
  const productData = products.list.result.data;
  const reload = () => window.location.reload();

  // Handle delete Product
  const showModalDeleteProduct = (id) => {
    setCurrentId(id);
    setIsModalOpenDeleteProduct(true);
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleOkDeleteProduct = () => {
    handleDeleteProduct(currentId);
    setIsModalOpenDeleteProduct(false);

  };

  const handleCancelDeleteProduct = () => {
    setIsModalOpenDeleteProduct(false);
  };

  useEffect(() => {
    dispatch(fetchProducts());
    return () => {
      setCurrentId("");
      setCurrentProduct(null);
    };
  }, []);

  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  const columns = [
    {
      title: "Id",
      dataIndex: "product_id",
    },
    {
      title: "Ảnh sản phẩm",
      dataIndex: "image",
      width: 50,
      maxWidth: 50,
      render: (image) => (
        <img
          className="image-card"
          src={`${image}`}
          alt="thumbnail"
        />
      ),
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      width: '30%',
      render: (text) => <p>{text ? text : "--"}</p>,
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return (
          String(record.name).toLowerCase().includes(value.toLowerCase()) ||
          String(record.sku).toLowerCase().includes(value.toLowerCase())
        )
      },
      sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
      title: "Đơn vị bảo quản kho",
      dataIndex: "sku",
      render: (text) => <p>{text ? text : "--"}</p>,
      sorter: (a, b) => a.sku.localeCompare(b.sku)
    },
    {
      title: "Danh mục sản phẩm",
      dataIndex: "product_cate",
      render: (text) => <p>{text?.name ? text?.name : "--"}</p>,
    },
    {
      title: "Giá",
      dataIndex: "price",
      render: (text) => <p>{VND.format(text) ? VND.format(text) : "--"}</p>,
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Giá giảm",
      dataIndex: "sale_price",
      render: (text) => <p>{VND.format(text) ? VND.format(text) : "--"}</p>,
      sorter: (a, b) => a.sale_price - b.sale_price,
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
      title: "Hành động",
      dataIndex: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            size="large"
            style={{ background: "green" }}
            className="button-control"
          >
            <Link to={`${routes.product.detail}/${record.product_id}`}>
              Xem
            </Link>
          </Button>
          <Button
            type="primary"
            size="large"
            className="button-control"
          >
            <Link
              to={`${routes.dashboard}${routes.product.addProductPage}/${record.product_id}`}
            >
              Sửa
            </Link>
          </Button>
          <Button
            onClick={() => showModalDeleteProduct(record?.product_id)}
            type="primary"
            size="large"
            danger
            className="button-control"
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="page-post-list">
        <Row gutter={16} className="first-row">
          <Col className="gutter-row" span={8}>
            <h2>Sản phẩm</h2>
          </Col>
        </Row>
        <Row gutter={16} className="select-action-group second-row">
          <Col className=" gutter-row" span={12}>
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
              <Link to={`${routes.dashboard}${routes.product.addProductPage}`}>
                <PlusOutlined />
                Thêm mới
              </Link>
            </Button>
          </Col>
        </Row>
        <div>
          <Divider />

          <Table
            pagination={{
              onChange: (page) => {
              },
              pageSize: 10,
            }}
            columns={columns}
            dataSource={productData}
            rowKey="product_id"
          />
        </div>
        <Modal
          title="XÁC NHẬN XÓA"
          open={isModalOpenDeleteProduct}
          onOk={handleOkDeleteProduct}
          onCancel={handleCancelDeleteProduct}
        >
          <p>Bạn có chắc chắn muốn xóa sản phẩm này?</p>
        </Modal>
      </div>
    </>
  );
}

export default ProductList;

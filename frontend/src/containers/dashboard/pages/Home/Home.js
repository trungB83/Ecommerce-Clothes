import "./Home.scss"
import { Col, Row, Table, Card, Space, Statistic } from "antd"
import {
  BookOutlined,
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined
} from "@ant-design/icons"
import React from "react"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrder } from 'store/orders/actions';
import moment from 'moment';
import routes from 'core-authent/constants/routes';
import { Link } from 'react-router-dom';
import { fetchStatistics } from "store/statistics/actions"
import PieChart from './components/PieceChart';
import BarChart from './components/BarChart';


function Home() {
  const orderState = useSelector(state => state.orders)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOrder())
    dispatch(fetchStatistics())
  }, [dispatch])
  const orderData = orderState.list.result?.data
  const statisticsState = useSelector(state => state.statistics)
  const statisticsData = statisticsState.list.result?.data



  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  const columnsOrder = [
    {
      title: "Tên khách hàng",
      dataIndex: "fullname",
      key: "fullname",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Điện thoại",
      dataIndex: "phone",
      key: "phone",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Tổng tiền đơn hàng",
      dataIndex: "order_total_price",
      key: "order_total_price",
      render: (text) => <p>{text ? VND.format(text) : "--"}</p>,
    },
    {
      title: "Tạo vào lúc",
      dataIndex: "created_at",
      render: (text) => (
        <span className="p_info">
          {text ? moment(text).format("DD/MM/YYYY | HH:mm") : "--"}
        </span>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "name",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
  ]

  const DashboardCard = ({ title, value, title2, value2, icon }) => {
    return (
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    );
  }

  return (
    <>{statisticsState && orderState && statisticsState.list.result?.data && orderState.list.result?.data ? (
      <div className="pageHome">
        <Row gutter={8}>
          <Col xl={24} md={24} sm={24} xs={24}>
            <Row gutter={8}>
              <Col xl={6} md={6} sm={12} xs={12}>
                <DashboardCard
                  icon={
                    <ShoppingCartOutlined
                      style={{
                        color: "green",
                        backgroundColor: "rgba(0,255,0,0.25)",
                        borderRadius: 20,
                        fontSize: 36,
                        padding: 8,
                      }}
                    />
                  }
                  title={<Link to={`${routes.dashboard}${routes.order.main_route}`} className="DashboardCart-title">Đơn hàng</Link>}
                  value={statisticsData?.order.total_orders}
                />
              </Col>
              <Col xl={6} md={6} sm={12} xs={12}>
                <DashboardCard
                  icon={
                    <ShoppingOutlined
                      style={{
                        color: "blue",
                        backgroundColor: "rgba(0,0,255,0.25)",
                        borderRadius: 20,
                        fontSize: 36,
                        padding: 8,
                      }}
                    />
                  }
                  title={<Link to={`${routes.dashboard}${routes.product.main_route}`} className="DashboardCart-title">Sản phẩm</Link>}
                  value={statisticsData?.product.total_products}
                />
              </Col>
              <Col xl={6} md={6} sm={12} xs={12}>
                <DashboardCard
                  icon={
                    <UserOutlined
                      style={{
                        color: "purple",
                        backgroundColor: "rgba(0,255,255,0.25)",
                        borderRadius: 20,
                        fontSize: 36,
                        padding: 8,

                      }}
                    />
                  }
                  title={<Link to={`${routes.dashboard}${routes.user.addUserPage}`} className="DashboardCart-title">Khách hàng</Link>}
                  value={statisticsData?.user.total_users}
                />
              </Col>
              <Col xl={6} md={6} sm={12} xs={12}>
                <DashboardCard
                  icon={
                    <BookOutlined
                      style={{
                        color: "#0bc8db",
                        backgroundColor: "rgb(219 219 219 / 84%)",
                        borderRadius: 20,
                        fontSize: 36,
                        padding: 8,
                      }}
                    />
                  }
                  title={<div className="DashboardCart-title">Bài viết</div>}
                  value={statisticsData?.post.total_posts}
                />
              </Col>
              <Col xl={6} md={6} sm={12} xs={12}>
                <DashboardCard
                  icon={
                    <DollarCircleOutlined
                      style={{
                        color: "red",
                        backgroundColor: "rgba(255,0,0,0.25)",
                        borderRadius: 20,
                        fontSize: 36,
                        padding: 8,
                      }}
                    />
                  }
                  title={<div className="DashboardCart-title">Doanh thu theo tuần</div>}
                  value={VND.format(statisticsData?.order.revenues.this_weak)}
                />
              </Col>
              <Col xl={6} md={6} sm={12} xs={12}>
                <DashboardCard
                  icon={
                    <DollarCircleOutlined
                      style={{
                        color: "red",
                        backgroundColor: "rgba(255,0,0,0.25)",
                        borderRadius: 20,
                        fontSize: 36,
                        padding: 8,
                      }}
                    />
                  }
                  title={<div className="DashboardCart-title">Doanh thu theo tháng</div>}
                  value={VND.format(statisticsData?.order.revenues.this_month)}
                />
              </Col>
              <Col xl={6} md={6} sm={12} xs={12}>
                <DashboardCard
                  icon={
                    <DollarCircleOutlined
                      style={{
                        color: "red",
                        backgroundColor: "rgba(255,0,0,0.25)",
                        borderRadius: 20,
                        fontSize: 36,
                        padding: 8,
                      }}
                    />
                  }
                  title={<div className="DashboardCart-title">Doanh thu theo năm</div>}
                  value={VND.format(statisticsData?.order.revenues.this_year)}
                />
              </Col>
              <Col xl={6} md={6} sm={12} xs={12}>
                <DashboardCard
                  icon={
                    <DollarCircleOutlined
                      style={{
                        color: "red",
                        backgroundColor: "rgba(255,0,0,0.25)",
                        borderRadius: 20,
                        fontSize: 36,
                        padding: 8,
                      }}
                    />
                  }
                  title={<div className="DashboardCart-title">Doanh thu tổng</div>}
                  value={VND.format(statisticsData?.order.revenues.total)}
                />
              </Col>
              <Col xl={24} md={24} sm={24} xs={24} className="DashboardCart-BarChart">
                <h3 >Số lượng đơn hàng thống kê theo ngày</h3>
                <BarChart orderData={orderData} />
              </Col>
            </Row>
          </Col>
          <Col xl={12} md={12} sm={24} xs={24} className="DashboardCart-Table">
            <h3 >Đơn hàng gần đây</h3>
            <Table
              columns={columnsOrder}
              dataSource={orderData}
              pagination={{
                onChange: (page) => {
                },
                pageSize: 5,
              }}
              rowKey="order_id"
            />
          </Col>
          <Col xl={12} md={12} sm={24} xs={24} className="DashboardCart-Table">
            <h3 >Tổng quan trạng thái các đơn hàng</h3>
            <PieChart orderData={orderData} />
          </Col>
        </Row>
      </div>
    ) : "Đang tải"}

    </>
  )
}



export default Home

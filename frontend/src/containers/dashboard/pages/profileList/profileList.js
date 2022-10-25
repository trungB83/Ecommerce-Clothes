import "./profileList.scss"
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Menu,
  message,
  Radio,
  Row,
  Select,
  Space,
  Table,
  TreeSelect
} from "antd"
import { Link } from "react-router-dom"
import routes from "../../../../core-authent/constants/routes"

import React, { useEffect, useState } from "react"
import { DownOutlined, PlusOutlined } from "@ant-design/icons"
import Search from "antd/lib/input/Search"
import { TreeNode } from "antd/lib/tree-select"
import { pathApi } from "../../../../core-authent/constants/pathApi"
import { BASE_URL } from "../../../../config"

const onSearch = value => console.log(value)

const { RangePicker } = DatePicker

const handleMenuClick = e => {
  message.info("Click on menu item.")
  console.log("click", e)
}

const itemsCheckbox = [
  {
    label: "1st menu item",
    key: "1"
  },
  {
    label: "2nd menu item",
    key: "2"
  },
  {
    label: "3rd menu item",
    key: "3"
  }
]

const menucheckbox = <Menu onClick={handleMenuClick} items={itemsCheckbox} />

const { Option } = Select

function ProfileList() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [value, setValue] = useState()
  const [gridData, SetGridData] = useState([])
  const [selectionType, setSelectionType] = useState("checkbox")

  const onSelectChange = newSelectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }
  const hasSelected = selectedRowKeys.length > 0

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const response = await fetch(`${BASE_URL}${pathApi.profile.profiles}`)
    const jsonData = await response.json()
    const data = jsonData.data
    SetGridData(data)
  }
  console.log("gridData", gridData)


  const handleCategories = newValue => {
    console.log("handleCategories", newValue)
    setValue(newValue)
  }

  const handleStatus = value => {
    console.log(`selected ${value}`)
  }

  const columns = [
    {
      title: "Id",
      dataIndex: "nhan_vien_id"
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "anh_dai_dien"
    },
    {
      title: "Họ và tên",
      dataIndex: "ten_nhan_vien"
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Địa chỉ",
      dataIndex: "dia_chi"
    },
    {
      title: "Số điện thoại",
      dataIndex: "so_dien_thoai"
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngay_tao"
    },
    {
      title: "Hành động",
      dataIndex: "action",
      align: "center"
      // render: (_, record) =>
      //   modifiedData.length > 1 ? (
      //     <Popconfirm
      //       title="Xác nhận xóa ?"
      //       onConfirm={() => handleDelete(record)}
      //     >
      //       <Button type="primary" danger>
      //         Xóa
      //       </Button>
      //     </Popconfirm>
      //   ) : null,
    }
  ]

  return (
    <>
      <div className="pagePostList">
        <Row gutter={16} className="first-row">
          <Col className="gutter-row" span={8}>
            <h2>Người dùng</h2>
          </Col>
          <Col className="gutter-row" span={16}>
            <Row gutter={16}>
              <Col span={6}>
                <TreeSelect
                  showSearch
                  style={{
                    width: "100%"
                  }}
                  value={value}
                  dropdownStyle={{
                    maxHeight: 400,
                    overflow: "auto"
                  }}
                  placeholder="Danh mục dữ liệu"
                  allowClear
                  multiple
                  treeDefaultExpandAll
                  onChange={handleCategories}
                >
                  <TreeNode value="1" title="Tin tức" />
                  <TreeNode value="2" title="Hỏi đáp" />
                </TreeSelect>
              </Col>
              <Col span={6}>
                <Select
                  defaultValue="working"
                  style={{ width: 120 }}
                  onChange={handleStatus}
                >
                  <Option value="tosting">Tất cả trạng thái</Option>
                  <Option value="working">Đang hoạt động</Option>
                  <Option value="blocked">Bị khóa</Option>
                </Select>
              </Col>
              <Col span={6}>
                <RangePicker />
              </Col>
              <Col span={6}>
                <Search
                  placeholder="Tìm kiếm...."
                  onSearch={onSearch}
                  style={{
                    width: 200
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={16} className="select-action-group second-row">
          <Col className="gutter-row" span={12}>
            <Dropdown overlay={menucheckbox}>
              <Button>
                <Space>
                  Chọn hành động
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </Col>
          <Col className="right-actions" span={12}>
            <Button className="button-add-post ant-btn-round">
              <PlusOutlined />
              <Link to={`${routes.dashboard}${routes.adduser}`}>
                Thêm mới người dùng
              </Link>
            </Button>
          </Col>
        </Row>
        <div>
          <Radio.Group
            onChange={({ target: { value } }) => {
              setSelectionType(value)
            }}
            value={selectionType}
          >
            <Radio value="checkbox">Checkbox</Radio>
            <Radio value="radio">radio</Radio>
          </Radio.Group>

          <Divider />

          <Table
            rowSelection={rowSelection}
            pagination={{
              onChange: page => {
                console.log(page)
              },
              pageSize: 10
            }}
            columns={columns}
            dataSource={gridData}
            rowKey="nhan_vien_id"
          />
        </div>
      </div>
    </>
  )
}

export default ProfileList

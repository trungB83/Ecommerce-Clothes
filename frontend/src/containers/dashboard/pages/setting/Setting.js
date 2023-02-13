import "./Setting.scss";
import React, { useEffect, useState } from "react";
import {
  Row,
  Form,
  Col,
  Input,
  Tabs,
  Radio,
  Button,
  notification,
  Upload,
  Card,
} from "antd";
import TabPane from "antd/lib/tabs/TabPane";
import defaultImage from "assets/images/02_logo.png";
import defaultBackground from "assets/images/bg_main.png";
import { useDispatch } from "react-redux";

// const CONFIG_KEY = constants.CONFIG_LIST.CONFIG_COMMON;

function Setting(props) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const defaultForm = {
    site_name: "",
    site_email: "",
    site_slogan: "",
    site_description: "",
    site_address: "",
    site_website: "",
    site_theme: "THEME_BLUE",
    site_welcome: "",
    site_logo: "",
    site_minio_bucket: "",
    site_upload_server: "",
    enable_reg: false,
    default_role: "",
    site_favicon: "",
    site_language: "",
    site_background: "",
    social_facebook: "",
    social_youtube: "",
    social_twitter: "",
  };
  const [state, setState] = useState({
    openMediaLibrary: false,
    mediaField: "",
    form: defaultForm,
    isEdit: false,
    isDisabledUserGroup: true,
  });

  const handleSubmit = (values) => {
    const callback = (res) => {
      if (res.success) {
        notification.success({
          message: "Lưu thông tin cấu hình thành công.",
        });
      }
    };
    const data = JSON.stringify({ ...state.form, ...values });
    props
      .dispatch
      // configAction.createConfig({ key: CONFIG_KEY, values: data }, callback)
      ();
  };
  const removeImage = (mediaField) =>
    setState((state) => ({
      ...state,
      form: {
        ...state.form,
        [mediaField]: "",
      },
    }));

  const onSelectImage = (file) => {
    setState((state) => ({
      ...state,
      openMediaLibrary: false,
      form: {
        ...state.form,
        [state.mediaField]: file.tep_tin_url,
      },
    }));
  };

  const openMediaLibrary = (mediaField) =>
    setState((state) => ({ ...state, openMediaLibrary: true, mediaField }));

  const onResetForm = () => {
    if (
      props.config.list.result &&
      props.config.list.result.data &&
      props.config.list.result.data.length > 0
    ) {
      form.setFieldsValue(props.config.list.result.data[0]);
    } else {
      form.setFieldsValue(defaultForm);
    }
  };

  // useEffect(() => {
  //   const configList = get(props, "config.list.result.data", []);
  //   const config = configList.find((cfg) => cfg.ma_cau_hinh === CONFIG_KEY);
  //   if (config) {
  //     const data = JSON.parse(config.du_lieu);
  //     setState((state) => ({
  //       ...state,
  //       isEdit: true,
  //       form: data,
  //       isDisabledUserGroup: !data.enable_reg,
  //     }));
  //     form.setFieldsValue(data);
  //   } else {
  //     setState((state) => ({
  //       ...state,
  //       isEdit: false,
  //       form: defaultForm,
  //       isDisabledUserGroup: true,
  //     }));
  //   }
  //   onResetForm();
  // }, [props]);


  return (
    <>
      <Form layout="vertical" form={form} onFinish={(e) => handleSubmit(e)}>
        <Row className="app-main">
          <Col span={24} className="body-content">
            <Row gutter={25}>
              <Col span={18}>
                <h2 className="header-form-title">Hệ thống</h2>
              </Col>

              <Col span={24}>
                <div className="border-box-widget profile-more">
                  <div className="border-box-body">
                    <div className="w5d-form configs-box">
                      <Row gutter={25}>
                        <Col xl={18} sm={24} xs={24} className="left-content">
                          <Tabs defaultActiveKey="1" size="large">
                            <TabPane tab="Cấu hình chung" key="1">
                              <Form.Item
                                className="input-col"
                                label="E-mail Quản trị"
                                name="site_email"
                                rules={[
                                  {
                                    required: true,
                                    message:
                                      "E-mail quản trị là trường bắt buộc.",
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>
                              <Form.Item
                                className="input-col"
                                label="Tên website"
                                name="site_name"
                                rules={[
                                  {
                                    required: true,
                                    message: "Tên website là trường bắt buộc.",
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>
                              <Form.Item
                                className="input-col"
                                label="Slogan"
                                name="site_slogan"
                                rules={[]}
                              >
                                <Input />
                              </Form.Item>
                              <Form.Item
                                className="input-col"
                                label="Mô tả"
                                name="site_description"
                                rules={[]}
                              >
                                <Input />
                              </Form.Item>
                              <Form.Item
                                className="input-col"
                                label="Địa chỉ"
                                name="site_address"
                                rules={[]}
                              >
                                <Input />
                              </Form.Item>
                              <Form.Item
                                className="input-col"
                                label="Website"
                                name="site_website"
                                rules={[]}
                              >
                                <Input />
                              </Form.Item>
                              <br />
                              <Form.Item
                                className="input-col"
                                label="Chào mừng quản trị viên"
                                name="site_welcome"
                                rules={[]}
                              >
                                <Input placeholder="..." />
                              </Form.Item>
                              <Form.Item className="input-col">
                                <Row className="btn-groups">
                                  <Col span={24}>
                                    <Button type="primary" htmlType="submit">
                                      Lưu lại
                                    </Button>
                                  </Col>
                                </Row>
                              </Form.Item>
                            </TabPane>
                          </Tabs>
                        </Col>
                        <Col xl={6} sm={24} xs={24} className="right-content">
                          <Card title="Hình ảnh" className="card-item">
                            {/* <Form.Item
                              className="input-col"
                              label="Server hình ảnh"
                              name="site_upload_server"
                              rules={[]}
                            >
                              <Radio.Group
                                options={constants.UPLOAD_TYPES}
                                optionType="button"
                                buttonStyle="solid"
                              />
                            </Form.Item> */}
                            <Form.Item
                              className="input-col"
                              name="site_minio_bucket"
                              rules={[]}
                              label="MinIO bucket"
                            >
                              <Input placeholder="Nhập minio bucket" />
                            </Form.Item>
                          </Card>
                          <Card title="Mạng xã hội" className="card-item">
                            <Form.Item
                              className="input-col"
                              name="social_facebook"
                              rules={[]}
                            >
                              <Input placeholder="Facebook" />
                            </Form.Item>
                            <Form.Item
                              className="input-col"
                              name="social_youtube"
                              rules={[]}
                            >
                              <Input placeholder="youtobe" />
                            </Form.Item>
                            <Form.Item
                              className="input-col"
                              name="social_twitter"
                              rules={[]}
                            >
                              <Input placeholder="Twitter" />
                            </Form.Item>
                          </Card>
                          <Card
                            title="Logo"
                            bordered={true}
                            className="card-item card-image"
                          >
                            <img
                              src={
                                state.form.site_logo
                                  ? `${state.form.site_logo}`
                                  : defaultImage
                              }
                              alt="site_logo"
                              title="logo"
                              className="image-box"
                            />
                          </Card>
                          <Card
                            title="Favicon"
                            bordered={true}
                            className="card-image"
                          >
                            <img
                              src={
                                state.form.site_favicon
                                  ? `${state.form.site_favicon}`
                                  : defaultImage
                              }
                              alt="site_favicon"
                              title="Fav Icon"
                              className="image-box"
                            />
                          </Card>

                          <Card
                            title="Favicon"
                            bordered={true}
                            className="card-image"
                          >
                            <img
                              scr={
                                state.form.site_background
                                  ? `${state.form.site_background}`
                                  : defaultBackground
                              }
                              alt="site_background"
                              title="Hình nền"
                              className="image-box"
                            />
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Setting;

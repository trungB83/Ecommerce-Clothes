export const renderContentNoti = (status, desc) => {
    switch (status) {
      case "LOGIN_SUCCESS":
        return {
          message: "Đăng nhập thành công",
          description: "Bạn đã đăng nhập thành công!"
        }
  
      case "LOGIN_FAIL":
        return {
          message: "Đăng nhập thất bại",
          description: desc
            ? desc
            : "Vui lòng kiểm tra lại tên đăng nhập hoặc mật khẩu!"
        }
  
      case "REGISTER_SUCCESS":
        return {
          message: "Đăng ký tài khoản thành công",
          description: "Bạn đã đăng ký tài khoản thành công!"
        }
  
      case "REGISTER_FAIL":
        return {
          message: "Đăng ký tài khoản thất bại",
          description: desc ? desc : "Vui lòng kiểm tra lại thông tin!"
        }
  
      default:
        return {
          message: "Hệ thống đã xảy ra lỗi",
          description: "Vui lòng kết nối lại!"
        }
    }
  }
  
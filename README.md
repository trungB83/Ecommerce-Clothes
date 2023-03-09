# Website bán hàng Ecommerce

Website bán hàng Megafashion

## Tính năng
- Client : 
    + Xem Tin tức, sản phẩm
    + Thêm sản phẩm vào giỏ hàng 
    + Đăng nhập và đăng ký: Cho phép người dùng đăng ký tài khoản và đăng nhập để có thể xem lại lịch sử đơn hàng, quản lý thông tin cá nhân và sử dụng các tính năng khác của trang web.
- Manager : 
    + Quản lý sản phẩm: Cho phép quản lý danh sách sản phẩm, giá cả, hình ảnh và thông tin chi tiết.
    + Quản lý đơn hàng: Hiển thị danh sách đơn hàng, cho phép xử lý đơn hàng, cập nhật trạng thái đơn hàng và quản lý hóa đơn.
    + Quản lý bài viết : Hiển thị danh sách bài viết, 
    + Quản lý khách hàng: Hiển thị danh sách khách hàng, cho phép quản lý thông tin khách hàng và lịch sử đơn hàng.
    + Báo cáo thống kê: Cung cấp thông tin về doanh thu, đơn hàng, v.v. để quản lý có cái nhìn tổng quan về hoạt động của trang web bán hàng.

### Công nghệ

- [ReactJs] xây dựng web app: HTML5, SCSS, Boostrap 5, Redux
- [ExpressJs] xây dựng APIs, ExpressJs, Sequelize
- [MySQL] cơ sở dữ liệu

### Chạy dự án trên local

- Clone dự án và cài đặt package

```sh
// Bước 1: clone code dự án
git clone https://github.com/boonreal/Ecommerce-Clothes
// Bước 2: di chuyển vào thư mục làm việc
cd Ecommerce-Clothes
// Bước 3: cài đặt package thư mục gốc
npm install
// Bước 4: cài đặt backend và client package
npm run install-all

// Bước 5: chạy ứng dụng
npm run start
```

- local app: http://localhost:3000
- local api: http://localhost:5001

Tài khoản admin
Username: admin1
Password: admin1


### Các scripts

```sh
"scripts": {
    "start": "concurrently \"cd backend && npm run start\" \"cd frontend && npm run start\"",
    "dev": "concurrently \"cd backend && npm run dev\" \"cd frontend && npm run start\"",
    "install-all": "concurrently \"cd backend && npm install\" \"cd frontend && npm install\"",
    "format": "concurrently \"cd backend && npm run format\" \"cd frontend && npm run format\""
},
// Khởi chạy cả backend và client
npm run start
//  Khởi chạy cả backend (developer) và client
npm run dev
// cài package cho backend và client
npm run install-all
// format code cho backend và client
npm run format
```

### Cấu trúc dự án

#### Thư mục gốc

Chứa các script để chạy dự án

#### Thư mục backend

- Chứa code backend

#### Thư mục frontend

- Chứa code client

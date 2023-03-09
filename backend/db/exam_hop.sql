-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th3 09, 2023 lúc 11:46 PM
-- Phiên bản máy phục vụ: 10.4.26-MariaDB
-- Phiên bản PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `exam_hop`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_email_logs`
--

CREATE TABLE `tbl_email_logs` (
  `mail_id` int(11) NOT NULL,
  `timestamp` datetime DEFAULT NULL,
  `sent_to` varchar(200) DEFAULT NULL,
  `subject` varchar(200) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `headers` text DEFAULT NULL,
  `error` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_files`
--

CREATE TABLE `tbl_files` (
  `file_id` bigint(20) NOT NULL,
  `url` varchar(500) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `file_cate_id` bigint(20) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_file_cates`
--

CREATE TABLE `tbl_file_cates` (
  `file_cate_id` bigint(20) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `slug` varchar(500) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_options`
--

CREATE TABLE `tbl_options` (
  `option_id` bigint(20) NOT NULL,
  `option_name` varchar(20) NOT NULL,
  `option_value` longtext NOT NULL,
  `autoload` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_options`
--

INSERT INTO `tbl_options` (`option_id`, `option_name`, `option_value`, `autoload`) VALUES
(1, 'site-name', 'Ecommerce Clothes', ''),
(2, 'site-description', 'Ecommerce Clothes website ecommerce in Viet Nam 2', ''),
(3, 'site-logo', '', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_orders`
--

CREATE TABLE `tbl_orders` (
  `order_id` bigint(20) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `fullname` varchar(200) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `order_total_price` double DEFAULT NULL,
  `payment_id` tinyint(4) NOT NULL,
  `deliver_id` bigint(20) NOT NULL,
  `status` varchar(20) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_orders`
--

INSERT INTO `tbl_orders` (`order_id`, `user_id`, `fullname`, `phone`, `address`, `order_total_price`, `payment_id`, `deliver_id`, `status`, `description`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(30, 51, 'Trung Bùi', '12312312312312312', 'lào cai', 4928000, 2, 2, 'active', '123123123', NULL, NULL, '2023-02-01 10:21:04', '2023-02-02 13:35:26'),
(31, NULL, 'ádasdas', '123', 'lalal', 3458000, 1, 1, 'active', '123123', NULL, NULL, '2023-02-02 03:53:56', '2023-02-02 13:35:20'),
(32, 51, 'admin1', '123123123123', 'lào cai', 9224000, 1, 2, 'active', '', NULL, NULL, '2023-02-02 11:37:33', '2023-02-02 13:35:14'),
(33, 51, 'admin1', '123123123123', 'lào cai', 5028000, 1, 1, 'active', '', NULL, NULL, '2023-02-03 01:58:12', '2023-02-03 01:58:12'),
(34, 51, 'admin1', '123123123123', 'lào cai', 1729000, 1, 1, 'active', '', NULL, NULL, '2023-02-03 01:58:35', '2023-02-03 01:58:35'),
(35, 51, 'admin1', '123123123123', 'lào cai', 2320000, 1, 1, 'inactive', '', NULL, NULL, '2023-02-03 01:58:55', '2023-02-03 09:30:40'),
(36, 51, 'admin1', '123123123123', 'lào cai', 1090000, 1, 1, 'cancelled', '', NULL, NULL, '2023-02-03 01:59:14', '2023-02-03 09:30:29'),
(37, 51, 'admin1', '123123123123', 'lào cai', 2627000, 1, 1, 'active', '', NULL, NULL, '2023-02-03 01:59:38', '2023-02-03 01:59:38'),
(38, 51, 'Bùi Quang Trung', '09888888', 'lào cai', 2178000, 1, 2, 'active', '', NULL, NULL, '2023-02-03 02:05:50', '2023-02-03 02:05:50'),
(39, 51, 'Bùi Quang Trung', '09888888', 'lào cai', 4356000, 1, 1, 'completed', '', NULL, NULL, '2023-02-03 02:06:11', '2023-02-03 09:18:27'),
(40, 51, 'Bùi Quang Trung', '09888888', 'lào cai', 1079000, 2, 1, 'completed', '', NULL, NULL, '2023-02-03 02:07:06', '2023-02-03 09:18:21'),
(41, 51, 'Bùi Quang Trung', '09888888', 'lào cai', 2809000, 1, 1, 'completed', '', NULL, NULL, '2023-02-03 02:08:37', '2023-02-03 09:18:15'),
(42, 51, 'Bùi Quang Trung', '09888888', 'lào cai', 1740000, 1, 1, 'completed', '', NULL, NULL, '2023-02-03 02:08:55', '2023-02-03 09:18:04'),
(43, 51, 'Bùi Quang Trung', '09888888', 'lào cai', 1079000, 2, 1, 'completed', '', NULL, NULL, '2023-02-03 10:09:56', '2023-02-03 10:13:20'),
(44, 51, 'Bùi Quang Trung', '09888888', 'lào cai', 1649000, 1, 1, 'completed', '', NULL, NULL, '2023-02-03 10:10:10', '2023-02-03 10:13:15'),
(45, 51, 'Bùi Quang Trung', '09888888', 'lào cai', 340000, 1, 1, 'completed', '', NULL, NULL, '2023-02-03 10:10:34', '2023-02-03 10:13:10'),
(46, 51, 'Bùi Quang Trung', '09888888', 'lào cai', 600000, 2, 1, 'completed', '', NULL, NULL, '2023-02-03 10:10:50', '2023-02-03 10:13:06'),
(47, 51, 'Bùi Quang Trung', '09888888', 'lào cai', 400000, 1, 1, 'completed', '', NULL, NULL, '2023-02-03 10:11:08', '2023-02-03 10:13:01'),
(48, 51, 'Bùi Quang Trung', '09888888', 'lào cai', 480000, 1, 1, 'completed', '', NULL, NULL, '2023-02-03 10:11:26', '2023-02-03 10:12:56'),
(49, 54, 'Khách hàng1', '098888888', 'Hà nội', 600000, 1, 2, 'active', '', NULL, NULL, '2023-02-03 14:55:55', '2023-02-03 14:55:55'),
(50, 54, 'Khách hàng1', '098888888', 'Hà nội', 1740000, 1, 1, 'active', '', NULL, NULL, '2023-02-03 14:56:29', '2023-02-03 14:56:29'),
(51, NULL, 'trungbui', '0989888888', 'lào cai', 3399000, 1, 1, 'active', 'abc', NULL, NULL, '2023-03-09 14:51:33', '2023-03-09 14:56:35');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_order_delivers`
--

CREATE TABLE `tbl_order_delivers` (
  `deliver_id` tinyint(4) NOT NULL,
  `name` varchar(200) NOT NULL,
  `price` double DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_order_delivers`
--

INSERT INTO `tbl_order_delivers` (`deliver_id`, `name`, `price`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 'Shoppee default deliver', 10000, 'active', '2022-12-12 01:11:45', '2022-12-12 01:11:45', 0, 0),
(2, 'Bee deliver', 20000, 'active', '2022-12-12 01:11:45', '2023-02-02 09:47:51', 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_order_item`
--

CREATE TABLE `tbl_order_item` (
  `order_item_id` int(11) NOT NULL,
  `order_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) NOT NULL,
  `name` varchar(200) NOT NULL,
  `image` varchar(500) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `sale_price` double DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_order_item`
--

INSERT INTO `tbl_order_item` (`order_item_id`, `order_id`, `product_id`, `name`, `image`, `quantity`, `price`, `sale_price`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(12, 9, 18, '123123123', NULL, NULL, 123123, NULL, NULL, NULL, '2022-12-11 17:02:49', '2023-01-26 13:07:12'),
(13, 9, 17, 'product 5', NULL, NULL, 10000, NULL, NULL, NULL, '2022-12-11 17:02:49', '2023-01-26 13:07:14'),
(14, 9, 18, '123123123', NULL, 3, 123123, NULL, NULL, NULL, '2022-12-11 17:02:49', '2023-01-26 13:07:24'),
(15, 9, 21, 'test add', NULL, NULL, 1233333, NULL, NULL, NULL, '2023-01-15 00:22:08', '2023-01-26 13:33:29'),
(16, 9, 18, '123123123', NULL, NULL, 123123, NULL, NULL, NULL, '2022-12-11 17:02:49', '2023-01-26 13:33:32'),
(17, 9, 17, 'product 5', NULL, NULL, 10000, NULL, NULL, NULL, '2022-12-11 17:02:49', '2023-01-26 13:33:36'),
(30, NULL, 18, '123123123', NULL, 1, 123123, NULL, NULL, NULL, '2022-12-11 17:02:49', '2023-01-31 10:47:46'),
(31, NULL, 18, '123123123', NULL, 1, 123123, NULL, NULL, NULL, '2022-12-11 17:02:49', '2023-01-31 10:47:46'),
(32, NULL, 18, '123123123', NULL, 1, 123123, NULL, NULL, NULL, '2022-12-11 17:02:49', '2023-01-31 10:47:47'),
(33, NULL, 18, '123123123', NULL, 1, 123123, NULL, NULL, NULL, '2022-12-11 17:02:49', '2023-01-31 10:47:47'),
(34, NULL, 17, 'product 5', NULL, 1, 10000, NULL, NULL, NULL, '2022-12-11 17:02:49', '2023-01-31 10:51:03'),
(35, NULL, 17, 'product 5', NULL, 2, 10000, NULL, NULL, NULL, '2022-12-11 17:02:49', '2023-01-31 10:51:03'),
(36, NULL, 17, 'product 5', NULL, 3, 10000, NULL, NULL, NULL, '2022-12-11 17:02:49', '2023-01-31 10:51:04'),
(37, NULL, 17, 'product 5', NULL, 4, 10000, NULL, NULL, NULL, '2022-12-11 17:02:49', '2023-01-31 10:51:04'),
(52, 30, 39, 'QUẦN VẢI NAM LƯNG THUN FORM SLIM CROP', NULL, 1, 529000, NULL, NULL, NULL, '2023-02-01 03:51:54', '2023-02-01 03:51:54'),
(53, 30, 38, 'QUẦN DÀI KAKI NAM DOBBY FORM SLIM', NULL, 6, 550000, NULL, NULL, NULL, '2023-02-01 03:51:22', '2023-02-01 03:51:22'),
(54, 30, 37, 'QUẦN JEAN NAM ỐNG RỘNG FORM STRAIGHT CROP', NULL, 1, 650000, NULL, NULL, NULL, '2023-02-01 03:50:45', '2023-02-01 03:50:45'),
(55, 30, 36, 'Chuyển đến phần đầu của thư viện hình ảnh QUẦN JOGGER NAM VISCOSE PHỐI TAPE', NULL, 1, 449000, NULL, NULL, NULL, '2023-02-01 03:50:07', '2023-02-01 03:50:07'),
(56, 31, 38, 'QUẦN DÀI KAKI NAM DOBBY FORM SLIM', NULL, 2, 550000, NULL, NULL, NULL, '2023-02-01 03:51:22', '2023-02-01 03:51:22'),
(57, 31, 39, 'QUẦN VẢI NAM LƯNG THUN FORM SLIM CROP', NULL, 2, 529000, NULL, NULL, NULL, '2023-02-01 03:51:54', '2023-02-01 03:51:54'),
(58, 31, 37, 'QUẦN JEAN NAM ỐNG RỘNG FORM STRAIGHT CROP', NULL, 2, 650000, NULL, NULL, NULL, '2023-02-01 03:50:45', '2023-02-01 03:50:45'),
(59, 32, 39, 'QUẦN VẢI NAM LƯNG THUN FORM SLIM CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pfo006_petrified_oak_2__1.jpg', 1, 529000, NULL, NULL, NULL, '2023-02-01 03:51:54', '2023-02-01 03:51:54'),
(60, 32, 37, 'QUẦN JEAN NAM ỐNG RỘNG FORM STRAIGHT CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa051_m_indigo_1__1.jpg', 4, 650000, NULL, NULL, NULL, '2023-02-01 03:50:45', '2023-02-01 03:50:45'),
(61, 32, 38, 'QUẦN DÀI KAKI NAM DOBBY FORM SLIM', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pca005_covert_green_3__1.jpg', 7, 550000, NULL, NULL, NULL, '2023-02-01 03:51:22', '2023-02-01 03:51:22'),
(62, 32, 36, 'Chuyển đến phần đầu của thư viện hình ảnh QUẦN JOGGER NAM VISCOSE PHỐI TAPE', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pjo003_green_2__1.jpg', 5, 449000, NULL, NULL, NULL, '2023-02-01 03:50:07', '2023-02-01 03:50:07'),
(63, 33, 38, 'QUẦN DÀI KAKI NAM DOBBY FORM SLIM', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pca005_covert_green_3__1.jpg', 5, 550000, NULL, NULL, NULL, '2023-02-01 03:51:22', '2023-02-01 03:51:22'),
(64, 33, 39, 'QUẦN VẢI NAM LƯNG THUN FORM SLIM CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pfo006_petrified_oak_2__1.jpg', 1, 529000, NULL, NULL, NULL, '2023-02-01 03:51:54', '2023-02-01 03:51:54'),
(65, 33, 37, 'QUẦN JEAN NAM ỐNG RỘNG FORM STRAIGHT CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa051_m_indigo_1__1.jpg', 2, 650000, NULL, NULL, NULL, '2023-02-01 03:50:45', '2023-02-01 03:50:45'),
(66, 33, 36, 'Chuyển đến phần đầu của thư viện hình ảnh QUẦN JOGGER NAM VISCOSE PHỐI TAPE', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pjo003_green_2__1.jpg', 1, 449000, NULL, NULL, NULL, '2023-02-01 03:50:07', '2023-02-01 03:50:07'),
(67, 34, 39, 'QUẦN VẢI NAM LƯNG THUN FORM SLIM CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pfo006_petrified_oak_2__1.jpg', 1, 529000, NULL, NULL, NULL, '2023-02-01 03:51:54', '2023-02-01 03:51:54'),
(68, 34, 38, 'QUẦN DÀI KAKI NAM DOBBY FORM SLIM', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pca005_covert_green_3__1.jpg', 1, 550000, NULL, NULL, NULL, '2023-02-01 03:51:22', '2023-02-01 03:51:22'),
(69, 34, 37, 'QUẦN JEAN NAM ỐNG RỘNG FORM STRAIGHT CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa051_m_indigo_1__1.jpg', 1, 650000, NULL, NULL, NULL, '2023-02-01 03:50:45', '2023-02-01 03:50:45'),
(70, 35, 35, 'QUẦN JEAN NAM TRƠN FORM STRAIGHT', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_739__1.jpg', 1, 580000, NULL, NULL, NULL, '2023-02-01 03:49:41', '2023-02-01 03:49:41'),
(71, 35, 34, 'QUẦN JEAN NAM ỐNG RỘNG TRƠN FORM STRAIGHT CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_41__1.jpg', 1, 580000, NULL, NULL, NULL, '2023-02-01 03:49:19', '2023-02-01 03:49:19'),
(72, 35, 33, 'QUẦN JEAN NAM ỐNG ÔM TRƠN FORM SLIM CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa041_m_indigo_thumbnail__1.jpg', 1, 580000, NULL, NULL, NULL, '2023-02-01 03:48:59', '2023-02-01 03:48:59'),
(73, 35, 32, 'QUẦN JEAN NAM TRƠN FORM SLIM', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa004_brown_2___1.jpg', 1, 580000, NULL, NULL, NULL, '2023-02-01 03:48:34', '2023-02-01 03:48:34'),
(74, 36, 31, 'QUẦN JEAN NAM TRƠN FORM SLIM', 'https://hidanz.com/wp-content/uploads/2022/08/Dm7-xanh-600x600.jpg', 1, 580000, NULL, NULL, NULL, '2023-02-01 03:48:15', '2023-02-01 03:48:15'),
(75, 36, 30, 'Tee Peace – White', 'https://hidanz.com/wp-content/uploads/2022/08/DM1-trang-600x600.jpg', 1, 340000, 170000, NULL, NULL, '2023-02-01 03:46:13', '2023-02-01 03:46:13'),
(76, 36, 29, 'Tee Peace – Darkgreen', 'https://hidanz.com/wp-content/uploads/2022/08/Dm1-xanh-600x600.jpg', 1, 340000, 170000, NULL, NULL, '2023-02-01 03:45:58', '2023-02-01 03:45:58'),
(77, 36, 28, 'Tee Peace – Cream', 'https://hidanz.com/wp-content/uploads/2022/08/Dm1-be-600x600.jpg', 1, 340000, 170000, NULL, NULL, '2023-02-01 03:45:40', '2023-02-01 03:45:40'),
(78, 37, 39, 'QUẦN VẢI NAM LƯNG THUN FORM SLIM CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pfo006_petrified_oak_2__1.jpg', 1, 529000, NULL, NULL, NULL, '2023-02-01 03:51:54', '2023-02-01 03:51:54'),
(79, 37, 38, 'QUẦN DÀI KAKI NAM DOBBY FORM SLIM', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pca005_covert_green_3__1.jpg', 1, 550000, NULL, NULL, NULL, '2023-02-01 03:51:22', '2023-02-01 03:51:22'),
(80, 37, 37, 'QUẦN JEAN NAM ỐNG RỘNG FORM STRAIGHT CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa051_m_indigo_1__1.jpg', 1, 650000, NULL, NULL, NULL, '2023-02-01 03:50:45', '2023-02-01 03:50:45'),
(81, 37, 36, 'Chuyển đến phần đầu của thư viện hình ảnh QUẦN JOGGER NAM VISCOSE PHỐI TAPE', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pjo003_green_2__1.jpg', 2, 449000, NULL, NULL, NULL, '2023-02-01 03:50:07', '2023-02-01 03:50:07'),
(82, 38, 39, 'QUẦN VẢI NAM LƯNG THUN FORM SLIM CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pfo006_petrified_oak_2__1.jpg', 1, 529000, NULL, NULL, NULL, '2023-02-01 03:51:54', '2023-02-01 03:51:54'),
(83, 38, 38, 'QUẦN DÀI KAKI NAM DOBBY FORM SLIM', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pca005_covert_green_3__1.jpg', 1, 550000, NULL, NULL, NULL, '2023-02-01 03:51:22', '2023-02-01 03:51:22'),
(84, 38, 37, 'QUẦN JEAN NAM ỐNG RỘNG FORM STRAIGHT CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa051_m_indigo_1__1.jpg', 1, 650000, NULL, NULL, NULL, '2023-02-01 03:50:45', '2023-02-01 03:50:45'),
(85, 38, 36, 'Chuyển đến phần đầu của thư viện hình ảnh QUẦN JOGGER NAM VISCOSE PHỐI TAPE', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pjo003_green_2__1.jpg', 1, 449000, NULL, NULL, NULL, '2023-02-01 03:50:07', '2023-02-01 03:50:07'),
(86, 40, 39, 'QUẦN VẢI NAM LƯNG THUN FORM SLIM CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pfo006_petrified_oak_2__1.jpg', 1, 529000, NULL, NULL, NULL, '2023-02-01 03:51:54', '2023-02-01 03:51:54'),
(87, 40, 38, 'QUẦN DÀI KAKI NAM DOBBY FORM SLIM', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pca005_covert_green_3__1.jpg', 1, 550000, NULL, NULL, NULL, '2023-02-01 03:51:22', '2023-02-01 03:51:22'),
(88, 39, 39, 'QUẦN VẢI NAM LƯNG THUN FORM SLIM CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pfo006_petrified_oak_2__1.jpg', 2, 529000, NULL, NULL, NULL, '2023-02-01 03:51:54', '2023-02-01 03:51:54'),
(89, 39, 38, 'QUẦN DÀI KAKI NAM DOBBY FORM SLIM', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pca005_covert_green_3__1.jpg', 2, 550000, NULL, NULL, NULL, '2023-02-01 03:51:22', '2023-02-01 03:51:22'),
(90, 39, 37, 'QUẦN JEAN NAM ỐNG RỘNG FORM STRAIGHT CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa051_m_indigo_1__1.jpg', 2, 650000, NULL, NULL, NULL, '2023-02-01 03:50:45', '2023-02-01 03:50:45'),
(91, 39, 36, 'Chuyển đến phần đầu của thư viện hình ảnh QUẦN JOGGER NAM VISCOSE PHỐI TAPE', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pjo003_green_2__1.jpg', 2, 449000, NULL, NULL, NULL, '2023-02-01 03:50:07', '2023-02-01 03:50:07'),
(92, 41, 38, 'QUẦN DÀI KAKI NAM DOBBY FORM SLIM', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pca005_covert_green_3__1.jpg', 1, 550000, NULL, NULL, NULL, '2023-02-01 03:51:22', '2023-02-01 03:51:22'),
(93, 41, 37, 'QUẦN JEAN NAM ỐNG RỘNG FORM STRAIGHT CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa051_m_indigo_1__1.jpg', 1, 650000, NULL, NULL, NULL, '2023-02-01 03:50:45', '2023-02-01 03:50:45'),
(94, 41, 36, 'Chuyển đến phần đầu của thư viện hình ảnh QUẦN JOGGER NAM VISCOSE PHỐI TAPE', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pjo003_green_2__1.jpg', 1, 449000, NULL, NULL, NULL, '2023-02-01 03:50:07', '2023-02-01 03:50:07'),
(95, 41, 34, 'QUẦN JEAN NAM ỐNG RỘNG TRƠN FORM STRAIGHT CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_41__1.jpg', 1, 580000, NULL, NULL, NULL, '2023-02-01 03:49:19', '2023-02-01 03:49:19'),
(96, 41, 33, 'QUẦN JEAN NAM ỐNG ÔM TRƠN FORM SLIM CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa041_m_indigo_thumbnail__1.jpg', 1, 580000, NULL, NULL, NULL, '2023-02-01 03:48:59', '2023-02-01 03:48:59'),
(97, 42, 35, 'QUẦN JEAN NAM TRƠN FORM STRAIGHT', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_739__1.jpg', 1, 580000, NULL, NULL, NULL, '2023-02-01 03:49:41', '2023-02-01 03:49:41'),
(98, 42, 34, 'QUẦN JEAN NAM ỐNG RỘNG TRƠN FORM STRAIGHT CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_41__1.jpg', 1, 580000, NULL, NULL, NULL, '2023-02-01 03:49:19', '2023-02-01 03:49:19'),
(99, 42, 33, 'QUẦN JEAN NAM ỐNG ÔM TRƠN FORM SLIM CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa041_m_indigo_thumbnail__1.jpg', 1, 580000, NULL, NULL, NULL, '2023-02-01 03:48:59', '2023-02-01 03:48:59'),
(100, 43, 39, 'QUẦN VẢI NAM LƯNG THUN FORM SLIM CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pfo006_petrified_oak_2__1.jpg', 1, 529000, NULL, NULL, NULL, '2023-02-01 03:51:54', '2023-02-01 03:51:54'),
(101, 43, 38, 'QUẦN DÀI KAKI NAM DOBBY FORM SLIM', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pca005_covert_green_3__1.jpg', 1, 550000, NULL, NULL, NULL, '2023-02-01 03:51:22', '2023-02-01 03:51:22'),
(102, 44, 38, 'QUẦN DÀI KAKI NAM DOBBY FORM SLIM', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pca005_covert_green_3__1.jpg', 1, 550000, NULL, NULL, NULL, '2023-02-01 03:51:22', '2023-02-01 03:51:22'),
(103, 44, 37, 'QUẦN JEAN NAM ỐNG RỘNG FORM STRAIGHT CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa051_m_indigo_1__1.jpg', 1, 650000, NULL, NULL, NULL, '2023-02-01 03:50:45', '2023-02-01 03:50:45'),
(104, 44, 36, 'Chuyển đến phần đầu của thư viện hình ảnh QUẦN JOGGER NAM VISCOSE PHỐI TAPE', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pjo003_green_2__1.jpg', 1, 449000, NULL, NULL, NULL, '2023-02-01 03:50:07', '2023-02-01 03:50:07'),
(105, 45, 30, 'Tee Peace – White', 'https://hidanz.com/wp-content/uploads/2022/08/DM1-trang-600x600.jpg', 1, 340000, 170000, NULL, NULL, '2023-02-01 03:46:13', '2023-02-01 03:46:13'),
(106, 45, 29, 'Tee Peace – Darkgreen', 'https://hidanz.com/wp-content/uploads/2022/08/Dm1-xanh-600x600.jpg', 1, 340000, 170000, NULL, NULL, '2023-02-01 03:45:58', '2023-02-01 03:45:58'),
(107, 46, 23, 'Tee I’m Crocodile – Cream', 'https://hidanz.com/wp-content/uploads/2022/08/Dm5-be-600x600.jpg', 1, 340000, 200000, NULL, NULL, '2023-02-01 03:43:33', '2023-02-01 03:43:33'),
(108, 46, 22, 'Tee I’m Crocodile – Brown', 'https://hidanz.com/wp-content/uploads/2022/08/Dm5-nau-600x600.jpg', 1, 340000, 200000, NULL, NULL, '2023-02-01 03:42:56', '2023-02-01 03:42:56'),
(109, 46, 18, 'Tee Generation – Black', 'https://hidanz.com/wp-content/uploads/2022/08/Dm8-den-2.jpg', 1, 320000, 200000, NULL, NULL, '2022-12-11 17:02:49', '2023-02-01 03:35:46'),
(110, 47, 16, 'Tee Generation – Cream', 'https://hidanz.com/wp-content/uploads/2022/08/Dm8-be-600x600.jpg', 1, 340000, 200000, NULL, NULL, '2022-12-11 17:02:49', '2023-02-01 03:35:57'),
(111, 47, 14, 'Tee Hidanz Smile – Cream', 'https://hidanz.com/wp-content/uploads/2022/08/Dm7-be-600x600.jpg', 1, 340000, 200000, NULL, NULL, '2022-12-11 17:02:49', '2023-02-01 03:40:47'),
(112, 48, 27, 'Tee Peace – Brown', 'https://hidanz.com/wp-content/uploads/2022/08/Dm1-nau-600x600.jpg', 1, 340000, 240000, NULL, NULL, '2023-02-01 03:44:54', '2023-02-01 03:44:54'),
(113, 48, 26, 'Tee Meomeo – White', 'https://hidanz.com/wp-content/uploads/2022/09/dm10-trang-600x600.jpg', 1, 340000, 240000, NULL, NULL, '2023-02-01 03:44:38', '2023-02-01 03:44:38'),
(114, 49, 15, 'Tee Generation – Darkgreen', 'https://hidanz.com/wp-content/uploads/2022/08/Dm8-xanh-600x600.jpg', 1, 340000, 200000, NULL, NULL, '2022-12-11 17:02:49', '2023-02-01 03:40:11'),
(115, 49, 14, 'Tee Hidanz Smile – Cream', 'https://hidanz.com/wp-content/uploads/2022/08/Dm7-be-600x600.jpg', 1, 340000, 200000, NULL, NULL, '2022-12-11 17:02:49', '2023-02-01 03:40:47'),
(116, 49, 13, 'Tee Hidanz Smile – Darkgreen', 'https://hidanz.com/wp-content/uploads/2022/08/Dm7-xanh-600x600.jpg', 1, 340000, 200000, NULL, NULL, '2022-12-11 17:02:49', '2023-02-01 03:41:46'),
(117, 50, 33, 'QUẦN JEAN NAM ỐNG ÔM TRƠN FORM SLIM CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa041_m_indigo_thumbnail__1.jpg', 1, 580000, NULL, NULL, NULL, '2023-02-01 03:48:59', '2023-02-01 03:48:59'),
(118, 50, 32, 'QUẦN JEAN NAM TRƠN FORM SLIM', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa004_brown_2___1.jpg', 1, 580000, NULL, NULL, NULL, '2023-02-01 03:48:34', '2023-02-01 03:48:34'),
(119, 50, 34, 'QUẦN JEAN NAM ỐNG RỘNG TRƠN FORM STRAIGHT CROP', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_41__1.jpg', 1, 580000, NULL, NULL, NULL, '2023-02-01 03:49:19', '2023-02-01 03:49:19'),
(120, 51, 28, 'Tee Peace – Cream', 'https://hidanz.com/wp-content/uploads/2022/08/Dm1-be-600x600.jpg', 1, 340000, 170000, NULL, NULL, '2023-02-01 03:45:40', '2023-02-01 03:45:40'),
(121, 51, 32, 'QUẦN JEAN NAM TRƠN FORM SLIM', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa004_brown_2___1.jpg', 1, 580000, NULL, NULL, NULL, '2023-02-01 03:48:34', '2023-02-01 03:48:34'),
(122, 51, 36, 'Chuyển đến phần đầu của thư viện hình ảnh QUẦN JOGGER NAM VISCOSE PHỐI TAPE', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pjo003_green_2__1.jpg', 1, 449000, NULL, NULL, NULL, '2023-02-01 03:50:07', '2023-02-01 03:50:07'),
(123, 51, 38, 'QUẦN DÀI KAKI NAM DOBBY FORM SLIM', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pca005_covert_green_3__1.jpg', 4, 550000, NULL, NULL, NULL, '2023-02-01 03:51:22', '2023-02-01 03:51:22');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_order_payments`
--

CREATE TABLE `tbl_order_payments` (
  `payment_id` tinyint(4) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `created_at` date DEFAULT current_timestamp(),
  `updated_at` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_order_payments`
--

INSERT INTO `tbl_order_payments` (`payment_id`, `name`, `description`, `image`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'Thanh toán khi nhận hàng', 'Phí thu hộ: ₫0 VNĐ. Ưu đãi về phí vận chuyển (nếu có) áp dụng cả với phí thu hộ.', NULL, 49, 49, '2022-11-08', '2022-11-08'),
(2, 'Thẻ tín dụng ghi nợ', 'Thẻ tín dụng ghi nợ', NULL, 48, 48, '2022-11-08', '2022-11-08');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_posts`
--

CREATE TABLE `tbl_posts` (
  `post_id` bigint(20) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `image` varchar(300) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `post_cate_id` bigint(11) DEFAULT NULL,
  `slug` varchar(500) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(11) DEFAULT NULL,
  `updated_by` bigint(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_posts`
--

INSERT INTO `tbl_posts` (`post_id`, `name`, `description`, `content`, `image`, `status`, `post_cate_id`, `slug`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(16, 'Determinant khai trương cơ sở mới với bộ sưu tập sơ mi 61 size', 'TP HCMThương hiệu thời trang quốc tế Determinant khai trương cơ sở mới tại Vincom Center Đồng Khởi vào ngày 24/12, mang đến bộ sưu tập áo sơ mi với 61 kích cỡ.', '<p>Thương hiệu thời trang quốc tế đến từ Hong Kong đã gia nhập thị trường Việt Nam hai năm. Theo đó, với cột mốc phát triển mới tại TP HCM, Determinant tiếp tục giới thiệu sản phẩm độc quyền của thương hiệu - bộ 61 size áo sơ mi.</p><p class=\"ql-align-center\"><img src=\"https://i1-giaitri.vnecdn.net/2022/12/25/Image-jpeg-4433-1671947360.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=_5AW9fbNynGUPFPAp5XB9w\"></p><p>Không gian showroom theo phong cách hiện đại của Determinant. Ảnh:&nbsp;<em>Determinant</em></p><p>Theo đại diện thương hiệu, bộ 61 size áo sơ mi kết hợp độ rộng cổ, chiều dài tay và dáng thân áo đa dạng, đem lại cảm giác vừa vặn như may đo cho mọi vóc dáng. Sản phẩm được dệt từ 100% ELS Cotton - sợi bông thiên nhiên dài, ứng dụng công nghệ chống nhăn và kháng khuẩn. Thương hiệu còn ứng dụng công nghệ Visdry kháng nước ở mặt ngoài và thấm hút mồ hôi tốt ở măt trong trên dòng sản phẩm polo và sơ mi đa năng smart shirt.</p><p>Bên cạnh đó, nhân dịp khai trương, nhãn hàng triển khai hàng loạt ưu đãi, quà tặng và hoạt động giải trí trong suất tuần lễ khai trương từ 24/12 - 31/12. Trong đó có minigame \"Chơi là trúng\" nhận voucher hoàn tiền đến 500.000 đồng.</p><p class=\"ql-align-center\"><img src=\"https://i1-giaitri.vnecdn.net/2022/12/25/Image-1-jpeg-2668-1671947360.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=peGUMZBT4voeYU_chQdPZQ\"></p><p>Khách hàng tới tham dự và mua sắm tại buổi khai trương. Ảnh:&nbsp;<em style=\"font-weight: var(--bs-body-font-weight);\">Determinant</em></p><p><a href=\"http://ldp.to/14qp9\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(7, 109, 182);\">Determinant</a>&nbsp;là thương hiệu thời trang nam thuộc sở hữu của Tập đoàn Esquel (Hong Kong) - một trong những đơn vị hoạt động hàng đầu thế giới trong lĩnh vực dệt may và thời trang từ năm 1978. Đơn vị hướng tới cung cấp sản phẩm với các tiêu chí hàng đầu: chất lượng, tính năng và phong cách thiết kế.</p><p>Nhãn hàng định hướng hoạt động với tinh thần cốt lõi là lấy phát triển bền vững và thân thiện môi trường. Do đó, Determinant áp dụng các biện pháp cắt giảm tối đa phát thải carbon và sử dụng nguyên liệu tự nhiên trong quá trình sản xuất.</p>', '', 'active', 1, NULL, '2023-01-10 07:30:14', '2023-01-10 07:30:14', NULL, NULL),
(48, 'ĐÂU LÀ NHỮNG PHONG CÁCH THỜI TRANG NAM BẠN PHẢI BIẾT123', '<p>Thời trang là một lĩnh vực đa dạng và sáng tạo bậc nhất. Qua một thời gian dài, thời trang đã hình thành nên những phong cách riêng biệt. Thời trang nam dù không quá đa dạng và phức tạp như thời trang nữ song vẫn tồn tại nhiều phong cách riêng biệt mà phái mạnh phải biếtádasdasdasdasd</p>', '<h3><strong>Sale sập sàn –&nbsp;</strong><strong style=\"color: rgb(237, 28, 36);\">GIẢM 50%</strong><strong>&nbsp;cho mọi đơn hàng của Hidanz trên Shopee</strong></h3><p>Hân hoan chào đón ngày lễ Giáng Sinh đang về trên mọi nẻo đường,<strong>&nbsp;Hidanz –</strong>&nbsp;thương thiệu thời trang tối giản xin gửi đến bạn những ưu đãi&nbsp;<strong style=\"color: rgb(237, 28, 36);\">CỰC SỐC GIẢM ĐẾN 50%</strong>&nbsp;cho mọi đơn hàng trên shopee. Ưu đãi chỉ từ:&nbsp;<strong style=\"color: rgb(237, 28, 36);\">01/12 – 15/12</strong></p><p><a href=\"https://shopee.vn/hidanz2021?categoryId=78&amp;itemId=9553760670\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(10, 10, 10);\"><img src=\"https://hidanz.com/wp-content/uploads/2020/12/70b9bc6a1d228bff7fb9134c552ec3da.jpg\" width=\"1024\"></a></p><p><br></p><p><img src=\"https://hidanz.com/wp-content/uploads/2021/05/phong-cach-thoi-trang-nam-1.jpg\" width=\"800\"></p><p><em>Phong cách thời trang nam là một đề tài đáng được bàn luận</em></p><p><img src=\"https://hidanz.com/wp-content/uploads/2021/05/phong-cach-thoi-trang-nam-6.jpg\" width=\"660\"></p><p>Điều gì tạo nên khác biệt giữa những phong cách thời trang namCác bạn đều biết rằng quy chuẩn của mỗi phong cách thời trang nam là khác nhau, nhưng cụ thể những quy chuẩn đó là gì? Cùng xem có giống với dự đoán của bạn không nhé!</p><h3><strong>Items thời trang</strong></h3><p><img src=\"https://hidanz.com/wp-content/uploads/2021/05/phong-cach-thoi-trang-nam-3.jpg\" width=\"960\"><em>Phong cách Streetwear với những item đặc trưng như hoodie, jogger</em></p><p>Một vài phong cách thời trang nam có những items đặc trưng cho phong cách đó mà không có ở những style khác. Chẳng hạn như với&nbsp;<strong>Phong cách Boho</strong>&nbsp;ta có những chiếc khăn tua rua đặc trưng và không hề “đụng hàng” với những phong cách khác.&nbsp;</p><p>Đặc trưng của các Items thời trang còn được thể hiện ở sự phổ biến của những items thời trang đó trong một phong cách. Điều này có ý nghĩa như cách bạn sẽ nghĩ tới&nbsp;<strong>Phong cách Streetwear</strong>&nbsp;nếu như được hỏi tới những chiếc Tee, pants năng động; hoặc nghĩ tới phong cách Retro khi được xem các mẫu áo cổ điển.&nbsp;&nbsp;</p><h3><strong>Họa tiết, màu sắc</strong></h3><p><img src=\"https://hidanz.com/wp-content/uploads/2021/05/phong-cach-thoi-trang-nam-7.jpg\" width=\"639\"><em>Phong cách Vintage và tone màu trầm mặc xưa cũ</em></p><p>Họa tiết và màu sắc chính là một trong những “đặc điểm nhận dạng” rõ thấy nhất giữa các phong cách thời trang nam. Nhiều khi họa tiết và màu sắc còn thể hiện cho tinh thần của phong cách ăn mặc nữa. Nghiêm chỉnh, lịch sự, tự do, phóng khoáng,…đều bị ảnh hưởng không nhỏ từ màu sắc và họa tiết. Bạn cứ thử nhìn màu sắc xưa cũ trong&nbsp;<strong>phong cách Vintage</strong>&nbsp;hoặc màu sắc nhẹ nhàng thanh sáng trong&nbsp;<strong>phong cách Palewave</strong>&nbsp;là biết!</p><h3><strong>Cách mặc, cách phối</strong></h3><p><img src=\"https://hidanz.com/wp-content/uploads/2021/05/phong-cach-thoi-trang-nam-4.png\" width=\"866\">Cách mặc và cách phối đồ cũng là một quy chuẩn quan trọng. Nếu như bạn đang phân vân hoặc chưa hiểu rõ cách phối đồ dựa trên phong cách thời trang nam yêu thích của mình thì đừng lo,&nbsp;<strong>Hidanz</strong>&nbsp;đã hướng dẫn chi tiết tất cả mọi thứ trong loạt bài viết về phong cách thời trang nam này đấy.&nbsp;</p><p><img src=\"https://hidanz.com/wp-content/uploads/2021/05/phong-cach-thoi-trang-nam-5.jpg\" width=\"1280\"><em>Phong cách lịch lãm</em></p>', 'https://hidanz.com/wp-content/uploads/2021/05/phong-cach-thoi-trang-nam-7.jpg', 'active', 1, 'dau-la-nhung-phong-cach-thoi-trang-nam-ban-phai-biet123', '2023-01-31 07:31:56', '2023-01-31 14:01:46', NULL, NULL),
(49, 'Những mẫu quần nam đẹp nhất hiện nay', '<h2><br></h2><p><br></p>', '<p><span style=\"color: rgb(10, 10, 10);\">Quần nam hiện nay có rất nhiều mẫu mã để liệt kê hết những kiểu quần nam thực sự khó như mò kim đáy bể. Mỗi loại&nbsp;</span><strong style=\"color: rgb(10, 10, 10);\">quần nam</strong><span style=\"color: rgb(10, 10, 10);\">&nbsp;đều có một đặc điểm, một cách kết hợp với các item khác riêng biệt. Hãy cùng Hidanz khám phá top 8 mẫu quần nam được nhiều chàng trai ưa chuộng nhất hiện nay nhé!</span></p><h3><strong>Những mẫu quần kaki nam siêu xịn</strong></h3><p><span style=\"color: rgb(10, 10, 10);\">Quần kaki nam chưa bao giờ hết độ Hot của nó. Dù bạn đang ở độ tuổi nào, sinh viên, dân văn phòng hay người thành đạt thì mẫu&nbsp;</span><strong style=\"color: rgb(10, 10, 10);\">quần nam kaki</strong><span style=\"color: rgb(10, 10, 10);\">&nbsp;đều đáp ứng được hết nhu cầu của các bạn.</span></p><p><strong style=\"color: rgb(10, 10, 10);\">1. Quần kaki nam ống suông</strong></p><p><span style=\"color: rgb(10, 10, 10);\"><img src=\"https://hidanz.com/wp-content/uploads/2021/01/quan-kaki-nam-suong.jpg\" width=\"660\">Nam giới thường xuyên lựa chọn item này bởi sự thoải mái mà chiếc&nbsp;</span><strong style=\"color: rgb(10, 10, 10);\">quần nam&nbsp;</strong><span style=\"color: rgb(10, 10, 10);\">này mang lại. Không cầu kỳ như nữ giới, nam giới luôn hướng tới sự đơn giản và phải tạo cảm giác thoải mái nhất cho họ. Một chiếc&nbsp;</span><strong style=\"color: rgb(10, 10, 10);\">quần nam kaki&nbsp;</strong><span style=\"color: rgb(10, 10, 10);\">ống suông sẽ đáp ứng được những tiêu chí bền - rẻ- đẹp cho các chàng trai. Với kiểu dáng với đơn giản không kén chọn người mặc, gam màu trung tính giúp bạn có thể kết hợp với những mẫu áo khác nhau như áo thun nam trơn, áo polo nam hay áo cá sấu nam lacoste ... Khi kết hợp quần kaki nam ống suông với áo thun nam bạn đừng quên mix cùng một đôi giày sneaker thời trang nhé! Set đồ có thể diện đi làm, đi chơi hay đi leo núi đều rất fashion.</span></p><p><strong style=\"color: rgb(10, 10, 10);\">2. Quần kaki nam công sở</strong></p><p><span style=\"color: rgb(10, 10, 10);\"><img src=\"https://hidanz.com/wp-content/uploads/2021/01/quan-kaki-nam-cong-so.jpg\" width=\"660\">Những chiếc quần kaki nam công sở mang xu hướng màu sắc trẻ trung khi kết hợp với áo thun nam, áo thun có cổ ... Quần kaki tối màu sẽ dễ dàng kết hợp với áo sơ mi sáng màu hoặc áo polo nam xanh rêu, cam trẻ trung.</span></p><p><strong style=\"color: rgb(10, 10, 10);\">3. Quần kaki nam skinny</strong></p><p><span style=\"color: rgb(10, 10, 10);\"><img src=\"https://hidanz.com/wp-content/uploads/2021/01/quan-kaki-nam-cong-so1.jpg\" width=\"660\">Không chỉ có những cô nàng mới thích kiểu quần skinny ôm sát khoe những đôi chân thon dài mà ngay cả những chàng trai cũng có mẫu quần skinny giúp các chàng trai khoe hình dáng săn chắc của mình. Bạn có thể kết hợp với áo len, áo sơ mi, áo khoác, áo polo để tạo nên phong cách của mình. Còn nếu như bạn thích sự nam tính mạnh mẽ hãy chọn những chiếc kaki màu tối. Một lưu ý nhỏ cho những bạn nam yêu thích quần kaki nam skinny đó là hãy xắn gấu và mang giày slim, giày lười sẽ cực cá tính.</span></p><h3><strong>Quần short nam dễ dàng phối đồ</strong></h3><p><span style=\"color: rgb(10, 10, 10);\">Không thể bỏ qua những mẫu quần nam đang tung hoành trên sàn đấu thời trang này với các item như:</span></p><p><strong style=\"color: rgb(10, 10, 10);\">1. Quần short nam cá tính</strong></p><p><span style=\"color: rgb(10, 10, 10);\"><img src=\"https://hidanz.com/wp-content/uploads/2021/01/ceab76b88c5a76042f4b.jpg\" width=\"660\">Quần short nam có rất nhiều loại: quần short nam vải dù, quần short nam vải tây, quần short nam vải kaki, quần short nam jeans. Cùng Hidanz xem qua những mẫu&nbsp;</span><strong style=\"color: rgb(10, 10, 10);\">quần nam</strong><span style=\"color: rgb(10, 10, 10);\">&nbsp;đẹp cho nam này nhé!</span></p><p><strong style=\"color: rgb(10, 10, 10);\">2. Quần Short nam vải dù</strong></p><p><span style=\"color: rgb(10, 10, 10);\"><img src=\"https://hidanz.com/wp-content/uploads/2021/01/0002718_quan-short-the-thao-nam-colo-mau-den-cl7575789_600.jpeg\" width=\"660\">Trong tủ đồ các chàng trai mà thiếu đi chiếc quần short nam vải dù là một thiếu sót quá lớn, đặc biệt trong mùa hè nắng đổ lửa này. Sở hữu chất liệu nhẹ, thoáng mát item này nhanh chóng chiếm được lòng các chàng trai đặc biệt là những anh chàng thường xuyên luyện tập thể thao, gym … Quần short nam có thể phối với nhiều item khác nhau như áo thun nam trơn đơn giản hay phá cách một chút với chiếc áo tank top (áo 3 lỗ)....</span></p><p><strong style=\"color: rgb(10, 10, 10);\">3. Quần short nam vải tây</strong></p><p><span style=\"color: rgb(10, 10, 10);\"><img src=\"https://hidanz.com/wp-content/uploads/2021/01/quan_short_kaki_nam_mix_giay.jpg\" width=\"660\">Chiếc quần nam đẹp luôn là lựa chọn hàng đầu mỗi khi chàng đi dạo phố, dã ngoại … Item mang đến sự thoải mái nhưng cũng không làm mất đi sự lịch lãm vốn có của bạn.</span></p><h3><strong>Quần jogger nam - phong cách đường phố</strong></h3><p><span style=\"color: rgb(10, 10, 10);\">Những mẫu quần jogger nam được lấy nguồn cảm hứng chiếc quần tây truyền thống, sau những cải tiến đã đưa ra sản phẩm với nhiều thiết kế độc đáo. Không chỉ đem lại sự thoải mái cho người mặc mà còn giúp họ thể hiện cá tính qua set trên người. Một chút cá tính, một chút nổi loạn để tuổi trẻ này sống không còn hối tiếc là phương châm tạo dựng nên chiếc quần jogger này. Phá vỡ đi những quy tắc cứng nhắc quần jogger có thiết kế mới lạ, mang nhiều kiểu dáng khác nhau giúp bạn tha hồ lựa chọn.</span></p><p><strong style=\"color: rgb(10, 10, 10);\">1. Quần jogger nam kaki</strong></p><p><span style=\"color: rgb(10, 10, 10);\"><img src=\"https://hidanz.com/wp-content/uploads/2021/01/quan-jogger-nam-vai-kaki.jpg\" width=\"660\">Quần jogger nam kaki với chất liệu kaki bền, thấm hút mồ hôi tốt, dễ dàng giặt sạch trong quá trình sử dụng đặc biệt thích hợp cho những chàng trai thường xuyên vận động, chơi thể thao.</span></p><p><strong style=\"color: rgb(10, 10, 10);\">2. Quần jogger nam nhung</strong></p><p><span style=\"color: rgb(10, 10, 10);\"><img src=\"https://hidanz.com/wp-content/uploads/2021/01/quan-jogger-nam-vai-nhung.jpg\" width=\"660\">Dòng quần nam mang một chút cổ mỵ, quỷ quái của chất liệu nhung.</span></p><p><strong style=\"color: rgb(10, 10, 10);\">3. Quần jogger nam denim</strong></p><p><span style=\"color: rgb(10, 10, 10);\"><img src=\"https://hidanz.com/wp-content/uploads/2021/01/quan-jogger-nam-vai-kaki1.jpg\" width=\"660\">Quần jogger nam denim – tạm quên đi những chiếc quần jeans mặc hằng ngày và thay đổi một chút với chiếc quần jogger nam denim, sở hữu những đặc điểm những chiếc quần denim thông thường nên rất bền bỉ, thoải mái khi mặc.</span></p>', 'https://hidanz.com/wp-content/uploads/2021/01/quan_short_kaki_nam_mix_giay.jpg', 'active', 1, 'nhung-mau-quan-nam-dep-nhat-hien-nay', '2023-02-01 04:13:22', '2023-02-01 04:13:22', NULL, NULL),
(50, 'Công thức diện đồ với quần dài Unisex nam và nữ siêu đẹp', '', '<p>Phong cách unisex đã in sâu trong tâm trí rất nhiều người, chúng ta rất dễ dàng bắt gặp chúng ở rất nhiều cửa hàng thời trang, một phong cách được ưa chuộng trong làng thời trang cao cấp. Vậy làm sao để có thể dễ dàng theo đuổi được&nbsp;<a href=\"https://hidanz.com/lo-dien-cong-thuc-dien-do-voi-quan-dai-unisex-nam-va-nu-sieu-dep/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 0, 255);\"><strong>phong cách unisex cá tính</strong></a>&nbsp;này? Cùng tìm hiểu qua những cách diện đồ với&nbsp;<strong>quần dài unisex nam</strong>&nbsp;và nữ trong bài viết dưới đây.</p><h2><strong>Quần áo unisex là gì?</strong></h2><p>Trong suốt nhiều thập kỷ, xã hội luôn có lệnh rằng nam giới phải ăn mặc như thế này, nữ giới phải ăn mặc theo cách khác. Vì thế thời trang unisex đã được sinh ra và là hàng may mặc được thiết kế không theo một giới tính cụ thể nào cả.&nbsp;</p><p>Mặc dù kích thước cơ thể của phái nam và phái nữ khác nhau dẫn đến những đường cắt khác nhau với quần áo. Tuy nhiên rất nhiều chị em phụ nữ lại thích&nbsp;<strong>quần dài unisex nam</strong>&nbsp;hơn, hơn hết là khi họ không có nhiều đường cong hông. Thuật ngữ unisex xuất hiện, mang lại một cái gì đó mà cả hai giới tính đều có thể được sử dụng.</p><h2><strong>Những công thức phối đồ với quần dài unisex nam và nữ&nbsp;</strong></h2><h3><strong>Quần jogger unisex</strong></h3><p>Đây là một món đồ cực kì hay ho, bạn không thể nào bỏ qua với phong cách unisex. Quần jogger là chiếc quần có phần trên rộng và thoải mái, phần ống được bo chun rất tiện lợi để di chuyển và hoạt động.&nbsp;</p><p>Quần jogger là mẫu&nbsp;<strong>quần dài unisex nam</strong>&nbsp;nữ rất được ưa chuộng bởi vẻ cá tính mà nó mang lại. Đặc biệt, nó còn rất dễ kết hợp với nhiều kiểu áo khác nhau.&nbsp;</p><p><img src=\"https://hidanz.com/wp-content/uploads/2022/05/Quan-jogger-cuc-cool-ngau.jpg\" width=\"1024\"><em>Quần jogger cực cool ngầu</em></p><p>Bạn có thể kết hợp quần jogger với áo thun, áo sơ mi unisex hoặc có thể phối layer. Ngoài ra bạn cũng có thể diện thêm một số phụ kiện đi kèm như mũ,&nbsp;<a href=\"https://hidanz.com/cach-chon-mau-tui-deo-cheo-phu-hop-voi-quan-ao/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 0, 255);\">túi xách</a>&nbsp;hay là kính… để trông thật hoàn hảo.</p><p>Không những dễ phối đồ mà còn thể hiện được phong cách thời trang phi giới tính thật ngầu lòi, năng động. Quần jogger là sự lựa chọn được rất nhiều người yêu thích và rất tiện lợi</p><h3><strong>Quần skinny jean</strong></h3><p>Với mẫu&nbsp;<strong>quần dài unisex nam</strong>&nbsp;nữ&nbsp;này bạn có thể sẽ có một set đồ siêu đẹp dùng để đi tiệc hay đi chơi đó là phối quần skinny jean với áo blazer. Bận một chiếc áo len cổ lọ hoặc một chiếc áo len bên trong, khoác lên bên ngoài chiếc blazer với những màu sắc cơ bản như xám, đen, nude, beige hoặc cũng có thể là màu pastel nhẹ nhàng.&nbsp;</p><p><img src=\"https://hidanz.com/wp-content/uploads/2022/05/Quan-skinny-jean-sang-chanh.jpg\" width=\"1400\"><em>Quần skinny jean sang chảnh</em></p><p>Đi kèm với outfit này là những đôi giày derby gọn nhẹ sẽ phù hợp và đặc biệt hơn để thể hiện phong cách lịch lãm, sang trọng và giúp các bạn nam trông như một quý ông quyến rũ, thanh lịch.</p><h3><strong>Quần tây nâu</strong></h3><p>Bạn có thể reset lại phong cách của mình với quần tây nâu siêu lịch lãm này. Với chiếc&nbsp;<strong>quần dài unisex nam</strong>&nbsp;nữ này bạn có thể kết hợp cùng set áo sweater và áo sơ mi đều được. Đặc biệt với các bạn nam, cách phối đồ này cực kỳ gây thương nhớ với phái nữ đấy nhé. Đây là một set đồ vừa lịch sự vừa đẹp cho buổi hẹn hò, ngoài ra bạn cũng có thể dùng nó để thay đổi một chút cho thời trang hằng ngày của mình.</p><p><img src=\"https://hidanz.com/wp-content/uploads/2022/05/Quan-tay-nau-mang-den-mot-phong-cach-lich-lam.jpg\" width=\"800\"><em>Quần tây nâu mang đến một phong cách lịch lãm</em></p><p>Màu sắc được phối phổ biến nhất với quần tây nâu là chiếc áo sơ mi trắng và khoác lên bên ngoài là áo len màu beige, một công thức phối đồ cực đỉnh và bất bại, mang lại sự trẻ trung và dễ làm đối phương gục đổ.</p><h3><strong>Quần jean baggy&nbsp;</strong></h3><p>Quần jean baggy là mẫu&nbsp;<strong>quần dài unisex nam</strong>&nbsp;nữ được thiết kế rộng, thụng ở phần hông và đùi, nhỏ dần xuống đến phần chân quần. Đây là kiểu quần rất dễ mặc và rất đa dạng về mẫu mã cũng như màu sắc.</p><p>Không chỉ đa dạng về mẫu mã mà quần baggy jean còn được săn đón vì với dáng người nào cũng đều có thể mặc quần baggy jean. Bạn có thể phối chúng với một chiếc áo thun trắng mang đến vẻ cool ngầu, chất chơi và cực kỳ thu hút. Hay một chiếc hoodie tạo nên sự cuốn hút và năng động.&nbsp;</p><p><img src=\"https://hidanz.com/wp-content/uploads/2022/05/Quan-jean-baggy-tre-trung-va-cuon-hut.jpg\" width=\"444\"><em>Quần jean baggy&nbsp;trẻ trung và cuốn hút</em></p><p>Nếu bạn muốn trông thật sành điệu bằng những outfit đơn giản thì sự kết hợp giữa quần baggy jean với áo sơ mi là không thể thiếu. Hoặc có thể mặc cùng áo khoác dạ để toát lên vẻ ấm áp và thanh lịch. Có quá nhiều sự lựa chọn với một mẫu quần thật xinh xắn đúng không nào?</p><h3><strong>Quần ống suông</strong></h3><p>Bạn sẽ dễ dàng nhìn thấy một sự kết hợp của quần ống suông với những kiểu áo vô cùng đơn đơn giản như áo thun, áo sơ mi, sweater, hoodie,… Những bộ outfit quá đỗi quen thuộc với mỗi người những không bao giờ bị lỗi thời hay mất đi những vẻ đẹp riêng biệt mà chúng toát lên.&nbsp;</p><p><img src=\"https://hidanz.com/wp-content/uploads/2022/05/Quan-ong-suong-lich-lam-cuc-ki-de-phoi-do.jpg\" width=\"1024\"><em>Quần ống suông lịch lãm, cực kì dễ phối đồ</em></p><p><strong>Xem thêm: Top 10&nbsp;</strong><a href=\"https://hidanz.com/local-brand-la-gi/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 0, 255);\"><strong>áo Local&nbsp;Brand</strong></a><strong>&nbsp;chất lượng đỉnh giá lại rẻ</strong></p><p>Tùy theo sở thích và phong cách riêng của từng người mà quần ống suông sẽ được phối với những mẫu áo khác nhau và tạo nên những vẻ đẹp trẻ trung, năng động hay phong cách lịch lãm, phóng khoáng. Đây đều là những style phổ biến và rất được mọt thời trang ưa chuộng.</p><p>Một sự kết hợp&nbsp;giữa phong cách unisex và streetwear rất hot của các bạn trẻ trên thế giới đó chính là áo hoodie + áo khoác boomber cùng quần ống suông. Bạn có thể phối với bất kì chiếc hoodie và áo khoác bomber nào mà mình đang có, miễn là màu sắc của chúng sẽ đối lập với nhau là đã có ngay một bộ trang phục đúng trend và rất thu hút.</p>', 'https://hidanz.com/wp-content/uploads/2022/05/Quan-ong-suong-lich-lam-cuc-ki-de-phoi-do.jpg', 'active', 1, 'cong-thuc-dien-do-voi-quan-dai-unisex-nam-va-nu-sieu-dep', '2023-02-01 04:14:49', '2023-02-01 04:14:49', NULL, NULL),
(51, 'Global brand là gì? Top Global brand nổi bật', '', '<h2><strong>Global brand là gì?</strong></h2><p><strong>Global brand</strong>&nbsp;dịch sang tiếng Việt có nghĩa là “thương hiệu toàn cầu”, những sản phẩm này được mọi người biết đến và sử dụng, được quảng bá rất rộng rãi.</p><p>Nhờ sự trau chuốt và kỹ lưỡng từ tên thương hiệu, chất liệu cho đến thiết kế độc đáo với nhiều sự riêng biệt kèm theo những tính năng độc lạ, mang đến cho khách hàng một chất lượng tuyệt vời nhất.</p><p><img src=\"https://hidanz.com/wp-content/uploads/2022/04/global-brand-la-gi-1.jpg\" width=\"750\"><em>Global brand là gì?</em></p><p>Để được mọi người biết đến nhiều và dễ dàng thu hút khách hàng hơn thì những công ty Global brand nên tổ chức ra mắt thương hiệu ở nhiều quốc gia khác nhau trên thế giới. việc đầu tư lớn vào quảng cáo trên tất cả các phương tiện cũng rất là quan trọng. Công ty sẽ được ghi nhận là một&nbsp;<strong>Global brand</strong>&nbsp;– thương hiệu toàn cầu khi những sản phẩm của thương hiệu được quảng bá một cách rộng rãi.</p><h2><strong>Phân biệt Global brand và Local brand</strong></h2><p>Local brand là thương hiệu trái ngược với&nbsp;<strong>Global brand</strong>, đó là một thương hiệu của địa phương, được thành lập và phát triển trong những năm trở lại đây, trong khi Global brand đã được hình thành và phát triển từ rất lâu.&nbsp;</p><p>Local brand đang là xu hướng, thịnh vượng và phát triển rất mạnh ở Việt Nam bởi giá thành bình dân với những thiết kế đa dạng, đặc sắc và chất lượng phù hợp với mọi đối tượng&nbsp;</p><p><img src=\"https://hidanz.com/wp-content/uploads/2022/04/Global-brand-va-Local-brand.jpg\" width=\"600\"><em>Global brand và Local brand</em></p><p>Một cách dễ phân biệt<strong>&nbsp;Global brand</strong>&nbsp;và Local brand là thông qua giá cả của sản phẩm. Global brand thường sẽ có mức giá cao và đắt đỏ hơn vì đây là một thương hiệu được hình thành từ lâu đời và chất lượng sản phẩm được đảm bảo. Ngược lại, Local brand có chất vải mềm hơn, thiết kế không kém phần tinh tế, chất lượng ngày càng được chú trọng và trở nên nổi bật hơn. Đặc biệt, với châm ngôn “Người Việt dùng hàng Việt” thì Local brand cũng đang được rất nhiều người tin tưởng và sử dụng.</p><p><strong>Xem thêm: Top 10&nbsp;</strong><a href=\"https://hidanz.com/local-brand-la-gi/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(10, 10, 10);\"><strong>áo Local&nbsp;</strong></a><a href=\"https://hidanz.com/local-brand-la-gi/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 0, 255);\"><strong>Brand</strong></a><strong>&nbsp;chất lượng đỉnh giá lại rẻ</strong></p><h2><strong>Top Global brand nổi bật được yêu thích nhất tại Việt Nam</strong></h2><h3><strong>Thương hiệu YSL</strong></h3><p>Yves Saint Laurent (YSL) là thương hiệu được thành lập vào năm 1961 bởi Yves Saint Laurent và Pierre Bergé. Được biết đến với những thiết kế độc đáo, đi đầu xu hướng mới tạo nên một cuộc cách mạng thời trang nữ, làm nên một hãng thời trang cao cấp, có danh tiếng bậc nhất thế giới</p><p><img src=\"https://hidanz.com/wp-content/uploads/2022/04/Thuong-hieu-YSL.jpg\" width=\"600\"><em>Thương hiệu YSL</em></p><p>YSL nổi tiếng nhất là những kiểu áo khoác tuxedo. Ngoài ra thương hiệu YSL đã chiếm lĩnh các thị trường khác như, giày dép, đồ trang sức, túi xách, mỹ phẩm cao cao cấp,…</p><h3><strong>Thương hiệu Adidas</strong></h3><p>Adidas là thương hiệu&nbsp;<strong>Global brand</strong>&nbsp;đến từ nước Đức. Adidas ltd AG là nhà sản xuất dụng cụ thể thao của Đức lớn thứ hai thế giới, là một thành viên của Adidas Group, bao gồm cả công ty dụng cụ thể thao Reebok, công ty golf Taylormade, công ty sản xuất bóng golf Maxfli và Adidas golf.&nbsp;&nbsp;</p><p><img src=\"https://hidanz.com/wp-content/uploads/2022/04/Thuong-hieu-Adidas.jpg\" width=\"600\"><em>Thương hiệu Adidas</em></p><p>Hiện tại Adidas đang hướng đến 3 nhóm đối tượng khách hàng chính với 3 dòng sản phẩm: Sport Performance hướng đến vận động viên ở mọi cấp độ, Sport Heritage hướng đến thời trang theo cảm hứng và cuối cùng là Sport Style tập trung vào khách hàng trẻ thích những trang phục sành điệu.</p><h3><strong>Thương hiệu Dior</strong></h3><p>Christian Dior S.A&nbsp;được thành lập bởi nhà thiết kế Christian Dior và ra đời năm 1946. Christian Dior là nhà mốt xa xỉ ở Pháp, nổi tiếng khắp thế giới bởi phong cách Haute Couture hết sức kiến trúc và quyến rũ.</p><p><img src=\"https://hidanz.com/wp-content/uploads/2022/04/Thuong-hieu-Dior.jpg\" width=\"978\"><em>Thương hiệu Dior</em></p><p>Các dòng sản phẩm của Dior từ trang phục, phụ kiện túi xách, giày, nước hoa, nữ trang… đều được yêu thích bởi những nhân vật nổi tiếng và là niềm hạnh phúc xa xỉ của tất cả phụ nữ trên thế giới</p><h3><strong>Thương hiệu Gucci</strong></h3><p>Gucci là thương hiệu thời trang đến từ Ý, với thiết kế hiện đại và đổi mới, tinh thần quý tộc và có kỹ nghệ thủ công bậc thầy.</p><p><img src=\"https://hidanz.com/wp-content/uploads/2022/04/Thuong-hieu-Gucci.jpg\" width=\"600\"><em>Thương hiệu Gucci</em></p><p>Thương hiệu Gucci được xem là một trong những thương hiệu thời trang nổi tiếng và danh giá, sở hữu nhiều sản phẩm hàng hiệu bậc nhất toàn cầu.</p><h3><strong>Thương hiệu Chanel</strong></h3><p>Chanel là một<strong>&nbsp;Global brand</strong>&nbsp;được thành lập từ những năm 1909 – 1910 do Gabrielle “Coco” Chanel sáng lập. Là một thương hiệu thời trang, mỹ phẩm cao cấp nước Pháp và là thương hiệu xa xỉ trên thế giới hiện nay, mang trọn vẹn tinh hoa nét đẹp của đất nước Pháp.</p><p><img src=\"https://hidanz.com/wp-content/uploads/2022/04/Thuong-hieu-Chanel.jpg\" width=\"600\"><em>Thương hiệu Chanel</em></p><p>Thương hiệu Chanel ngày một phát triển và trở thành mẫu mực về thời trang cổ điển, kinh điển trong giới thời trang trên toàn cầu.</p><h3><strong>Thương hiệu Balenciaga</strong></h3><p>Balenciaga, thương hiệu thời trang cao cấp của Tây Ban Nha được thành lập bởi nhà thiết kế Cristóbal Balenciaga năm 1919.</p><p><img src=\"https://hidanz.com/wp-content/uploads/2022/04/Thuong-hieu-Balenciaga.jpg\" width=\"600\"><em>Thương hiệu Balenciaga</em></p><p>Những thiết kế mà Balenciaga tạo nên thường đi trước thời đại, có thể dự báo được xu hướng của thời trang thế giới trong tương lai với tinh thần cải tiến mạnh mẽ, lạ mắt, mang một làn gió mới cho làng thời trang trên thế giới</p><h3><strong>Thương hiệu Nike</strong></h3><p>Nike là hãng thời trang thể thao nổi tiếng khắp nước Mỹ, được thành lập từ năm 1964 với tên gọi là Blue Ribbon Sports. Đến năm 1971 thì thương hiệu Nike mới trở thành tên chính thức của hãng thời trang này.</p><p><img src=\"https://hidanz.com/wp-content/uploads/2022/04/Thuong-hieu-Nike.jpg\" width=\"600\"><em>Thương hiệu Nike</em></p><p>Sản phẩm của Nike hướng đến phong cách của sự táo bạo, ham muốn chinh phục và quyết tâm trong thi đấu. Đây là tinh thần được xây dựng, nuôi dưỡng và phát triển trong những chặng đường hoạt động của Nike.</p>', 'https://hidanz.com/wp-content/uploads/2022/04/global-brand-la-gi-1.jpg', 'active', 1, 'global-brand-la-gi-top-global-brand-noi-bat', '2023-02-01 04:22:39', '2023-02-01 04:22:39', NULL, NULL),
(52, 'Caption tạm biệt tháng 4 hay nhất', '', '<h2><strong>Caption tạm biệt tháng 4 đầy cảm xúc</strong></h2><ol><li>Anh có hay, nay đã cuối tháng tư</li></ol><p>Cơn gió nhẹ sắp giao mùa rồi đó</p><p>Lất phất rơi cơn mưa đầu mùa hạ</p><p>Nhấp nhô cuối phố nụ bằng lăng vừa hé.</p><ol><li>Cuối tháng tư, trời trở gió, tiết trời đang chớm vào hạ trở nên oi bức hơn, nắng thêm vàng màu và gắt gỏng hơn. Tháng tư qua đi, gió đầu hè hay là cuối đông, em cũng chẳng nhớ nữa, chỉ là em thấy mình lạc lõng giữa ngổn ngang suy nghĩ.</li><li>Tháng tư sắp qua rồi, cô gái nhỏ cách anh nửa vòng trái đất đã xa anh được bốn mùa tháng tư rồi. Lặng lẽ gói gém những kỉ niệm của thời xưa cũ cất vào ngăn tim. Tháng tư với gió, mưa hạ, lá bay và những mảnh kí ức về người con gái anh yêu một thời, anh lang thang bước vội nơi cuối phố bâng khuâng đưa tay muốn quay ngược bánh xe thời gian về lại tháng tư năm ấy…anh sẽ không thể để lạc mất em.</li><li>Tháng tư xa liệu hạ đã xa chưa</li></ol><p>Mà tiết trời hôm nay hanh hao quá</p><p>Nắng đong đưa nhành loa kèn cuối mùa</p><p>Giọt mưa bay ướt những lối em qua</p><ol><li>Chào Hạ nhé mùa thương vừa e ấp</li></ol><p>Nắng đỏng đảnh lung linh đùa bên hoa</p><p>Nàng mây hiền buông mái tóc thướt tha</p><p>Ve râm ran ngân khúc nhạc rộn ràng</p><p>Tháng tư qua, phố trở nên rất lạ</p><p>Gió nhẹ nhàng cuốn hoàng hôn theo mãi</p><p>Bằng lăng tím chúm chím nụ tươi xinh.</p><ol><li>Tháng tư ơi xin hãy trôi chậm thôi</li></ol><p>Để tôi níu nét rạng ngời đầu hạ</p><p>Loa kèn trắng cánh tàn hương vội vã</p><p>Nhành giấy đỏ nay ngả màu hanh khô.</p><ol><li>Anh sợ một ngày khi tháng tư đi qua</li></ol><p>Nắng hạ về sẽ thiêu cháy tình em</p><p>Loa kèn thôi rực, em cũng thôi nhớ anh</p><p>Xúc cảm tháng tư bỗng vội vã nhạt nhòa</p><p>Bằng lăng về góc phố mình rực tím</p><p>Như chiếc áo em thuở mình còn bên nhau.</p><ol><li>Nắng tháng tư kéo hạ ngang qua phố</li></ol><p>Trời bỗng xanh bên đám mây bàng bạc</p><p>Tiếng ve vang, đánh thức hàng phượng vĩ</p><p>Từng kỉ niệm vẫn hằn trên sỏi đá</p><p>Tháng tư xa, nghe lòng day dứt quá</p><p>Gió nhẹ mơ màng nghiêng nghiêng giọt kí ức</p><p>Em nỡ xa tôi, dang dở chuyện tình buồn.</p><ol><li>Anh có thấy một chiều cuối tháng tư</li></ol><p>Nắng nồng nàn soi góc nhỏ yêu thương</p><p>Anh có thấy khi tháng tư quay gót</p><p>Chùm loa kèn chẳng còn vương sắc thắm</p><p>Anh lặng lẽ xa, chẳng vội nói một câu</p><p>Tháng tư đi, chiều hoàng hôn tím ngắt</p><p>Chân lang thang bước nhẹ tựa nỗi nhớ.</p><ol><li>Tạm biệt tháng tư, nồng nàn cái nắng hạ</li></ol><p>Mây vẫn lang thang lơ lửng một vạt trời</p><p>Gió e ấp ngại ngùng nét đợi mong</p><p>Tháng tư đi, ta làm người lữ thứ</p><p>Tháng tư xa, hương tỏa thơm chiều phố</p><p>Chiều bên cửa nghe mật ngọt đưa hương</p><p>Tháng tư năm ấy, ôi kỉ niệm mùa cũ</p><p>Tiếng yêu đầu môi, ta bỡ ngỡ nhìn nhau.</p><ol><li>Tạm biệt tháng tư, tạm biệt mùa loa kèn</li></ol><p>Có còn níu nhau, chút tinh khôi hoa trắng</p><p>Thảng trong gió mây, chút hương nồng của đất</p><p>Tạm biệt tháng tư, tạm biệt cô gái nhỏ</p><p>Để trái tim mình ngủ yên lúc hạ sang.</p><ol><li>Hạ nắng ấm nhưng mưa chiều vội vã</li></ol><p>Gió hôn đêm thao thức hoàng hôn buồn</p><p>Ai có nhớ những chiều nào mải miết</p><p>Có bồi hồi lọn gió cuối tháng tư.</p><ol><li>Tháng tư xa em nhớ loài hoa ấy</li></ol><p>Loa kèn trắng tinh khiết như tờ giấy</p><p>Pha ngọt ngào như thuở ta chớm yêu</p><p>Nắng lung linh ửng hồng đôi má em</p><p>Tháng tư đi biết bao điều chưa nói.</p><ol><li>Tháng tư qua rồi mà em vẫn ngẩn ngơ</li></ol><p>Vẫn thương, vẫn đợi vẫn chờ người ta</p><p>Tháng tư qua cành hoa vừa ngả màu</p><p>Giọt nắng vàng cho màu thêm oi ả</p><p>Vấn vương kỉ niệm chiều buồn cùng nhau.</p><ol><li>Tháng tư vội vã qua thật mau</li></ol><p>Mà sao em chẳng thôi sầu vì anh</p><p>Cơn mưa cuối ướt chùm hoa giấy đỏ</p><p>Chút bâng khuâng, chút nhung nhớ chẳng trôi</p><p>Tháng tư đi chỉ còn lại mùa hoa</p><p>Yêu thương mùa đến… một thời mình yêu.</p><p>16. Tháng tư xa, anh có xa em không</p><p>Gió cứ rít cứ nồng nàn nỗi nhớ</p><p>Đêm sương lạnh, chân bước lối phố nhỏ</p><p>Bóng em mờ, đổ sau ngọn đèn vàng</p><p>Tháng tư quay lưng liệu phố có cô đơn</p><p>Gió có buồn, mây hiu hắt cùng ai</p><p>Con đường cũ có chia hai lối rẽ</p><p>Bằng lăng tím có nhuộm màu thương nhớ.</p><ol><li>Tháng tư đi, trời cũng vào giữa hạ</li></ol><p>Bình minh lên, ve ngân nga khúc nhạc</p><p>Chú gà nhỏ phơi mình trong nắng sớm</p><p>Cây mải mê, đùa vui cùng gió lạ.</p><ol><li>Tháng tư đi, cơn mưa thêm vội vã</li></ol><p>Lá xanh, mầm hoa, phe phẩy nhau gọi hè</p><p>Phố nhỏ lao xao lất phất mùi hương nồng</p><p>Nghiêng nghiêng nhành hoa, cô gái e ấp buồn.</p>', 'https://hidanz.com/wp-content/uploads/2022/04/stt-tam-biet-nam-cu-hay-nhat-al.jpg', 'active', 1, 'caption-tam-biet-thang-4-hay-nhat', '2023-02-01 04:23:30', '2023-02-01 04:23:30', NULL, NULL),
(53, 'cczczxc', '<p>zxczxcz</p>', '<p>czxczxczxc</p>', '', 'active', 1, 'cczczxc', '2023-02-02 03:57:00', '2023-02-02 03:57:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_post_cates`
--

CREATE TABLE `tbl_post_cates` (
  `post_cate_id` bigint(11) NOT NULL,
  `name` text DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `image` varchar(300) DEFAULT NULL,
  `parent_id` bigint(11) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `slug` varchar(500) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `created_by` bigint(11) DEFAULT NULL,
  `updated_by` bigint(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_post_cates`
--

INSERT INTO `tbl_post_cates` (`post_cate_id`, `name`, `description`, `image`, `parent_id`, `status`, `slug`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 'Tin tức', '123123123123', NULL, NULL, NULL, NULL, '2022-12-17 23:10:53', '2023-01-19 10:46:28', NULL, NULL),
(10, 'Tin nóng', 'abc', NULL, NULL, 'active', 'tin-nong', '2023-01-29 17:02:30', '2023-01-29 17:12:31', NULL, NULL),
(24, 'abx', 's123123', NULL, NULL, 'active', 'abx', '2023-01-31 07:21:08', '2023-01-31 11:05:06', NULL, NULL),
(29, 'abc', '1231231', NULL, NULL, 'active', 'abc', '2023-01-31 11:04:12', '2023-01-31 11:05:09', NULL, NULL),
(30, 'ádasd', 'ádsd', NULL, NULL, 'active', 'adasd', '2023-01-31 14:02:18', '2023-01-31 14:02:22', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_post_cate_metas`
--

CREATE TABLE `tbl_post_cate_metas` (
  `meta_id` bigint(20) NOT NULL,
  `post_cate_id` bigint(20) DEFAULT NULL,
  `meta_key` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_post_comments`
--

CREATE TABLE `tbl_post_comments` (
  `comment_id` bigint(20) NOT NULL,
  `post_id` bigint(20) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `fullname` varchar(200) NOT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `rate` int(11) NOT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_post_metas`
--

CREATE TABLE `tbl_post_metas` (
  `meta_id` bigint(20) NOT NULL,
  `post_id` bigint(20) DEFAULT NULL,
  `meta_key` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_products`
--

CREATE TABLE `tbl_products` (
  `product_id` bigint(20) NOT NULL,
  `name` varchar(200) NOT NULL,
  `sku` varchar(200) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `sale_price` double DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `slug` varchar(500) DEFAULT NULL,
  `product_cate_id` bigint(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_products`
--

INSERT INTO `tbl_products` (`product_id`, `name`, `sku`, `price`, `sale_price`, `content`, `image`, `description`, `status`, `slug`, `product_cate_id`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(13, 'Tee Hidanz Smile – Darkgreen', 'qpd1', 340000, 200000, '', 'https://hidanz.com/wp-content/uploads/2022/08/Dm7-xanh-600x600.jpg', '<p>LƯU Ý</p><p><br></p><p>– Màu sắc hiển thị trong hình ảnh có thể không giống 100% so với sản phẩm thực tế, do quá trình chiếu sáng trong hình ảnh hoặc chất lượng màn hình của thiết bị được sử dụng để xem hình ảnh.</p><p><br></p><p>– Đối với mua hàng trực tuyến, vui lòng xem xét khả năng chịu sự khác biệt về màu sắc và kích thước của sản phẩm đặt hàng. Nếu sau khi nhận hàng mà có sự chênh lệch được coi là quá xa và không thể chấp nhận được, vui lòng đăng ký đổi hàng thông qua Dịch vụ khách hàng của chúng tôi.</p><p><br></p><p>CHÍNH SÁCH ĐỔI TRẢ HÀNG</p><p><br></p><p>– Miễn phí đổi hàng cho khách mua ở Hidanz trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, nhầm size.</p><p><br></p><p>– Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay cho Hidanz trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết khi không có video unbox.</p><p><br></p><p>– Sản phẩm đổi trong thời gian 5 ngày kể từ ngày nhận hàng</p><p><br></p><p>– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.</p>', 'acctive', NULL, 9, '2022-12-11 17:02:49', '2023-02-01 03:41:46', NULL, NULL),
(14, 'Tee Hidanz Smile – Cream', 'pd2', 340000, 200000, '', 'https://hidanz.com/wp-content/uploads/2022/08/Dm7-be-600x600.jpg', '<p>LƯU Ý</p><p><br></p><p>– Màu sắc hiển thị trong hình ảnh có thể không giống 100% so với sản phẩm thực tế, do quá trình chiếu sáng trong hình ảnh hoặc chất lượng màn hình của thiết bị được sử dụng để xem hình ảnh.</p><p><br></p><p>– Đối với mua hàng trực tuyến, vui lòng xem xét khả năng chịu sự khác biệt về màu sắc và kích thước của sản phẩm đặt hàng. Nếu sau khi nhận hàng mà có sự chênh lệch được coi là quá xa và không thể chấp nhận được, vui lòng đăng ký đổi hàng thông qua Dịch vụ khách hàng của chúng tôi.</p><p><br></p><p>CHÍNH SÁCH ĐỔI TRẢ HÀNG</p><p><br></p><p>– Miễn phí đổi hàng cho khách mua ở Hidanz trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, nhầm size.</p><p><br></p><p>– Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay cho Hidanz trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết khi không có video unbox.</p><p><br></p><p>– Sản phẩm đổi trong thời gian 5 ngày kể từ ngày nhận hàng</p><p><br></p><p>– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.</p>', 'acctive', NULL, 9, '2022-12-11 17:02:49', '2023-02-01 03:40:47', NULL, NULL),
(15, 'Tee Generation – Darkgreen', 'pd2', 340000, 200000, '', 'https://hidanz.com/wp-content/uploads/2022/08/Dm8-xanh-600x600.jpg', '<p>LƯU Ý</p><p><br></p><p>– Màu sắc hiển thị trong hình ảnh có thể không giống 100% so với sản phẩm thực tế, do quá trình chiếu sáng trong hình ảnh hoặc chất lượng màn hình của thiết bị được sử dụng để xem hình ảnh.</p><p><br></p><p>– Đối với mua hàng trực tuyến, vui lòng xem xét khả năng chịu sự khác biệt về màu sắc và kích thước của sản phẩm đặt hàng. Nếu sau khi nhận hàng mà có sự chênh lệch được coi là quá xa và không thể chấp nhận được, vui lòng đăng ký đổi hàng thông qua Dịch vụ khách hàng của chúng tôi.</p><p><br></p><p>CHÍNH SÁCH ĐỔI TRẢ HÀNG</p><p><br></p><p>– Miễn phí đổi hàng cho khách mua ở Hidanz trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, nhầm size.</p><p><br></p><p>– Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay cho Hidanz trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết khi không có video unbox.</p><p><br></p><p>– Sản phẩm đổi trong thời gian 5 ngày kể từ ngày nhận hàng</p><p><br></p><p>– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.</p>', 'acctive', NULL, 9, '2022-12-11 17:02:49', '2023-02-01 03:40:11', NULL, NULL),
(16, 'Tee Generation – Cream', 'pd2', 340000, 200000, '', 'https://hidanz.com/wp-content/uploads/2022/08/Dm8-be-600x600.jpg', '<p><strong>LƯU Ý</strong></p><p>– Màu sắc hiển thị trong hình ảnh có thể không giống 100% so với sản phẩm thực tế, do quá trình chiếu sáng trong hình ảnh hoặc chất lượng màn hình của thiết bị được sử dụng để xem hình ảnh.</p><p>– Đối với mua hàng trực tuyến, vui lòng xem xét khả năng chịu sự khác biệt về màu sắc và kích thước của sản phẩm đặt hàng. Nếu sau khi nhận hàng mà có sự chênh lệch được coi là quá xa và không thể chấp nhận được, vui lòng đăng ký đổi hàng thông qua Dịch vụ khách hàng của chúng tôi.</p><p><strong>CHÍNH SÁCH ĐỔI TRẢ HÀNG</strong></p><p>– Miễn phí đổi hàng cho khách mua ở Hidanz trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, nhầm size.</p><p>– Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay cho Hidanz trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết khi không có video unbox.</p><p>– Sản phẩm đổi trong thời gian 5 ngày kể từ ngày nhận hàng</p><p>– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.</p>', 'acctive', NULL, 9, '2022-12-11 17:02:49', '2023-02-01 03:35:57', NULL, NULL),
(17, 'Tee Generation – Brown', 'pd5', 340000, 200000, '', 'https://hidanz.com/wp-content/uploads/2022/08/Dm8-nau-2-600x600.jpg', '<p><strong>LƯU Ý</strong></p><p>– Màu sắc hiển thị trong hình ảnh có thể không giống 100% so với sản phẩm thực tế, do quá trình chiếu sáng trong hình ảnh hoặc chất lượng màn hình của thiết bị được sử dụng để xem hình ảnh.</p><p>– Đối với mua hàng trực tuyến, vui lòng xem xét khả năng chịu sự khác biệt về màu sắc và kích thước của sản phẩm đặt hàng. Nếu sau khi nhận hàng mà có sự chênh lệch được coi là quá xa và không thể chấp nhận được, vui lòng đăng ký đổi hàng thông qua Dịch vụ khách hàng của chúng tôi.</p><p><strong>CHÍNH SÁCH ĐỔI TRẢ HÀNG</strong></p><p>– Miễn phí đổi hàng cho khách mua ở Hidanz trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, nhầm size.</p><p>– Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay cho Hidanz trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết khi không có video unbox.</p><p>– Sản phẩm đổi trong thời gian 5 ngày kể từ ngày nhận hàng</p><p>– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.</p>', 'acctive', NULL, 9, '2022-12-11 17:02:49', '2023-02-01 03:35:51', NULL, NULL),
(18, 'Tee Generation – Black', 'pd6', 320000, 200000, '', 'https://hidanz.com/wp-content/uploads/2022/08/Dm8-den-2.jpg', '<p><strong>LƯU Ý</strong></p><p>– Màu sắc hiển thị trong hình ảnh có thể không giống 100% so với sản phẩm thực tế, do quá trình chiếu sáng trong hình ảnh hoặc chất lượng màn hình của thiết bị được sử dụng để xem hình ảnh.</p><p>– Đối với mua hàng trực tuyến, vui lòng xem xét khả năng chịu sự khác biệt về màu sắc và kích thước của sản phẩm đặt hàng. Nếu sau khi nhận hàng mà có sự chênh lệch được coi là quá xa và không thể chấp nhận được, vui lòng đăng ký đổi hàng thông qua Dịch vụ khách hàng của chúng tôi.</p><p><strong>CHÍNH SÁCH ĐỔI TRẢ HÀNG</strong></p><p>– Miễn phí đổi hàng cho khách mua ở Hidanz trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, nhầm size.</p><p>– Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay cho Hidanz trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết khi không có video unbox.</p><p>– Sản phẩm đổi trong thời gian 5 ngày kể từ ngày nhận hàng</p><p>– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.</p>', 'active', NULL, 1, '2022-12-11 17:02:49', '2023-02-01 03:35:46', NULL, NULL),
(22, 'Tee I’m Crocodile – Brown', NULL, 340000, 200000, '', 'https://hidanz.com/wp-content/uploads/2022/08/Dm5-nau-600x600.jpg', '<p>LƯU Ý</p><p><br></p><p>– Màu sắc hiển thị trong hình ảnh có thể không giống 100% so với sản phẩm thực tế, do quá trình chiếu sáng trong hình ảnh hoặc chất lượng màn hình của thiết bị được sử dụng để xem hình ảnh.</p><p><br></p><p>– Đối với mua hàng trực tuyến, vui lòng xem xét khả năng chịu sự khác biệt về màu sắc và kích thước của sản phẩm đặt hàng. Nếu sau khi nhận hàng mà có sự chênh lệch được coi là quá xa và không thể chấp nhận được, vui lòng đăng ký đổi hàng thông qua Dịch vụ khách hàng của chúng tôi.</p><p><br></p><p>CHÍNH SÁCH ĐỔI TRẢ HÀNG</p><p><br></p><p>– Miễn phí đổi hàng cho khách mua ở Hidanz trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, nhầm size.</p><p><br></p><p>– Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay cho Hidanz trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết khi không có video unbox.</p><p><br></p><p>– Sản phẩm đổi trong thời gian 5 ngày kể từ ngày nhận hàng</p><p><br></p><p>– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.</p>', 'active', 'tee-im-crocodile-brown', 9, '2023-02-01 03:42:56', '2023-02-01 03:42:56', NULL, NULL),
(23, 'Tee I’m Crocodile – Cream', NULL, 340000, 200000, '', 'https://hidanz.com/wp-content/uploads/2022/08/Dm5-be-600x600.jpg', '<p>LƯU Ý</p><p><br></p><p>– Màu sắc hiển thị trong hình ảnh có thể không giống 100% so với sản phẩm thực tế, do quá trình chiếu sáng trong hình ảnh hoặc chất lượng màn hình của thiết bị được sử dụng để xem hình ảnh.</p><p><br></p><p>– Đối với mua hàng trực tuyến, vui lòng xem xét khả năng chịu sự khác biệt về màu sắc và kích thước của sản phẩm đặt hàng. Nếu sau khi nhận hàng mà có sự chênh lệch được coi là quá xa và không thể chấp nhận được, vui lòng đăng ký đổi hàng thông qua Dịch vụ khách hàng của chúng tôi.</p><p><br></p><p>CHÍNH SÁCH ĐỔI TRẢ HÀNG</p><p><br></p><p>– Miễn phí đổi hàng cho khách mua ở Hidanz trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, nhầm size.</p><p><br></p><p>– Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay cho Hidanz trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết khi không có video unbox.</p><p><br></p><p>– Sản phẩm đổi trong thời gian 5 ngày kể từ ngày nhận hàng</p><p><br></p><p>– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.</p>', 'active', 'tee-im-crocodile-cream', 9, '2023-02-01 03:43:33', '2023-02-01 03:43:33', NULL, NULL),
(24, 'Tee I’m Crocodile – Darkgreen', NULL, 340000, 200000, '', 'https://hidanz.com/wp-content/uploads/2022/08/Dm5-xanh-600x600.jpg', '<p>LƯU Ý</p><p><br></p><p>– Màu sắc hiển thị trong hình ảnh có thể không giống 100% so với sản phẩm thực tế, do quá trình chiếu sáng trong hình ảnh hoặc chất lượng màn hình của thiết bị được sử dụng để xem hình ảnh.</p><p><br></p><p>– Đối với mua hàng trực tuyến, vui lòng xem xét khả năng chịu sự khác biệt về màu sắc và kích thước của sản phẩm đặt hàng. Nếu sau khi nhận hàng mà có sự chênh lệch được coi là quá xa và không thể chấp nhận được, vui lòng đăng ký đổi hàng thông qua Dịch vụ khách hàng của chúng tôi.</p><p><br></p><p>CHÍNH SÁCH ĐỔI TRẢ HÀNG</p><p><br></p><p>– Miễn phí đổi hàng cho khách mua ở Hidanz trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, nhầm size.</p><p><br></p><p>– Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay cho Hidanz trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết khi không có video unbox.</p><p><br></p><p>– Sản phẩm đổi trong thời gian 5 ngày kể từ ngày nhận hàng</p><p><br></p><p>– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.</p>', 'active', 'tee-im-crocodile-darkgreen', 9, '2023-02-01 03:43:49', '2023-02-01 03:43:49', NULL, NULL),
(25, 'Tee Meomeo – Black', NULL, 340000, 200000, '', 'https://hidanz.com/wp-content/uploads/2022/09/dm10-den-600x600.jpg', '<p>LƯU Ý</p><p><br></p><p>– Màu sắc hiển thị trong hình ảnh có thể không giống 100% so với sản phẩm thực tế, do quá trình chiếu sáng trong hình ảnh hoặc chất lượng màn hình của thiết bị được sử dụng để xem hình ảnh.</p><p><br></p><p>– Đối với mua hàng trực tuyến, vui lòng xem xét khả năng chịu sự khác biệt về màu sắc và kích thước của sản phẩm đặt hàng. Nếu sau khi nhận hàng mà có sự chênh lệch được coi là quá xa và không thể chấp nhận được, vui lòng đăng ký đổi hàng thông qua Dịch vụ khách hàng của chúng tôi.</p><p><br></p><p>CHÍNH SÁCH ĐỔI TRẢ HÀNG</p><p><br></p><p>– Miễn phí đổi hàng cho khách mua ở Hidanz trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, nhầm size.</p><p><br></p><p>– Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay cho Hidanz trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết khi không có video unbox.</p><p><br></p><p>– Sản phẩm đổi trong thời gian 5 ngày kể từ ngày nhận hàng</p><p><br></p><p>– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.</p>', 'active', 'tee-meomeo-black', 9, '2023-02-01 03:44:07', '2023-02-01 03:44:07', NULL, NULL),
(26, 'Tee Meomeo – White', NULL, 340000, 240000, '', 'https://hidanz.com/wp-content/uploads/2022/09/dm10-trang-600x600.jpg', '<p>LƯU Ý</p><p><br></p><p>– Màu sắc hiển thị trong hình ảnh có thể không giống 100% so với sản phẩm thực tế, do quá trình chiếu sáng trong hình ảnh hoặc chất lượng màn hình của thiết bị được sử dụng để xem hình ảnh.</p><p><br></p><p>– Đối với mua hàng trực tuyến, vui lòng xem xét khả năng chịu sự khác biệt về màu sắc và kích thước của sản phẩm đặt hàng. Nếu sau khi nhận hàng mà có sự chênh lệch được coi là quá xa và không thể chấp nhận được, vui lòng đăng ký đổi hàng thông qua Dịch vụ khách hàng của chúng tôi.</p><p><br></p><p>CHÍNH SÁCH ĐỔI TRẢ HÀNG</p><p><br></p><p>– Miễn phí đổi hàng cho khách mua ở Hidanz trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, nhầm size.</p><p><br></p><p>– Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay cho Hidanz trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết khi không có video unbox.</p><p><br></p><p>– Sản phẩm đổi trong thời gian 5 ngày kể từ ngày nhận hàng</p><p><br></p><p>– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.</p>', 'active', 'tee-meomeo-white', 9, '2023-02-01 03:44:38', '2023-02-01 03:44:38', NULL, NULL),
(27, 'Tee Peace – Brown', NULL, 340000, 240000, '', 'https://hidanz.com/wp-content/uploads/2022/08/Dm1-nau-600x600.jpg', '<p>LƯU Ý</p><p><br></p><p>– Màu sắc hiển thị trong hình ảnh có thể không giống 100% so với sản phẩm thực tế, do quá trình chiếu sáng trong hình ảnh hoặc chất lượng màn hình của thiết bị được sử dụng để xem hình ảnh.</p><p><br></p><p>– Đối với mua hàng trực tuyến, vui lòng xem xét khả năng chịu sự khác biệt về màu sắc và kích thước của sản phẩm đặt hàng. Nếu sau khi nhận hàng mà có sự chênh lệch được coi là quá xa và không thể chấp nhận được, vui lòng đăng ký đổi hàng thông qua Dịch vụ khách hàng của chúng tôi.</p><p><br></p><p>CHÍNH SÁCH ĐỔI TRẢ HÀNG</p><p><br></p><p>– Miễn phí đổi hàng cho khách mua ở Hidanz trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, nhầm size.</p><p><br></p><p>– Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay cho Hidanz trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết khi không có video unbox.</p><p><br></p><p>– Sản phẩm đổi trong thời gian 5 ngày kể từ ngày nhận hàng</p><p><br></p><p>– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.</p>', 'active', 'tee-peace-brown', 9, '2023-02-01 03:44:54', '2023-02-01 03:44:54', NULL, NULL),
(28, 'Tee Peace – Cream', NULL, 340000, 170000, '<p>content product</p>', 'https://hidanz.com/wp-content/uploads/2022/08/Dm1-be-600x600.jpg', '<p>LƯU Ý</p><p><br></p><p>– Màu sắc hiển thị trong hình ảnh có thể không giống 100% so với sản phẩm thực tế, do quá trình chiếu sáng trong hình ảnh hoặc chất lượng màn hình của thiết bị được sử dụng để xem hình ảnh.</p><p><br></p><p>– Đối với mua hàng trực tuyến, vui lòng xem xét khả năng chịu sự khác biệt về màu sắc và kích thước của sản phẩm đặt hàng. Nếu sau khi nhận hàng mà có sự chênh lệch được coi là quá xa và không thể chấp nhận được, vui lòng đăng ký đổi hàng thông qua Dịch vụ khách hàng của chúng tôi.</p><p><br></p><p>CHÍNH SÁCH ĐỔI TRẢ HÀNG</p><p><br></p><p>– Miễn phí đổi hàng cho khách mua ở Hidanz trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, nhầm size.</p><p><br></p><p>– Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay cho Hidanz trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết khi không có video unbox.</p><p><br></p><p>– Sản phẩm đổi trong thời gian 5 ngày kể từ ngày nhận hàng</p><p><br></p><p>– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.</p>', 'acctive', 'tee-peace-cream', 9, '2023-02-01 03:45:40', '2023-02-01 03:45:40', NULL, NULL),
(29, 'Tee Peace – Darkgreen', NULL, 340000, 170000, '<p>content product</p>', 'https://hidanz.com/wp-content/uploads/2022/08/Dm1-xanh-600x600.jpg', '<p>LƯU Ý</p><p><br></p><p>– Màu sắc hiển thị trong hình ảnh có thể không giống 100% so với sản phẩm thực tế, do quá trình chiếu sáng trong hình ảnh hoặc chất lượng màn hình của thiết bị được sử dụng để xem hình ảnh.</p><p><br></p><p>– Đối với mua hàng trực tuyến, vui lòng xem xét khả năng chịu sự khác biệt về màu sắc và kích thước của sản phẩm đặt hàng. Nếu sau khi nhận hàng mà có sự chênh lệch được coi là quá xa và không thể chấp nhận được, vui lòng đăng ký đổi hàng thông qua Dịch vụ khách hàng của chúng tôi.</p><p><br></p><p>CHÍNH SÁCH ĐỔI TRẢ HÀNG</p><p><br></p><p>– Miễn phí đổi hàng cho khách mua ở Hidanz trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, nhầm size.</p><p><br></p><p>– Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay cho Hidanz trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết khi không có video unbox.</p><p><br></p><p>– Sản phẩm đổi trong thời gian 5 ngày kể từ ngày nhận hàng</p><p><br></p><p>– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.</p>', 'acctive', 'tee-peace-darkgreen', 9, '2023-02-01 03:45:58', '2023-02-01 03:45:58', NULL, NULL),
(30, 'Tee Peace – White', NULL, 340000, 170000, '<p>content product</p>', 'https://hidanz.com/wp-content/uploads/2022/08/DM1-trang-600x600.jpg', '<p>LƯU Ý</p><p><br></p><p>– Màu sắc hiển thị trong hình ảnh có thể không giống 100% so với sản phẩm thực tế, do quá trình chiếu sáng trong hình ảnh hoặc chất lượng màn hình của thiết bị được sử dụng để xem hình ảnh.</p><p><br></p><p>– Đối với mua hàng trực tuyến, vui lòng xem xét khả năng chịu sự khác biệt về màu sắc và kích thước của sản phẩm đặt hàng. Nếu sau khi nhận hàng mà có sự chênh lệch được coi là quá xa và không thể chấp nhận được, vui lòng đăng ký đổi hàng thông qua Dịch vụ khách hàng của chúng tôi.</p><p><br></p><p>CHÍNH SÁCH ĐỔI TRẢ HÀNG</p><p><br></p><p>– Miễn phí đổi hàng cho khách mua ở Hidanz trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, nhầm size.</p><p><br></p><p>– Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay cho Hidanz trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết khi không có video unbox.</p><p><br></p><p>– Sản phẩm đổi trong thời gian 5 ngày kể từ ngày nhận hàng</p><p><br></p><p>– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.</p>', 'acctive', 'tee-peace-white', 9, '2023-02-01 03:46:13', '2023-02-01 03:46:13', NULL, NULL),
(31, 'QUẦN JEAN NAM TRƠN FORM SLIM', NULL, 580000, NULL, '<p>content product</p>', 'https://hidanz.com/wp-content/uploads/2022/08/Dm7-xanh-600x600.jpg', '<p class=\"ql-align-justify\">Qua nhiều năm phát triển, quần jean hay còn gọi là quần bò đã trở thành một món đồ rất thông dụng trong tủ quần áo của mỗi người. Bất kể ở đâu, bất kể tầng lớp hay nền văn hóa nào chúng ta đều có thể bắt gặp những chiếc quần này. Bởi quần jean luôn mang lại sự trẻ trung, năng động và tiện dụng cho người mặc.</p><p class=\"ql-align-justify\">Quần Jean Nam Trơn Form Slim - 10F22DPA004&nbsp;được may từ chất liệu dày dặn, có độ bên cao và giữ form tốt. Quần có thiết kế form ôm vừa chân nhưng vẫn có độ thoải mái khi cử động. Đây là một item đa năng có thể mặc trong nhiều hoàn cảnh khác nhau. Có tông màu quần jean cơ bản dễ mix cùng nhiều trang phục khác nhau cho ra đa dạng phong cách.</p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/CL-32-Denim-min.png\"></p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/hdbq-quan-jean_2.png\"></p><p><br></p>', 'acctive', 'quan-jean-nam-tron-form-slim', 1, '2023-02-01 03:48:15', '2023-02-01 03:48:15', NULL, NULL),
(32, 'QUẦN JEAN NAM TRƠN FORM SLIM', NULL, 580000, NULL, '<p>content product</p>', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa004_brown_2___1.jpg', '<p class=\"ql-align-justify\">Qua nhiều năm phát triển, quần jean hay còn gọi là quần bò đã trở thành một món đồ rất thông dụng trong tủ quần áo của mỗi người. Bất kể ở đâu, bất kể tầng lớp hay nền văn hóa nào chúng ta đều có thể bắt gặp những chiếc quần này. Bởi quần jean luôn mang lại sự trẻ trung, năng động và tiện dụng cho người mặc.</p><p class=\"ql-align-justify\">Quần Jean Nam Trơn Form Slim - 10F22DPA004&nbsp;được may từ chất liệu dày dặn, có độ bên cao và giữ form tốt. Quần có thiết kế form ôm vừa chân nhưng vẫn có độ thoải mái khi cử động. Đây là một item đa năng có thể mặc trong nhiều hoàn cảnh khác nhau. Có tông màu quần jean cơ bản dễ mix cùng nhiều trang phục khác nhau cho ra đa dạng phong cách.</p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/CL-32-Denim-min.png\"></p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/hdbq-quan-jean_2.png\"></p><p><br></p>', 'acctive', 'quan-jean-nam-tron-form-slim', 1, '2023-02-01 03:48:34', '2023-02-01 03:48:34', NULL, NULL),
(33, 'QUẦN JEAN NAM ỐNG ÔM TRƠN FORM SLIM CROP', NULL, 580000, NULL, '<p>content product</p>', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa041_m_indigo_thumbnail__1.jpg', '<p class=\"ql-align-justify\">Qua nhiều năm phát triển, quần jean hay còn gọi là quần bò đã trở thành một món đồ rất thông dụng trong tủ quần áo của mỗi người. Bất kể ở đâu, bất kể tầng lớp hay nền văn hóa nào chúng ta đều có thể bắt gặp những chiếc quần này. Bởi quần jean luôn mang lại sự trẻ trung, năng động và tiện dụng cho người mặc.</p><p class=\"ql-align-justify\">Quần Jean Nam Trơn Form Slim - 10F22DPA004&nbsp;được may từ chất liệu dày dặn, có độ bên cao và giữ form tốt. Quần có thiết kế form ôm vừa chân nhưng vẫn có độ thoải mái khi cử động. Đây là một item đa năng có thể mặc trong nhiều hoàn cảnh khác nhau. Có tông màu quần jean cơ bản dễ mix cùng nhiều trang phục khác nhau cho ra đa dạng phong cách.</p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/CL-32-Denim-min.png\"></p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/hdbq-quan-jean_2.png\"></p><p><br></p>', 'acctive', 'quan-jean-nam-ong-om-tron-form-slim-crop', 1, '2023-02-01 03:48:59', '2023-02-01 03:48:59', NULL, NULL),
(34, 'QUẦN JEAN NAM ỐNG RỘNG TRƠN FORM STRAIGHT CROP', NULL, 580000, NULL, '<p>content product</p>', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_41__1.jpg', '<p class=\"ql-align-justify\">Qua nhiều năm phát triển, quần jean hay còn gọi là quần bò đã trở thành một món đồ rất thông dụng trong tủ quần áo của mỗi người. Bất kể ở đâu, bất kể tầng lớp hay nền văn hóa nào chúng ta đều có thể bắt gặp những chiếc quần này. Bởi quần jean luôn mang lại sự trẻ trung, năng động và tiện dụng cho người mặc.</p><p class=\"ql-align-justify\">Quần Jean Nam Trơn Form Slim - 10F22DPA004&nbsp;được may từ chất liệu dày dặn, có độ bên cao và giữ form tốt. Quần có thiết kế form ôm vừa chân nhưng vẫn có độ thoải mái khi cử động. Đây là một item đa năng có thể mặc trong nhiều hoàn cảnh khác nhau. Có tông màu quần jean cơ bản dễ mix cùng nhiều trang phục khác nhau cho ra đa dạng phong cách.</p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/CL-32-Denim-min.png\"></p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/hdbq-quan-jean_2.png\"></p><p><br></p>', 'acctive', 'quan-jean-nam-ong-rong-tron-form-straight-crop', 1, '2023-02-01 03:49:19', '2023-02-01 03:49:19', NULL, NULL),
(35, 'QUẦN JEAN NAM TRƠN FORM STRAIGHT', NULL, 580000, NULL, '<p>content product</p>', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_739__1.jpg', '<p class=\"ql-align-justify\">Qua nhiều năm phát triển, quần jean hay còn gọi là quần bò đã trở thành một món đồ rất thông dụng trong tủ quần áo của mỗi người. Bất kể ở đâu, bất kể tầng lớp hay nền văn hóa nào chúng ta đều có thể bắt gặp những chiếc quần này. Bởi quần jean luôn mang lại sự trẻ trung, năng động và tiện dụng cho người mặc.</p><p class=\"ql-align-justify\">Quần Jean Nam Trơn Form Slim - 10F22DPA004&nbsp;được may từ chất liệu dày dặn, có độ bên cao và giữ form tốt. Quần có thiết kế form ôm vừa chân nhưng vẫn có độ thoải mái khi cử động. Đây là một item đa năng có thể mặc trong nhiều hoàn cảnh khác nhau. Có tông màu quần jean cơ bản dễ mix cùng nhiều trang phục khác nhau cho ra đa dạng phong cách.</p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/CL-32-Denim-min.png\"></p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/hdbq-quan-jean_2.png\"></p><p><br></p>', 'acctive', 'quan-jean-nam-tron-form-straight', 1, '2023-02-01 03:49:41', '2023-02-01 03:49:41', NULL, NULL),
(36, 'Chuyển đến phần đầu của thư viện hình ảnh QUẦN JOGGER NAM VISCOSE PHỐI TAPE', NULL, 449000, NULL, '<p>content product</p>', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pjo003_green_2__1.jpg', '<p class=\"ql-align-justify\">Qua nhiều năm phát triển, quần jean hay còn gọi là quần bò đã trở thành một món đồ rất thông dụng trong tủ quần áo của mỗi người. Bất kể ở đâu, bất kể tầng lớp hay nền văn hóa nào chúng ta đều có thể bắt gặp những chiếc quần này. Bởi quần jean luôn mang lại sự trẻ trung, năng động và tiện dụng cho người mặc.</p><p class=\"ql-align-justify\">Quần Jean Nam Trơn Form Slim - 10F22DPA004&nbsp;được may từ chất liệu dày dặn, có độ bên cao và giữ form tốt. Quần có thiết kế form ôm vừa chân nhưng vẫn có độ thoải mái khi cử động. Đây là một item đa năng có thể mặc trong nhiều hoàn cảnh khác nhau. Có tông màu quần jean cơ bản dễ mix cùng nhiều trang phục khác nhau cho ra đa dạng phong cách.</p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/CL-32-Denim-min.png\"></p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/hdbq-quan-jean_2.png\"></p><p><br></p>', 'acctive', 'chuyen-den-phan-dau-cua-thu-vien-hinh-anh-quan-jogger-nam-viscose-phoi-tape', 1, '2023-02-01 03:50:07', '2023-02-01 03:50:07', NULL, NULL),
(37, 'QUẦN JEAN NAM ỐNG RỘNG FORM STRAIGHT CROP', NULL, 650000, NULL, '<p>content product</p>', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22dpa051_m_indigo_1__1.jpg', '<p class=\"ql-align-justify\">Qua nhiều năm phát triển, quần jean hay còn gọi là quần bò đã trở thành một món đồ rất thông dụng trong tủ quần áo của mỗi người. Bất kể ở đâu, bất kể tầng lớp hay nền văn hóa nào chúng ta đều có thể bắt gặp những chiếc quần này. Bởi quần jean luôn mang lại sự trẻ trung, năng động và tiện dụng cho người mặc.</p><p class=\"ql-align-justify\">Quần Jean Nam Trơn Form Slim - 10F22DPA004&nbsp;được may từ chất liệu dày dặn, có độ bên cao và giữ form tốt. Quần có thiết kế form ôm vừa chân nhưng vẫn có độ thoải mái khi cử động. Đây là một item đa năng có thể mặc trong nhiều hoàn cảnh khác nhau. Có tông màu quần jean cơ bản dễ mix cùng nhiều trang phục khác nhau cho ra đa dạng phong cách.</p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/CL-32-Denim-min.png\"></p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/hdbq-quan-jean_2.png\"></p><p><br></p>', 'acctive', 'quan-jean-nam-ong-rong-form-straight-crop', 1, '2023-02-01 03:50:45', '2023-02-01 03:50:45', NULL, NULL),
(38, 'QUẦN DÀI KAKI NAM DOBBY FORM SLIM', NULL, 550000, NULL, '<p>content product</p>', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pca005_covert_green_3__1.jpg', '<p class=\"ql-align-justify\">Qua nhiều năm phát triển, quần jean hay còn gọi là quần bò đã trở thành một món đồ rất thông dụng trong tủ quần áo của mỗi người. Bất kể ở đâu, bất kể tầng lớp hay nền văn hóa nào chúng ta đều có thể bắt gặp những chiếc quần này. Bởi quần jean luôn mang lại sự trẻ trung, năng động và tiện dụng cho người mặc.</p><p class=\"ql-align-justify\">Quần Jean Nam Trơn Form Slim - 10F22DPA004&nbsp;được may từ chất liệu dày dặn, có độ bên cao và giữ form tốt. Quần có thiết kế form ôm vừa chân nhưng vẫn có độ thoải mái khi cử động. Đây là một item đa năng có thể mặc trong nhiều hoàn cảnh khác nhau. Có tông màu quần jean cơ bản dễ mix cùng nhiều trang phục khác nhau cho ra đa dạng phong cách.</p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/CL-32-Denim-min.png\"></p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/hdbq-quan-jean_2.png\"></p><p><br></p>', 'acctive', 'quan-dai-kaki-nam-dobby-form-slim', 1, '2023-02-01 03:51:22', '2023-02-01 03:51:22', NULL, NULL),
(39, 'QUẦN VẢI NAM LƯNG THUN FORM SLIM CROP', NULL, 529000, NULL, '<p>content product</p>', 'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/1/0/10f22pfo006_petrified_oak_2__1.jpg', '<p class=\"ql-align-justify\">Qua nhiều năm phát triển, quần jean hay còn gọi là quần bò đã trở thành một món đồ rất thông dụng trong tủ quần áo của mỗi người. Bất kể ở đâu, bất kể tầng lớp hay nền văn hóa nào chúng ta đều có thể bắt gặp những chiếc quần này. Bởi quần jean luôn mang lại sự trẻ trung, năng động và tiện dụng cho người mặc.</p><p class=\"ql-align-justify\">Quần Jean Nam Trơn Form Slim - 10F22DPA004&nbsp;được may từ chất liệu dày dặn, có độ bên cao và giữ form tốt. Quần có thiết kế form ôm vừa chân nhưng vẫn có độ thoải mái khi cử động. Đây là một item đa năng có thể mặc trong nhiều hoàn cảnh khác nhau. Có tông màu quần jean cơ bản dễ mix cùng nhiều trang phục khác nhau cho ra đa dạng phong cách.</p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/CL-32-Denim-min.png\"></p><p class=\"ql-align-justify\"><img src=\"https://routine.vn/media/wysiwyg/content/hdbq-quan-jean_2.png\"></p><p><br></p>', 'acctive', 'quan-vai-nam-lung-thun-form-slim-crop', 1, '2023-02-01 03:51:54', '2023-02-01 03:51:54', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_product_cates`
--

CREATE TABLE `tbl_product_cates` (
  `product_cate_id` bigint(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` varchar(300) DEFAULT NULL,
  `image` varchar(300) DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `slug` varchar(500) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_product_cates`
--

INSERT INTO `tbl_product_cates` (`product_cate_id`, `name`, `description`, `image`, `parent_id`, `slug`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 'Quần', '123', NULL, NULL, NULL, '', '2022-12-23 07:26:44', '2023-01-26 13:23:12', NULL, NULL),
(6, 'Áo váy', '123123', NULL, NULL, NULL, NULL, '2023-01-26 13:26:02', '2023-01-29 16:53:53', NULL, NULL),
(9, 'Áo', '123', NULL, NULL, 'ao', NULL, '2023-01-29 13:16:59', '2023-01-29 16:54:58', NULL, NULL),
(11, 'Phụ kiện', '', NULL, NULL, 'phu-kien', NULL, '2023-01-29 16:45:20', '2023-01-29 16:45:20', NULL, NULL),
(15, 'Áo công sở', '', NULL, NULL, 'ao-cong-so', NULL, '2023-01-29 16:56:21', '2023-01-29 16:56:21', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_product_cate_metas`
--

CREATE TABLE `tbl_product_cate_metas` (
  `meta_id` bigint(20) NOT NULL,
  `product_cate_id` bigint(20) DEFAULT NULL,
  `meta_key` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_product_comments`
--

CREATE TABLE `tbl_product_comments` (
  `comment_id` bigint(20) NOT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `rate` int(11) NOT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_product_metas`
--

CREATE TABLE `tbl_product_metas` (
  `meta_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `meta_key` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_sliders`
--

CREATE TABLE `tbl_sliders` (
  `slider_id` bigint(20) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `slider_cate_id` bigint(20) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_slider_cates`
--

CREATE TABLE `tbl_slider_cates` (
  `slider_cate_id` bigint(20) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `slug` varchar(500) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_users`
--

CREATE TABLE `tbl_users` (
  `user_id` bigint(11) NOT NULL,
  `email` varchar(300) DEFAULT NULL,
  `username` varchar(100) NOT NULL,
  `fullname` varchar(100) DEFAULT NULL,
  `gender` tinyint(4) DEFAULT NULL,
  `password` varchar(200) NOT NULL,
  `address` varchar(300) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `user_cate_id` bigint(11) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `token` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(11) DEFAULT NULL,
  `updated_by` bigint(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `email`, `username`, `fullname`, `gender`, `password`, `address`, `phone`, `user_cate_id`, `status`, `token`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(49, 'luonghop.lc@gmail.com', 'hoplb2', NULL, NULL, '$2b$10$n0wM/k45BogX4CCZ8XgZ2OFfOm8oHJ3yfhixBQPoc8DrklTkTAgaK', NULL, NULL, 1, 'active', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0OSwiZW1haWwiOiJsdW9uZ2hvcC5sY0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImhvcGxiMiIsImZ1bGxuYW1lIjpudWxsLCJzdGF0dXMiOiJhY3RpdmUiLCJ1c2VyX2NhdGVfaWQiOjEsImlhdCI6MTY3NTUxNzQwMywiZXhwIjoxNjc1NjAzODAzfQ.bLLh7bIVsm1ItiY24gTiLUMVsQjXdJLR4BTbhhZ6X_4', '2023-01-27 04:41:40', '2023-02-04 13:30:03', NULL, NULL),
(51, 'buitrung83.dev@gmail.com', 'admin1', 'Bùi Quang Trung', 1, '$2b$10$tXJK9ZPd1Wg7n0WkNvcHr.A6o9LV0gjJqieHMcR6fyUXVkOAP8p8m', 'lào cai', '09888888', 1, 'active', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1MSwiZW1haWwiOiJidWl0cnVuZzgzLmRldkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluMSIsImZ1bGxuYW1lIjoiQsO5aSBRdWFuZyBUcnVuZyIsInN0YXR1cyI6ImFjdGl2ZSIsInVzZXJfY2F0ZV9pZCI6MSwiaWF0IjoxNjc4MzczNzM0LCJleHAiOjE2Nzg0NjAxMzR9.Q-qF4JQ0QFJE_eDk9gBrmLg2jAMpmLZFAhq1G--B0oc', '2023-01-28 03:28:48', '2023-03-09 14:55:34', NULL, NULL),
(53, '123@g.com', '123', '123', NULL, '$2b$10$y2ygw5VYzmtg0f9W4qe/KeULFdGIQUhlMQ.dPLhXEVqD5RlMnXckm', NULL, NULL, 3, 'active', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1MywiZW1haWwiOiIxMjNAZy5jb20iLCJ1c2VybmFtZSI6IjEyMyIsImZ1bGxuYW1lIjoiMTIzIiwic3RhdHVzIjoiYWN0aXZlIiwidXNlcl9jYXRlX2lkIjozLCJpYXQiOjE2NzQ4OTQ3MDcsImV4cCI6MTY3NDk4MTEwN30.NRriyK_5qY4J3IG6Bfyia_BxD2fnoG8-c41PWUz_BdY', '2023-01-28 08:22:28', '2023-01-28 08:31:47', NULL, NULL),
(54, 'buitrung83.dev@gmail.com', 'customer1', 'Khách hàng1', NULL, '$2b$10$QOfeF9TMT3G.11DMdK1Yo.UQE1Nvzrn7b9ZfEQSLXOr4jkZMlKGqm', 'Hà nội', '098888888', 3, 'active', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1NCwiZW1haWwiOiJjdXN0b21lcjFAZy5jb20iLCJ1c2VybmFtZSI6ImN1c3RvbWVyMSIsImZ1bGxuYW1lIjoiY3VzdG9tZXIxIiwic3RhdHVzIjoiYWN0aXZlIiwidXNlcl9jYXRlX2lkIjozLCJpYXQiOjE2NzU0MzYwODQsImV4cCI6MTY3NTUyMjQ4NH0.sXBGoSqHeUd4JAqPqvTpoQneyuZK02dDxeqih9rT9nQ', '2023-01-28 08:41:24', '2023-02-03 14:55:33', NULL, NULL),
(55, NULL, 'hoplb3', NULL, NULL, '$2b$10$URYIikIhZn/ePkpv9aXCxukOWY/oq5cHqLOeZcgT0LqLPHkhaLXwa', NULL, NULL, 1, 'active', NULL, '2023-01-28 10:56:42', '2023-01-28 10:56:42', NULL, NULL),
(56, 'customer1@g.com', 'hoplb4', NULL, NULL, '$2b$10$1iDDDDECOeSvbsNvru2ejeQnpRK2YYsmDD0kPbC71BDhU8gjGsNuG', NULL, NULL, 1, 'active', NULL, '2023-01-28 11:00:15', '2023-01-28 11:00:15', NULL, NULL),
(57, 'customer1@g.com', 'hoplb5', NULL, NULL, '$2b$10$ixXjHEQGvULu5hTK/PvJxO4VwU4gSbhrjtInNpcnsUAQd8fPe4GGa', NULL, NULL, 1, 'active', NULL, '2023-01-28 11:01:57', '2023-01-28 11:01:57', NULL, NULL),
(58, 'customer1@g.com', 'hoplb6', NULL, NULL, '$2b$10$JVyfuHGXBPlwSEF9AiNGBuv0nPH9zy4DT9RujcGjepVVy07Ia7pWO', NULL, NULL, 1, 'active', NULL, '2023-01-28 11:03:22', '2023-01-28 11:03:22', NULL, NULL),
(59, 'customer1@g.com', 'hoplb7', NULL, NULL, '$2b$10$zkTZAn1l.hxtnKL0rC1YCecIvcBpjcz/pONgcqmY7PMY1GA6Wgy06', NULL, NULL, 1, 'active', NULL, '2023-01-28 11:04:35', '2023-01-28 11:04:35', NULL, NULL),
(61, 'abc@g.com', 'abc', 'abc', 1, '$2b$10$xrEhjX81TDTSv7byHE0.5OSeRKOzJ1hhh8HLY2Z0EQa1DzZXj23z.', 'abc', NULL, 3, 'active', NULL, '2023-01-29 17:14:24', '2023-01-29 17:14:24', NULL, NULL),
(62, 'abc2@g.com', 'abc2', 'abc2', 1, '$2b$10$3OJqtb5gStnm47Zzgt11Hu8oCnc0H.SyoxfRr4.OHeOeqxiN7pjZa', 'abc2', NULL, 3, 'active', NULL, '2023-01-29 17:18:05', '2023-01-29 17:21:41', NULL, NULL),
(63, 'customer123@g.com', 'customer123', 'customer123', 1, '$2b$10$c86YEoN8/jBq2nfgtqyfT.4CQC/TICFN4NQIJRMyEPEjqltjtgmVm', 'lào cai', NULL, 3, 'active', NULL, '2023-01-31 08:08:53', '2023-01-31 08:08:53', NULL, NULL),
(64, 'admin2@g.com', 'admin2', 'admin1', NULL, '$2b$10$UFhsSTeAE30uNATi2HzYje2WoqlW4g4FnAkhJbEINu8ds4iaKLTea', NULL, NULL, 3, 'active', NULL, '2023-02-01 23:30:26', '2023-02-01 23:30:26', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_user_cates`
--

CREATE TABLE `tbl_user_cates` (
  `user_cate_id` bigint(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(11) DEFAULT NULL,
  `updated_by` bigint(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_user_cates`
--

INSERT INTO `tbl_user_cates` (`user_cate_id`, `name`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 'Admin', 'ADMIN', NULL, '2022-12-12 03:09:17', NULL, NULL),
(3, 'Customer', 'Customer', '2022-11-11 00:50:17', '2023-01-31 07:46:44', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_user_cate_and_permission_relation`
--

CREATE TABLE `tbl_user_cate_and_permission_relation` (
  `id` bigint(20) NOT NULL,
  `user_cate_id` bigint(20) NOT NULL,
  `permission_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_user_cate_and_permission_relation`
--

INSERT INTO `tbl_user_cate_and_permission_relation` (`id`, `user_cate_id`, `permission_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12),
(13, 1, 13),
(14, 1, 14),
(15, 1, 15),
(16, 1, 16),
(17, 1, 17),
(18, 1, 18),
(19, 1, 19),
(20, 1, 20),
(21, 1, 21),
(22, 3, 11),
(23, 1, 22),
(24, 1, 23),
(25, 1, 24),
(27, 1, 25),
(28, 1, 26),
(36, 1, 27),
(39, 1, 28),
(40, 1, 29),
(41, 1, 30),
(42, 1, 31),
(43, 1, 32),
(44, 1, 33),
(45, 1, 34),
(46, 1, 35),
(47, 1, 36),
(48, 1, 37),
(49, 1, 38),
(50, 1, 39);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_user_cate_metas`
--

CREATE TABLE `tbl_user_cate_metas` (
  `meta_id` bigint(20) NOT NULL,
  `user_cate_id` bigint(20) DEFAULT NULL,
  `meta_key` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_user_permissions`
--

CREATE TABLE `tbl_user_permissions` (
  `permission_id` bigint(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `module` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `permission` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(11) DEFAULT NULL,
  `updated_by` bigint(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_user_permissions`
--

INSERT INTO `tbl_user_permissions` (`permission_id`, `name`, `module`, `permission`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 'Add permission', 'user-permission', 'create', NULL, '2023-01-27 17:06:26', '2023-01-27 17:05:57', NULL, NULL),
(2, 'Update permission', 'user-permission', 'update', NULL, '2023-01-27 10:05:24', '2023-01-27 10:05:24', NULL, NULL),
(3, 'Delete permission', 'user-permission', 'delete', NULL, '2023-01-27 10:05:37', '2023-01-27 10:05:37', NULL, NULL),
(4, 'Add new post', 'post', 'create', NULL, '2023-01-27 10:05:58', '2023-01-27 10:05:58', NULL, NULL),
(5, 'Update post', 'post', 'update', NULL, '2023-01-27 10:06:08', '2023-01-27 10:06:08', NULL, NULL),
(6, 'Delete post', 'post', 'delete', NULL, '2023-01-27 10:06:18', '2023-01-27 10:06:18', NULL, NULL),
(7, 'Add new product', 'product', 'create', NULL, '2023-01-27 10:06:38', '2023-01-27 10:06:38', NULL, NULL),
(8, 'Update product', 'product', 'update', NULL, '2023-01-27 10:06:56', '2023-01-27 10:06:56', NULL, NULL),
(9, 'Delete product', 'product', 'delete', NULL, '2023-01-27 10:07:04', '2023-01-27 10:07:04', NULL, NULL),
(10, 'Add a new user', 'user', 'create', NULL, '2023-01-27 10:07:37', '2023-01-27 10:07:37', NULL, NULL),
(11, 'Update user', 'user', 'update', NULL, '2023-01-27 10:07:46', '2023-01-27 10:07:46', NULL, NULL),
(12, 'Delete user', 'user', 'delete', NULL, '2023-01-27 10:07:54', '2023-01-27 10:07:54', NULL, NULL),
(13, 'Read user permissions', 'user-permission', 'read', NULL, '2023-01-27 10:21:27', '2023-01-27 10:21:27', NULL, NULL),
(14, 'Read one user permission', 'user-permission', 'read-one', NULL, '2023-01-27 10:21:41', '2023-01-27 10:21:41', NULL, NULL),
(15, 'Add new option', 'option', 'create', NULL, '2023-01-27 10:47:22', '2023-01-27 10:47:22', NULL, NULL),
(16, 'Update option', 'option', 'update', NULL, '2023-01-27 10:47:35', '2023-01-27 10:47:35', NULL, NULL),
(17, 'Delete option', 'option', 'delete', NULL, '2023-01-27 10:47:44', '2023-01-27 10:47:44', NULL, NULL),
(18, 'Login', 'auth', 'login', NULL, '2023-01-27 10:48:50', '2023-01-27 10:48:50', NULL, NULL),
(19, 'Add payment', 'payment', 'create', NULL, '2023-01-28 03:11:56', '2023-01-28 03:11:56', NULL, NULL),
(20, 'Update payment', 'payment', 'update', NULL, '2023-01-28 03:12:08', '2023-01-28 03:12:08', NULL, NULL),
(21, 'Delete payment', 'payment', 'delete', NULL, '2023-01-28 03:12:25', '2023-01-28 03:12:25', NULL, NULL),
(22, 'Create User Cate', 'user-cate', 'create', NULL, '2023-01-29 10:24:04', '2023-01-29 10:24:54', NULL, NULL),
(23, 'Delete User Cate', 'user-cate', 'delete', NULL, '2023-01-29 10:25:07', '2023-01-29 10:25:07', NULL, NULL),
(24, 'Update User Cate', 'user-cate', 'update', NULL, '2023-01-29 10:25:16', '2023-01-29 10:30:03', NULL, NULL),
(25, 'Create product cate', 'product-cate', 'create', NULL, '2023-01-29 11:25:09', '2023-01-29 12:44:25', NULL, NULL),
(26, 'Update product cate', 'product-cate', 'update', NULL, '2023-01-29 11:25:23', '2023-01-29 11:25:23', NULL, NULL),
(27, 'Delete product cate', 'product-cate', 'delete', NULL, '2023-01-29 11:25:34', '2023-01-29 11:25:34', NULL, NULL),
(28, 'Create product comment', 'product-comment', 'create', NULL, '2023-01-29 11:26:10', '2023-01-29 11:26:10', NULL, NULL),
(29, 'Update product comment', 'product-comment', 'update', NULL, '2023-01-29 11:26:17', '2023-01-29 11:26:17', NULL, NULL),
(30, 'Delete product comment', 'product-comment', 'delete', NULL, '2023-01-29 11:26:25', '2023-01-29 11:26:25', NULL, NULL),
(31, 'Create post cates', 'post-cate', 'create', NULL, '2023-01-29 11:26:56', '2023-01-29 13:03:28', NULL, NULL),
(32, 'Update post cates', 'post-cate', 'update', NULL, '2023-01-29 11:27:08', '2023-01-29 17:04:17', NULL, NULL),
(33, 'Delete post cates', 'post-cate', 'delete', NULL, '2023-01-29 11:27:20', '2023-01-29 17:04:06', NULL, NULL),
(34, 'Create post comment', 'post-comment', 'create', NULL, '2023-01-29 11:27:40', '2023-01-29 11:27:40', NULL, NULL),
(35, 'Update post comment', 'post-comment', 'update', NULL, '2023-01-29 11:27:49', '2023-01-29 11:27:49', NULL, NULL),
(36, 'Delete post comment', 'post-comment', 'delete', NULL, '2023-01-29 11:28:06', '2023-01-29 11:28:06', NULL, NULL),
(37, 'Create deliver', 'deliver', 'create', NULL, '2023-01-29 11:29:43', '2023-01-29 11:29:43', NULL, NULL),
(38, 'Update deliver', 'deliver', 'update', NULL, '2023-01-29 11:29:53', '2023-01-29 11:29:53', NULL, NULL),
(39, 'Delete deliver', 'deliver', 'delete', NULL, '2023-01-29 11:30:02', '2023-01-29 17:34:43', NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tbl_email_logs`
--
ALTER TABLE `tbl_email_logs`
  ADD PRIMARY KEY (`mail_id`);

--
-- Chỉ mục cho bảng `tbl_files`
--
ALTER TABLE `tbl_files`
  ADD PRIMARY KEY (`file_id`);

--
-- Chỉ mục cho bảng `tbl_file_cates`
--
ALTER TABLE `tbl_file_cates`
  ADD PRIMARY KEY (`file_cate_id`);

--
-- Chỉ mục cho bảng `tbl_options`
--
ALTER TABLE `tbl_options`
  ADD PRIMARY KEY (`option_id`);

--
-- Chỉ mục cho bảng `tbl_orders`
--
ALTER TABLE `tbl_orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Chỉ mục cho bảng `tbl_order_delivers`
--
ALTER TABLE `tbl_order_delivers`
  ADD PRIMARY KEY (`deliver_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `tbl_order_item`
--
ALTER TABLE `tbl_order_item`
  ADD PRIMARY KEY (`order_item_id`);

--
-- Chỉ mục cho bảng `tbl_order_payments`
--
ALTER TABLE `tbl_order_payments`
  ADD PRIMARY KEY (`payment_id`);

--
-- Chỉ mục cho bảng `tbl_posts`
--
ALTER TABLE `tbl_posts`
  ADD PRIMARY KEY (`post_id`);

--
-- Chỉ mục cho bảng `tbl_post_cates`
--
ALTER TABLE `tbl_post_cates`
  ADD PRIMARY KEY (`post_cate_id`);

--
-- Chỉ mục cho bảng `tbl_post_cate_metas`
--
ALTER TABLE `tbl_post_cate_metas`
  ADD PRIMARY KEY (`meta_id`);

--
-- Chỉ mục cho bảng `tbl_post_comments`
--
ALTER TABLE `tbl_post_comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Chỉ mục cho bảng `tbl_post_metas`
--
ALTER TABLE `tbl_post_metas`
  ADD PRIMARY KEY (`meta_id`);

--
-- Chỉ mục cho bảng `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD PRIMARY KEY (`product_id`);

--
-- Chỉ mục cho bảng `tbl_product_cates`
--
ALTER TABLE `tbl_product_cates`
  ADD PRIMARY KEY (`product_cate_id`);

--
-- Chỉ mục cho bảng `tbl_product_cate_metas`
--
ALTER TABLE `tbl_product_cate_metas`
  ADD PRIMARY KEY (`meta_id`);

--
-- Chỉ mục cho bảng `tbl_product_comments`
--
ALTER TABLE `tbl_product_comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Chỉ mục cho bảng `tbl_product_metas`
--
ALTER TABLE `tbl_product_metas`
  ADD PRIMARY KEY (`meta_id`);

--
-- Chỉ mục cho bảng `tbl_sliders`
--
ALTER TABLE `tbl_sliders`
  ADD PRIMARY KEY (`slider_id`);

--
-- Chỉ mục cho bảng `tbl_slider_cates`
--
ALTER TABLE `tbl_slider_cates`
  ADD PRIMARY KEY (`slider_cate_id`);

--
-- Chỉ mục cho bảng `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Chỉ mục cho bảng `tbl_user_cates`
--
ALTER TABLE `tbl_user_cates`
  ADD PRIMARY KEY (`user_cate_id`);

--
-- Chỉ mục cho bảng `tbl_user_cate_and_permission_relation`
--
ALTER TABLE `tbl_user_cate_and_permission_relation`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tbl_user_cate_metas`
--
ALTER TABLE `tbl_user_cate_metas`
  ADD PRIMARY KEY (`meta_id`);

--
-- Chỉ mục cho bảng `tbl_user_permissions`
--
ALTER TABLE `tbl_user_permissions`
  ADD PRIMARY KEY (`permission_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tbl_email_logs`
--
ALTER TABLE `tbl_email_logs`
  MODIFY `mail_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_files`
--
ALTER TABLE `tbl_files`
  MODIFY `file_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_file_cates`
--
ALTER TABLE `tbl_file_cates`
  MODIFY `file_cate_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_options`
--
ALTER TABLE `tbl_options`
  MODIFY `option_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `tbl_orders`
--
ALTER TABLE `tbl_orders`
  MODIFY `order_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT cho bảng `tbl_order_delivers`
--
ALTER TABLE `tbl_order_delivers`
  MODIFY `deliver_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `tbl_order_item`
--
ALTER TABLE `tbl_order_item`
  MODIFY `order_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- AUTO_INCREMENT cho bảng `tbl_order_payments`
--
ALTER TABLE `tbl_order_payments`
  MODIFY `payment_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `tbl_posts`
--
ALTER TABLE `tbl_posts`
  MODIFY `post_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT cho bảng `tbl_post_cates`
--
ALTER TABLE `tbl_post_cates`
  MODIFY `post_cate_id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT cho bảng `tbl_post_cate_metas`
--
ALTER TABLE `tbl_post_cate_metas`
  MODIFY `meta_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_post_comments`
--
ALTER TABLE `tbl_post_comments`
  MODIFY `comment_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_post_metas`
--
ALTER TABLE `tbl_post_metas`
  MODIFY `meta_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_products`
--
ALTER TABLE `tbl_products`
  MODIFY `product_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT cho bảng `tbl_product_cates`
--
ALTER TABLE `tbl_product_cates`
  MODIFY `product_cate_id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `tbl_product_cate_metas`
--
ALTER TABLE `tbl_product_cate_metas`
  MODIFY `meta_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_product_comments`
--
ALTER TABLE `tbl_product_comments`
  MODIFY `comment_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_product_metas`
--
ALTER TABLE `tbl_product_metas`
  MODIFY `meta_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_sliders`
--
ALTER TABLE `tbl_sliders`
  MODIFY `slider_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_slider_cates`
--
ALTER TABLE `tbl_slider_cates`
  MODIFY `slider_cate_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `user_id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT cho bảng `tbl_user_cates`
--
ALTER TABLE `tbl_user_cates`
  MODIFY `user_cate_id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT cho bảng `tbl_user_cate_and_permission_relation`
--
ALTER TABLE `tbl_user_cate_and_permission_relation`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT cho bảng `tbl_user_cate_metas`
--
ALTER TABLE `tbl_user_cate_metas`
  MODIFY `meta_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_user_permissions`
--
ALTER TABLE `tbl_user_permissions`
  MODIFY `permission_id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

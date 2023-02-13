-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 27, 2023 at 05:25 PM
-- Server version: 10.4.26-MariaDB
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exam_hop`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_email_logs`
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
-- Table structure for table `tbl_files`
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
-- Table structure for table `tbl_file_cates`
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
-- Table structure for table `tbl_options`
--

CREATE TABLE `tbl_options` (
  `option_id` bigint(20) NOT NULL,
  `option_name` varchar(20) NOT NULL,
  `option_value` longtext NOT NULL,
  `autoload` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_orders`
--

CREATE TABLE `tbl_orders` (
  `order_id` bigint(20) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `fullname` varchar(200) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
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
-- Dumping data for table `tbl_orders`
--

INSERT INTO `tbl_orders` (`order_id`, `user_id`, `fullname`, `phone`, `address`, `order_total_price`, `payment_id`, `deliver_id`, `status`, `description`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(6, NULL, 'trungbui1', 111111, '', 0, 1, 2, 'Đang xử lý', 'ádasdas', NULL, NULL, '2023-01-19 14:06:30', '2023-01-26 08:23:58'),
(10, NULL, 'ád', 123, 'laocai', 0, 1, 1, 'Đang chờ', '123', NULL, NULL, '2023-01-26 13:07:45', '2023-01-26 13:11:45'),
(11, NULL, 'ád', 123, 'laocai', 0, 1, 1, 'Đang chờ', '123', NULL, NULL, '2023-01-26 13:12:20', '2023-01-26 13:12:20'),
(12, NULL, 'abc', 123, 'laocai', 0, 1, 1, 'Đang chờ', '123', NULL, NULL, '2023-01-26 13:34:01', '2023-01-26 13:34:01');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order_delivers`
--

CREATE TABLE `tbl_order_delivers` (
  `deliver_id` tinyint(4) NOT NULL,
  `name` varchar(200) NOT NULL,
  `price` double DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` bigint(20) NOT NULL,
  `updated_by` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_order_delivers`
--

INSERT INTO `tbl_order_delivers` (`deliver_id`, `name`, `price`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 'Shoppee default deliver', 10000, 'active', '2022-12-12 01:11:45', '2022-12-12 01:11:45', 0, 0),
(2, 'ShipBee deliver', 20000, 'active', '2022-12-12 01:11:45', '2022-12-12 01:11:45', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order_item`
--

CREATE TABLE `tbl_order_item` (
  `order_item_id` int(11) NOT NULL,
  `order_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) NOT NULL,
  `name` varchar(200) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_order_item`
--

INSERT INTO `tbl_order_item` (`order_item_id`, `order_id`, `product_id`, `name`, `quantity`, `price`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, NULL, 21, 'test add', NULL, 1233333, NULL, NULL, '2023-01-15 00:22:08', '2023-01-26 11:06:41'),
(2, NULL, 21, 'test add', NULL, 1233333, NULL, NULL, '2023-01-15 00:22:08', '2023-01-26 11:06:42'),
(3, NULL, 18, '123123123', NULL, 123123, NULL, NULL, '2022-12-11 17:02:49', '2023-01-26 11:06:47'),
(4, NULL, 17, 'product 5', NULL, 10000, NULL, NULL, '2022-12-11 17:02:49', '2023-01-26 11:06:50'),
(5, NULL, 21, 'test add', NULL, 1233333, NULL, NULL, '2023-01-15 00:22:08', '2023-01-26 13:04:45'),
(6, NULL, 18, '123123123', NULL, 123123, NULL, NULL, '2022-12-11 17:02:49', '2023-01-26 13:04:47'),
(7, NULL, 17, 'product 5', NULL, 10000, NULL, NULL, '2022-12-11 17:02:49', '2023-01-26 13:04:49'),
(8, NULL, 21, 'test add', NULL, 1233333, NULL, NULL, '2023-01-15 00:22:08', '2023-01-26 13:05:34'),
(9, NULL, 21, 'test add', NULL, 1233333, NULL, NULL, '2023-01-15 00:22:08', '2023-01-26 13:05:46'),
(10, NULL, 18, '123123123', NULL, 123123, NULL, NULL, '2022-12-11 17:02:49', '2023-01-26 13:05:51'),
(11, NULL, 21, 'test add', NULL, 1233333, NULL, NULL, '2023-01-15 00:22:08', '2023-01-26 13:06:45'),
(12, NULL, 18, '123123123', NULL, 123123, NULL, NULL, '2022-12-11 17:02:49', '2023-01-26 13:07:12'),
(13, NULL, 17, 'product 5', NULL, 10000, NULL, NULL, '2022-12-11 17:02:49', '2023-01-26 13:07:14'),
(14, NULL, 18, '123123123', 3, 123123, NULL, NULL, '2022-12-11 17:02:49', '2023-01-26 13:07:24'),
(15, NULL, 21, 'test add', NULL, 1233333, NULL, NULL, '2023-01-15 00:22:08', '2023-01-26 13:33:29'),
(16, NULL, 18, '123123123', NULL, 123123, NULL, NULL, '2022-12-11 17:02:49', '2023-01-26 13:33:32'),
(17, NULL, 17, 'product 5', NULL, 10000, NULL, NULL, '2022-12-11 17:02:49', '2023-01-26 13:33:36');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order_payments`
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
-- Dumping data for table `tbl_order_payments`
--

INSERT INTO `tbl_order_payments` (`payment_id`, `name`, `description`, `image`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'Thanh toán khi nhận hàng', 'Phí thu hộ: ₫0 VNĐ. Ưu đãi về phí vận chuyển (nếu có) áp dụng cả với phí thu hộ.', NULL, NULL, NULL, '2022-11-08', '2022-11-08'),
(2, 'Thẻ tín dụng ghi nợ', 'Thẻ tín dụng ghi nợ', NULL, NULL, NULL, '2022-11-08', '2022-11-08'),
(6, '123', '12323333', NULL, NULL, NULL, '2023-01-19', '2023-01-19');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_posts`
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
-- Dumping data for table `tbl_posts`
--

INSERT INTO `tbl_posts` (`post_id`, `name`, `description`, `content`, `image`, `status`, `post_cate_id`, `slug`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(12, 'ádads', 'dđ', '', '', 'active', 1, NULL, '2022-12-18 04:06:40', '2022-12-18 04:06:40', NULL, NULL),
(13, '123', '123adada', '', '', 'active', 1, NULL, '2022-12-18 04:06:46', '2022-12-18 04:52:44', NULL, NULL),
(14, '123', '123adadadad123123dd2224444da2', '', '', 'active', 5, NULL, '2022-12-18 04:11:14', '2022-12-18 05:53:18', NULL, NULL),
(16, 'Determinant khai trương cơ sở mới với bộ sưu tập sơ mi 61 size', 'TP HCMThương hiệu thời trang quốc tế Determinant khai trương cơ sở mới tại Vincom Center Đồng Khởi vào ngày 24/12, mang đến bộ sưu tập áo sơ mi với 61 kích cỡ.', '<p>Thương hiệu thời trang quốc tế đến từ Hong Kong đã gia nhập thị trường Việt Nam hai năm. Theo đó, với cột mốc phát triển mới tại TP HCM, Determinant tiếp tục giới thiệu sản phẩm độc quyền của thương hiệu - bộ 61 size áo sơ mi.</p><p class=\"ql-align-center\"><img src=\"https://i1-giaitri.vnecdn.net/2022/12/25/Image-jpeg-4433-1671947360.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=_5AW9fbNynGUPFPAp5XB9w\"></p><p>Không gian showroom theo phong cách hiện đại của Determinant. Ảnh:&nbsp;<em>Determinant</em></p><p>Theo đại diện thương hiệu, bộ 61 size áo sơ mi kết hợp độ rộng cổ, chiều dài tay và dáng thân áo đa dạng, đem lại cảm giác vừa vặn như may đo cho mọi vóc dáng. Sản phẩm được dệt từ 100% ELS Cotton - sợi bông thiên nhiên dài, ứng dụng công nghệ chống nhăn và kháng khuẩn. Thương hiệu còn ứng dụng công nghệ Visdry kháng nước ở mặt ngoài và thấm hút mồ hôi tốt ở măt trong trên dòng sản phẩm polo và sơ mi đa năng smart shirt.</p><p>Bên cạnh đó, nhân dịp khai trương, nhãn hàng triển khai hàng loạt ưu đãi, quà tặng và hoạt động giải trí trong suất tuần lễ khai trương từ 24/12 - 31/12. Trong đó có minigame \"Chơi là trúng\" nhận voucher hoàn tiền đến 500.000 đồng.</p><p class=\"ql-align-center\"><img src=\"https://i1-giaitri.vnecdn.net/2022/12/25/Image-1-jpeg-2668-1671947360.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=peGUMZBT4voeYU_chQdPZQ\"></p><p>Khách hàng tới tham dự và mua sắm tại buổi khai trương. Ảnh:&nbsp;<em style=\"font-weight: var(--bs-body-font-weight);\">Determinant</em></p><p><a href=\"http://ldp.to/14qp9\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(7, 109, 182);\">Determinant</a>&nbsp;là thương hiệu thời trang nam thuộc sở hữu của Tập đoàn Esquel (Hong Kong) - một trong những đơn vị hoạt động hàng đầu thế giới trong lĩnh vực dệt may và thời trang từ năm 1978. Đơn vị hướng tới cung cấp sản phẩm với các tiêu chí hàng đầu: chất lượng, tính năng và phong cách thiết kế.</p><p>Nhãn hàng định hướng hoạt động với tinh thần cốt lõi là lấy phát triển bền vững và thân thiện môi trường. Do đó, Determinant áp dụng các biện pháp cắt giảm tối đa phát thải carbon và sử dụng nguyên liệu tự nhiên trong quá trình sản xuất.</p>', '', 'active', 1, NULL, '2023-01-10 07:30:14', '2023-01-10 07:30:14', NULL, NULL),
(17, 'ádasdasd', 'ádasdasdasdasd', '<p>adasdasdasdasdasdasdasdasdasdasd</p><p>á</p><p>đâsd</p><p>ád</p><p>ád</p><p>á</p><p>dá</p><p>d</p><p>ád</p><p>ad</p><p>sá</p><p>d</p><p>ád</p><p><br></p>', '', 'active', 1, NULL, '2023-01-10 10:21:14', '2023-01-10 10:21:14', NULL, NULL),
(18, 'ádasdasd', 'ádasdasdasdasd', '<p>adasdasdasdasdasdasdasdasdasdasd</p><p>á</p><p>đâsd</p><p>ád</p><p>ád</p><p>á</p><p>dá</p><p>d</p><p>ád</p><p>ad</p><p>sá</p><p>d</p><p>ád</p><p><br></p>', '', 'active', 1, NULL, '2023-01-10 10:21:19', '2023-01-10 10:21:19', NULL, NULL),
(19, 'them', '123123', '<p>11111111111111111</p>', '', 'active', NULL, NULL, '2023-01-11 06:29:40', '2023-01-11 06:29:40', NULL, NULL),
(20, 'them2', 'ádad', '<p>ádasdasd</p>', '', 'active', NULL, NULL, '2023-01-11 06:33:45', '2023-01-11 06:33:45', NULL, NULL),
(21, 'them23', 'ádad', '<p>ádasdasd</p>', '', 'active', 1, NULL, '2023-01-11 06:34:01', '2023-01-11 06:34:01', NULL, NULL),
(22, 'them4', '123', '<p>123</p>', '', 'active', 1, NULL, '2023-01-11 06:36:51', '2023-01-11 06:36:51', NULL, NULL),
(24, 'them bai 1', 'them bai 1', '<p>them bai 1</p>', '', 'active', 1, NULL, '2023-01-11 15:39:56', '2023-01-11 15:39:56', NULL, NULL),
(25, 'them bai 2', 'them bai 1', '<p>them bai 1</p>', '', 'active', 1, NULL, '2023-01-11 15:41:01', '2023-01-11 15:41:01', NULL, NULL),
(26, 'bài viết 1', 'bài viết 1', '<p>bài viết 1</p>', '', 'active', 1, NULL, '2023-01-11 15:46:38', '2023-01-11 15:46:38', NULL, NULL),
(27, 'bài viết 1', 'bài viết 1', '<p>bài viết 1</p>', '', 'active', 1, NULL, '2023-01-11 15:48:20', '2023-01-11 15:48:20', NULL, NULL),
(29, '123123123', '12312312', '<p>3123123123123</p>', '', 'active', NULL, NULL, '2023-01-15 00:25:09', '2023-01-15 00:25:09', NULL, NULL),
(30, '123123123', '12312312', '<p>3123123123123</p>', '', 'active', NULL, NULL, '2023-01-15 00:25:13', '2023-01-15 00:25:13', NULL, NULL),
(31, '13', '123', '<p>123</p>', '', 'active', 1, NULL, '2023-01-16 21:27:23', '2023-01-16 21:27:23', NULL, NULL),
(32, '13', '123', '<p>123</p>', '', 'active', 1, NULL, '2023-01-16 21:27:46', '2023-01-16 21:27:46', NULL, NULL),
(33, '123123123', '123', '<p>123123</p>', '', 'active', 1, NULL, '2023-01-16 21:35:42', '2023-01-26 08:51:27', NULL, NULL),
(34, 'hello 122212 332', NULL, NULL, NULL, NULL, NULL, 'hello-122212-332', '2023-01-26 09:53:47', '2023-01-26 10:22:16', NULL, NULL),
(36, 'new post 2', NULL, NULL, NULL, NULL, NULL, 'new-post-2', '2023-01-27 06:30:07', '2023-01-27 06:30:07', NULL, NULL),
(37, 'new post 2', NULL, NULL, NULL, NULL, NULL, 'new-post-2', '2023-01-27 06:34:31', '2023-01-27 06:34:31', NULL, NULL),
(38, 'new post 2', NULL, NULL, NULL, NULL, NULL, 'new-post-2', '2023-01-27 07:48:24', '2023-01-27 07:48:24', NULL, NULL),
(39, 'new post 2', NULL, NULL, NULL, NULL, NULL, 'new-post-2', '2023-01-27 07:48:57', '2023-01-27 07:48:57', NULL, NULL),
(40, 'new post 2', NULL, NULL, NULL, NULL, NULL, 'new-post-2', '2023-01-27 08:14:27', '2023-01-27 08:14:27', NULL, NULL),
(41, 'new post 2', NULL, NULL, NULL, NULL, NULL, 'new-post-2', '2023-01-27 08:15:35', '2023-01-27 08:15:35', NULL, NULL),
(42, 'new post 2', NULL, NULL, NULL, NULL, NULL, 'new-post-2', '2023-01-27 08:16:10', '2023-01-27 08:16:10', NULL, NULL),
(43, 'new post 2', NULL, NULL, NULL, NULL, NULL, 'new-post-2', '2023-01-27 08:19:31', '2023-01-27 08:19:31', NULL, NULL),
(44, 'new post', NULL, NULL, NULL, NULL, NULL, 'new-post', '2023-01-27 08:28:11', '2023-01-27 08:28:11', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_post_cates`
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
-- Dumping data for table `tbl_post_cates`
--

INSERT INTO `tbl_post_cates` (`post_cate_id`, `name`, `description`, `image`, `parent_id`, `status`, `slug`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 'Tin tức', '123123123123', NULL, NULL, NULL, NULL, '2022-12-17 23:10:53', '2023-01-19 10:46:28', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_post_cate_metas`
--

CREATE TABLE `tbl_post_cate_metas` (
  `meta_id` bigint(20) NOT NULL,
  `post_cate_id` bigint(20) DEFAULT NULL,
  `meta_key` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_post_comments`
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
-- Table structure for table `tbl_post_metas`
--

CREATE TABLE `tbl_post_metas` (
  `meta_id` bigint(20) NOT NULL,
  `post_id` bigint(20) DEFAULT NULL,
  `meta_key` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_products`
--

CREATE TABLE `tbl_products` (
  `product_id` bigint(20) NOT NULL,
  `name` varchar(200) NOT NULL,
  `sku` varchar(200) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `sale_price` float DEFAULT NULL,
  `content` longtext NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `overview` varchar(400) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `slug` varchar(500) DEFAULT NULL,
  `product_cate_id` bigint(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_products`
--

INSERT INTO `tbl_products` (`product_id`, `name`, `sku`, `price`, `sale_price`, `content`, `image`, `description`, `overview`, `status`, `slug`, `product_cate_id`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(13, 'Quần nam jean đen ống suông rộng, quần baggy nam dáng đứng chất vải bò cao cấp DRSQUARE', 'qpd1', 100000, 20000, 'content product', 'https://cf.shopee.vn/file/sg-11134201-22120-wct5999qzdlvae', 'CAM KẾT HÀNG NHƯ HÌNH CHỤP - HOÀN TIỀN NẾU THẤY KHÔNG HÀI LÒNG. \r\nHÃY INBOX CHO SHOP KHI SẢN CÓ VẤN ĐỀ ( ĐỔI SIZE, SP LỖI...)\r\nQuần Jean Nam Baggy ống Suông Rộng Hottrend hàn quốc 2022 được đặt may riêng theo mẫu thiết kế của DRSQUARE Store tại HN. \r\n\r\nQuần Jean Nam đen ống Suông Rộng với thiết kế mới thời trang hơn, mang lại sự tự tin tối đa cho người mặc trước những người xung quanh\r\nJean ống rộng nam đen lam từ vải Denim chất bò cao cấp nên rất mềm và thoải mái khi mặc, đảm bảo sẽ không hề cảm thấy gò bó ngay cả khi di chuyển nhiều.\r\nDáng quần bò nam đen ống đứng trẻ trung tạo nên form baggy jean nam xuông cho người mặc túi quần lớn rất thuận tiện cho việc đựng smart phone hoặc ví cỡ bự.\r\nquần bò baggy nam màu sắc chuẩn được nhuộm kỹ đến hai lần giúp hạn chế tối đa việc phai màu khi sử dụng.\r\nSize: 27 đến 34\r\n Xuất xứ: quần jean nam đen ống suông rộng cao cấp được thiết kế và gia công bởi DRSQUARE\r\n\r\n CÁCH CHỌN SIZE\r\nSize 27  (Từ 38 - 50kg Cao Dưới 1m71)\r\nSize 28  (Từ 50 - 54kg Cao Dưới 1m75)\r\nSize 29 (Từ 55 - 58 kg Cao Dưới 1m80)  Size 30  ( Từ 59- 63 kg Cao Dưới 1m80) \r\nSize 31 (Từ 63 - 68 kg Cao Dưới 1m80)  \r\nSize 32  (Từ 68 - 73 kg Cao Dưới 1m80)  \r\nSize 33  (Từ 73- 75 kg Cao Dưới 1m80)  \r\nSize 34  (Từ 75 - 80 kg Cao Dưới 1m80)  \r\nSize 35  (Từ 80 - 85 kg Cao Dưới 1m80) \r\nSize 36  (Từ 85 - 95 kg Cao Dưới 1m80) \r\nLƯU Ý: những bạn có bụng nên lấy lớn hơn 1 size so với bảng trên ạ. inbox trực tiếp cho shop để được tư vấn chính xác nhất\r\n\r\nLoại  : Quần Jean Nam Baggy ống Suông Rộng \r\nMàu sắc: Quần jean nam xanh nhạt + Quần bò nam xanh sky + Quần baggy nam đen + Quần ống rộng Trắng + Quần jeans nam Xám.\r\nThích hợp : quần jean nam ống suông  thích hợp cho Đi Chơi,  Công Sở, Đời Thường\r\nChất liệu  : quần rin nam được làm từ chất jeans bò cao cấp\r\nkiểu dáng: quần jean nam ống suông rộng.\r\n\r\n HƯỚNG DẪN BẢO QUẢN VÀ SỬ DỤNG QUẦN NAM\r\n-   Lộn trái quần bò nam ra và sử dụng nước giặt giúp quần mau sạch và hạn chế phai màu.\r\n-   Để quần nam khô tự nhiên, phơi trong bóng râm thoáng mát.\r\n-   Không sử dụng hóa chất, thuốc tẩy trực tiếp lên quần jean nam đen trơn , không ngâm quân jean nam quá lâu trong dung dịch tẩy.\r\n-   Là ủi ở nhiệt độ dưới 110 độ C.', 'Quần nam jean đen ống suông rộng, quần baggy nam dáng đứng chất vải bò cao cấp DRSQUARE hottrend 2022', 'acctive', NULL, 1, '2022-12-11 17:02:49', NULL, NULL, NULL),
(14, 'product 2', 'pd2', 10000, 200, 'content product', '', 'description product', '', 'acctive', NULL, 1, '2022-12-11 17:02:49', NULL, NULL, NULL),
(15, 'product 3', 'pd2', 10000, 200, 'content product', '', 'description product', '', 'acctive', NULL, 1, '2022-12-11 17:02:49', NULL, NULL, NULL),
(16, 'product 4', 'pd2', 10000, 200, 'content product', '', 'description product', '', 'acctive', NULL, 1, '2022-12-11 17:02:49', NULL, NULL, NULL),
(17, 'product 5', 'pd5', 10000, 200, 'content product', '', 'description product', '', 'acctive', NULL, 1, '2022-12-11 17:02:49', NULL, NULL, NULL),
(18, '123123123', 'pd6', 123123, 200, '', '', '', '', 'active', NULL, NULL, '2022-12-11 17:02:49', '2023-01-14 23:54:18', NULL, NULL),
(21, 'test add', NULL, 1233333, 200000, '<p>content</p>', '', '<p>décript</p>', NULL, 'active', NULL, 1, '2023-01-15 00:22:08', '2023-01-15 00:22:08', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product_cates`
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
-- Dumping data for table `tbl_product_cates`
--

INSERT INTO `tbl_product_cates` (`product_cate_id`, `name`, `description`, `image`, `parent_id`, `slug`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 'Quần', '123', NULL, NULL, NULL, '', '2022-12-23 07:26:44', '2023-01-26 13:23:12', NULL, NULL),
(6, 'Áo váy', NULL, NULL, NULL, NULL, NULL, '2023-01-26 13:26:02', '2023-01-26 13:26:02', NULL, NULL),
(7, 'Áo phông', NULL, NULL, NULL, NULL, NULL, '2023-01-26 13:26:38', '2023-01-26 13:26:38', NULL, NULL),
(8, 'Áo phông', NULL, NULL, NULL, NULL, NULL, '2023-01-26 13:26:58', '2023-01-26 13:26:58', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product_cate_metas`
--

CREATE TABLE `tbl_product_cate_metas` (
  `meta_id` bigint(20) NOT NULL,
  `product_cate_id` bigint(20) DEFAULT NULL,
  `meta_key` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product_comments`
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
-- Table structure for table `tbl_product_metas`
--

CREATE TABLE `tbl_product_metas` (
  `meta_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `meta_key` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sliders`
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
-- Table structure for table `tbl_slider_cates`
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
-- Table structure for table `tbl_users`
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
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `email`, `username`, `fullname`, `gender`, `password`, `address`, `phone`, `user_cate_id`, `status`, `token`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(37, '123123@g.com', '123123123', '123123123', NULL, '123', NULL, NULL, NULL, NULL, NULL, '2023-01-16 21:28:18', '2023-01-16 21:28:18', NULL, NULL),
(38, 'trungbui123@gmail.com', 'trungbui123', 'trungbui123', NULL, '$2a$10$tm27KxeDRQTd1F4N6CWH4.gPV8fyxDlIM1/HgT.l0SeW6Oi7Q4PnC', NULL, NULL, NULL, NULL, NULL, '2023-01-17 04:09:06', '2023-01-17 04:09:06', NULL, NULL),
(46, 'trungak47@g.com', 'trungak47', 'trungak47', NULL, '123', NULL, NULL, NULL, NULL, NULL, '2023-01-17 08:14:25', '2023-01-23 14:16:52', NULL, NULL),
(47, 'trungak47@g.com', 'trungak', 'trungak47', NULL, '123', NULL, NULL, NULL, NULL, NULL, '2023-01-17 08:14:25', '2023-01-23 14:16:39', NULL, NULL),
(48, 'hoplb@gmail.com', 'hoplb', NULL, NULL, '$2b$10$ShqNd29Y8Iu6aH6gF6/WsuXYcHK1gposkSK3Bos.fqKJXeCgK02HS', NULL, NULL, NULL, 'active', NULL, '2023-01-27 04:28:26', '2023-01-27 04:28:26', NULL, NULL),
(49, 'hoplb@gmail.com', 'hoplb2', NULL, NULL, '$2b$10$n0wM/k45BogX4CCZ8XgZ2OFfOm8oHJ3yfhixBQPoc8DrklTkTAgaK', NULL, NULL, 1, 'active', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0OSwiZW1haWwiOiJob3BsYkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImhvcGxiMiIsImZ1bGxuYW1lIjpudWxsLCJzdGF0dXMiOiJhY3RpdmUiLCJ1c2VyX2NhdGVfaWQiOjEsImlhdCI6MTY3NDgxMzg5OCwiZXhwIjoxNjc0ODE3NDk4fQ.rXoViexkYRHVuv1QlHJN_aMGhPbfPv-wT__et6nO1rc', '2023-01-27 04:41:40', '2023-01-27 10:04:58', NULL, NULL),
(50, 'hoplb@gmail.com', 'trungbui', NULL, NULL, '$2b$10$4T1JwzbbV93oA0qi5KctseKPrK6Lg3mRTFNxv3Nt8/Ugnzoankv52', NULL, NULL, 1, 'active', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1MCwiZW1haWwiOiJob3BsYkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InRydW5nYnVpIiwiZnVsbG5hbWUiOm51bGwsInN0YXR1cyI6ImFjdGl2ZSIsInVzZXJfY2F0ZV9pZCI6MSwiaWF0IjoxNjc0ODEwNDM4LCJleHAiOjE2NzQ4MTQwMzh9.4E_-rqxmF69nHtpWqthom426yByIzmACFfi6WEiBx48', '2023-01-27 09:06:56', '2023-01-27 09:07:18', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_cates`
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
-- Dumping data for table `tbl_user_cates`
--

INSERT INTO `tbl_user_cates` (`user_cate_id`, `name`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 'Admin', 'ADMIN', NULL, '2022-12-12 03:09:17', NULL, NULL),
(2, 'Editor', 'eDITER', NULL, '2022-12-12 03:09:06', NULL, NULL),
(3, 'Customer', 'Customer', '2022-11-11 00:50:17', '2022-11-11 00:50:17', NULL, NULL),
(16, '123', '', '2023-01-26 13:13:51', '2023-01-26 13:13:51', NULL, NULL),
(17, 'lào cai', '', '2023-01-26 13:27:40', '2023-01-26 13:27:40', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_cate_and_permission_relation`
--

CREATE TABLE `tbl_user_cate_and_permission_relation` (
  `id` bigint(20) NOT NULL,
  `user_cate_id` bigint(20) NOT NULL,
  `permission_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user_cate_and_permission_relation`
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
(14, 1, 14);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_cate_metas`
--

CREATE TABLE `tbl_user_cate_metas` (
  `meta_id` bigint(20) NOT NULL,
  `user_cate_id` bigint(20) DEFAULT NULL,
  `meta_key` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_permissions`
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
-- Dumping data for table `tbl_user_permissions`
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
(14, 'Read one user permission', 'user-permission', 'read-one', NULL, '2023-01-27 10:21:41', '2023-01-27 10:21:41', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_email_logs`
--
ALTER TABLE `tbl_email_logs`
  ADD PRIMARY KEY (`mail_id`);

--
-- Indexes for table `tbl_files`
--
ALTER TABLE `tbl_files`
  ADD PRIMARY KEY (`file_id`);

--
-- Indexes for table `tbl_file_cates`
--
ALTER TABLE `tbl_file_cates`
  ADD PRIMARY KEY (`file_cate_id`);

--
-- Indexes for table `tbl_orders`
--
ALTER TABLE `tbl_orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `tbl_order_delivers`
--
ALTER TABLE `tbl_order_delivers`
  ADD PRIMARY KEY (`deliver_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `tbl_order_item`
--
ALTER TABLE `tbl_order_item`
  ADD PRIMARY KEY (`order_item_id`);

--
-- Indexes for table `tbl_order_payments`
--
ALTER TABLE `tbl_order_payments`
  ADD PRIMARY KEY (`payment_id`);

--
-- Indexes for table `tbl_posts`
--
ALTER TABLE `tbl_posts`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `tbl_post_cates`
--
ALTER TABLE `tbl_post_cates`
  ADD PRIMARY KEY (`post_cate_id`);

--
-- Indexes for table `tbl_post_cate_metas`
--
ALTER TABLE `tbl_post_cate_metas`
  ADD PRIMARY KEY (`meta_id`);

--
-- Indexes for table `tbl_post_comments`
--
ALTER TABLE `tbl_post_comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `tbl_post_metas`
--
ALTER TABLE `tbl_post_metas`
  ADD PRIMARY KEY (`meta_id`);

--
-- Indexes for table `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `tbl_product_cates`
--
ALTER TABLE `tbl_product_cates`
  ADD PRIMARY KEY (`product_cate_id`);

--
-- Indexes for table `tbl_product_cate_metas`
--
ALTER TABLE `tbl_product_cate_metas`
  ADD PRIMARY KEY (`meta_id`);

--
-- Indexes for table `tbl_product_comments`
--
ALTER TABLE `tbl_product_comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `tbl_product_metas`
--
ALTER TABLE `tbl_product_metas`
  ADD PRIMARY KEY (`meta_id`);

--
-- Indexes for table `tbl_sliders`
--
ALTER TABLE `tbl_sliders`
  ADD PRIMARY KEY (`slider_id`);

--
-- Indexes for table `tbl_slider_cates`
--
ALTER TABLE `tbl_slider_cates`
  ADD PRIMARY KEY (`slider_cate_id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `tbl_user_cates`
--
ALTER TABLE `tbl_user_cates`
  ADD PRIMARY KEY (`user_cate_id`);

--
-- Indexes for table `tbl_user_cate_and_permission_relation`
--
ALTER TABLE `tbl_user_cate_and_permission_relation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user_cate_metas`
--
ALTER TABLE `tbl_user_cate_metas`
  ADD PRIMARY KEY (`meta_id`);

--
-- Indexes for table `tbl_user_permissions`
--
ALTER TABLE `tbl_user_permissions`
  ADD PRIMARY KEY (`permission_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_email_logs`
--
ALTER TABLE `tbl_email_logs`
  MODIFY `mail_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_files`
--
ALTER TABLE `tbl_files`
  MODIFY `file_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_file_cates`
--
ALTER TABLE `tbl_file_cates`
  MODIFY `file_cate_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_orders`
--
ALTER TABLE `tbl_orders`
  MODIFY `order_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tbl_order_delivers`
--
ALTER TABLE `tbl_order_delivers`
  MODIFY `deliver_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_order_item`
--
ALTER TABLE `tbl_order_item`
  MODIFY `order_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `tbl_order_payments`
--
ALTER TABLE `tbl_order_payments`
  MODIFY `payment_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_posts`
--
ALTER TABLE `tbl_posts`
  MODIFY `post_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `tbl_post_cates`
--
ALTER TABLE `tbl_post_cates`
  MODIFY `post_cate_id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_post_cate_metas`
--
ALTER TABLE `tbl_post_cate_metas`
  MODIFY `meta_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_post_comments`
--
ALTER TABLE `tbl_post_comments`
  MODIFY `comment_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_post_metas`
--
ALTER TABLE `tbl_post_metas`
  MODIFY `meta_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_products`
--
ALTER TABLE `tbl_products`
  MODIFY `product_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `tbl_product_cates`
--
ALTER TABLE `tbl_product_cates`
  MODIFY `product_cate_id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_product_cate_metas`
--
ALTER TABLE `tbl_product_cate_metas`
  MODIFY `meta_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_product_comments`
--
ALTER TABLE `tbl_product_comments`
  MODIFY `comment_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_product_metas`
--
ALTER TABLE `tbl_product_metas`
  MODIFY `meta_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_sliders`
--
ALTER TABLE `tbl_sliders`
  MODIFY `slider_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_slider_cates`
--
ALTER TABLE `tbl_slider_cates`
  MODIFY `slider_cate_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `user_id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `tbl_user_cates`
--
ALTER TABLE `tbl_user_cates`
  MODIFY `user_cate_id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `tbl_user_cate_and_permission_relation`
--
ALTER TABLE `tbl_user_cate_and_permission_relation`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_user_cate_metas`
--
ALTER TABLE `tbl_user_cate_metas`
  MODIFY `meta_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_user_permissions`
--
ALTER TABLE `tbl_user_permissions`
  MODIFY `permission_id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

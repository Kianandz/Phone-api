-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2023 at 03:56 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smartphone`
--

-- --------------------------------------------------------

--
-- Table structure for table `phone`
--

CREATE TABLE `phone` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `brands` varchar(255) NOT NULL,
  `phone_image` varchar(255) NOT NULL,
  `release_date` varchar(255) NOT NULL,
  `view_count` int(11) NOT NULL,
  `phone_network` varchar(255) NOT NULL,
  `phone_sim` varchar(255) NOT NULL,
  `phone_sim_type` varchar(255) NOT NULL,
  `material` varchar(255) NOT NULL,
  `dimensions` varchar(255) NOT NULL,
  `weight` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `resolution` varchar(255) NOT NULL,
  `screen_size` varchar(255) NOT NULL,
  `technology` varchar(255) NOT NULL,
  `os` varchar(255) NOT NULL,
  `os_version` varchar(255) NOT NULL,
  `chipset` varchar(255) NOT NULL,
  `cpu` varchar(255) NOT NULL,
  `gpu` varchar(255) NOT NULL,
  `ram` varchar(255) NOT NULL,
  `storage` varchar(255) NOT NULL,
  `storage_type` varchar(255) NOT NULL,
  `main_camera` varchar(255) NOT NULL,
  `selfie_camera` varchar(255) NOT NULL,
  `nfc` varchar(255) NOT NULL,
  `usb` varchar(255) NOT NULL,
  `bluetooth` varchar(255) NOT NULL,
  `gps` varchar(255) NOT NULL,
  `wifi` varchar(255) NOT NULL,
  `battery` varchar(255) NOT NULL,
  `battery_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `phone`
--

INSERT INTO `phone` (`id`, `name`, `brands`, `phone_image`, `release_date`, `view_count`, `phone_network`, `phone_sim`, `phone_sim_type`, `material`, `dimensions`, `weight`, `color`, `resolution`, `screen_size`, `technology`, `os`, `os_version`, `chipset`, `cpu`, `gpu`, `ram`, `storage`, `storage_type`, `main_camera`, `selfie_camera`, `nfc`, `usb`, `bluetooth`, `gps`, `wifi`, `battery`, `battery_type`) VALUES
(1, 'Infinix Hot 30i', 'Infinix', 'https://media.pricebook.co.id/images/product/150/98829_150_2.webp', '2023', 0, '3G, 4G', '2 slot(s)', 'Nano SIM', 'Glass front, plastic frame, plastic back', '75.7 x 164.0 x 8.4 mm', '191 g', 'Abu-abu, Biru', '720 x 1612 Pixel', '6.6 inch', 'IPS LCD', 'Android', 'XOS 12, Android 12', 'MediaTek, Helio G37', 'Octa Core, 2.3 GHz', 'PowerVR GE832 RAM', '8 GB', '128 GB', 'UFS 2.2', '50 MP', '5 MP', 'No', 'Type-C', 'Bluetooth 5.0, A2DP, LE', 'A-GPS, GPS', 'Mobile Hotspot, 802.11 a / b / g / n / ac, Dual Band', '5000 mAh', 'Non-Removable'),
(2, 'ROG Phone 5', 'Asus', 'https://media.pricebook.co.id/images/product/150/98829_150_2.webp', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(3, 'Redmi 10C', 'Xiaomi', 'https://media.pricebook.co.id/images/product/150/98829_150_2.webp', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(4, 'Redmi Note 10', 'Xiaomi', 'https://media.pricebook.co.id/images/product/150/98829_150_2.webp', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(5, 'ROG Phone 7', 'Asus', 'https://media.pricebook.co.id/images/product/150/98829_150_2.webp', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(6, 'Phone', 'Infinix', 'https://media.pricebook.co.id/images/product/150/98829_150_2.webp', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(7, 'Phone', 'Infinix', 'https://media.pricebook.co.id/images/product/150/98829_150_2.webp', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(8, 'Phone', 'Infinix', 'https://media.pricebook.co.id/images/product/150/98829_150_2.webp', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(9, 'Phone', 'Infinix', 'https://media.pricebook.co.id/images/product/150/98829_150_2.webp', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(10, 'Phone', 'Infinix', 'https://media.pricebook.co.id/images/product/150/98829_150_2.webp', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(11, 'Phone', 'Samsung', 'https://media.pricebook.co.id/images/product/150/98829_150_2.webp', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(12, 'Phone', 'Samsung', 'https://media.pricebook.co.id/images/product/150/98829_150_2.webp', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(13, 'phone', 'Apple', 'https://media.pricebook.co.id/images/product/150/98829_150_2.webp', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(14, 'Phone', 'Advan', 'https://media.pricebook.co.id/images/product/150/98829_150_2.webp', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(15, 'Phone', 'Advan', 'https://media.pricebook.co.id/images/product/150/98829_150_2.webp', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uname` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uname`, `pass`, `name`, `role`) VALUES
(1, 'admin', 'admin', 'admin', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `phone`
--
ALTER TABLE `phone`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `phone`
--
ALTER TABLE `phone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

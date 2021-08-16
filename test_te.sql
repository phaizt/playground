-- phpMyAdmin SQL Dump
-- version 5.1.0-rc2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 16, 2021 at 04:28 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_te`
--

-- --------------------------------------------------------

--
-- Table structure for table `challenges`
--

CREATE TABLE `challenges` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `studentId` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `googleDriveFolder` varchar(255) DEFAULT NULL,
  `gradingStatus` varchar(255) DEFAULT NULL,
  `grade` tinyint(4) DEFAULT NULL,
  `reviewerId` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `challenges`
--

INSERT INTO `challenges` (`id`, `studentId`, `name`, `googleDriveFolder`, `gradingStatus`, `grade`, `reviewerId`) VALUES
(1, 14, 'Zaam-Dox', NULL, NULL, NULL, 3),
(2, 13, 'Tresom', NULL, NULL, NULL, NULL),
(3, 15, 'Job', NULL, NULL, NULL, NULL),
(4, 2, 'Stim', NULL, NULL, NULL, NULL),
(5, 2, 'Y-find', NULL, NULL, NULL, NULL),
(6, 2, 'Redhold', NULL, NULL, NULL, NULL),
(7, 2, 'Alphazap', NULL, NULL, NULL, NULL),
(8, 7, 'Pannier', NULL, NULL, NULL, NULL),
(9, 8, 'Asoka', NULL, NULL, NULL, NULL),
(10, 12, 'Opela', NULL, NULL, NULL, NULL),
(11, 3, 'Fintone', NULL, NULL, NULL, NULL),
(12, 12, 'Latlux', NULL, NULL, NULL, NULL),
(13, 14, 'Hatity', NULL, NULL, NULL, NULL),
(14, 15, 'Opela', NULL, NULL, NULL, NULL),
(15, 13, 'Fix San', NULL, NULL, NULL, NULL),
(16, 15, 'Transcof', NULL, NULL, NULL, NULL),
(17, 4, 'Prodder', NULL, NULL, NULL, NULL),
(18, 13, 'Zathin', NULL, NULL, NULL, NULL),
(19, 11, 'Matsoft', NULL, NULL, NULL, NULL),
(20, 2, 'Zamit', NULL, NULL, NULL, NULL),
(21, 11, 'Temp', NULL, NULL, NULL, NULL),
(22, 2, 'Bitchip', NULL, NULL, NULL, NULL),
(23, 8, 'Flowdesk', NULL, NULL, NULL, NULL),
(24, 2, 'Cardguard', NULL, NULL, NULL, NULL),
(25, 4, 'Prodder', NULL, NULL, NULL, NULL),
(26, 10, 'Vagram', NULL, NULL, NULL, NULL),
(27, 8, 'Tampflex', NULL, NULL, NULL, NULL),
(28, 12, 'Bamity', NULL, NULL, NULL, NULL),
(29, 5, 'Zathin', NULL, NULL, NULL, NULL),
(30, 14, 'Bamity', NULL, NULL, NULL, NULL),
(31, 6, 'Holdlamis', NULL, NULL, NULL, NULL),
(32, 7, 'Daltfresh', NULL, NULL, NULL, NULL),
(33, 8, 'Opela', NULL, NULL, NULL, NULL),
(34, 12, 'Lotlux', NULL, NULL, NULL, NULL),
(35, 8, 'Lotstring', NULL, NULL, NULL, NULL),
(36, 14, 'Alphazap', NULL, NULL, NULL, NULL),
(37, 9, 'Konklab', NULL, NULL, NULL, NULL),
(38, 10, 'Viva', NULL, NULL, NULL, NULL),
(39, 5, 'Zoolab', NULL, NULL, NULL, NULL),
(40, 12, 'Fixflex', NULL, NULL, NULL, NULL),
(41, 9, 'Prodder', NULL, NULL, NULL, NULL),
(42, 10, 'Matsoft', NULL, NULL, NULL, NULL),
(43, 4, 'Stringtough', NULL, NULL, NULL, NULL),
(44, 11, 'Tempsoft', NULL, NULL, NULL, NULL),
(45, 8, 'Viva', NULL, NULL, NULL, NULL),
(46, 9, 'Fixflex', NULL, NULL, NULL, NULL),
(47, 11, 'Home Ing', NULL, NULL, NULL, NULL),
(48, 8, 'Tempsoft', NULL, NULL, NULL, NULL),
(49, 2, 'Transcof', NULL, NULL, NULL, NULL),
(50, 8, 'Zaam-Dox', NULL, NULL, NULL, NULL),
(51, 1, 'Home Ing', NULL, NULL, NULL, NULL),
(52, 6, 'Sonair', NULL, NULL, NULL, NULL),
(53, 15, 'Bigtax', NULL, NULL, NULL, NULL),
(54, 14, 'Trippledex', NULL, NULL, NULL, NULL),
(55, 11, 'Stronghold', NULL, NULL, NULL, NULL),
(56, 3, 'Konklab', NULL, NULL, NULL, NULL),
(57, 12, 'Wrapsafe', NULL, NULL, NULL, NULL),
(58, 14, 'Sub-Ex', NULL, NULL, NULL, NULL),
(59, 7, 'Latlux', NULL, NULL, NULL, NULL),
(60, 15, 'Sonsing', NULL, NULL, NULL, NULL),
(61, 12, 'Sonair', NULL, NULL, NULL, NULL),
(62, 9, 'Redhold', NULL, NULL, NULL, NULL),
(63, 9, 'Trippledex', NULL, NULL, NULL, NULL),
(64, 12, 'Holdlamis', NULL, NULL, NULL, NULL),
(65, 7, 'Y-find', NULL, NULL, NULL, NULL),
(66, 9, 'Domainer', NULL, NULL, NULL, NULL),
(67, 14, 'Zoolab', NULL, NULL, NULL, NULL),
(68, 6, 'Vagram', NULL, NULL, NULL, NULL),
(69, 5, 'Veribet', NULL, NULL, NULL, NULL),
(70, 10, 'Voltsillam', NULL, NULL, NULL, NULL),
(71, 15, 'Matsoft', NULL, NULL, NULL, NULL),
(72, 12, 'Otcom', NULL, NULL, NULL, NULL),
(73, 10, 'Konklux', NULL, NULL, NULL, NULL),
(74, 9, 'Tresom', NULL, NULL, NULL, NULL),
(75, 11, 'Tempsoft', NULL, NULL, NULL, NULL),
(76, 14, 'Fix San', NULL, NULL, NULL, NULL),
(77, 1, 'Domainer', NULL, NULL, NULL, NULL),
(78, 2, 'Alphazap', NULL, NULL, NULL, NULL),
(79, 1, 'Toughjoyfax', NULL, NULL, NULL, NULL),
(80, 2, 'Opela', NULL, NULL, NULL, NULL),
(81, 6, 'Rank', NULL, NULL, NULL, NULL),
(82, 8, 'Domainer', NULL, NULL, NULL, NULL),
(83, 11, 'Cardguard', NULL, NULL, NULL, NULL),
(84, 6, 'Sonsing', NULL, NULL, NULL, NULL),
(85, 5, 'Tresom', NULL, NULL, NULL, NULL),
(86, 2, 'Tin', NULL, NULL, NULL, NULL),
(87, 10, 'Otcom', NULL, NULL, NULL, NULL),
(88, 5, 'Cardify', NULL, NULL, NULL, NULL),
(89, 13, 'Sonsing', NULL, NULL, NULL, NULL),
(90, 12, 'Mat Lam Tam', NULL, NULL, NULL, NULL),
(91, 4, 'Fix San', NULL, NULL, NULL, NULL),
(92, 10, 'Trippledex', NULL, NULL, NULL, NULL),
(93, 4, 'Hatity', NULL, NULL, NULL, NULL),
(94, 1, 'Pannier', NULL, NULL, NULL, NULL),
(95, 15, 'Treeflex', NULL, NULL, NULL, NULL),
(96, 7, 'Daltfresh', NULL, NULL, NULL, NULL),
(97, 13, 'Konklab', NULL, NULL, NULL, NULL),
(98, 9, 'Zamit', NULL, NULL, NULL, NULL),
(99, 12, 'Home Ing', NULL, NULL, NULL, NULL),
(100, 8, 'Andalax', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `email`) VALUES
(1, 'Quincey', 'qferronier0@pinterest.com'),
(2, 'Alena', 'amaudson1@aboutads.info'),
(3, 'Sapphire', 'sleleu2@taobao.com'),
(4, 'Brantley', 'bfairey3@indiatimes.com'),
(5, 'Barbey', 'bdubois4@seattletimes.com'),
(6, 'Rosemarie', 'rscourfield5@auda.org.au'),
(7, 'Sabina', 'smaccoll6@usda.gov'),
(8, 'Vaclav', 'vtryme7@is.gd'),
(9, 'Bale', 'btopes8@scribd.com'),
(10, 'Kristo', 'kmitham9@fda.gov'),
(11, 'Tiffany', 'tgergera@gnu.org'),
(12, 'Merola', 'mcreevyb@eventbrite.com'),
(13, 'Merilee', 'mdadleyc@tuttocitta.it'),
(14, 'Eamon', 'esipsond@pcworld.com'),
(15, 'Anastasie', 'aquestiere@myspace.com'),
(16, 'Elle', 'emeneof@1und1.de'),
(17, 'Beauregard', 'bmackaing@independent.co.uk'),
(18, 'Shela', 'sbrandtsh@indiatimes.com'),
(19, 'Kennett', 'kfirthi@drupal.org'),
(20, 'Reagen', 'rmudgej@google.com.au');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `challenges`
--
ALTER TABLE `challenges`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `challenges`
--
ALTER TABLE `challenges`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

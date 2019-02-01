-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 25, 2019 at 01:36 AM
-- Server version: 5.6.21
-- PHP Version: 5.5.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `fiko_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_tbl`
--

CREATE TABLE IF NOT EXISTS `admin_tbl` (
`id` bigint(20) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(10) NOT NULL,
  `user_id` bigint(20) NOT NULL COMMENT 'for user table (id)'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `easy_question_tbl`
--

CREATE TABLE IF NOT EXISTS `easy_question_tbl` (
`id` bigint(20) NOT NULL,
  `question` text NOT NULL,
  `correct_answer` text NOT NULL,
  `wrong_answer_one` text NOT NULL,
  `wrong_answer_two` text NOT NULL,
  `wrong_answer_three` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `easy_question_tbl`
--

INSERT INTO `easy_question_tbl` (`id`, `question`, `correct_answer`, `wrong_answer_one`, `wrong_answer_two`, `wrong_answer_three`) VALUES
(1, 'What is the Capital City in the Philippines', 'Manila', 'Quezon City', 'Taguig City', 'Pasay City'),
(2, 'Who is the Nation Hero in the Philippines?', 'Dr. Jose P. Rizal', 'Emanuel Quezon', 'Benigno Aquino', 'Rodrigo Duterte');

-- --------------------------------------------------------

--
-- Table structure for table `easy_tbl`
--

CREATE TABLE IF NOT EXISTS `easy_tbl` (
`id` bigint(20) NOT NULL,
  `qoneeasy` bigint(20) NOT NULL,
  `qtwoeasy` bigint(20) NOT NULL,
  `qthreeeasy` bigint(20) NOT NULL,
  `qfoureasy` bigint(20) NOT NULL,
  `qfiveeasy` bigint(20) NOT NULL,
  `qsixeasy` bigint(20) NOT NULL,
  `qseveneasy` bigint(20) NOT NULL,
  `qeighteasy` bigint(20) NOT NULL,
  `qnineeasy` bigint(20) NOT NULL,
  `qteneasy` bigint(20) NOT NULL,
  `score_easy` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hard_tbl`
--

CREATE TABLE IF NOT EXISTS `hard_tbl` (
`id` bigint(20) NOT NULL,
  `qonehard` bigint(20) NOT NULL,
  `qtwohard` bigint(20) NOT NULL,
  `qthreehard` bigint(20) NOT NULL,
  `qfourhard` bigint(20) NOT NULL,
  `qfivehard` bigint(20) NOT NULL,
  `qsixhard` bigint(20) NOT NULL,
  `qsevenhard` bigint(20) NOT NULL,
  `qeighthard` bigint(20) NOT NULL,
  `qninehard` bigint(20) NOT NULL,
  `qtenhard` bigint(20) NOT NULL,
  `score_hard` bigint(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `medium_tbl`
--

CREATE TABLE IF NOT EXISTS `medium_tbl` (
`id` bigint(20) NOT NULL,
  `qonemedium` bigint(20) NOT NULL,
  `qtwomedium` bigint(20) NOT NULL,
  `qthreemedium` bigint(20) NOT NULL,
  `qfourmedium` bigint(20) NOT NULL,
  `qfivemedium` bigint(20) NOT NULL,
  `qsixmedium` bigint(20) NOT NULL,
  `qsevenmedium` bigint(20) NOT NULL,
  `qeightmedium` bigint(20) NOT NULL,
  `qninemedium` bigint(20) NOT NULL,
  `qtenmedium` bigint(20) NOT NULL,
  `score_medium` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `record_tbl`
--

CREATE TABLE IF NOT EXISTS `record_tbl` (
`id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `score_id` bigint(20) NOT NULL,
  `total_score` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `score_tbl`
--

CREATE TABLE IF NOT EXISTS `score_tbl` (
`id` int(11) NOT NULL,
  `score_easy` int(11) NOT NULL,
  `score_medium` int(11) NOT NULL,
  `score_hard` int(11) NOT NULL,
  `total_hard` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_tbl`
--

CREATE TABLE IF NOT EXISTS `user_tbl` (
`id` bigint(20) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `middlename` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `birthdate` date NOT NULL,
  `gender` varchar(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `salt` varchar(8) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_tbl`
--

INSERT INTO `user_tbl` (`id`, `firstname`, `middlename`, `lastname`, `birthdate`, `gender`, `username`, `password`, `salt`, `role_id`) VALUES
(1, 'antonette', 'alilong', 'alarcon', '1998-08-31', 'Female', 'tonette', 'tonette', '', 1),
(2, 'Michael', 'Malda', 'Masan', '1999-04-18', 'Male', 'michael', '$2y$10$OLvFQEMg9Gs.gujGKrtDNuZPNz1ULZYYE8oUks5Lwye', '97426488', 2),
(3, 'Antonette', 'Alilong', 'Alarcon', '1998-08-31', 'female', 'tonyet', 'tonyet', '', 1),
(4, 'Antonette', 'Alilong', 'Alarcon', '1998-08-31', 'Female', 'tonyet', 'tonyet', 'salt', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_tbl`
--
ALTER TABLE `admin_tbl`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `easy_question_tbl`
--
ALTER TABLE `easy_question_tbl`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `easy_tbl`
--
ALTER TABLE `easy_tbl`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hard_tbl`
--
ALTER TABLE `hard_tbl`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medium_tbl`
--
ALTER TABLE `medium_tbl`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `record_tbl`
--
ALTER TABLE `record_tbl`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `score_tbl`
--
ALTER TABLE `score_tbl`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_tbl`
--
ALTER TABLE `user_tbl`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_tbl`
--
ALTER TABLE `admin_tbl`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `easy_question_tbl`
--
ALTER TABLE `easy_question_tbl`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `easy_tbl`
--
ALTER TABLE `easy_tbl`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `hard_tbl`
--
ALTER TABLE `hard_tbl`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `medium_tbl`
--
ALTER TABLE `medium_tbl`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `record_tbl`
--
ALTER TABLE `record_tbl`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `score_tbl`
--
ALTER TABLE `score_tbl`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user_tbl`
--
ALTER TABLE `user_tbl`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

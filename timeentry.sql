-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2020 at 11:45 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `timeapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `timeentry`
--

CREATE TABLE `timeentry` (
  `ID` int(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `service` varchar(255) NOT NULL,
  `manager` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `startdate` varchar(255) NOT NULL,
  `enddate` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `timeentry`
--

INSERT INTO `timeentry` (`ID`, `client`, `title`, `service`, `manager`, `password`, `username`, `startdate`, `enddate`) VALUES
(1, 'Lesroy', 'Project Manager', 'Project Proposal', 'Susan Smith', '1234', 'CThomas', '20/06/2021', '20/07/2021'),
(2, 'Chin lee', 'UI/UX Developer', 'Redesign website', 'Susan Smith', '1234', 'TAnothony098', '08/05/2020', '20/07/2020'),
(3, 'Chin lo', 'Web Developer', 'Widget Implementation', 'Susan Smith', '1234', 'kSmith', '20/02/2020', '20/03/2020');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `timeentry`
--
ALTER TABLE `timeentry`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `timeentry`
--
ALTER TABLE `timeentry`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

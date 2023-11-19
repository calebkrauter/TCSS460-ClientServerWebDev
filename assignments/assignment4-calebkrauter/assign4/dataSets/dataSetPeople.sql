-- Caleb Krauter,
-- TCSS 460 A4 dataset, based on assign4.sql 
-- WA Population Statistics.
DROP DATABASE IF EXISTS `peopleStatsdb`;
CREATE DATABASE IF NOT EXISTS `peopleStatsdb`;
USE `peopleStatsdb`;

-- Table structure
CREATE TABLE `people` (
    `ID` double NOT NULL,
    `Name` varchar(50) NOT NULL,
    `Job` varchar(50) NOT NULL,
    `Living` varchar(3) NOT NULL,
    `Religion` varchar(50) NOT NULL,
    `Sex` varchar(10) NOT NULL
) 
-- The ENGINE -> the storage engine used. InnoDB is a popular storage
--      engine in MySQL.
-- The CHARSET -> Defines how characters get stored.
-- COLLATE -> Sets the collation for the character set and defines
--      the way in which string comparison should be performed. 'ci'
--      stand for case-insensitive.
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Populating random data in the table for individual human stats.
-- Data population is generated from ChatGPT 3.5 based on the following prompt:
-- INSERT INFO `people` (`ID`, `Name`, `Job`, `Living`, `Religion`, `Sex`) VALUES,
--      I need 20 lines like this with random input for each of the variables.
--       ID should be random, unique and four digits long. Living should be yes or no.
--      Make sure everyone has religion or none. 
--      There should only be five job titles for 'Job' used and they should be tech related. 
--      Use Front End Programmer, IT Help Desk, Manager, Full Stack Developer, Systems Developer.
-- ChatGPT generation Start--------
INSERT INTO `people` (`ID`, `Name`, `Job`, `Living`, `Religion`, `Sex`) VALUES
(1001, 'John Doe', 'Front End Programmer', 'yes', 'Christianity', 'Male'),
(1002, 'Jane Doe', 'IT Help Desk', 'no', NULL, 'Female'),
(1003, 'Alice Smith', 'Manager', 'yes', 'Buddhism', 'Female'),
(1004, 'Bob Johnson', 'Full Stack Developer', 'yes', 'None', 'Male'),
(1005, 'John Doe', 'Systems Developer', 'no', 'Hinduism', 'Male'),
(1006, 'Mary Johnson', 'Front End Programmer', 'yes', NULL, 'Female'),
(1007, 'Alice Smith', 'IT Help Desk', 'no', 'Judaism', 'Female'),
(1008, 'Charlie Brown', 'Manager', 'no', NULL, 'Male'),
(1009, 'David Williams', 'Full Stack Developer', 'yes', 'Islam', 'Male'),
(1010, 'Jane Doe', 'Systems Developer', 'yes', NULL, 'Female'),
(1011, 'John Doe', 'Front End Programmer', 'no', 'Christianity', 'Male'),
(1012, 'Alice Smith', 'IT Help Desk', 'yes', 'None', 'Female'),
(1013, 'Bob Johnson', 'Manager', 'yes', 'Buddhism', 'Male'),
(1014, 'Mary Johnson', 'Full Stack Developer', 'no', 'Hinduism', 'Female'),
(1015, 'David Williams', 'Systems Developer', 'yes', 'Judaism', 'Male'),
(1016, 'Jane Doe', 'Front End Programmer', 'no', NULL, 'Female'),
(1017, 'Charlie Brown', 'IT Help Desk', 'yes', 'Islam', 'Male'),
(1018, 'Alice Smith', 'Manager', 'yes', 'None', 'Female'),
(1019, 'John Doe', 'Full Stack Developer', 'no', 'Christianity', 'Male'),
(1020, 'Mary Johnson', 'Systems Developer', 'yes', 'Buddhism', 'Female');

-- ChatGPT generation End--------
COMMIT;
-- Caleb Krauter,
-- TCSS 460 A4 dataset, based on assign4.sql 
-- WA Population Statistics.
DROP DATABASE IF EXISTS `peopleStatsdb`;
CREATE DATABASE IF NOT EXISTS `peopleStatsdb`;
USE `peopleStatsdb`;

-- Table structure
CREATE TABLE `people` (
    `Name` varchar(50) NOT NULL,
    `ID` double NOT NULL,
    `Weight` double NOT NULL,
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
-- INSERT INFO `people` (`Name`, `ID`, `Weight`, `Living`, `Religion`, `Sex`) VALUES,
--      I need 15 lines like this with random input for each of the variables.
--      ID should be four digits long and unique. Living should be yes or no.
--      Make sure everyone has religion or none.
-- ChatGPT generation Start--------
INSERT INTO `people` (`Name`, `ID`, `Weight`, `Living`, `Religion`, `Sex`) VALUES
('John Smith', 1234, 75.5, 'Yes', 'Christianity', 'Male'),
('Alice Johnson', 5678, 61.2, 'Yes', 'None', 'Female'),
('Robert Davis', 7890, 80.8, 'No', 'Islam', 'Male'),
('Emily White', 2345, 55.0, 'Yes', 'Buddhism', 'Female'),
('Michael Brown', 6789, 92.3, 'Yes', 'Hinduism', 'Male'),
('Emma Miller', 8901, 68.7, 'No', 'None', 'Female'),
('Daniel Wilson', 3456, 71.9, 'Yes', 'Judaism', 'Male'),
('Sophia Taylor', 9012, 60.1, 'No', 'Sikhism', 'Female'),
('Matthew Martinez', 4567, 88.4, 'Yes', 'None', 'Male'),
('Olivia Anderson', 1235, 52.3, 'Yes', 'Christianity', 'Female'),
('Andrew Moore', 6781, 77.0, 'No', 'None', 'Male'),
('Ava Garcia', 3458, 65.8, 'Yes', 'Islam', 'Female'),
('William Clark', 9014, 83.2, 'Yes', 'None', 'Male'),
('Grace Adams', 5673, 58.6, 'No', 'Hinduism', 'Female'),
('Ethan Turner', 2341, 70.5, 'Yes', 'None', 'Male');

-- ChatGPT generation End--------
COMMIT;
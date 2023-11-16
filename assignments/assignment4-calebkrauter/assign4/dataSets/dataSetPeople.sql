-- Caleb Krauter,
-- TCSS 460 A4 dataset, based on assign4.sql 
-- WA Population Statistics.
DROP DATABASE IF EXISTS `peopleStatsdb`;
CREATE DATABASE IF NOT EXISTS `peopleStatsdb`;
USE `peopleStatsdb`;

-- Table structure
CREATE TABLE 'people' (
    `Name` varchar(50) NOT NULL,
    `Age` double NOT NULL,
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
-- "INSERT INFO `people` (`Name`, `Age`, `Weight`, `Living`, `Religion`, `Sex`) VALUES, 
--      I need 15 lines like this with random input for each of the variables"
-- ChatGPT generation Start--------
INSERT INTO `people` (`Name`, `Age`, `Weight`, `Living`, `Religion`, `Sex`) VALUES
('John Smith', 28, 160, 'New York', 'Christianity', 'Male'),
('Alice Johnson', 35, 130, 'Los Angeles', 'Judaism', 'Female'),
('Michael Davis', 22, 180, 'Chicago', 'Islam', 'Male'),
('Emily White', 40, 150, 'San Francisco', 'Buddhism', 'Female'),
('Daniel Brown', 33, 170, 'Seattle', 'Hinduism', 'Male'),
('Sophia Lee', 25, 120, 'Miami', 'None', 'Female'),
('Christopher Miller', 45, 200, 'Dallas', 'Christianity', 'Male'),
('Olivia Taylor', 30, 140, 'Atlanta', 'Atheism', 'Female'),
('William Harris', 29, 165, 'Denver', 'Judaism', 'Male'),
('Emma Martinez', 38, 155, 'Phoenix', 'Agnosticism', 'Female'),
('Ryan Wilson', 31, 175, 'Boston', 'Islam', 'Male'),
('Ava Garcia', 27, 145, 'Houston', 'Buddhism', 'Female'),
('Matthew Thomas', 42, 190, 'Portland', 'Hinduism', 'Male'),
('Isabella Rodriguez', 26, 135, 'San Diego', 'Christianity', 'Female'),
('Ethan Moore', 34, 185, 'Minneapolis', 'Atheism', 'Male');
-- ChatGPT generation End--------
COMMIT;
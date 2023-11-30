-- Caleb Krauter,
-- TCSS 460 A4 dataset, based on assign4.sql 
-- WA Population Statistics.
DROP DATABASE IF EXISTS `cpuBuyersFilterDB`;
CREATE DATABASE IF NOT EXISTS `cpuBuyersFilterDB`;
USE `cpuBuyersFilterDB`;

-- Table structure
CREATE TABLE `cpus` (
    `cpuBrand` varchar(10) NOT NULL,
    `price` int NOT NULL,
    `coreCount` int NOT NULL,
    `serialNumber` int NOT NULL,
    `speed` double NOT NULL,
    `socketType` varchar(3) NOT NULL,
    `condition` varchar(10) NOT NULL
) 

-- The ENGINE -> the storage engine used. InnoDB is a popular storage
--      engine in MySQL.
-- The CHARSET -> Defines how characters get stored.
-- COLLATE -> Sets the collation for the character set and defines
--      the way in which string comparison should be performed. 'ci'
--      stand for case-insensitive.
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- INSERT INFO `cpus` (`cpuBrand`, `price`,  `coreCount`,  `speed`, `socketType`, `condition`) VALUES,
--      I need 20 lines like this with random input for each of the variables.
--      Cpu brands include Intel, AMD and ARM.
--      You decide prices based on last known knowledge.
--      Core count includes 4,6,8,16.
--      Speed based on your last known knowledge.
--      Socket Type LGA or PGA.
--      Condition is New, used or renewed.
--      The serial number should be unique and random on each and only be 6 integers long.
--      Some of the cpus should have same brand, price, core count and speed and socket type 
--      and condition with the exception of the serial number.
-- Data population is generated from ChatGPT 3.5 based on the following prompt:
INSERT INTO `cpus` (`cpuBrand`, `price`, `serialNumber`, `coreCount`, `speed`, `socketType`, `condition`)
VALUES
('Intel', 300, 123456, 4, 3.2, 'LGA', 'New'),
('AMD', 250, 654321, 6, 3.8, 'PGA', 'Used'),
('ARM', 150, 987654, 8, 2.5, 'LGA', 'Renewed'),
('Intel', 300, 234567, 4, 3.2, 'LGA', 'New'),
('AMD', 250, 765432, 6, 3.8, 'PGA', 'Used'),
('ARM', 150, 876543, 8, 2.5, 'LGA', 'Renewed'),
('Intel', 400, 345678, 16, 4.0, 'PGA', 'New'),
('AMD', 350, 543210, 8, 3.5, 'LGA', 'Used'),
('ARM', 200, 765890, 6, 2.0, 'PGA', 'Renewed'),
('Intel', 400, 456789, 16, 4.0, 'PGA', 'New'),
('AMD', 350, 432109, 8, 3.5, 'LGA', 'Used'),
('ARM', 200, 567890, 6, 2.0, 'PGA', 'Renewed'),
('Intel', 250, 678901, 4, 2.8, 'LGA', 'Used'),
('AMD', 200, 789012, 6, 3.0, 'PGA', 'Renewed'),
('ARM', 100, 890123, 8, 2.2, 'LGA', 'New'),
('Intel', 250, 890567, 4, 2.8, 'LGA', 'Used'),
('AMD', 200, 901234, 6, 3.0, 'PGA', 'Renewed'),
('ARM', 100, 901345, 8, 2.2, 'LGA', 'New'),
('Intel', 300, 902345, 4, 3.2, 'LGA', 'New'),
('AMD', 250, 903456, 6, 3.8, 'PGA', 'Used'),
('ARM', 150, 904567, 8, 2.5, 'LGA', 'Renewed');
-- ChatGPT generation End--------
COMMIT;
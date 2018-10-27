DROP DATABASE IF EXISTS nate_db;
CREATE DATABASE nate_db;
USE nate_db;

DROP TABLE IF EXISTS `performance`;
CREATE TABLE `performance` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `date` DATETIME,
    `clubName` varchar(255) NOT NULL,
    `location` varchar(255) NOT NULL,
    `website` varchar(255),
    PRIMARY KEY (`id`)
);

INSERT INTO `performance` (date, clubName, location, website)
    VALUES ('2017-08-09 17:30:00', 'Oman Comedy Central', 'Muscat, Oman', 'http://www.titanee.com/occ');
INSERT INTO `performance` (date, clubName, location, website)
    VALUES ('2017-09-05 18:30:00', 'The Shit Hole', 'Chicago, IL', 'http://www.shitholehq.com');
INSERT INTO `performance` (date, clubName, location, website)
    VALUES ('2018-11-15 20:30:00', 'The Loft Moscow', 'Moscow, Russia', 'http://www.google.com');
INSERT INTO `performance` (date, clubName, location, website)
    VALUES ('2019-01-11 21:45:00', 'Art-Lab Medovarus', 'St. Peterburg, Russia', 'http://www.nhl.com');


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fName` varchar(50) NOT NULL,
  `lName` varchar(50) NOT NULL,
  `role` varchar(50) DEFAULT 'USER',
  PRIMARY KEY (`id`)
);

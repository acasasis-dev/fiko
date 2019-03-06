-- MySQL dump 10.16  Distrib 10.1.37-MariaDB, for Win32 (AMD64)
--
-- Host: localhost    Database: fiko_db
-- ------------------------------------------------------
-- Server version	10.1.37-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_tbl`
--

DROP TABLE IF EXISTS `admin_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin_tbl` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(10) NOT NULL,
  `user_id` bigint(20) NOT NULL COMMENT 'for user table (id)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_tbl`
--

LOCK TABLES `admin_tbl` WRITE;
/*!40000 ALTER TABLE `admin_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `choices`
--

DROP TABLE IF EXISTS `choices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `choices` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `cdesc` varchar(50) NOT NULL,
  `qid` int(11) NOT NULL,
  `is_correct` int(1) NOT NULL,
  PRIMARY KEY (`cid`),
  KEY `qid` (`qid`),
  CONSTRAINT `choices_ibfk_1` FOREIGN KEY (`qid`) REFERENCES `questions` (`qid`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `choices`
--

LOCK TABLES `choices` WRITE;
/*!40000 ALTER TABLE `choices` DISABLE KEYS */;
INSERT INTO `choices` VALUES (1,'I',1,1),(2,'Z',1,0),(3,'T',1,0),(4,'R',1,0),(5,'S',2,0),(6,'O',2,1),(7,'U',2,0),(8,'M',2,0),(9,'X',3,0),(10,'G',3,0),(11,'A',3,1),(12,'L',3,0),(13,'J',4,0),(14,'N',4,0),(15,'Y',4,0),(16,'E',4,1),(17,'Ya',5,1),(18,'Ta',5,0),(19,'Va',5,0),(20,'Ma',5,0),(21,'Lae',6,0),(22,'Pae',6,0),(23,'Dae',6,0),(24,'Wae',6,1),(25,'P',7,0),(26,'U',7,1),(27,'K',7,0),(28,'N',7,0),(29,'Aeo',8,0),(30,'Geo',8,0),(31,'Yeo',8,1),(32,'Seo',8,0),(33,'Hi',9,0),(34,'Wi',9,1),(35,'Ki',9,0),(36,'Di',9,0),(37,'Tu',10,0),(38,'Ou',10,0),(39,'Yu',10,1),(40,'Uu',10,0);
/*!40000 ALTER TABLE `choices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `easy_question_tbl`
--

DROP TABLE IF EXISTS `easy_question_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `easy_question_tbl` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `question` text NOT NULL,
  `correct_answer` text NOT NULL,
  `wrong_answer_one` text NOT NULL,
  `wrong_answer_two` text NOT NULL,
  `wrong_answer_three` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `easy_question_tbl`
--

LOCK TABLES `easy_question_tbl` WRITE;
/*!40000 ALTER TABLE `easy_question_tbl` DISABLE KEYS */;
INSERT INTO `easy_question_tbl` VALUES (1,'What is the Capital City in the Philippines','Manila','Quezon City','Taguig City','Pasay City'),(2,'Who is the Nation Hero in the Philippines?','Dr. Jose P. Rizal','Emanuel Quezon','Benigno Aquino','Rodrigo Duterte');
/*!40000 ALTER TABLE `easy_question_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `easy_tbl`
--

DROP TABLE IF EXISTS `easy_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `easy_tbl` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
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
  `score_easy` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `easy_tbl`
--

LOCK TABLES `easy_tbl` WRITE;
/*!40000 ALTER TABLE `easy_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `easy_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hard_tbl`
--

DROP TABLE IF EXISTS `hard_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hard_tbl` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
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
  `score_hard` bigint(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hard_tbl`
--

LOCK TABLES `hard_tbl` WRITE;
/*!40000 ALTER TABLE `hard_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `hard_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medium_tbl`
--

DROP TABLE IF EXISTS `medium_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medium_tbl` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
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
  `score_medium` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medium_tbl`
--

LOCK TABLES `medium_tbl` WRITE;
/*!40000 ALTER TABLE `medium_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `medium_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `qid` int(11) NOT NULL AUTO_INCREMENT,
  `qdesc` varchar(100) DEFAULT NULL,
  `qpic` varchar(50) NOT NULL,
  `qdif` int(1) NOT NULL,
  `skid` int(11) NOT NULL,
  PRIMARY KEY (`qid`),
  KEY `skid` (`skid`),
  CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`skid`) REFERENCES `skills` (`skid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'','i.png',1,1),(2,'','o.png',1,1),(3,'','a.png',1,1),(4,'','e.png',1,1),(5,'','ya.png',1,1),(6,'','wae.png',1,1),(7,'','u.png',1,1),(8,'','yeo.png',1,1),(9,'','wi.png',1,1),(10,'','yu.png',1,1);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `record_tbl`
--

DROP TABLE IF EXISTS `record_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `record_tbl` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `score_id` bigint(20) NOT NULL,
  `total_score` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record_tbl`
--

LOCK TABLES `record_tbl` WRITE;
/*!40000 ALTER TABLE `record_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `record_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `score_tbl`
--

DROP TABLE IF EXISTS `score_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `score_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `score_easy` int(11) NOT NULL,
  `score_medium` int(11) NOT NULL,
  `score_hard` int(11) NOT NULL,
  `total_hard` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `score_tbl`
--

LOCK TABLES `score_tbl` WRITE;
/*!40000 ALTER TABLE `score_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `score_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skills` (
  `skid` int(11) NOT NULL AUTO_INCREMENT,
  `skdesc` varchar(50) NOT NULL,
  PRIMARY KEY (`skid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (1,'Vowels'),(2,'Consonants'),(3,'Mixed Vowels & Consonants'),(4,'Numbers'),(5,'Animals'),(6,'Vehicles'),(7,'Occassion'),(8,'Greetings'),(9,'Formalization'),(10,'Spot The Incorrect'),(11,'Sentence');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test` (
  `id` int(11) DEFAULT NULL,
  `question` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (1,'????');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_tbl`
--

DROP TABLE IF EXISTS `user_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_tbl` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,
  `middlename` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `birthdate` date NOT NULL,
  `gender` varchar(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `salt` varchar(8) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_tbl`
--

LOCK TABLES `user_tbl` WRITE;
/*!40000 ALTER TABLE `user_tbl` DISABLE KEYS */;
INSERT INTO `user_tbl` VALUES (1,'antonette','alilong','alarcon','1998-08-31','Female','tonette','tonette','',1),(2,'Michael','Malda','Masan','1999-04-18','Male','michael','$2y$10$OLvFQEMg9Gs.gujGKrtDNuZPNz1ULZYYE8oUks5Lwye','97426488',2),(3,'Antonette','Alilong','Alarcon','1998-08-31','female','tonyet','tonyet','',1),(4,'Antonette','Alilong','Alarcon','1998-08-31','Female','tonyet','tonyet','salt',1);
/*!40000 ALTER TABLE `user_tbl` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-06 23:18:30

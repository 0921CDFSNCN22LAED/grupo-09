-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: pirupi_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `consoles`
--

DROP TABLE IF EXISTS `consoles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consoles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `console_image` varchar(50) NOT NULL,
  `logo` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consoles`
--

LOCK TABLES `consoles` WRITE;
/*!40000 ALTER TABLE `consoles` DISABLE KEYS */;
/*!40000 ALTER TABLE `consoles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consoles_games`
--

DROP TABLE IF EXISTS `consoles_games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consoles_games` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `console_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `consoles_games_FK` (`console_id`),
  KEY `consoles_games_FK_1` (`game_id`),
  CONSTRAINT `consoles_games_FK` FOREIGN KEY (`console_id`) REFERENCES `consoles` (`id`),
  CONSTRAINT `consoles_games_FK_1` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consoles_games`
--

LOCK TABLES `consoles_games` WRITE;
/*!40000 ALTER TABLE `consoles_games` DISABLE KEYS */;
/*!40000 ALTER TABLE `consoles_games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `game_image` varchar(50) NOT NULL,
  `genre_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `games_FK` (`genre_id`),
  CONSTRAINT `games_FK` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `joystick_colors`
--

DROP TABLE IF EXISTS `joystick_colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `joystick_colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `color_hex` varchar(7) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `joystick_colors`
--

LOCK TABLES `joystick_colors` WRITE;
/*!40000 ALTER TABLE `joystick_colors` DISABLE KEYS */;
/*!40000 ALTER TABLE `joystick_colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `memories`
--

DROP TABLE IF EXISTS `memories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `memories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `memory` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memories`
--

LOCK TABLES `memories` WRITE;
/*!40000 ALTER TABLE `memories` DISABLE KEYS */;
/*!40000 ALTER TABLE `memories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_colors`
--

DROP TABLE IF EXISTS `product_colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `color_hex` varchar(7) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_colors`
--

LOCK TABLES `product_colors` WRITE;
/*!40000 ALTER TABLE `product_colors` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `product_image` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase`
--

DROP TABLE IF EXISTS `purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `shoping_cart_id` int(11) NOT NULL,
  `user_id_address` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `purchase_FK` (`shoping_cart_id`),
  KEY `purchase_FK_1` (`user_id_address`),
  CONSTRAINT `purchase_FK` FOREIGN KEY (`shoping_cart_id`) REFERENCES `shopping_cart` (`id`),
  CONSTRAINT `purchase_FK_1` FOREIGN KEY (`user_id_address`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase`
--

LOCK TABLES `purchase` WRITE;
/*!40000 ALTER TABLE `purchase` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_cart`
--

DROP TABLE IF EXISTS `shopping_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `memory_id` int(11) NOT NULL,
  `joystick_color_id` int(11) NOT NULL,
  `product_color_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `shopping_cart_FK` (`user_id`),
  KEY `shopping_cart_FK_1` (`memory_id`),
  KEY `shopping_cart_FK_2` (`joystick_color_id`),
  KEY `shopping_cart_FK_3` (`product_color_id`),
  KEY `shopping_cart_FK_4` (`product_id`),
  CONSTRAINT `shopping_cart_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `shopping_cart_FK_1` FOREIGN KEY (`memory_id`) REFERENCES `memories` (`id`),
  CONSTRAINT `shopping_cart_FK_2` FOREIGN KEY (`joystick_color_id`) REFERENCES `joystick_colors` (`id`),
  CONSTRAINT `shopping_cart_FK_3` FOREIGN KEY (`product_color_id`) REFERENCES `product_colors` (`id`),
  CONSTRAINT `shopping_cart_FK_4` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_cart`
--

LOCK TABLES `shopping_cart` WRITE;
/*!40000 ALTER TABLE `shopping_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `user_name` varchar(12) NOT NULL,
  `address` text NOT NULL,
  `password` varchar(100) NOT NULL,
  `user_image` varchar(50) NOT NULL,
  `admin` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@gmail.com','admin','Calle Falsa 123','$2a$10$GG54JDDq2r/GWUFe.uCfpu6eKjx9grZhgkHJmlhlnKjss1VP2a14q','1641858386894_avatar.jpg',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'pirupi_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-03 20:03:49

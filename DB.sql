  -- phpMyAdmin SQL Dump
  -- version 4.7.7
  -- https://www.phpmyadmin.net/
  --
  -- Хост: localhost
  -- Время создания: Май 13 2018 г., 07:13
  -- Версия сервера: 5.7.21
  -- Версия PHP: 5.6.30

  SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
  SET AUTOCOMMIT = 0;
  START TRANSACTION;
  SET time_zone = "+00:00";


  /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
  /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
  /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
  /*!40101 SET NAMES utf8mb4 */;

  --
  -- Структура таблицы `addresses`
  --
  -- Создание: Май 12 2018 г., 22:02
  --

  DROP TABLE IF EXISTS `addresses`;
  CREATE TABLE `addresses` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `city` varchar(20) NOT NULL,
    `street` varchar(50) NOT NULL,
    `home` int(11) NOT NULL,
    `number` bigint(20) NOT NULL,
    `emergency_state` boolean NOT NULL,
    `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

  --
  -- Дамп данных таблицы `addresses`
  --

  INSERT INTO `addresses` (`id`, `city`, `street`, `home`, `number`, `timestamp`) VALUES
  (1, 'Новосибирск', 'Ленина', 1, 89231321797, '2018-05-12 20:02:27'),
  (2, 'Новосибирск', 'Богаткова', 201, 89139745778, '2018-05-12 20:22:15');

  -- --------------------------------------------------------

  --
  -- Структура таблицы `flats`
  --
  -- Создание: Май 12 2018 г., 20:36
  -- Последнее обновление: Май 12 2018 г., 21:26
  --

  DROP TABLE IF EXISTS `flats`;
  CREATE TABLE `flats` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `home_id` int(11) NOT NULL,
    `flat` int(11) NOT NULL,
    `security` varchar(280) NOT NULL,
    `fire_alarm` varchar(280) NOT NULL,
    `leak` varchar(280) NOT NULL,
    `magnet_field` varchar(280) NOT NULL,
    `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

  --
  -- Дамп данных таблицы `flats`
  --

  INSERT INTO `flats` (`id`, `home_id`, `flat`, `security`, `fire_alarm`, `leak`, `magnet_field`, `timestamp`) VALUES
  (1, 1, 1, '1', '1', '1', '1', '2018-05-12 20:48:26'),
  (2, 1, 2, '1', '1', '0', '0', '2018-05-12 20:49:27'),
  (3, 2, 1, '1', '0', '1', '1', '2018-05-12 20:49:48');

  -- --------------------------------------------------------

  --
  -- Структура таблицы `history`
  --
  -- Создание: Май 12 2018 г., 21:31
  -- Последнее обновление: Май 12 2018 г., 22:40
  --

  DROP TABLE IF EXISTS `history`;
  CREATE TABLE `history` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `flat_id` int(11) NOT NULL,
    `security` varchar(280) NOT NULL,
    `fire_alarm` varchar(280) NOT NULL,
    `leak` varchar(280) NOT NULL,
    `magnet_field` varchar(280) NOT NULL,
    `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

  --
  -- Дамп данных таблицы `history`
  --

  INSERT INTO `history` (`id`, `flat_id`, `security`, `fire_alarm`, `leak`, `magnet_field`, `timestamp`) VALUES
  (1, 1, '1', '1', '1', '1', '2018-05-12 22:38:05'),
  (2, 1, '1', '1', '0', '1', '2018-05-12 22:38:26'),
  (3, 1, '1', '1', '1', '1', '2018-05-12 22:38:33'),
  (4, 1, '0', '1', '1', '1', '2018-05-12 22:38:47'),
  (5, 1, '1', '1', '1', '1', '2018-05-12 22:38:56'),
  (6, 2, '1', '1', '1', '1', '2018-05-12 22:39:19'),
  (7, 3, '1', '1', '1', '1', '2018-05-12 22:39:28'),
  (8, 3, '1', '0', '0', '0', '2018-05-12 22:39:42'),
  (9, 3, '1', '1', '1', '0', '2018-05-12 22:39:55'),
  (10, 3, '1', '1', '1', '1', '2018-05-12 22:40:09');

  /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
  /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
  /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

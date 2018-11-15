-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-11-2018 a las 00:07:00
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `final`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `paquetes` varchar(100) NOT NULL,
  `dulces` varchar(100) NOT NULL,
  `user` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`paquetes`, `dulces`, `user`) VALUES
('', '', ''),
('0', '1', ''),
('0', 'Skittles', ''),
('Paquete 2', 'Skittles', ''),
('Paquete 1', 'Skittles', 'invitado'),
('Paquete 1', 'Skittles', 'invitado'),
('Paquete 1', 'Skittles', 'invitado'),
('Paquete 3', 'Skittles', 'invitado'),
('Paquete 3', 'Skittles', 'invitado'),
('Paquete 3', 'Skittles', 'invitado'),
('Paquete 2', 'Skittles', 'invitado'),
('Paquete 1', 'Skittles', 'Array'),
('Paquete 1', 'Skittles', 'Array'),
('Paquete 2', 'Skittles', 'Array'),
('Paquete 2', 'Skittles', 'invitado'),
('Paquete 1', 'Skittles', 'invitado'),
('Paquete 2', 'Skittles', 'Array'),
('Paquete 3', 'Skittles', 'd'),
('Paquete 2', 'Skittles', 'dani'),
('Paquete 3', 'Helado', 'dani'),
('Paquete 2', 'Skittles', 'dani'),
('Paquete 2', 'Skittles', 'dani'),
('Paquete 2', 'Skittles', 'dani'),
('Paquete 2', 'Skittles', 'dani'),
('Paquete 2', 'Helado', 'marco');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`username`, `password`, `email`) VALUES
('dani', 'danidani', 'dani@dani.com'),
('jon', '1234', 'danibadboy97@hotmail.com'),
('dani', '1234', 'hola@hola.com'),
('hola', '123', 'dani@dani.es'),
('mikel', '1234', 'elsa@scola.com'),
('marco', '0617', 'marco!@hotmail.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

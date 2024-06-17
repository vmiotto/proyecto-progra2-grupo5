-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 13-06-2024 a las 20:25:18
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoIntegrador`
--
CREATE DATABASE IF NOT EXISTS `proyectoIntegrador` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `proyectoIntegrador`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `comentario` varchar(100) DEFAULT NULL,
  `producto_id` int(10) UNSIGNED DEFAULT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`comentario`, `producto_id`, `usuario_id`, `id`, `updated_at`, `created_at`, `deleted_at`) VALUES
('¡Qué impresionante diseño tiene este auto!', 1, 1, 1, NULL, NULL, NULL),
('Realmente me encanta el interior de este Mercedes.', 1, 2, 2, NULL, NULL, NULL),
('El rendimiento de este auto es excepcional.', 1, 3, 3, NULL, NULL, NULL),
('El Audi A8 es una obra maestra de la ingeniería.', 2, 1, 4, NULL, NULL, NULL),
('¡El sistema de sonido en este Audi es increíble!', 2, 2, 5, NULL, NULL, NULL),
('Me siento muy seguro conduciendo un Audi.', 2, 3, 6, NULL, NULL, NULL),
('El BMW Serie 7 tiene una elegancia imponente.', 3, 1, 7, NULL, NULL, NULL),
('¡El BMW Serie 7 es una belleza en la carretera!', 3, 2, 8, NULL, NULL, NULL),
('Un sueño hecho realidad conducir este BMW.', 3, 3, 9, NULL, NULL, NULL),
('El McLaren 720S redefine la velocidad.', 4, 1, 10, NULL, NULL, NULL),
('La aerodinámica de este McLaren es asombrosa.', 4, 2, 11, NULL, NULL, NULL),
('¡El McLaren 720S es una máquina de carreras en la calle!', 4, 3, 12, NULL, NULL, NULL),
('¡El Rolls-Royce Cullinan es simplemente sublime!', 5, 1, 13, NULL, NULL, NULL),
('¡Me siento como la realeza conduciendo este Rolls-Royce!', 5, 2, 14, NULL, NULL, NULL),
('El lujo de este Rolls-Royce es insuperable.', 5, 3, 15, NULL, NULL, NULL),
('El Bentley Flying Spur es una combinación de lujo y potencia.', 6, 1, 16, NULL, NULL, NULL),
('¡Cada detalle en este Bentley es excepcional!', 6, 2, 17, NULL, NULL, NULL),
('Me siento como un VIP conduciendo este Bentley.', 6, 3, 18, NULL, NULL, NULL),
('¡El Bugatti Divo es el pináculo de la ingeniería automotriz!', 7, 1, 19, NULL, NULL, NULL),
('¡El Bugatti Divo es una obra maestra en movimiento!', 7, 2, 20, NULL, NULL, NULL),
('No hay palabras para describir la belleza de este Bugatti.', 7, 3, 21, NULL, NULL, NULL),
('El Porsche 911 Turbo S es el sueño de todo entusiasta.', 8, 1, 22, NULL, NULL, NULL),
('¡La potencia del Porsche 911 Turbo S es impresionante!', 8, 2, 23, NULL, NULL, NULL),
('¡El sonido del motor del Porsche 911 Turbo S es música para mis oídos!', 8, 3, 24, NULL, NULL, NULL),
('El Aston Martin DB11 es simplemente deslumbrante.', 9, 1, 25, NULL, NULL, NULL),
('¡Cada curva en el Aston Martin DB11 es perfecta!', 9, 2, 26, NULL, NULL, NULL),
('Conducir un Aston Martin es una experiencia incomparable.', 9, 3, 27, NULL, NULL, NULL),
('El Lexus LC 500 combina lujo y rendimiento a la perfección.', 10, 1, 28, NULL, NULL, NULL),
('El diseño del Lexus LC 500 es futurista y elegante.', 10, 2, 29, NULL, NULL, NULL),
('Me siento como en una película de ciencia ficción conduciendo este Lexus.', 10, 3, 30, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `nombre_producto` varchar(50) NOT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `usuario_id`, `imagen`, `nombre_producto`, `descripcion`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'mercedes.jpg', 'Mercedes-Benz Clase S', 'El Mercedes-Benz Clase S es una obra maestra de la ingeniería automotriz que encarna el lujo en cada detalle. Con un diseño elegante y sofisticado, este sedán de alta gama ofrece un interior meticulosamente diseñado con materiales de primera calidad y tecnología de vanguardia que redefine la experiencia de conducción. Desde su suave y potente motor hasta sus innovadoras características de seguridad y confort, el Clase S es simplemente sublime en todos los sentidos.', '2024-04-18 14:26:50', '2024-04-18 14:26:50', NULL),
(2, 2, 'audi.jpg', 'Audi A8', 'El Audi A8 es el epítome de la elegancia y el rendimiento refinado. Con su distintivo diseño exterior y una cabina lujosamente equipada, este sedán de lujo combina un estilo imponente con una experiencia de conducción excepcional. Cada detalle, desde los asientos de cuero premium hasta los avanzados sistemas de asistencia al conductor, refleja la artesanía y la atención al detalle que caracteriza a la marca Audi.', '2024-04-18 14:26:50', '2024-04-18 14:26:50', NULL),
(3, 3, 'bmw.jpg', 'BMW Serie 7', 'El BMW Serie 7 es un símbolo de lujo y confort incomparables. Diseñado para aquellos que exigen lo mejor, este sedán de alta gama ofrece un equilibrio perfecto entre rendimiento dinámico y elegancia refinada. Con su potente motor, tecnología de última generación y un interior exquisitamente diseñado, el Serie 7 redefine el estándar de excelencia en el segmento de sedanes de lujo.', '2024-04-18 14:26:50', '2024-04-18 14:26:50', NULL),
(4, 4, 'mclaren.webp', 'McLaren 720S', 'El McLaren 720S es una obra maestra de la ingeniería automotriz que combina innovación y rendimiento en un superdeportivo impresionante. Con un diseño aerodinámico y elegante, este vehículo de alto rendimiento ofrece una experiencia de conducción emocionante y envolvente. Desde su potente motor hasta su chasis ligero y su avanzado sistema de suspensión, el 720S redefine el concepto de velocidad y precisión en la carretera.', '2024-04-18 14:26:50', '2024-04-18 14:26:50', NULL),
(5, 5, 'rolls.jpeg', 'Rolls-Royce Cullinan', 'El Rolls-Royce Cullinan es el SUV de lujo definitivo, diseñado para aquellos que buscan lo mejor de lo mejor. Con su presencia imponente y su interior lujosamente espacioso, este vehículo ofrece una combinación incomparable de comodidad, estilo y prestaciones. Cada detalle, desde los acabados en madera de nogal hasta los asientos de cuero cosidos a mano, refleja la artesanía y la atención al detalle que caracteriza a la marca Rolls-Royce.', '2024-04-18 14:26:50', '2024-04-18 14:26:50', NULL),
(6, 1, 'bentley.jpg', 'Bentley Flying Spur', 'El Bentley Flying Spur es una expresión de lujo, elegancia y rendimiento excepcionales. Con su diseño atemporal y su poderoso motor, este sedán de alta gama ofrece una experiencia de conducción incomparable. Desde su exquisito interior hasta su suave y potente rendimiento en carretera, el Flying Spur es el epítome del refinamiento británico.', '2024-04-18 14:26:50', '2024-04-18 14:26:50', NULL),
(7, 2, 'bugatti.jpg', 'Bugatti Divo', 'El Bugatti Divo es una máquina de rendimiento diseñada para dominar las curvas y ofrecer una experiencia de conducción incomparable. Con su diseño aerodinámico y su potente motor, este superdeportivo impresionante ofrece un rendimiento excepcional en la pista y en la carretera. Cada detalle, desde su chasis ligero hasta su avanzado sistema de tracción integral, refleja la dedicación de Bugatti a la excelencia en la ingeniería automotriz.', '2024-04-18 14:26:50', '2024-04-18 14:26:50', NULL),
(8, 3, 'porsche.jpg', 'Porsche 911 Turbo S', 'El Porsche 911 Turbo S es un icono del rendimiento y la tecnología de vanguardia. Con su diseño aerodinámico y su potente motor, este deportivo de alto rendimiento ofrece una experiencia de conducción emocionante y envolvente. Desde su lujoso interior hasta su impresionante rendimiento en carretera, el 911 Turbo S es una máquina impresionante en todos los sentidos.', '2024-04-18 14:26:50', '2024-04-18 14:26:50', NULL),
(9, 4, 'aston.jpg', 'Aston Martin DB11', 'El Aston Martin DB11 es una combinación perfecta de estilo, rendimiento y artesanía británica. Con su elegante diseño exterior y su potente motor, este coupé de alta gama ofrece una experiencia de conducción emocionante y lujosa. Cada detalle, desde sus líneas aerodinámicas hasta su interior meticulosamente diseñado, refleja la pasión de Aston Martin por la excelencia en la ingeniería automotriz.', '2024-04-18 14:26:50', '2024-04-18 14:26:50', NULL),
(10, 5, 'lexus.jpeg', 'Lexus LC 500', 'El Lexus LC 500 es un gran turismo de lujo que cautiva con su diseño cautivador y su rendimiento emocionante. Con su distintivo estilo exterior y su interior lujosamente equipado, este vehículo ofrece una experiencia de conducción incomparable. Desde su potente motor hasta sus avanzadas características de seguridad y entretenimiento, el LC 500 es la combinación perfecta de lujo y deportividad.', '2024-04-18 14:26:50', '2024-04-18 14:26:50', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `email`, `password`, `fecha`, `dni`, `foto`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'juanperez', 'juan.perez@example.com', 'contraseña123', '1990-05-15', 12345678, 'ruta/foto1.jpg', '2024-04-18 14:04:07', '2024-04-18 14:04:07', NULL),
(2, 'ana.garcia', 'ana.garcia@example.com', 'secreto456', '1985-10-28', 87654321, 'ruta/foto2.jpg', '2024-04-18 14:04:07', '2024-04-18 14:04:07', NULL),
(3, 'carlitos123', 'carlos.lopez@example.com', 'qwerty789', '1978-03-22', 56781234, 'ruta/foto3.jpg', '2024-04-18 14:04:07', '2024-04-18 14:04:07', NULL),
(4, 'laura_mart', 'laura.martinez@example.com', 'clave4321', '1995-07-11', 43218765, 'ruta/foto4.jpg', '2024-04-18 14:04:07', '2024-04-18 14:04:07', NULL),
(5, 'robbie.sanchez', 'roberto.sanchez@example.com', '123456abc', '1982-12-03', 98765432, 'ruta/foto5.jpg', '2024-04-18 14:04:07', '2024-04-18 14:04:07', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producto_id` (`producto_id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

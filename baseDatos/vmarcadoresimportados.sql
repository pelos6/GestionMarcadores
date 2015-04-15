-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.5.38 - MySQL Community Server (GPL)
-- SO del servidor:              Win32
-- HeidiSQL Versión:             9.1.0.4867
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura para tabla marcadores.usuariosmarcadores
CREATE TABLE IF NOT EXISTS `usuariosMarcadores` (
  `usuario` varchar(20) NOT NULL,
  `contrasena` varchar(32) NOT NULL,
  PRIMARY KEY (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla marcadores.usuariosmarcadores: ~0 rows (aproximadamente)
DELETE FROM `usuariosMarcadores`;
/*!40000 ALTER TABLE `usuariosmarcadores` DISABLE KEYS */;
INSERT INTO `usuariosMarcadores` (`usuario`, `contrasena`) VALUES
	('javier', 'd1e625a7bd51ca0f5cf92b2f68000db8');
/*!40000 ALTER TABLE `usuariosmarcadores` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

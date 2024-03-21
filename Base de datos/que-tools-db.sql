-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema que-tools-DB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema que-tools-DB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `que-tools-DB` DEFAULT CHARACTER SET utf8 ;
USE `que-tools-DB` ;

-- -----------------------------------------------------
-- Table `que-tools-DB`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `que-tools-DB`.`roles` (
  `idroles` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idroles`),
  UNIQUE INDEX `tipo_UNIQUE` (`tipo` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `que-tools-DB`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `que-tools-DB`.`usuarios` (
  `idusuarios` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `fecha_creacion` DATE NOT NULL,
  `roles_idroles` INT NOT NULL,
  PRIMARY KEY (`idusuarios`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_usuarios_roles_idx` (`roles_idroles` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_roles`
    FOREIGN KEY (`roles_idroles`)
    REFERENCES `que-tools-DB`.`roles` (`idroles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `que-tools-DB`.`alquileres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `que-tools-DB`.`alquileres` (
  `idalquileres` INT NOT NULL AUTO_INCREMENT,
  `fecha_inicio` VARCHAR(45) NOT NULL,
  `fecha_finalizacion` VARCHAR(45) NOT NULL,
  `usuarios_idusuarios` INT NOT NULL,
  PRIMARY KEY (`idalquileres`),
  INDEX `fk_alquileres_usuarios1_idx` (`usuarios_idusuarios` ASC) VISIBLE,
  CONSTRAINT `fk_alquileres_usuarios1`
    FOREIGN KEY (`usuarios_idusuarios`)
    REFERENCES `que-tools-DB`.`usuarios` (`idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `que-tools-DB`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `que-tools-DB`.`categorias` (
  `idcategorias` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategorias`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `que-tools-DB`.`articulos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `que-tools-DB`.`articulos` (
  `idarticulos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `funcion` VARCHAR(45) NULL,
  `descripcion` VARCHAR(100) NULL,
  `imagen` VARCHAR(250) NULL,
  `costo` DECIMAL(10,2) NOT NULL,
  `categorias_idcategorias` INT NOT NULL,
  PRIMARY KEY (`idarticulos`),
  INDEX `fk_articulos_categorias1_idx` (`categorias_idcategorias` ASC) VISIBLE,
  CONSTRAINT `fk_articulos_categorias1`
    FOREIGN KEY (`categorias_idcategorias`)
    REFERENCES `que-tools-DB`.`categorias` (`idcategorias`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `que-tools-DB`.`articulos_alquileres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `que-tools-DB`.`articulos_alquileres` (
  `articulos_idarticulos` INT NOT NULL,
  `alquileres_idalquileres` INT NOT NULL,
  INDEX `fk_articulos_alquileres_articulos1_idx` (`articulos_idarticulos` ASC) VISIBLE,
  INDEX `fk_articulos_alquileres_alquileres1_idx` (`alquileres_idalquileres` ASC) VISIBLE,
  PRIMARY KEY (`articulos_idarticulos`, `alquileres_idalquileres`),
  CONSTRAINT `fk_articulos_alquileres_articulos1`
    FOREIGN KEY (`articulos_idarticulos`)
    REFERENCES `que-tools-DB`.`articulos` (`idarticulos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_articulos_alquileres_alquileres1`
    FOREIGN KEY (`alquileres_idalquileres`)
    REFERENCES `que-tools-DB`.`alquileres` (`idalquileres`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

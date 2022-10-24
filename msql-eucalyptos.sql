-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Eucalyptus
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Eucalyptus
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Eucalyptus` DEFAULT CHARACTER SET utf8 ;
USE `Eucalyptus` ;

-- -----------------------------------------------------
-- Table `Eucalyptus`.`produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Eucalyptus`.`produtos` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  `preco` DECIMAL(6,2) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Eucalyptus`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Eucalyptus`.`clientes` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Eucalyptus`.`avaliacoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Eucalyptus`.`avaliacoes` (
  `produtos_id` INT NOT NULL,
  `cliente_id` INT NOT NULL,
  `nota` TINYINT NULL,
  PRIMARY KEY (`produtos_id`, `cliente_id`),
  INDEX `fk_produtos_has_cliente_cliente1_idx` (`cliente_id` ASC) VISIBLE,
  INDEX `fk_produtos_has_cliente_produtos_idx` (`produtos_id` ASC) VISIBLE,
  CONSTRAINT `fk_produtos_has_cliente_produtos`
    FOREIGN KEY (`produtos_id`)
    REFERENCES `Eucalyptus`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_produtos_has_cliente_cliente1`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `Eucalyptus`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Eucalyptus`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Eucalyptus`.`pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `clientes_id` INT NOT NULL,
  PRIMARY KEY (`id`, `clientes_id`),
  INDEX `fk_pedidos_clientes1_idx` (`clientes_id` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `Eucalyptus`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Eucalyptus`.`pedidios_tem_produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Eucalyptus`.`pedidios_tem_produtos` (
  `produtos_id` INT NOT NULL,
  `pedidos_id` INT NOT NULL,
  `pedidos_clientes_id` INT NOT NULL,
  PRIMARY KEY (`produtos_id`, `pedidos_id`, `pedidos_clientes_id`),
  INDEX `fk_produtos_has_pedidos_pedidos1_idx` (`pedidos_id` ASC, `pedidos_clientes_id` ASC) VISIBLE,
  INDEX `fk_produtos_has_pedidos_produtos1_idx` (`produtos_id` ASC) VISIBLE,
  CONSTRAINT `fk_produtos_has_pedidos_produtos1`
    FOREIGN KEY (`produtos_id`)
    REFERENCES `Eucalyptus`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_produtos_has_pedidos_pedidos1`
    FOREIGN KEY (`pedidos_id` , `pedidos_clientes_id`)
    REFERENCES `Eucalyptus`.`pedidos` (`id` , `clientes_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

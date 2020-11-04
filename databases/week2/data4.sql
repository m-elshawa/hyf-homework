--Creating a Database

DROP DATABASE IF EXISTS medical_trades;
CREATE DATABASE medical_trades;

USE medical_trades;

CREATE TABLE `medical_trades`.`customers` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `E-mail` VARCHAR(45) NOT NULL,
  `Phone` VARCHAR(45) NULL,
  `Product_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`));


INSERT INTO `medical_trades`.`customers` (`ID`, `Name`, `E-mail`, `Phone`, `Product_id`) VALUES ('1', 'Mizo', 'mizo@yep.com', '123-456', '2');
INSERT INTO `medical_trades`.`customers` (`ID`, `Name`, `E-mail`, `Phone`, `Product_id`) VALUES ('2', 'Søren', 'søren@noway.dk', '45-251243', '3');
INSERT INTO `medical_trades`.`customers` (`ID`, `Name`, `E-mail`, `Phone`, `Product_id`) VALUES ('3', 'Ahmed', 'ahmed@telia.dk', '22-5664-32', '1');
INSERT INTO `medical_trades`.`customers` (`ID`, `Name`, `E-mail`, `Phone`, `Product_id`) VALUES ('4', 'Mindi', 'mindi@norway.com', '+125425', '2');
INSERT INTO `medical_trades`.`customers` (`ID`, `Name`, `E-mail`, `Phone`, `Product_id`) VALUES ('5', 'Amin', 'amin@vestas.dk', '+652-625', '1');
INSERT INTO `medical_trades`.`customers` (`ID`, `Name`, `E-mail`, `Product_id`) VALUES ('6', 'Felix', 'felix@salsa.com', '4');


CREATE TABLE `medical_trades`.`products` (
  `ID` INT NOT NULL,
  `Name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`));


INSERT INTO `medical_trades`.`products` (`ID`, `Name`) VALUES ('1', 'MRI');
INSERT INTO `medical_trades`.`products` (`ID`, `Name`) VALUES ('2', 'CT');
INSERT INTO `medical_trades`.`products` (`ID`, `Name`) VALUES ('3', 'C-arm');
INSERT INTO `medical_trades`.`products` (`ID`, `Name`) VALUES ('4', 'Ultrasound');


ALTER TABLE `medical_trades`.`customers` 
CHANGE COLUMN `Product_id` `Product_id` INT NOT NULL ,
ADD INDEX `Product_id_idx` (`Product_id` ASC) VISIBLE;
;
ALTER TABLE `medical_trades`.`customers` 
ADD CONSTRAINT `Product_id`
  FOREIGN KEY (`Product_id`)
  REFERENCES `medical_trades`.`products` (`ID`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


CREATE TABLE `medical_trades`.`suppliers` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Company` VARCHAR(45) NOT NULL,
  `available_product` INT NULL,
  PRIMARY KEY (`ID`),
  INDEX `available_product_idx` (`available_product` ASC) VISIBLE,
  CONSTRAINT `available_product`
    FOREIGN KEY (`available_product`)
    REFERENCES `medical_trades`.`products` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

INSERT INTO `medical_trades`.`suppliers` (`ID`, `Company`, `available_product`) VALUES ('1', 'Edam', '4');
INSERT INTO `medical_trades`.`suppliers` (`ID`, `Company`, `available_product`) VALUES ('2', 'LBN', '1');
INSERT INTO `medical_trades`.`suppliers` (`ID`, `Company`, `available_product`) VALUES ('3', 'Agito', '3');
INSERT INTO `medical_trades`.`suppliers` (`ID`, `Company`, `available_product`) VALUES ('4', 'TJ', '4');
INSERT INTO `medical_trades`.`suppliers` (`ID`, `Company`, `available_product`) VALUES ('5', 'OEmedical', '2');

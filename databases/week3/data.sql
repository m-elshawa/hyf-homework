DROP DATABASE IF EXISTS  meal_sharing;
CREATE DATABASE meal_sharing ;
USE meal_sharing;

DROP TABLE IF EXISTS Meal;
CREATE TABLE meal_sharing.Meal (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(45) NOT NULL,
    when DATETIME NOT NULL, -- in my workbench it didn't accept the word when
    max_reservations INT NOT NULL,
    price DECIMAL NOT NULL,
    created_date DATE NOT NULL,
    PRIMARY KEY (id));
    
INSERT INTO `meal_sharing`.`meal` (`id`, `title`, `description`, `location`, `time`, `max_reservations`, `price`, `created_date`) VALUES ('1', 'Koshary', 'A mixture of rice with pasta and humos', 'Egypt', '2020-10-10 10:00:00', '15', '2', '2020-10-01');
INSERT INTO `meal_sharing`.`meal` (`id`, `title`, `description`, `location`, `time`, `max_reservations`, `price`, `created_date`) VALUES ('2', 'Magloube', 'Yellow rice with chicken and hazelnuts', 'Palestine', '2020-10-15 14:30:00', '6', '20', '2020-10-13');
INSERT INTO `meal_sharing`.`meal` (`id`, `title`, `description`, `location`, `time`, `max_reservations`, `price`, `created_date`) VALUES ('3', 'Ris Alamand', 'Danish dessert, rice with milk and cherry serup', 'Denmark', '2020-12-20 15:40:00', '9', '15', '2020-12-01');
INSERT INTO `meal_sharing`.`meal` (`id`, `title`, `description`, `location`, `time`, `max_reservations`, `price`, `created_date`) VALUES ('4', 'Borritos', 'Beef meat mixed with peas, jalopenos and chilli and wrapped with tortilla', 'Mexico', '2020-11-23 16:15:00', '12', '35', '2020-11-19');
INSERT INTO `meal_sharing`.`meal` (`id`, `title`, `description`, `location`, `time`, `max_reservations`, `price`, `created_date`) VALUES ('5', 'Mansaf', 'Yellow rice with cinnamon, chicken and nuts', 'Jordan', '2020-11-08 20:20:00', '7', '32', '2020-11-06');



DROP TABLE IF EXISTS meal_sharing.Reservation;
CREATE TABLE meal_sharing.Reservation (
    id INT NOT NULL AUTO_INCREMENT,
    number_of_guests INT NOT NULL,
    meal_id INT NOT NULL,
    created_date DATE NOT NULL,
    contact_phonenumber VARCHAR(45) NOT NULL,
    contact_name VARCHAR(45) NOT NULL,
    price DECIMAL NOT NULL,
    contact_email VARCHAR(45),
    PRIMARY KEY (id),
    FOREIGN KEY (meal_id) REFERENCES Meal(id));

ALTER TABLE meal_sharing.reservation 
DROP COLUMN price;

INSERT INTO `meal_sharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES ('1', '5', '2', '2020-10-15', '987526', 'Mizo', 'mm@yahoo.dk');
INSERT INTO `meal_sharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES ('2', '5', '4', '2020-10-16', '225365', 'Ahmed', 'ah@lycos.com');
INSERT INTO `meal_sharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES ('3', '5', '3', '2020-11-02', '425152', 'Amin', 'mz@123.com');
INSERT INTO `meal_sharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES ('4', '3', '1', '2020-10-06', '369582', 'Søren', 'oke@abc.dk');
INSERT INTO `meal_sharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES ('5', '2', '2', '2020-12-12', '102021', 'Felix', 'fh@dr.dk');
INSERT INTO `meal_sharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES ('6', '4', '5', '2020-11-18', '255225', 'Alecs', 'alc@mailcity.com');
INSERT INTO `meal_sharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES ('7', '4', '4', '2020-12-11', '889887', 'Ahmed', 'ahm@gmail.com');
INSERT INTO `meal_sharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES ('8', '6', '2', '2020-11-05', '253625', 'Mindi', 'mind@yousee.com');
INSERT INTO `meal_sharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES ('9', '2', '1', '2020-10-10', '010225', 'Nevin', 'nev@gmail.com');
INSERT INTO `meal_sharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES ('10', '3', '2', '2020-12-15', '774582', 'Cecilie', 'cecilie@hotmail.com');

    

DROP TABLE IF EXISTS meal_sharing.Review;
CREATE TABLE meal_sharing.Review (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    description TEXT,
    meal_id INT NOT NULL,
    stars INT NOT NULL,
    created_date DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (meal_id) REFERENCES Meal(id));
    
INSERT INTO meal_sharing.review (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`) VALUES ('1', 'Wasn\'t my best experience', 'too much spices', '4', '2', '2020-11-25');
INSERT INTO meal_sharing.review (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`) VALUES ('2', 'nice food', 'delecious dish', '2', '4', '2020-10-17');
INSERT INTO meal_sharing.review (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`) VALUES ('3', 'great experince', 'loved the food', '2', '5', '2020-10-21');
INSERT INTO meal_sharing.review (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`) VALUES ('4', 'Average', 'meat was not well done', '5', '3', '2020-11-09');
INSERT INTO meal_sharing.review (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`) VALUES ('5', 'Amazing dish', 'loved everything about it', '2', '5', '2020-10-15');
INSERT INTO meal_sharing.review (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`) VALUES ('6', 'Not bad', 'the rice is a bit hard', '3', '3', '2020-12-22');
INSERT INTO meal_sharing.review (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`) VALUES ('7', 'Horrible', 'worst taste ever', '1', '1', '2020-11-25');
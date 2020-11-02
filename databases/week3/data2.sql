-- Meal queries

--1) Get all meals

SELECT *
FROM meal;

--2) Add a new meal

INSERT INTO meal_sharing.meal (title, description, location, time, max_reservations, price, created_date)
VALUES ('Tortilla', 'Bread dipped in fried eggs', 'Spain', '2020-12-30 20:20:00', '6', '15', '2020-12-20');

--3) Get a meal with any id

SELECT *
FROM meal
WHERE id = 3;

--4) Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE meal
SET max_reservations = 10, price = 17
WHERE id = 3;

--5) Delete a meal with any id, fx 1

DELETE FROM meal
WHERE price < 10;

--Reservation queries
--1) Get all reservations

SELECT *
FROM reservation;

--2) Add a new reservation

INSERT INTO meal_sharing.reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
VALUES ('5', '5', '2020-12-17', '202152', 'Loreta', 'lori@hello.com');

--3) Get a reservation with any id, fx 1

SELECT * 
FROM reservation
WHERE id = 4;

--4) Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE reservation
SET contact_email = 'felix@yahoo.dk'
WHERE id = 5;


--5) Delete a reservation with any id, fx 1

DELETE FROM reservation
WHERE contact_name = 'Mindi';

--Review queries

--1) Get all reviews

SELECT *
FROM review;

--2) Add a new review

INSERT INTO meal_sharing.review (title, description, meal_id, stars, created_date)
VALUES ('All great', 'food is perfect', '3', '5', '2020-11-30');

--3) Get a review with any id, fx 1

SELECT *
FROM review
WHERE id = 5;

--4) Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE review
SET stars = 4
WHERE id = 6;

--5) Delete a review with any id, fx 1

DELETE FROM review
WHERE id = 7;

-- Additional queries

--Get meals that has a price smaller than a specific price

SELECT *
FROM meal
WHERE price <= 20;

--Get meals that still has available reservations

SELECT meal.title, reservation.created_date AS reservation_date
FROM meal
JOIN reservation ON meal.id = reservation.meal_id
WHERE reservation.created_date > '2020-11-01';

--Get meals that partially match a title. 

SELECT title
FROM meal
WHERE title LIKE 'ris%' 
OR title LIKE '%saf';

--Get meals that has been created between two dates

SELECT * 
FROM meal
WHERE created_date BETWEEN '2020-11-01' AND '2020-11-30';

--Get only specific number of meals fx return only 5 meals

SELECT *
FROM meal
LIMIT 3;

--Get the meals that have good reviews

SELECT meal.title, meal.description, review.title, review.stars
FROM meal
LEFT JOIN review ON meal.id = review.meal_id
WHERE stars > 3;

--Get reservations for a specific meal sorted by created_date

SELECT meal.title, reservation.created_date AS reservation_date
FROM reservation
JOIN meal ON reservation.meal_id = meal.id
WHERE meal.id = 2
ORDER BY reservation.created_date;

--Sort all meals by average number of stars in the reviews (I don't understand it)

SELECT AVG(review.stars) AS avg_rating, meal.title 
FROM meal
LEFT JOIN review ON meal.id = review.meal_id; 

--More queries

USE hyf_lesson1;

--%spotify
SELECT *
FROM user
LEFT JOIN task ON user.id = task.user_id
WHERE user.email LIKE '%spotify.com';

--Donald_duck
SELECT user.name AS user_name, task.title AS the_task, task.status_id, status.name AS current_status
FROM user
JOIN task          -- when I put condition ON user.id = task.user_id it doesn't give me rows in the table
JOIN status ON status.id = task.status_id
WHERE user.name LIKE 'donald duck' 
AND status_id = 1;

--Maryrose Meadows
SELECT user.name, task.title, task.created
FROM user
LEFT JOIN task ON user.id = task.user_id
WHERE user.name LIKE 'Maryrose Meadows'
AND month(created)= 9;

--Tasks created each month
SELECT COUNT(title), month(created)
FROM task
GROUP BY month(created);
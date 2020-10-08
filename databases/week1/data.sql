--Find out how many tasks are in the task table

SELECT * FROM TASK;
SELECT COUNT(id) FROM TASK;

--Find out how many tasks in the task table do not have a valid due date

SELECT count(title) FROM TASK WHERE (due_date IS Null);

--Find all the tasks that are marked as done => What does that mean?

SELECT TASK.title, STATUS.NAME FROM TASK
LEFT JOIN STATUS ON TASK.STATUS_ID = STATUS.ID
WHERE STATUS.NAME = 'done';

--Find all the tasks that are not marked as done => What does that mean?

SELECT TASK.title, STATUS.NAME FROM TASK
LEFT JOIN STATUS ON TASK.STATUS_ID = STATUS.ID
WHERE STATUS.NAME != 'done';

--Get all the tasks, sorted with the most recently created first
SELECT * FROM TASK
ORDER BY created desc;


--Get the single most recently created task// (I assumed the most recently created task is with the latest date)

SELECT id, title, description, updated, due_date, status_id, user_id, MAX(created) AS mostrecent 
FROM TASK;

--Get the title and due date of all tasks where the title or description contains database

SELECT title, due_date FROM TASK
WHERE title LIKE '%database%'
OR description LIKE '%database%';

--Get the title and status (as text) of all tasks (DON'T KNOW WHY IT DOESN'T WORk)

SELECT TASK.title, STATUS.NAME FROM TASK
LEFT JOIN STATUS ON TASK.STATUS_ID = STATUS.ID
 
--Get the name of each status, along with a count of how many tasks have that status

SELECT TASK.STATUS_ID, STATUS.NAME, COUNT(*) FROM TASK 
LEFT JOIN STATUS ON TASK.STATUS_ID = STATUS.ID
GROUP BY STATUS.NAME; 


--Get the names of all statuses, sorted by the status with most tasks first

SELECT TASK.STATUS_ID, STATUS.NAME, COUNT(*) AS TOTAL FROM TASK 
LEFT JOIN STATUS ON TASK.STATUS_ID = STATUS.ID
GROUP BY STATUS.NAME 
ORDER BY TOTAL DESC;




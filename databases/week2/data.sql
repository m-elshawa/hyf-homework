USE hyf;

SELECT *
FROM task;

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Do homework', 'I need to finish the DB homework before weekend', '2020-10-11', '2020-10-22', '2020-10-25', 2, NULL);

UPDATE task
SET title = 'Update your homework',
    due_date = '2020-10-23',
    status_id = 3
WHERE id = 36;

DELETE FROM task
WHERE due_date = '2020-10-25';

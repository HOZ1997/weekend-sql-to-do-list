CREATE TABLE tasks (
"id" serial PRIMARY KEY,
"task" varchar (256),
"complete" boolean DEFAULT false); 

INSERT INTO tasks (task, complete) VALUES ('Testing', false); 
INSERT INTO tasks (task, complete) VALUES ('Testing2', false); 
INSERT INTO tasks (task, complete) VALUES ('Testing3', false); 

SELECT * FROM tasks;

UPDATE tasks SET complete=true WHERE id=1; 
DELETE FROM tasks WHERE id=3;
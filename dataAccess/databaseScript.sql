

CREATE TABLE user (
    username VARCHAR(100) NOT NULL PRIMARY KEY,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
);

INSERT INTO User(username, password, email)
VALUES  ('aconstan', 'aconstan01', 'aconstan@itesm.mx'),
	('jmpardo', 'jmpardo02', 'jmpardo@itesm.mx');


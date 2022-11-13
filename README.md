# Watched

## Mysql

### Creating Database
```sql
  CREATE DATABSE watched;
```

### Creating Realtion (users)
```sql
  CREATE TABLE `users`(
  `id` INT NOT null AUTO_INCREMENT,
  `first_name` VARCHAR(100),
  `last_name` VARCHAR(100),
  `username` VARCHAR(100),
  password VARCHAR(255),
  `isAdmin` TINYINT(1),
  PRIMARY KEY(`id`, `username`)
	);
```

### Adding new user to database
```sql 
  INSERT INTO users (first_name, last_name, username, password, isAdmin) VALUES (?,?,?,?,0);
```

### Checking if username is used in database
```sql
  SELECT * FROM users WHERE username=?;
```

### Checking if user exists in the database to login
```sql
  SELECT * FROM users WHERE username = ? AND password = ?;
```

### Creating Relation (movies)
```sql
	CREATE TABLE `movies` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`movie_name` varchar(100) NOT NULL,
	`movie_description` TEXT,
	`user_id` INT NOT NULL,
	PRIMARY KEY (`id`)
	);
```

### Adding foreign Key to movies
```sql
	ALTER TABLE `movies` ADD CONSTRAINT `movies_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);
```


### Creating Relation (series)
```sql
	CREATE TABLE `series` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`series_name` varchar(100) NOT NULL,
	`series_description` TEXT,
	`watched_episodes` INT NOT NULL,
	`user_id` INT NOT NULL,
	PRIMARY KEY (`id`)
	);

```

### Adding foreign Key to series
```sql
	ALTER TABLE `series` ADD CONSTRAINT `series_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);
```


### Creating Relation (matches)
```sql
	CREATE TABLE `matches` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`team_one` varchar(50) NOT NULL,
	`team_two` varchar(50) NOT NULL,
	`tournament` varchar(50) NOT NULL,
	`stadium` varchar(75),
	`date` DATE NOT NULL,
	`user_id` INT NOT NULL,
	`match_description` TEXT,
	PRIMARY KEY (`id`)
	);
```

### Adding foreign key to matches
```sql
	ALTER TABLE `matches` ADD CONSTRAINT `matches_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);
```
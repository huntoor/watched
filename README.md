# Watched

## Mysql

## Creating Database
```sql
  CREATE DATABSE watched;
```

## Creating Realtion *(users)*
```sql
	CREATE TABLE users(
	id INT NOT null AUTO_INCREMENT,
	first_name VARCHAR(100),
	last_name VARCHAR(100),
	username VARCHAR(100),
	password VARCHAR(255),
	isAdmin TINYINT(1),
	PRIMARY KEY(id)
	)
```

<hr/>

## Creating Relation *(movies)*
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

<hr/>

## Creating Relation *(series)*
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

<hr/>

## Creating Relation *(matches)*
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
<hr/>

## Creating Relation *(books)*
```sql
	CREATE TABLE `books` (
		`id` INT NOT NULL AUTO_INCREMENT,
		`book_name` varchar(50) NOT NULL,
		`book_auther` varchar(50),
			`book_description` TEXT,
		`user_id` INT NOT NULL,
		PRIMARY KEY (`id`)
	);
```

### Adding Foreign Key to books
```sql
	ALTER TABLE `books` ADD CONSTRAINT `books_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);
```

<hr/>

## Creating Relation *(movie_review)*
```sql
	CREATE TABLE `movie_review` (
		`id` INT NOT NULL AUTO_INCREMENT,
		`movie_name` varchar(110) NOT NULL,
		`movie_rating` INT(10) NOT NULL,
		`movie_review` TEXT,
		`movie_id` INT NOT NULL,
		`user_id` INT NOT NULL,
		PRIMARY KEY (`id`)
	);
```

### Adding Foreign Keys
```sql 
	ALTER TABLE `movie_review` ADD CONSTRAINT `movie_review_fk1` FOREIGN KEY (`movie_id`) REFERENCES `movies`(`id`);

	ALTER TABLE `movie_review` ADD CONSTRAINT `movie_review_fk2` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);
```

<hr/>

## Creating Relation *(series_review)*
```sql
	CREATE TABLE `series_review` (
		`id` INT NOT NULL AUTO_INCREMENT,
		`series_name` varchar(110) NOT NULL,
		`series_rating` INT(10) NOT NULL,
		`series_review` TEXT,
		`series_id` INT NOT NULL,
		`user_id` INT NOT NULL,
		PRIMARY KEY (`id`)
	);
```

## Adding Foreign Keys
```sql
	ALTER TABLE `series_review` ADD CONSTRAINT `series_review_fk1` FOREIGN KEY (`series_id`) REFERENCES `series`(`id`);

	ALTER TABLE `series_review` ADD CONSTRAINT `series_review_fk2` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);
```

<hr/>

## Creating Relation *(book_review)*
```sql
	CREATE TABLE `book_review` (
		`id` INT NOT NULL AUTO_INCREMENT,
		`book_name` varchar(110) NOT NULL,
		`book_rating` INT(10) NOT NULL,
		`book_review` TEXT,
		`book_id` INT NOT NULL,
		`user_id` INT NOT NULL,
		PRIMARY KEY (`id`)
	);
```

## Adding Foreign Keys
```sql
	ALTER TABLE `book_review` ADD CONSTRAINT `book_review_fk1` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`);

	ALTER TABLE `book_review` ADD CONSTRAINT `book_review_fk2` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);
```
1. Let's create a table inside the test database where employee column have id, name, birthdate and email

---

```sql
CREATE TABLE employee
    (
        id INTEGER,
        name VARCHAR(50),
        birthday DATE,
        email VARCHAR(100)
    );
```

2. Let's add 50 pieces of data to the employee table we created using the 'Mackaroo' service.

---

```sql
INSERT INTO employee (id, name, birthday, email) VALUES (1, 'Hanan', '1941-12-26', 'hgenikek1@nasa.gov');
 -- such as this one and so on
```

3. Let's do 5 update opeartions for every rows according to each of the column.

---

```sql
UPDATE employee
SET name = 'nuri', birthday = '1950-02-02', email 'can@github.com'
WHERE ID BETWEEN 2 AND 6
RETURNING *;
```

4. Let's do 5 delete operations for every rows according to each of the column.

---

```sql
DELETE from employee
WHERE ID BETWEEN 2 AND 6
RETURNING *;
```

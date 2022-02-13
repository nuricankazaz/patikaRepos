1. List the 5 longest films in the film table and the movie title ends with 'n' character.

---

```sql
SELECT title FROM  film
WHERE title LIKE ('%n')
ORDER BY length desc LIMIT 5;
```

2. List the second five shortest films in the film table and the move title ends with 'n' character.

---

```sql
SELECT title FROM film
WHERE title LIKE ('%n')
ORDER BY length ASC OFFSET 5 LIMIT 5;
```

3. Sort the first 4 data while store_id is 1 in the descending order according to the last_name column in the customer table.

---

```sql
SELECT last_name FROM customer
WHERE store_id = 1
ORDER BY last_name DESC LIMIT 4
```

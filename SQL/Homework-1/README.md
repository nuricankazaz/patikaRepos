1. Sort the data in the title and description columns in the film table.

---

```sql
SELECT title, description FROM film;
```

2. Sort the data in all columns in the film table where movie length is greater than 60 and less than 75.

---

```sql
SELECT * FROM film
WHERE length > 60 AND length < 75;
```

3. Sort the data in all columns in the film table with rental_rate is 0.99 and replacement_cost is 12.99 or 28.99.

---

```sql
SELECT * FROM film
WHERE rental_rate = 0.99 AND (replacement_cost = 12.99 OR replacement_cost = 28.99);
```

4. What is the value for last_name column for customer whose value is 'Mary' in the first_name column in the customer table.

---

```sql
SELECT last_name FROM customer
WHERE first_name = 'Mary';
```

5. Sort the data in the film table whose length is not greater than 50 and whose rental_rate is NOT 2.99 or 4.99.

---

```sql
SELECT * FROM film
WHERE NOT length > 50 AND NOT (rental_rate = 2.99 OR rental_rate = 4.99);
```

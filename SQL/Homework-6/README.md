1. What is the average of rental rate column in the film table?

---

```sql
SELECT AVG(rental_rate) FROM film;
```

2. How many films in the film table starts with character 'C'?.

---

```sql
SELECT COUNT(*) FROM film
WHERE title LIKE ('C%');
```

3. How many minutes is the longest (length) film with a rental rate equal to 0.99 from the films in the film table?

---

```sql
SELECT MAX(length) FROM film
WHERE rental_rate = 0.99;
```

4. How many different replacement cost values for films that are longer than 150 minutes in the film table?

---

```sql
SELECT COUNT(DISTINCT(replacement_cost)) FROM film
WHERE length > 150;
```

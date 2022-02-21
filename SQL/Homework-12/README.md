1. In the film table, the film length is shown in the length column. How many film are longer than the average film length?

---

```sql
SELECT COUNT(*) FROM film
WHERE length >
(SELECT AVG(length) FROM film);
```

2. How many film have the maksimum rental rate value in the film table?

---

```sql
SELECT COUNT(*) FROM film
WHERE rental_rate = any (SELECT MAX(rental_rate) FROM film);
```

3. In the film table, list the films with the lowest rental rate and the lowest replacement cost.

---

```sql
SELECT COUNT(*) FROM film
WHERE rental_rate = all
(SELECT min(rental_rate) FROM film) AND replacement_cost = any
(SELECT min(replacement_cost FROM film));
```

4. In the payment table, list the customers who make the most purchases.

---

```sql
SELECT customer_id, count(payment_id) AS 'Toplam' FROM payment
GROUP BY customer_id
ORDER BY 'Toplam' DESC
WHERE rental_rate = all
(SELECT max(rental_rate) FROM film)
```

1. Write a Inner join query where we can see the city and country names in the city table and the country table together.

---

```sql
SELECT city, country FROM city
INNER JOIN country ON city.country_id = country.country_id;
```

2. Write the Inner join query where we can see the customer table and the payment_id in the payment table and the first_name and last_name names in the customer table together.

---

```sql
SELECT payment_id, first_name, last_name FROM customer
INNER JOIN payment ON customer.customer_id = payment.customer_id;
```

3. Write the Inner join query where we can see the customer table and the rental id in the rental table and the first name and last name in the customer table together.

---

```sql
SELECT rental_id, first_name, last_name FROM rental
INNER JOIN customer ON rental.customer_id = customer.customer_id;
```

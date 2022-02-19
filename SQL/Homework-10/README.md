1. Write a left join query that we can see city and country names together in the city and country table.

---

```sql
SELECT city, country FROM city
LEFT JOIN country ON city.country_id = country.country_id;
```

2. Write a right join query that we can see payment id, firstname and last name together in the customer and payment table.

---

```sql
SELECT payment_id, first_name, last_name FROM payment
RIGHT JOIN customer ON payment.customer_id = customer.customer_id;
```

3. Write a full join query that we can see rental id, firstname and last name together in the customer and rental table.

---

```sql
SELECT rental_id, first_name, last_name FROM customer
FULL JOIN rental ON customer.customer_id = rental.customer_id;
```

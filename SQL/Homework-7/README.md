1. Group the films in the film table by their rating values.

---

```sql
SELECT rating, COUNT(*) FROM film
GROUP BY rating;
```

2. Sort the films in the film table are grouped by the replacement cost column, list the replacement_cost value with more than 50 films and the corresponding number of films.

---

```sql
SELECT replacement_cost, COUNT(*) FROM film
GROUP BY replacement_cost
HAVING COUNT(*) > 50;
```

3. How many customers are there corresponding to the store_id values in the customer table?.

---

```sql
SELECT store_id, count(*) FROM Customer
GROUP BY store_id;
```

4. Share the highest number of city values and country_id after grouping by column country_id values in the city table.

---

```sql
SELECT country_id, COUNT(*) FROM city
GROUP BY country_id
ORDER BY COUNT(*) DESC
LIMIT 1;
```

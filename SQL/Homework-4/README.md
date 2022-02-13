1. List the different values for replacement_cost column in the film table.

---

```sql
SELECT DISTINCT(replacement_cost) FROM film;
```

2. How many different data are there in the replacement_cost column in the film table?

---

```sql
SELECT SUM(DISTINCT(replacement_cost)) FROM film;
```

3. How many film titles in the film table stars with 'T' character and at the same time has the rating equal to 'G'?

---

```sql
SELECT COUNT(title) FROM film
WHERE title LIKE ('T%') AND rating = 'G';
```

4. How many country names have 5 character in the country table?

---

```sql
SELECT COUNT(country) FROM country
WHERE LENGTH(country) = 5;
```

5. How many city names ends with character 'R' or 'r' in the city table?

---

```sql
SELECT COUNT(*) FROM city
WHERE city ILIKE ('%r');
```

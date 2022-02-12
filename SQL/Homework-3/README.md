1. Sort the data for country column in country table in order country name starts with character 'A' and ends with 'a'.

---

```sql
SELECT country FROM country
WHERE country LIKE 'A%a';
```

2. Sort the data for country column in country table in order country name is at least 6 characters long and ends with 'n' character.

---

```sql
SELECT country FROM country
WHERE length(country) >= 6 AND country LIKE '%n';
```

3. Sort the data for title column in film table in order film name contains at least 4 'T' character which is not case sensitive.

---

```sql
SELECT title FROM film
WHERE title ILIKE '%t%t%t%t%';
```

4. Sort the data for all columns in film table in order title starts with 'C' character and length higher than 90 and rental rate is equal to 2.99.

---

```sql
SELECT * FROM film
WHERE title LIKE 'C%' AND length > 90 AND rental_rate = 2.99;
```

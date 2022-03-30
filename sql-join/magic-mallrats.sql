SELECT
  "customers"."firstName",
  "customers"."lastName"
FROM
  "rentals"
  JOIN "customers" USING ("customerId")
  JOIN "inventory" USING ("inventoryId")
  JOIN "films" USING ("filmId")
WHERE
  "films"."title" = 'Magic Mallrats';

SELECT
  "payments"."amount",
  "customers"."firstName",
  "customers"."lastName"
FROM
  "payments"
  JOIN "customers" USING ("customerId")
ORDER BY
  "amount" DESC
LIMIT
  10;

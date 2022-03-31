SELECT
  "customers"."firstName",
  "customers"."lastName",
  sum("payments"."amount") AS "totalPaid"
FROM
  "customers"
  JOIN "payments" USING ("customerId")
GROUP BY
  "customers"."firstName",
  "customers"."lastName"
ORDER BY
  "totalPaid" DESC

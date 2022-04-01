SELECT
  "countries"."name" AS "country",
  count(*) AS "totalCities"
FROM
  "countries"
  JOIN "cities" USING ("countryId")
GROUP BY
  "country"
ORDER BY
  "country"

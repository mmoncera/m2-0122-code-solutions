SELECT
  "addresses"."line1" AS "address",
  "cities"."name" AS "city",
  "addresses"."district",
  "countries"."name" AS "country"
FROM
  "addresses"
  JOIN "cities" USING ("cityId")
  JOIN "countries" USING ("countryId");

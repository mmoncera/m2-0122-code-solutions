SELECT
  "films"."releaseYear",
  "genres"."name" AS "genre"
FROM
  "filmGenre"
  JOIN "genres" USING ("genreId")
  JOIN "films" USING ("filmId")
WHERE
  "films"."title" = 'Boogie Amelie';

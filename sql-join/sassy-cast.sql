SELECT
  "actors"."firstName",
  "actors"."lastName"
FROM
  "castMembers"
  JOIN "actors" USING ("actorId")
  JOIN "films" USING ("filmId")
WHERE
  "films"."title" = 'Jersey Sassy';

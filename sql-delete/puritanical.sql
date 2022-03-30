DELETE FROM
  "films"
WHERE
  "rating" != 'G' returning *;

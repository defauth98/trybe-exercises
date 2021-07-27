SELECT
  *
FROM
  Movies AS m
WHERE
  id IN (
    SELECT
      movie_id
    FROM
      BoxOffice AS b
    WHERE
      b.rating > 7.5
  );
SELECT
  title
FROM
  Movies AS m
  INNER JOIN BoxOffice as b ON m.id = b.movie_id
WHERE
  b.rating > 7.5;
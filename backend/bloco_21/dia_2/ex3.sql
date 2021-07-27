SELECT
  f.title,
  b.rating
FROM
  Movies AS f
  INNER JOIN BoxOffice AS b ON f.id = b.movie_id
ORDER BY
  b.rating DESC;
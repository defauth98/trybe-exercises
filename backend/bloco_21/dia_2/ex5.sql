SELECT
  *
FROM
  Movies AS m
  RIGHT JOIN Theater AS t ON m.theater_id = t.id
ORDER BY
  m.title;
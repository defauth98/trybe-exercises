SELECT
  *
FROM
  Theater as t
  LEFT JOIN Movies AS m ON t.id = m.theater_id
ORDER BY
  t.name;
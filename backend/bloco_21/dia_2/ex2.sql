SELECT
  f.title,
  b.domestic_sales,
  b.international_sales
FROM
  Movies AS f
  INNER JOIN BoxOffice AS b ON f.id = b.movie_id
WHERE
  b.international_sales > b.domestic_sales;
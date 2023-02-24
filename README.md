# developer-test

## - [1A](main.php)

PHP is a high level language, so it provides a lot of useful functions. I used the usort() function which sorts an array using a user-defined comparison function.

Then I simply used a for loop to compare from third letter to the first letter of the strings.

## - [2B](query.sql)
I started by slowly building up to the final query. First I just selected first and last names + phone numbers. Then I added left join to associate numbers properly.

I used concat to display first + last name together as "name". Then I added group_concat to display phone numbers back to back, instead of just listing people with more than one phone numbers several times.

Then I added order by last_name to get the order correctly.
Finally I added the ifnull line to display NULL values as "N/A".

## - [3C](main.js)
I used basic depth first search to go through the nodes.
If adjacent node has been visited before, but it's not the parent node, then the graph has a cycle.
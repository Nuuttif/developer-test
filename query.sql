select concat(people.first_name, ' ', people.last_name) as name, 
group_concat(ifnull(phones.number, 'N/A') order by phones.number) as numbers
from people left join phones on people.id=phones.user_id
group by phones.user_id
order by people.last_name;

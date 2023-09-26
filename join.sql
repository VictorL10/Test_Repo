create table city (
	id serial primary key,
	city_name varchar(40) unique not null
);

create table Person (
	id serial primary key,
	person_name varchar(40), 
	city_id int not null
);

insert into city(city_name)
values  ('Antalya'),
	    ('Berlin'),
	    ('Paris'),
	    ('Atlanta');


insert into Person(person_name, city_id)
values  ('Vadim',2),
	    ('Anna',1),
	    ('Vika',3),
	    ('Sergey',5);

select * from city;
select * from person


select p.person_name, c.city_name
from Person as p join City as c on 
p.city_id = c.id


select p.person_name, c.city_name
from Person as p left join City as c on 
p.city_id = c.id


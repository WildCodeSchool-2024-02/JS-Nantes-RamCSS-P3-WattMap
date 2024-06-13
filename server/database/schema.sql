create table user (
  id int unsigned primary key auto_increment not null,
  pseudo varchar(255) not null,
  firstname varchar(255),
  lastname varchar(255),
  password varchar(255) not null,
  email varchar(255) not null unique,
  postcode INT,
  city varchar(255),
  birthdate DATE,
  is_admin tinyint not null default 0
);

create table vehicle (
  id int unsigned primary key auto_increment not null,
  owner_id int unsigned not null,
  brand varchar(255),
  model varchar(255),
  img_url varchar(255),
  foreign key(owner_id) references user(id)
);

create table article (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  article_content text not null,
  header_img_url varchar(255),
  author_id int unsigned not null,
  publication_date date not null,
  foreign key(author_id) references user(id)
);

create table station (
  id int unsigned primary key auto_increment not null,
  latitude float not null,
  longitude float not null,
  station_name varchar(255) not null,
  price INT,
  max_power INT,
  img_url varchar(255)
);

create table plug_type (
  id int unsigned primary key auto_increment not null,
  type varchar(255) not null,
  img_url varchar(255),
  max_power INT
);


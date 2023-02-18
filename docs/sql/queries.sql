create database "acmedb";

create schema "user";

create table "user".specification
(
    id  integer generated always as identity
        constraint specification_id_pk
        primary key,
    federated_id uuid        not null
        constraint specification_federated_id_unique_pk
        unique,
    name         varchar(50) not null,
    middle_name  varchar(50),
    first_name   varchar(50) not null,
    last_name    varchar(50) not null,
    age          smallint    not null,
    birth_date   date        not null
);

create table "user".contact
(
    id          integer generated always as identity
                constraint contact_id_pk
                primary key,
    federated_id               uuid        not null,
    specification_federated_id uuid        not null
                constraint contact_specification_federated_id_fk
                references "user".specification (federated_id),
    cellphone   varchar(20) not null,
    email       varchar(50) not null
);

CREATE
OR REPLACE PROCEDURE ADD_CATEGORY (CODE INTEGER, NAME VARCHAR, PARENT_ID INTEGER) LANGUAGE PLPGSQL AS $$
declare
begin
insert into categories(Code,name,parent_id) values(Code,Name,Parent_id);
end; $$;

-------------------------------------------------------------
CREATE
OR REPLACE PROCEDURE UPDATE_CATEGORY (
	ID INTEGER,
	CODE INTEGER,
	NAME VARCHAR,
	PARENT_ID INTEGER
) LANGUAGE PLPGSQL AS $$
declare
begin
update categories set CODE = CODE ,NAME = NAME,PARENT_ID = PARENT_ID where ID = ID;
end; $$;

-----------------------------------------------------
CREATE OR REPLACE PROCEDURE DELETE_CATEGORY (I_ID INTEGER) LANGUAGE PLPGSQL AS $$
declare
begin
update categories  set DELETED = ID where ID = I_ID;
end; $$;
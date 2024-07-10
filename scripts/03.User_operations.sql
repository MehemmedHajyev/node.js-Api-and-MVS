CREATE
OR REPLACE PROCEDURE ADD_USER (
	I_USERNAME VARCHAR,
	I_PASSWORD VARCHAR,
	I_ISACTIVE BOOL
) LANGUAGE PLPGSQL AS $$
declare
begin
insert into users(username,password,isActive) values(i_username,i_password,i_isActive);
end; $$;

-------------------------------------------------------------
CREATE
OR REPLACE PROCEDURE UPDATE_USER (
	I_ID INTEGER,
	I_USERNAME VARCHAR,
	I_PASSWORD VARCHAR,
	I_ISACTIVE BOOL
) LANGUAGE PLPGSQL AS $$
declare
begin
update users set username = i_username ,password = i_password,isactive = i_isactive where ID = i_id;
end; $$;

-----------------------------------------------------
CREATE
OR REPLACE PROCEDURE DELETE_USER (I_ID INTEGER) LANGUAGE PLPGSQL AS $$
declare
begin
update users  set DELETED = ID where ID = I_ID;
end; $$;


CREATE TABLE EDUCATIONDOCUMENTS (
	ID SERIAL PRIMARY KEY,
	YEAR INT NOT NULL,
	USERID INT NOT NULL,
	DELETED INT NOT NULL DEFAULT 0,
	CONSTRAINT FK_EDU_USER_ID FOREIGN KEY (USERID) REFERENCES USERS (ID)
);

CREATE TABLE EDUCATIONSTATISTICS (
	ID SERIAL PRIMARY KEY,
	EDUCATIONDOCUMENTID INT NOT NULL,
	COUNTRYID INT NOT NULL,
	OLD_YEAR_HIGH_EDU_COUNT INT,
	OLD_YEAR_MID_EDU_COUNT INT,
	OLD_YEAR_NO_EDU_COUNT INT,
	CURR_YEAR_HIGH_EDU_COUNT INT,
	CURR_YEAR_MID_EDU_COUNT INT,
	CURR_YEAR_NO_EDU_COUNT INT,
	DELETED INT DEFAULT 0 NOT NULL,
	CONSTRAINT FK_EDU_DOC_ID FOREIGN KEY (EDUCATIONDOCUMENTID) REFERENCES EDUCATIONDOCUMENTS (ID),
	CONSTRAINT FK_EDU_COUNTRY_ID FOREIGN KEY (COUNTRYID) REFERENCES COUNTRIES (ID)
);
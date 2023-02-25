DELIMITER //
CREATE PROCEDURE GET_USER_SECOND_USER(in email varchar,)

BEGIN
set @sql = concat('SELECT * FROM account WHERE email = ', email);

END //
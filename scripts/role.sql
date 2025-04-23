DROP ROLE if exists default_role;
CREATE ROLE default_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO default_role;
GRANT default_role TO dvd;
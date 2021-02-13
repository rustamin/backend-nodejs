/***CREATING ALL TABLES*/
CREATE TABLE api_log (
  id   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  endpoint    VARCHAR(100)            NULL,
  params     VARCHAR(255)             NULL,
  created_at DATETIME                 NULL
)
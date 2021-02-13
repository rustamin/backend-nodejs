FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD 123  
ENV MYSQL_DATABASE movies  
ENV MYSQL_USER user1  
ENV MYSQL_PASSWORD 123

ADD setup.sql /docker-entrypoint-initdb.d

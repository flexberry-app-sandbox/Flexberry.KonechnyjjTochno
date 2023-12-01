docker build --no-cache -f SQL\Dockerfile.PostgreSql -t konechnyjjtochno-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t konechnyjjtochno-java/app ../../..

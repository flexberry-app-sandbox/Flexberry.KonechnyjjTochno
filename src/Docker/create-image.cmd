docker build --no-cache -f SQL\Dockerfile.PostgreSql -t konechnyjjtochno/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t konechnyjjtochno/app ../..

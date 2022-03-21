start:
	docker run -p 3000:3000 --name travel-app -v "${PWD}/src:/app/src" -v "${PWD}/public:/app/public" travel-app:latest

stop:
	docker stop travel-app

remove:
	docker container rm travel-app

build:
	docker build -t travel-app:latest .
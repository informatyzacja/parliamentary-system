build:
	DOCKER_BUILDKIT=1 docker-compose build

start:
	DOCKER_BUILDKIT=1 docker-compose up -d

web:
	DOCKER_BUILDKIT=1 docker-compose up web

api:
	DOCKER_BUILDKIT=1 docker-compose up api

clean:
	docker-compose rm && ( rm .env || echo "Error removing .env" ) && ( rm -r logs || echo "Error removing log directory" )

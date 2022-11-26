init:
	cp frontend/.env.example frontend/.env && cp backend/.env.example backend/.env

build:
	cp .config/database.js backend/config/database.js && DOCKER_BUILDKIT=1 docker compose build

start:
	DOCKER_BUILDKIT=1 docker compose up -d

frontend:
	DOCKER_BUILDKIT=1 docker compose up frontend

backend:
	DOCKER_BUILDKIT=1 docker compose up backend

clean:
	docker compose rm && ( rm .env || echo "Error removing .env" ) && ( rm -r logs || echo "Error removing log directory" )

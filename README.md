# WebFolio

<div align="center">

### Full Stack Developer Portfolio built with Angular, Docker and VPS Infrastructure

<p>
  Responsive portfolio focused on real-world projects, CI/CD workflows and production-ready deployments.
</p>

<p>
  <a href="https://gastonlevy.com"><strong>Live Demo</strong></a>
</p>

<br>

<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
<img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">
<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white">
<img src="https://img.shields.io/badge/Traefik-24A1C1?style=for-the-badge&logo=traefikproxy&logoColor=white">
<img src="https://img.shields.io/badge/VPS-2C2C2C?style=for-the-badge">

</div>

---

# Overview

WebFolio is a personal developer portfolio designed to showcase:

* Full stack applications
* SaaS platforms
* VPS deployments
* Dockerized infrastructures
* Streaming systems
* CI/CD workflows
* Production-ready deployments

The project was built with Angular using a reusable component architecture and centralized project-driven data rendering.

---

# Features

* Responsive desktop and mobile UI
* Dynamic project detail pages
* Reusable Angular components
* GitHub project integration
* Custom SCSS design system
* Dockerized production deployment
* GitHub Actions CI/CD pipeline
* HTTPS with Traefik and Let's Encrypt

---

# Tech Stack

## Frontend

| Technology | Purpose                  |
| ---------- | ------------------------ |
| Angular    | Frontend framework       |
| TypeScript | Application logic        |
| SCSS       | Custom styling           |
| Bootstrap  | Responsive layout system |

---

## Infrastructure

| Technology     | Purpose                 |
| -------------- | ----------------------- |
| Docker         | Containerization        |
| Nginx          | Static file serving     |
| GitHub Actions | CI/CD automation        |
| Traefik        | Reverse proxy and HTTPS |
| VPS            | Production hosting      |

---

# Project Structure

```txt
frontend/
├── public/
├── src/
│   ├── app/
│   ├── assets/
│   └── styles.scss
├── angular.json
├── nginx.conf
└── package.json

docker/
└── frontend/
    └── Dockerfile

.github/
└── workflows/
    └── deploy.yml
```

---

# Local Development

## Run with Docker

```bash
docker compose up
```

Application:

```txt
http://localhost:4200
```

---

# Production Deployment

The application is deployed automatically using GitHub Actions.

## Deployment Flow

```txt
Push to main
        ↓
GitHub Actions
        ↓
Docker image build
        ↓
Push to GitHub Container Registry
        ↓
VPS pulls latest image
        ↓
Docker Compose recreates container
        ↓
Traefik handles HTTPS routing
```

---

# Docker Production Build

```bash
docker build -f docker/frontend/Dockerfile -t webfolio .
```

---

# Infrastructure Notes

The portfolio runs inside Docker containers and is exposed publicly through Traefik with automatic HTTPS certificates managed by Let's Encrypt.

Production stack includes:

* Angular production build
* Nginx static server
* Docker containerization
* GitHub Actions deployment pipeline
* VPS hosting
* Traefik reverse proxy

---

# Author

## Gastón Levy

* Portfolio: [https://gastonlevy.com](https://gastonlevy.com)
* GitHub: [https://github.com/GastonLevy](https://github.com/GastonLevy)
* LinkedIn: [https://www.linkedin.com/in/gaston-omar-lino-levy](https://www.linkedin.com/in/gaston-omar-lino-levy)

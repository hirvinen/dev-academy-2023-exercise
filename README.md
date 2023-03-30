# Helsinki city bike app

This is my solution to the [Solita Dev Academy Finland 2023 pre-assignment](https://github.com/solita/dev-academy-2023-exercise). The purpose of this project is more generally to showcase some aspects of how I work with software.

- [Helsinki city bike app](#helsinki-city-bike-app)
  - [Scope](#scope)
  - [Technologies used](#technologies-used)
  - [Development](#development)
  - [Repository structure](#repository-structure)
    - [Running scripts for individual packages](#running-scripts-for-individual-packages)
    - [Linting](#linting)
  - [Running the project](#running-the-project)
    - [Prerequisites](#prerequisites)
    - [Configuration](#configuration)
    - [Running the database](#running-the-database)
    - [Building packages](#building-packages)
    - [Running in development mode](#running-in-development-mode)
    - [Running in production mode](#running-in-production-mode)
    - [API server](#api-server)
    - [Frontend](#frontend)
  - [Running tests](#running-tests)
    - [Frontend end-to-end testing](#frontend-end-to-end-testing)
      - [Cypress dependencies on Linux / WSL (2)](#cypress-dependencies-on-linux--wsl-2)
  - [Features](#features)
    - [Data import](#data-import)
    - [Journey list view](#journey-list-view)
    - [Station list](#station-list)
    - [Single station view](#single-station-view)
  - [Data sources](#data-sources)

## Scope

In short, the scope of the project is to create a web application for displaying [Helsinki City Bikes](https://www.hsl.fi/kaupunkipyorat) stations and some historical data about trips made with them.

## Technologies used

This is the current plan, and may be subject to change

- [PostgreSQL](https://www.postgresql.org/) for storing the data
- [TypeScript](https://www.typescriptlang.org/) and [Node.js](https://nodejs.org/) for data import
- TypeScript and [Express](https://expressjs.com/) for the backend
- TypeScript, [React](https://react.dev/) and [Next.js](https://nextjs.org/) for the frontend
- [Docker](https://www.docker.com/) for environmental consistency etc.
- [Turborepo](https://turbo.build/) for managing multiple projects in a single repository
- [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting and formatting
- [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged) for pre-commit running of linters and tests
- TODO: Testing frameworks to be decided
- [Github actions](https://github.com/features/actions) for running tests

## Development

Before starting development, install git hooks by running `npx husky install`.

## Repository structure

This project is set up as a monorepo containing multiple packages:

- apps
  - api for the backend service
  - frontend for the frontend application
- packages
  - data-import for importing the data
  - common for common data structures, types etc.

[Turborepo](https://turbo.build/) is used to run scripts across all packages concurrently, e.g. `turbo build test` would run `build` and `test` scripts in all packages.

To install/update/remove dependencies for a single package, use the `--workspace` option in npm. E.g. to install React for the frontend, execute `npm install react --workspace=frontend` in the project root.

### Running scripts for individual packages

In order to run a script for an individual package, use `turbo [run] <script> --filter=<package>` in the project root or `npm run <script>` in the package directory.

### Linting

Eslint is not configured separately for individual packages, except for frontend, which requires some next-specific configuration. To lint everything, run `npm run lint` in project root.

## Running the project

### Prerequisites

TODO: Specify versions

- [Docker](https://www.docker.com/), 23.0.1 used. Based on using compose file format 3, anything >=1.13.0 may work.
- [Node.js](https://nodejs.org/)

### Configuration

Some configuration options MUST be set before running some things, such as setting a password for the database. Copy `.env.example` to `.env` and fill in the blanks.

### Running the database

In order to run the database alone, set the database password in `.env` and execute `docker-compose up` in project root.

### Building packages

All packages can be built by executing `npm run build`.

### Running in development mode

All apps can be run in development mode with `npm run dev` in the project root. This runs the database container and runs the apps.

### Running in production mode

All apps can be run in production mode with `npm run start` in the project root. This runs the database container, builds all packages and runs the apps in production mode.

### API server

API server will be listening on <http://localhost:3000> by default. Set API_PORT in .env to change that.

### Frontend

The frontend server will be listening on <http://localhost:4000> by default. Set `FRONTEND_PORT` and `FRONTEND_HOST` in `.env` to change that.

## Running tests

TODO

### Frontend end-to-end testing

Before running end-to-end tests, run everything in development mode. TODO: Update this when production mode run scripts are defined.

[Cypress](https://www.cypress.io/) will be used for frontend end-to-end testing. Cypress GUI can be used to run and manage them. To launch it, run `npm run cypress` in the frontend directory.

In order to run them headless, run `npm run test` in the frontend directory. Videos of the tests are generated into `cypress/videos`.

#### Cypress dependencies on Linux / WSL (2)

At least running the Cypress GUI [may require installing additional dependencies on Linux.](https://docs.cypress.io/guides/getting-started/installing-cypress#Linux-Prerequisites). This also applies to WSL / WSL2.

- On Ubuntu/Debian: `sudo apt install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb`.
- On CentOS and probably its relatives, `sudo yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib`.

If you are using WSL(2), you will also need an X server. I use [VcXsrv](https://sourceforge.net/projects/vcxsrv/) 1.20.14.0. Except for the part about disabling access control, [this tutorial](https://aalonso.dev/blog/how-to-use-gui-apps-in-wsl2-forwarding-x-server-cdj) has good instructions for installing it. Instead of disabling access controls, follow the steps in [this StackOverflow answer](https://stackoverflow.com/a/66768217) to set up a `.XAuthority` file and a shortcut to VcXsrv, which uses that file.

## Features

### Data import

Planned features

- [ ] Import data from the CSV files to a database or in-memory storage
- [ ] Validate data before importing
- [ ] Don't import journeys that lasted for less than ten seconds
- [ ] Don't import journeys that covered distances shorter than 10 meters

### Journey list view

Planned features

- [ ] List journeys
  - [ ] Hard-coded limit on list length until pagination is implemented
- [ ] For each journey show departure and return stations, covered distance in kilometers and duration in minutes

Possible additional features

- [ ] Pagination
- [ ] Ordering per column
- [ ] Searching
- [ ] Filtering

### Station list

Planned features

- [ ] List all the stations

Possible additional features

- [ ] Pagination
- [ ] Searching

### Single station view

Planned features

- [ ] Station name
- [ ] Station address
- [ ] Total number of journeys starting from the station
- [ ] Total number of journeys ending at the station

Possible additional features

- [ ] Station location on the map
- [ ] The average distance of a journey starting from the station
- [ ] The average distance of a journey ending at the station
- [ ] Top 5 most popular return stations for journeys starting from the station
- [ ] Top 5 most popular departure stations for journeys ending at the station
- [ ] Ability to filter all the calculations per month

## Data sources

Trip data. The data is owned by City Bike Finland.

- <https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv>
- <https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv>
- <https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv>

Station data.

- Dataset: <https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv>
- License and information: <https://www.avoindata.fi/data/en/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902>

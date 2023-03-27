# Helsinki city bike app

This is my solution to the [Solita Dev Academy Finland 2023 pre-assignment](https://github.com/solita/dev-academy-2023-exercise). The purpose of this project is more generally to showcase some aspects of how I work with software.

- [Helsinki city bike app](#helsinki-city-bike-app)
  - [Scope](#scope)
  - [Technologies used](#technologies-used)
  - [Repository structure](#repository-structure)
  - [Running the project](#running-the-project)
    - [Prerequisites](#prerequisites)
    - [Configuration](#configuration)
    - [Running the database](#running-the-database)
    - [Building packages](#building-packages)
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

## Repository structure

This project is set up as a monorepo containing multiple packages:

- apps
  - api for the backend service
  - frontend for the frontend application
- packages
  - data-import for importing the data
  - common for common data structures, types etc.

[Turborepo](https://turbo.build/) is used to run scripts across all packages concurrently, e.g. `turbo build lint` would run `build` and `lint` scripts in all packages.

To install/update/remove dependencies for a single package, use the `--workspace` option in npm. E.g. to install React for the frontend, execute `npm install react --workspace=frontend` in the project root.

## Running the project

### Prerequisites

TODO: Specify versions

- [Docker](https://www.docker.com/), 23.0.1 used. Based on using compose file format 3, anything >=1.13.0 may work.
- [Node.js](https://nodejs.org/)

### Configuration

Some configuration options MUST be set before running some things, such as setting a password for the database. Copy `.env.example` to `.env` and fill in the blanks.

### Running the database

In order to run the database, set the database password in `.env` and execute `docker-compose up` in project root.

### Building packages

All packages can be built by executing `turbo build`.

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

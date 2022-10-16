# Jupiter API

This is the official repository for the Jupiter API. Please note that the prior Python API **has been deprecated**.

### Legacy Codebase

The legacy codebase (with FastAPI) can be found underneath the `legacy` branch in this repository.

## Technologies

- Express.js
- TypeScript
- MongoDB
  - AWS running instance
- Postgres
  - **Currently unsupported**

## Documentation

The documentation is currently under development, please check the [jupiterproject/api-docs](//github.com/jupiterproject/api-docs) repository for more updates.

## Todo

- [x] Setup express
  - [x] OOP routes/controllers
- [x] Sync with MongoDB
- [ ] Google Classroom API - fetching data
  - Build internal wrapper for communication with GC
- [x] Create todos
- [ ] List all courses
- [ ] Set course time / Update course time
- [ ] Delete a course

## Self-Hosting

The self-hosting guide is subject to change. The guide will only include the current steps of self-hosting.

1. Clone and `cd` into the repository

```bash
git clone https://github.com/jupiterproject/api.git jupiter-api && cd jupiter-api
```

2. Install the required dependencies (the project uses Yarn, and we recommend you do so as well)

```bash
yarn
# or if you prefer npm
npm install
```

3. Compile the code

```bash
tsc

# of if you want to watch the changes

tsc --watch
```

4. Open a new terminal tab and start the project

```bash
node .
```

That's it! (For now)

## Contributing

Outside contributors will not be accepted as of now.

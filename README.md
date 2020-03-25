<h1 align="center">OmniStack Week 11.0 - Rocketseat</h1>
<h2 align="center">Node, ReactJS, React Native, SQLite</h2>
<hr>

> NOTE: This is a study project

## Back-end
    
### Commands

    mkdir backend
    cd backend
    npm install (necessary modules)
    npm install knex
    npm install sqlite3
    npx knex init
    mkdir src
    cd src
    mkdir database
    

> NOTE: Edit the knexfile.js

    development: {
        client: 'sqlite3',
        connection: {
        filename: './src/database/db.sqlite'
        }
    }

### Files

    create -> src/index.js
    create -> routes.js


## Front-end

### Commands

    npx create-react-app frontend
    
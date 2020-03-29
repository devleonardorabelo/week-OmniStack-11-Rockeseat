<h1 align="center">OmniStack Week 11.0 - Rocketseat</h1>
<h2 align="center">Node, ReactJS, React Native, SQLite</h2>
<hr>

> NOTE: This is a study project

## Back-end
    
### Commands

    mkdir backend
    cd backend
    npm init -y
    npm install (necessary modules)
    npm install knex
    npm install sqlite3
    npx knex init
    mkdir src
    cd src
    mkdir database
    cd database
    mkdir migrations 

> NOTE: Edit the knexfile.js

    development: {
        client: 'sqlite3',
        connection: {
            filename: './src/database/db.sqlite'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        useNullAsDefault: true,
    }

### Files

    create -> src/index.js
    create -> routes.js

### Database

    npx knex migrate:make create_ongs
    edit -> generated file in src/database/migrations/20200.._create_ongs.js
    npx knex migrate:latest

    npx knex migrate:make create_incidents
    edit -> generated file in src/database/migrations/20200.._create_incidents.js
    npx knex migrate:latest

    npm knex for help



## Front-end

### Commands

    npx create-react-app frontend


<hr>

## MOBILE

    npm install -g expo-cli
    expo -h
    expo init mobile
    cd mobile
    yarn start


> https://reactnavigation.org/docs/getting-started/

#### React Navigation

    npm install @react-navigation/native
    expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
    npm install @react-navigation/stack
    npm install constants
    npm install expo-mail-composer


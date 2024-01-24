# Project Title
Currency Converter

## Overview

I will be building a very simple currency converter website with the help of an API with the list of countries. 
### Problem

My application needs an external API with api key, It is integrating with the backend by express.js and the data will be stored in mysql database

### User Profile

--User can convert to designated currency from a specified currency

### Features

- As a user, I can convert currency from a specific country to a concerned country


- As a logged in user, I can convert currency and being able to send money to different country

## Implementation

### Tech Stack

- React
- MySQL
- Express
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - knex
    - express
    - mysql

### APIs

-  external APIs will be used.

### Sitemap

- Home page
- Register Page
- Login Page
- Currency Converter
- Send Money

### Mockups




### Data

![](sql-diagram.png)

### Endpoints



**POST /users/register**

- Add a user account

Parameters:

- email: User's email
- password: User's provided password
-Dob:user's Dob
Response:
```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /users/login**

- Login a user

Parameters:
- email: User's email
- password: User's provided password

Response:
```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

### Auth

- JWT auth
    - Before adding auth, all API requests will be using a fake user with id 1
    - Added after core features have first been implemented
    - Store JWT in localStorage, remove when a user logs out
    - Add states for logged in showing different UI in places listed in mockups

## Roadmap

- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing, with placeholder 200 responses

- Create migrations

- Gather some user information in database

- Create seeds with User database table

- Deploy client and server projects so all commits will be reflected in production



- Feature: Home page

- Feature: Create account
    - Implement register page + form
    - Create POST /registerUser endpoint

- Feature: Login
    - Implement login page + form
    - Create POST /registerUsers/loginUser endpoint

- Feature: Implement JWT tokens
    - Server: Update expected requests / responses on protected endpoints
    - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes

- DEMO DAY

## Nice-to-haves

- Integrate to add card information while sending money
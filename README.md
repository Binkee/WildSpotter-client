# Description
                WILD SPOTTER

This app is about spotting the big five animals in europe. 
You can pin the map where you spotted one of the animals

# User Stories

404:  I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault

Signup: I can sign up in the platform so that I can see the where about of my favorite Animals

Login: As a user I can login to the platform so that I can see the where about of my favorite Ani

Logout: As a user I can logout from the platform so no one else can use it

Add Animals As a user I can add a spotted animal so that I can share it with the community

Add Tour to find animals .

Search Animals As a user I want to search animals by name so that i can see there last locations

# Backlog
User profile:

see other users profile and see which aninals they spotted

Geo Location:

see the spotted animals in the map

# Client
Routes
/ - Homepage/signin
/auth/signup - Signup form
/auth/login - Login form
/animals location of the spotted animals
/animals/spotted - create a spotted animal
/animals/:id - animals detail
/profile/me - my details and spotted animals
404

# Pages
Home Page / Sign in page
Sign Up Page
Animals List Page (public only)
Animals Create (user only)
Animals Detail Page (public only)
My Profile Page (user only)
Edit Profile Page
404 Page (public)

# Components
NavBar
NewsFeed
Maps
Profile
Tours

# Server

User model

username - String // required
email - String // required & unique
password - String // required


Animal model
location string
description string
image string
userId = string
type of animal enum = bear, wolf, moose, lynx, bison,

Tours model
name string
description string
userid string
location string




# API Endpoints/Backend Routes
GET /auth/me
POST /auth/signup
body:
    username
    email
    password
POST /auth/login
body:
username
password
POST /auth/logout
body: (empty)
POST /user/me/favorite
body:
restaurantId
DELETE /user/me/favorite/:restaurantId
body: (empty)
GET /restaurant
POST /restaurant
body:
name
phone
address
GET /restaurant/:id
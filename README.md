# Video Recommendation App Full Stack

## Background

Before you continue to final projects we have to make sure that you can meaningfully contribute to a technical project.

This means that we need to be sure that you can create a Full Stack app.

## Challenge

In this project you will be building a project that fulfills the following User Stories

- As a user, I want to be able to view a list of all YouTube videos posted on the site
- As a user, I want to be able to post videos that I like from YouTube to my website.
- As a user, I want to be able to delete videos from the website that I no longer like.
- As a user, I want to be able to watch the videos embedded in the website.
- As a user, I want to be able to "Up Vote" a video if I like it.
- As a user, I want to be able to "Down Vote" a video if I dislike.

You don't need to worry about storing the video content itself - we'll rely on YouTube for this.

## Installation

Fork this repository and then clone it to your computer. This project is split into Front and Back ends.

Navigate to the `client` directory

```
cd client
```

Install dependencies

```
npm install
```

Setup `.env `file in the current directory with following variables:

```
REACT_APP_API_URL=http://localhost:8000 // For local deployment

REACT_APP_API_URL=http://example.com // When deployed
```

Head to the `server` folder and install dependencies

```
npm install
```

Then setup `.env `file in the `server` directory with following variables:

```
DB_NAME=[your_db_name]
DB_PASSWORD=[your_db_password]
DB_USER=[your_username]
```

## Usage

Run `npm start` in the `server` directory, then run the same command in the `client` folder.

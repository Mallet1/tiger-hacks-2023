# Fullstack Discord Clone: Next.js 13, React, Socket.io, Prisma, Tailwind, MySQL | Full Course 2023

![Copy of Copy of Copy of Fullstack Twitter Clone (5)](https://github.com/AntonioErdeljac/next13-discord-clone/assets/23248726/14e25e4f-eb83-44dd-8b97-4f2666b89386)

This is a repository for Fullstack Discord Clone: Next.js 13, React, Socket.io, Prisma, Tailwind, MySQL | Full Course 2023

[VIDEO TUTORIAL](https://www.youtube.com/watch?v=ZbX4Ok9YX94)

Features:

-   Real-time messaging using Socket.io
-   Send attachments as messages using UploadThing
-   Delete & Edit messages in real time for all users
-   Create Text, Audio and Video call Channels
-   1:1 conversation between members
-   1:1 video calls between members
-   Member management (Kick, Role change Guest / Moderator)
-   Unique invite link generation & full working invite system
-   Infinite loading for messages in batches of 10 (tanstack/query)
-   Server creation and customization
-   Beautiful UI using TailwindCSS and ShadcnUI
-   Full responsivity and mobile UI
-   Light / Dark mode
-   Websocket fallback: Polling with alerts
-   ORM using Prisma
-   MySQL database using Planetscale
-   Authentication with Clerk

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-discord-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=


DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |

![Preview](https://github.com/bmicham/React-Weight-Tracker/assets/60907784/c3657f59-b6a5-424a-9422-dbc22aa590c0)

> **Warning**
> Data is wiped when computer is shutdown/restarted make sure to download data when done

## Download Data

Downloads the data that has been inputed into a JSON file

## Clear All Data

Clears all data entered and removes the saved localStorage data that was created

## Upload Data

Upload a JSON file of previously entered data

## Progress Tracker

This will show 2 graphs showing overall progression for your weight and calories. The top graph shows weight the target weight can be set at the bottom of the page this will also set the max y-axis to 5 lbs above your target weight.
The minimum weight value will the the bottom of the y-axis, I recommend 2-3 lbs below your minimum weight.

## Weight/Calorie Tables

These allow you to individually edit all values that you have input.

## Avoid Data Wipe

I would recommend using a free hosting site to use this. I use netlify.com, all you have to do is drag and drop the build folder into where it asks for the website output.

<br/><br/>
<br/><br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

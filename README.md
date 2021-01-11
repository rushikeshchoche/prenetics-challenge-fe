# Prenetics Challenge Frontend code

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Structure

```bash
├── src
│   ├── components
│   │   ├── Header.js             # Displays Header Part with Prenetics logo
│   │   ├── Login.js              # Allows User Login
│   │   ├── Home.js               # Displays Home Page for Prenetics
│   │   ├── Profile.js            # Displays User Profile with name email and DOB and Genetics result data
│   │   ├── PrivateRoute.js       # Authorised routing for components
│   │   ├── reducer.js            # reducer function for token user and genetics
│   │   ├── StateProvider.js      # createContext for Data Layer
│   │   ├── Footer.js             # Display Footer part
│   ├── services
│   │   ├── authentication.service   # This service is used login and logout
│   │   ├── user.service.service     # This service to fetch user data
│   ├── app.js                       # This is the root component of the application
│   ├── index.js                     # ReactDOM.render is called
```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

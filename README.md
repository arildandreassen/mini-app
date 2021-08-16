# Happy Tails Shelter Readme

Prerequisites:

1. Run `npm install` in the root directory
2. Navigate to the `/client` directory and run `npm install` there too

Running

1. To start the server, run `npm start` in the root directory. This should start both the backend and the frontend.
2. In a different terminal window, there are a few options to run the tests;

   - `npm run cy:api:run` will execute only the `api` tests against the backend
   - `npm run cy:e2e:run` will execute only the `e2e` tests against the frontend
   - `npm run cy` will execute both the api tests against the backend and the e2e tests againstt he frontend.
   - `npm run cy:api:open` and `npm run cy:e2e:open` can also be run to bring the Cypress interactive window up and run tests manually.

3. The written tests can be found under `/cypress/integration`

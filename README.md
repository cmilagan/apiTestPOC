# apiTestPOC

The following is a simple POC for API automation based on the following server:
https://petstore.swagger.io/#/store/getInventory

More information on the design and thought process can be seen here:
https://knotty-carver-ffc.notion.site/Trovio-API-Testing-Sample-Project-0ef49ff80c33465098ea573ecdd3bd11?pvs=25

## Framework overview:

- Written using playwright module for API testing
- Written in typescript
- Configured with eslint & prettier for syntax checking
- Design Pattern: Page Object Model
  - Pages in this case would be the different API endpoints for example:
    - pet
    - store
    - user
      would all have their own "pages" created for them containing all the request logic
- Test cases are split into categories depending on which endpoint they are testing, if the assertions are focused on pet endpoint they will be added to `tests/pet`, likewise if it focused on store endpoint it would be added to `tests/store`
- Automation framework can be configured to different environments through modifiying `.env.<env_name>` file
-

## Usage / Running the test:

1. Install project dependencies using

   - npm install

2. Run the following script

   - npm run test

### NOTE CONFIGURE ENV VARIABLES in a created file `.env.<ENV>` if required

## How to extend API tests:

1. If required add API request body to `<endpoint>RequestBody.ts` file, Follow the examples there

2. Add required request to `<endpoint>Request.ts` file, Follow examples there

3. Create a new test file for test case, in the following schema: `TC00X_<testName>.ts` in the appropiate directory

## View test results / Reporter

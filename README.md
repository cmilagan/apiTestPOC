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

## Usage / Running the test:

1. Install project dependencies using

   - npm install

2. Run the following script

   - npm run test

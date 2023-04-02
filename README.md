# Food Styles backend GraphQL server

## Setup
1. Install latest Node
2. install npm and yarn
3. Install node modules: `yarn`
4. Build app: `yarn build`
5. Start app: `yarn start`

## GraphQL schema Typescript types
Each time you modify the `*.graphql` files run `yarn schema:codegen` to generate the types used in queries and mutations.

## App build and running
`yarn build-start` can be used to build and start the application.
In order for file changes to take effect for the app you can run `yarn build` while the server is running.

### TODO
Add watcher to run the build script while they are edited.
# Shopping cart with Stripe payments

This repository showcases a proof-of-concept shopping cart with checkout.

## Features

#### Shopping cart

This features allows users to:

- add and remove products from the cart,
- view the quantities of each product in their cart, along with the corresponding subtotals,
- see the total price for all products in the cart.

#### Checkout

This feature enables users to:

- seamlessly proceed with the checkout process for their selected products,
- securely purchase the products using various online payment methods (using Stripe), and
- cancel the checkout process, if needed.
- Users are directed to the appropriate page based on the outcome of their checkout process.

## Tech Stack

#### Client

- [Create React App](https://github.com/facebook/create-react-app) - a tool that provides a simplified and pre-configured setup for quickly creating and developing [React.js](https://react.dev/) applications.
- [Typescript](https://www.npmjs.com/package/typescript) - a typed version of JavaScript that improves code quality and maintenance.
- [Redux](https://redux.js.org/) - a state management library for JavaScript applications.
- [Redux Toolkit](https://redux-toolkit.js.org/) - an official opinionated package that simplifies the use of Redux.
- [React Bootstrap](https://react-bootstrap.github.io/) - a popular library that combines the power of React framework with the styling capabilities of Bootstrap, providing pre-styled UI components for building responsive and modern web applications.
- [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client.
- [ESLint](https://www.npmjs.com/package/eslint) with [Airbnb config](https://www.npmjs.com/package/eslint-config-airbnb) and [Typescript parser](https://www.npmjs.com/package/@typescript-eslint/parser) enforces coding style and helps catch errors in development.

#### Server

- [Node.js](https://nodejs.org/en) - an open-source JavaScript runtime environment for building server-side applications.
- [Express.js](https://expressjs.com/) - a web application framework for Node.js that makes it easier to build and manage APIs.
- [Stripe](https://stripe.com/en-nl) - widely-used and trusted payment processing platform that allows businesses to securely accept and manage online payments.
- [Joi](https://www.npmjs.com/package/joi) - schema description language and data validator for JavaScript.
- [Winston](https://www.npmjs.com/package/winston) - logging library for Node.js applications.
- [Cors](https://www.npmjs.com/package/cors) - Node.js CORS middleware
- [Typescript](https://www.npmjs.com/package/typescript) - a typed version of JavaScript.
- [ts-node](https://www.npmjs.com/package/ts-node) - TypeScript execution environment and REPL for Node.js.
- [Nodemon](https://www.npmjs.com/package/nodemon) automatically restarts the Node application when file changes in the directory are detected.
- [Concurrently](https://www.npmjs.com/package/concurrently) - allows running multiple commands concurrently in a single terminal.
- [ESLint](https://www.npmjs.com/package/eslint) with [Typescript parser](https://www.npmjs.com/package/@typescript-eslint/parser) enforces coding style and helps catch errors in development.

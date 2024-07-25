# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Currency: United States Dollar (USD)

This vending machine accepts the following coin and bill denominations:

- $0.05 (nickel)
- $0.10 (dime)
- $0.25 (quarter)
- $1 bill
- $5 bill
- $10 bill

Please note that the vending machine does not accept pennies ($0.01) or any other denominations not listed above. Prices for items and change will be calculated and displayed in dollars and cents.

## Usage

1. Insert money using the provided buttons for each denomination.
2. Select the desired product(s).
3. Adjust the quantity of each selected product using the incrementer (+) and decrementer (-) buttons.
4. Press the "Buy" button when ready to make a purchase.
5. Collect your item(s) and any change.
6. If you want to cancel the transaction, press the "Reset" button.

## Note for Developers

When implementing the vending machine logic, ensure that:

1. Only the specified denominations are accepted.
2. All prices and calculations are in USD and cents.
3. The machine can provide change using the available denominations.
4. The machine should not allow purchases if insufficient funds are inserted.
5. Prices should be set in a way that can be paid with the available denominations and change can be given accordingly.

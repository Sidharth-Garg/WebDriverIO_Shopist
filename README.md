# Shop.ist Test Suite

This repository contains automated tests for the Shop.ist website using WebDriverIO and TypeScript.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your/repository.git
```

2. Install dependencies:

```bash
npm install
```

## Configuration

Make sure to configure your WebDriverIO environment in the `wdio.conf.js` file.

## Usage

To run the test suite, execute the following command:

```bash
npm test
```

## Test Cases

### 1. Checking Header Links

This test case verifies the functionality of header links on the Shop.ist homepage.

### 2. Add Elements To Cart

This test case adds a product to the cart and verifies if it is successfully added.

### 3. Try to add sold out item

This test case attempts to add a sold-out item to the cart and verifies if the appropriate error message is displayed.

### 4. Add element and checkout

This test case adds a product to the cart and proceeds to the checkout process.

### 5. Edit Profile -> Save Profile -> View Updated Profile

This test case edits the user's profile information, saves the changes, and verifies if the profile is updated correctly.

## Page Objects

- `Homepage`: Contains methods related to actions on the homepage.
- `Itempage`: Contains methods related to actions on item pages.
- `Cart`: Contains methods related to actions on the shopping cart.
- `Profile`: Contains methods related to actions on the user profile page.

## Contributors

- Sidharth - Creator and maintainer

## License

This project is licensed under the [MIT License](LICENSE).

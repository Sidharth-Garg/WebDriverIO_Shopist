# Shop.ist WebDriverIO

This repository contains automated tests for the Shop.ist website using WebDriverIO and the Page Object Model in TypeScript.

## Description

This project is dedicated to automating the testing of the Shop.ist website (https://shopist.io/) using the WebDriverIO framework. The tests are written in TypeScript and follow the Page Object Model design pattern, which enhances the maintainability and readability of the test code.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your/repository.git
```

2. Install dependencies, including WebDriverIO:

```bash
npm init wdio@latest .
```

3. Install TypeScript types (if not already installed):

```bash
npm install --save-dev @types/node @types/webdriverio
```

## Configuration

Make sure to configure your WebDriverIO environment in the `wdio.conf.js` file.

## Usage

To run the test suite, execute the following command:

```bash
npm run wdio 
```
## Folder Structure

```
test/
│
├── pageobjects/
│   ├── cartPage.ts
│   ├── homePage.ts
│   ├── itemPage.ts
│   └── myProfilePage.ts
│
└── spec/
    └── testSuite.spec.ts
```

## Test Cases

The test suite for the Shop.ist website covers various scenarios to ensure the functionality and reliability of the application. Each test case is designed to validate specific features or user interactions, providing comprehensive test coverage.

### 1. Checking Header Links

This test case verifies the functionality of header links on the Shop.ist homepage by clicking on each link and confirming that the corresponding page opens correctly.

### 2. Add Elements To Cart

This test case adds a product to the shopping cart from the Sofas category and verifies that it is successfully added, ensuring seamless product addition functionality.

### 3. Try to add sold out item

This test case attempts to add a sold-out item to the cart and checks whether the expected error message is displayed, ensuring proper handling of sold-out products.

### 4. Add element and checkout

This test case adds a product to the cart and proceeds to the checkout process, confirming that users can add items to the cart and proceed with their purchase smoothly.

### 5. Edit Profile -> Save Profile -> View Updated Profile

This test case covers the user profile management functionality by editing the user's profile information, saving the changes, and verifying that the updated profile details are displayed correctly.

By executing these test cases, we ensure the proper functioning of critical features, enhance the user experience, and maintain the integrity of the Shop.ist platform.

## Page Objects

Page Objects are a design pattern used in test automation to represent web pages as objects in code. In this project, we utilize the Page Object Model (POM) to create separate classes for each web page of the Shop.ist website. These classes encapsulate the functionality and elements of their respective pages, providing a clear and maintainable structure to the test code.

- `homePage`: Contains methods related to actions on the homepage, such as clicking header links and verifying page content.
- `itemPage`: Handles interactions with item pages, including selecting products and adding them to the cart.
- `cartPage`: Manages operations on the shopping cart, such as checking if products are added and proceeding to checkout.
- `myProfilePage`: Provides methods for editing user profile information and verifying profile updates.

By organizing page-specific logic into separate Page Object classes, we promote code reusability, readability, and maintainability, making it easier to manage and scale our test suite as the application evolves.

## Contributors

- Sidharth - Creator and maintainer


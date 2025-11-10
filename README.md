# Playwright QA Automation Project

This project demonstrates real-world **UI** and **API** test automation using **Playwright**.  
It showcases login session handling, end-to-end shopping workflow, and API testing (mocked to avoid external dependency failures).


## Features

### UI End-to-End Tests (SauceDemo)
- Login (executed **once**, session reused for all tests)
- Add product to cart
- Complete checkout process

### API Test (Mocked)
The public RealWorld API is unreliable, so the project includes a **mocked API workflow** that:
- Logs in
- Creates an article
- Deletes the article

This demonstrates **API request handling and validation** without depending on unstable external servers.


## Tech Stack

| Tool | Purpose |
|------|---------|
| **Playwright** | UI & API automation |
| **Node.js / JavaScript** | Test language and runtime |
| **Storage State** | Saves login session for reuse |
| **Mock API** | Stable API testing workflow |


## Project Structure

```

playwright/
├── tests/
│   ├── setup-login.spec.js       # Saves login session once
│   ├── login.spec.js             # Skipped after session reuse
│   ├── add-to-cart.spec.js       # UI test
│   ├── checkout.spec.js          # UI test
│   └── api-products.spec.js      # Mock API test
└── .auth/
└── user.json                 # Saved login session
playwright.config.js                # Global Playwright config

```

---

## How Login Session Reuse Works

1. `setup-login.spec.js` signs into SauceDemo.
2. Playwright stores the authenticated session in:
```

playwright/.auth/user.json

````
3. Other UI tests use this saved session → **no repeated logins**.

**Benefits:**  
1. Faster test runs  
2. Eliminates login flakiness  
3. Reflects industry best practice

---

## How to Run Tests

### Install dependencies
```bash
npm install
````

### Run login once (first time only)

```bash
npx playwright test playwright/tests/setup-login.spec.js
```

### Run all tests

```bash
npx playwright test
```

### (Optional) Run with visual test runner

```bash
npx playwright test --ui
```


## UI Test Flows (Simple Explanation)

| Test             | What It Does                                          | Why It Matters                         |
| ---------------- | ----------------------------------------------------- | -------------------------------------- |
| **Add to Cart**  | Chooses product → Adds to cart → Verifies badge count | Shows UI interactions & assertions     |
| **Checkout**     | Completes full purchase steps                         | Demonstrates end-to-end coverage       |
| **Session Save** | Saves login session to file                           | Real QA environments use session reuse |


## API Test (Mocked)

The **mock API test** demonstrates:

* Sending authenticated API requests
* Creating & deleting data
* Validating responses

This avoids failures caused by:

> DNS errors, 404s, or offline public REST APIs.


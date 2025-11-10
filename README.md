## **Playwright QA Automation Project**

This project is a **Quality Assurance automation suite** built with **Playwright**.
It demonstrates both **UI testing** and **API testing practices** commonly used in real QA roles.

### What This Project Tests

| Area                        | What’s Being Tested                         | Tools Used                          |
| --------------------------- | ------------------------------------------- | ----------------------------------- |
| **UI E2E Flow**             | Login → Add product to cart → Checkout      | Playwright (browser tests)          |
| **Authentication Handling** | Save login session to avoid repeated logins | Storage State in Playwright         |
| **API Testing (Mocked)**    | Create + Delete article workflow            | Playwright API Requests (with mock) |

---

## **Tech Stack**

* **Playwright** (UI + API testing)
* **JavaScript / Node.js**
* **Mocked API Responses** (stable & reliable for demo/testing)
* **Git-ready project** — can be pushed directly to GitHub

---

## **Project Structure**

playwright/
  ├── tests/
  │   ├── setup-login.spec.js       # Saves session (run once)
  │   ├── login.spec.js             # Skipped after using storage state
  │   ├── add-to-cart.spec.js       # UI: Add product to cart
  │   ├── checkout.spec.js          # UI: Full purchase flow
  │   └── api-products.spec.js      # Mock API: Create & delete article
  └── .auth/
      └── user.json                 # Saved login session
playwright.config.js                # Global test config

---

## **How the Login Session Works**

Instead of logging in before every test:

1. `setup-login.spec.js` logs in once.
2. The auth session is saved to `playwright/.auth/user.json`.
3. All UI tests reuse this session → **no repeated login**, **faster**, **more stable**.

---

## **How to Run the Project**

### 1. Install dependencies

npm install

### 2. Run initial login & save session (first time only)

npx playwright test playwright/tests/setup-login.spec.js

### 3. Run all tests

npx playwright test

### 4. (Optional) Open Playwright Test Runner UI

npx playwright test --ui

---

## **UI Tests Explained in Simple Language**

| Test         | What it Does                                               | Why It's Important                   |
| ------------ | ---------------------------------------------------------- | ------------------------------------ |
| Add to Cart  | Clicks a product → Adds to cart → Verifies cart count      | Shows interactive UI workflow        |
| Checkout     | Goes through checkout with form data → Confirms completion | Demonstrates full user journey       |
| Session Save | Logs in once and stores session token                      | Real companies optimize test runtime |

---

## **API Test (Mocked)**

Because the public RealWorld API is unstable, this project uses a **mock API response** so your tests are:

* Repeatable
* Fast
* Reliable
* Independent of external failures

The test simulates:

1. Login
2. Create an article
3. Delete the article

This showcases **API testing logic** without requiring a real backend.

---


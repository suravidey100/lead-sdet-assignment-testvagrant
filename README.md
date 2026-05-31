# Lead SDET Automation Framework Assignment

## 1. Overview

This repository contains a scalable, maintainable, and enterprise-grade automation framework developed as part of the Lead SDET technical assignment.

The framework automates both Web UI and API testing and demonstrates:

- Web Automation using Playwright + TypeScript
- API Automation using Playwright API Testing + TypeScript
- Shared reusable SDK architecture (`base-framework`)
- Storage State Authentication
- Page Object Model (POM)
- Test Data Factory Pattern
- Custom Assertion Framework
- AJV Schema Validation
- Allure Reporting
- GitHub Actions CI/CD Integration
- Smoke and Regression Suite Management

The framework is designed to reduce manual regression effort, improve test maintainability, and enable rapid onboarding of new automation engineers.

---

## 2. Architecture

The solution follows a layered architecture to ensure separation of concerns and scalability.

### Architecture Layers

Tests
↓
Fixtures
↓
Pages / API Clients
↓
Shared Base Framework SDK
↓
Playwright Engine

### Design Principles

- Single Responsibility Principle
- Reusability
- Maintainability
- Scalability
- Team Enablement
- CI/CD Readiness

### Design Patterns Used

- Page Object Model (POM)
- Factory Pattern
- Fixture Pattern
- Client Layer Pattern
- Shared SDK Pattern

---

## 3. Folder Structure

```text
lead-sdet-assignment/

├── base-framework/
│   ├── config/
│   ├── constants/
│   ├── helpers/
│   ├── logger/
│   ├── utils/
│   └── playwright/
│
├── web-tests/
│   ├── auth/
│   ├── pages/
│   ├── fixtures/
│   ├── test-data/
│   └── tests/
│
├── api-tests/
│   ├── clients/
│   ├── payloads/
│   ├── schemas/
│   ├── fixtures/
│   └── tests/
│
├── .github/
│   └── workflows/
│
└── docs/
```

### Folder Responsibilities

- base-framework → Shared reusable SDK
- web-tests → Web UI automation
- api-tests → API automation
- docs → Framework documentation
- workflows → CI/CD pipelines

---

## 4. Prerequisites

Before running the framework ensure the following are installed:

- Node.js (v20+ recommended)
- npm (v10+ recommended)
- Git
- Visual Studio Code

Optional:

- Allure CLI
- GitHub Account for CI/CD execution

Verify installation:

```bash
node -v
npm -v
git --version
```

---

## 5. Installation

### Clone Repository

```bash
git clone <repository-url>
cd lead-sdet-assignment
```

### Install Base Framework Dependencies

```bash
cd base-framework

npm install

npm run build

npm pack
```

### Install Web Test Dependencies

```bash
cd ../web-tests

npm install

npm install ../base-framework/base-framework-1.0.0.tgz

npx playwright install
```

### Install API Test Dependencies

```bash
cd ../api-tests

npm install

npm install ../base-framework/base-framework-1.0.0.tgz
```

---

## 6. Running Web Tests

### Execute All Tests

```bash
npx playwright test
```

### Execute Specific File

```bash
npx playwright test tests/login/login.spec.ts
```

### Execute Chromium

```bash
npx playwright test --project=chromium
```

### Execute Headed Mode

```bash
npx playwright test --headed
```

---

## 7. Running API Tests

### Execute All API Tests

```bash
npx playwright test
```

### Execute Authentication Tests

```bash
npx playwright test tests/auth/auth.spec.ts
```

### Execute Booking Lifecycle Tests

```bash
npx playwright test tests/e2e/booking-lifecycle.spec.ts
```

---

## 8. Smoke Suite

Smoke tests provide rapid validation of critical business functionality.

### Execute Smoke Suite

```bash
npx playwright test --grep "@smoke"
```

Covered Areas:

- Authentication
- Product Catalog
- Checkout
- Booking Creation
- Booking Retrieval
- Booking Lifecycle

Purpose:

- Build validation
- Deployment validation
- Production sanity checks

---

## 9. Regression Suite

Regression suite provides broader application coverage.

### Execute Regression Suite

```bash
npx playwright test --grep "@regression"
```

Covered Areas:

- Positive scenarios
- Negative scenarios
- Validation checks
- Error handling
- CRUD operations

Purpose:

- Sprint regression
- Release validation
- Pre-production sign-off

---

## 10. Reporting

### Playwright HTML Report

Generate:

```bash
npx playwright show-report
```

### Allure Report

Generate:

```bash
allure generate allure-results --clean
```

Open:

```bash
allure open
```

Reports include:

- Execution Summary
- Test Status
- Screenshots
- Traces
- Failure Analysis
- Historical Trends

---

## 11. CI/CD

GitHub Actions pipelines are configured for automated execution.

### Supported Pipelines

#### Web Automation Pipeline

- Checkout Repository
- Install Dependencies
- Install Playwright Browsers
- Execute Tests
- Publish Reports

#### API Automation Pipeline

- Checkout Repository
- Install Dependencies
- Execute API Tests
- Publish Reports

### Trigger Conditions

- Pull Requests
- Push Events
- Release Validation

### Benefits

- Automated Quality Gates
- Faster Feedback
- Consistent Execution
- Reduced Manual Validation

---

## 12. Future Improvements

The framework is intentionally designed for extensibility.

Potential future enhancements include:

### Framework

- Playwright Component Testing
- Multi-Browser Parallel Execution
- Docker Integration
- Monorepo Workspace Support

### Reporting

- Allure Dashboard
- Slack Notifications
- Teams Notifications
- Email Reporting

### Quality Engineering

- Contract Testing
- Visual Testing
- Accessibility Testing
- Performance Testing

### CI/CD

- Azure DevOps Integration
- Jenkins Pipelines
- GitHub Environments
- Deployment Gates

### Test Data

- Dynamic Data Generation
- Database Validation
- Service Virtualization
- Test Data Management Layer

---

## Key Highlights

- Shared SDK Architecture
- Web + API Automation
- Page Object Model
- Storage State Authentication
- Test Data Factory Pattern
- Custom Assertion Framework
- Schema Validation
- Allure Reporting
- GitHub Actions Integration
- Enterprise Scalability

This framework demonstrates a production-ready approach for establishing and scaling automated testing practices in enterprise SaaS environments.

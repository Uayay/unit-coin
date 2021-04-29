/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  testEnvironment: "node",

  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    // "**/?(*.)+(spec|test).[tj]s?(x)"
  ]
}

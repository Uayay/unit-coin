/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  testEnvironment: "node",

  transform: {"\\.[jt]sx?$": ["babel-jest", {
    presets: [
      '@babel/preset-env',
      '@babel/preset-typescript'
    ]
  }]},

  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    // "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  
  "transformIgnorePatterns": [
    "/!node_modules\\/lodash-es/"
  ]
}

module.exports = {
  testIgnorePatterns: ["/node-modules"],
  transform: {
    "^.*\\(js|jsx)$": "<rootDir>/node-modules/babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testEnvironment: "jsdom",
};

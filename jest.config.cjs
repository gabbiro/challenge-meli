const config = {
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/index.js",
    "\\.(css|scss|less)$": "<rootDir>/__mocks__/index.js"
  },
  testEnvironment: "jsdom"
};

module.exports = config;

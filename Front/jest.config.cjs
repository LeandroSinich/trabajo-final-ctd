module.exports = {
    testEnvironment: 'jest-environment-jsdom',
  };
  
  {
    jest: {
      setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
    }
  }
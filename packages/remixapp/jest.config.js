module.exports = {
    testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        "^.+\\.(css|scss|sass)$": "jest-preview/transforms/css",
        "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "jest-preview/transforms/file",
    },
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: [`./jest.setup.ts`],
};

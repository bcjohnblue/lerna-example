module.exports = {
    testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: [`./jest-setupFilesAfterEnv.ts`],
};

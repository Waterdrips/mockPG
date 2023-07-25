const { toTest } = require('./main');


jest.mock('pg', () => {
    const mClient = {
        connect: jest.fn(),
        query: jest.fn(),
        end: jest.fn(),
    };
    return { Client: jest.fn(() => mClient) };
});

describe('Function', () => {
    let mockClient;

    beforeEach(() => {
        mockClient = {
            connect: jest.fn(),
            query: jest.fn(),
            end: jest.fn(),
        };
        require('pg').Client.mockImplementation(() => mockClient );
    });

    afterEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    });

    it('should not fail', async () => {
        const result = await toTest();
    });
});

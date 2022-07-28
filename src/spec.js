const fs = require('fs');
require('.');

describe('test', () => {
    beforeEach(() => {
        fs.writeFileSync(
            `${__dirname}/package.json`,
            JSON.stringify({ name: 'test' })
        );

        require(`${__dirname}/package.json`);
    });

    afterEach(() => {
        fs.unlinkSync(`${__dirname}/package.json`);
    });

    it('should be green', () => {
        expect(true).toBe(true);
    });
});

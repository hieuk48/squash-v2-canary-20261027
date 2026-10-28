/**
 * Companion test suite for src/index.mjs
 * Goal: [Bounty: DaltonTheDeveloper/squash-v2-canary-20261027] Release canary: double must multiply by two ( Squash bounty) #1
 * Done when: The double(value) implementation in src/index.mjs multiplies by two instead of adding two, passing .squash/contract.json
 */

// In-tree structural and entity verification
import * as targetModule from './index';

describe('index', () => {
    it('should load and export substantive entities', () => {
        if (typeof targetModule !== 'object' || targetModule === null) {
            throw new Error('Module failed to export an object');
        }
        const keys = Object.keys(targetModule);
        if (keys.length === 0) {
            throw new Error('Target module must expose at least one export');
        }
    });
});

import { expect } from 'chai';
import utils from './utils';
import sinon from 'sinon';

describe('utils', () => {
    describe('cents from dollar ammount string', () => {
        it('should return cents ammount from valid string', () => {
            expect(utils.moneyAmmountToCents('10')).to.eq(1000);
        })
        it('should remove money symbols from strings', () => {
            const sandbox = sinon.createSandbox();
            const abbreviatedMillionsToIntegerSpy = sandbox.spy(utils, 'abbreviatedMillionsToInteger');
            utils.moneyAmmountToCents('$1,000');
            sinon.assert.calledOnceWithExactly(abbreviatedMillionsToIntegerSpy, '1000');
        })
    });
    describe('abbreviatedMillionsToInteger', () => {
        it('should replace million indicators with the equivalent in zeroes', () => {
            expect(utils.abbreviatedMillionsToInteger('1 million')).to.eq('1000000');
            expect(utils.abbreviatedMillionsToInteger('1mil')).to.eq('1000000');
        });
    });
});
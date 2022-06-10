import { expect } from 'chai';
import utils from './utils';

describe('utils', () => {
    describe('moneyAmmountToCents', () => {
        it('should take numbers', () => {
            expect(utils.dollarsToCents('10')).to.eq(1000);
        })
        it('should take strings', () => {
            expect(utils.dollarsToCents(10)).to.eq(1000);
        })
        it('should handle null', () => {
            expect(utils.dollarsToCents(null)).to.eq(null);
        })
        it('should handle empty', () => {
            expect(utils.dollarsToCents('')).to.eq(null);
        })
    })

    describe('dollarTextToNumber', () => {
        it('should turn "$1000" into 1000', () => {
            expect(utils.dollarTextToNumber('$1000')).to.eq(1000);
        });
        it('should turn "$100,000" into 1e5', () => {
            expect(utils.dollarTextToNumber('$100,000')).to.eq(1e5);
        });
    });
});
import { TestBed, inject } from '@angular/core/testing';

import { AmountAboveValueMustHaveTransactionsForLast12Months } from './amount-above-value-must-have-transactions-for-last12-months';

describe('AmountAboveValueMustHaveTransactionsForLast12Months', () => {
    it('should return false when only 4 months and amount requested 45000 data invalid', () => {
        const validator = new AmountAboveValueMustHaveTransactionsForLast12Months(40000);
        const inputData = {
            amountRequested: 45000,
            timeInBusiness: {
                years: 0,
                months: 12
            },
            transactions: [
                { date: '2018-03-01T00:00:00.000Z', value: 6966 },
                { date: '2018-03-15T00:00:00.000Z', value: 5095 },
                { date: '2018-03-07T00:00:00.000Z', value: 5297 },
                { date: '2018-01-15T00:00:00.000Z', value: 6144 }
            ]
        };

        expect(validator.isValid(inputData)).toEqual(false);
    });

    it('should return true when 12 months and amount requested 45000 data invalid', () => {
        const validator = new AmountAboveValueMustHaveTransactionsForLast12Months(40000);
        const inputData = {
            amountRequested: 45000,
            timeInBusiness: {
                years: 1,
                months: 12
            },
            transactions: [
                { date: '2018-09-01T00:00:00.000Z', value: 6966 },
                { date: '2018-08-15T00:00:00.000Z', value: 5095 },
                { date: '2018-07-01T00:00:00.000Z', value: 6966 },
                { date: '2018-06-01T00:00:00.000Z', value: 6966 },
                { date: '2018-05-15T00:00:00.000Z', value: 5095 },
                { date: '2018-04-07T00:00:00.000Z', value: 5297 },
                { date: '2018-03-01T00:00:00.000Z', value: 6966 },
                { date: '2018-02-15T00:00:00.000Z', value: 5095 },
                { date: '2018-01-01T00:00:00.000Z', value: 6966 },
                { date: '2017-12-15T00:00:00.000Z', value: 5095 },
                { date: '2017-11-01T00:00:00.000Z', value: 6966 },
                { date: '2017-10-15T00:00:00.000Z', value: 5095 },
                { date: '2017-09-07T00:00:00.000Z', value: 5297 },
                { date: '2018-08-01T00:00:00.000Z', value: 6966 },
                { date: '2018-07-15T00:00:00.000Z', value: 5095 },
                { date: '2018-06-07T00:00:00.000Z', value: 5297 },
                { date: '2018-05-01T00:00:00.000Z', value: 6966 },
                { date: '2018-03-15T00:00:00.000Z', value: 5095 },
                { date: '2018-03-07T00:00:00.000Z', value: 5297 },
                { date: '2018-01-15T00:00:00.000Z', value: 6144 },
                { date: '2018-01-09T00:00:00.000Z', value: 4895 },
                { date: '2018-01-02T00:00:00.000Z', value: 4988 },
                { date: '2018-02-22T00:00:00.000Z', value: 5177 },
                { date: '2018-02-22T00:00:00.000Z', value: 6059 },
                { date: '2018-02-26T00:00:00.000Z', value: 5662 },
                { date: '2017-12-16T00:00:00.000Z', value: 4945 },
                { date: '2017-12-12T00:00:00.000Z', value: 4616 },
                { date: '2017-12-09T00:00:00.000Z', value: 6218 },
                { date: '2017-12-02T00:00:00.000Z', value: 5141 },
                { date: '2017-11-22T00:00:00.000Z', value: 6645 },
                { date: '2017-11-22T00:00:00.000Z', value: 4549 },
                { date: '2017-11-05T00:00:00.000Z', value: 4784 },
                { date: '2017-11-08T00:00:00.000Z', value: 6632 },
                { date: '2017-11-02T00:00:00.000Z', value: 5747 },
                { date: '2017-08-20T00:00:00.000Z', value: 5662 },
                { date: '2017-08-15T00:00:00.000Z', value: 4511 },
                { date: '2017-07-14T00:00:00.000Z', value: 6853 },
                { date: '2017-07-13T00:00:00.000Z', value: 6697 },
                { date: '2017-07-03T00:00:00.000Z', value: 5919 },
                { date: '2017-07-04T00:00:00.000Z', value: 4530 },
                { date: '2017-06-05T00:00:00.000Z', value: 6085 },
                { date: '2017-06-18T00:00:00.000Z', value: 4571 },
                { date: '2017-05-06T00:00:00.000Z', value: 5547 },
                { date: '2017-05-02T00:00:00.000Z', value: 5034 },
                { date: '2017-05-01T00:00:00.000Z', value: 6553 },
                { date: '2017-04-26T00:00:00.000Z', value: 5048 },
                { date: '2017-04-25T00:00:00.000Z', value: 4667 },
                { date: '2017-03-22T00:00:00.000Z', value: 5741 },
                { date: '2017-03-20T00:00:00.000Z', value: 4720 },
                { date: '2017-03-07T00:00:00.000Z', value: 5765 },
                { date: '2017-03-04T00:00:00.000Z', value: 6096 }
            ]
        };

        expect(validator.isValid(inputData)).toEqual(true);
    });

});

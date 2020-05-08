const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {

    it('argument should be provided and should return an error if "content" arg is not a string', () => {
        expect(formatFullname()).to.equal('Error');
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(3)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });

    it('should return an error if "content" arg is not in <firstName> <lastName> format', () => {
        expect(formatFullname('JanKowalski')).to.equal('Error');
        expect(formatFullname('Jan')).to.equal('Error');
        expect(formatFullname('Jan ')).to.equal('Error');
        expect(formatFullname('Jan Marian Kowalski')).to.equal('Error');
    });

    it('fullName should be in proper format', () => {
        expect(formatFullname('jan kowalski')).to.equal('Jan Kowalski');
        expect(formatFullname('jAn KowAlski')).to.equal('Jan Kowalski');
        expect(formatFullname('JAN KOWALSKI')).to.equal('Jan Kowalski');
    });
});

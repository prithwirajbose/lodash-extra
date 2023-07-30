const expect = require('chai').expect;
const _ = require('../dist/lodash-extra');

describe('Testing isNumericString function', function() {
    it('positive scenario 1', function(done) {
        expect(_.isNumericString("112.15")).to.equal(true);
        done();
    });

    it('negative scenario 1', function(done) {
        expect(_.isNumericString("112E+11")).to.equal(false);
        done();
    });
});

describe('Testing isBlank function', function() {
    it('positive scenario 1', function(done) {
        expect(_.isBlank(" ")).to.equal(true);
        done();
    });

    it('positive scenario 2', function(done) {
        expect(_.isBlank(null)).to.equal(true);
        done();
    });

    it('negative scenario 1', function(done) {
        expect(_.isBlank("  Hello ")).to.equal(false);
        done();
    });

    it('negative scenario 2', function(done) {
        expect(_.isBlank(false)).to.equal(false);
        done();
    });
});

describe('Testing isNotBlank function', function() {
    it('positive scenario 1', function(done) {
        expect(_.isNotBlank(" Hello ")).to.equal(true);
        done();
    });

    it('positive scenario 2', function(done) {
        expect(_.isNotBlank("true")).to.equal(true);
        done();
    });

    it('negative scenario 1', function(done) {
        expect(_.isNotBlank("")).to.equal(false);
        done();
    });

    it('negative scenario 2', function(done) {
        expect(_.isNotBlank(false)).to.equal(false);
        done();
    });
});

describe('Testing csvToArray function', function() {
    it('success scenario 1', function(done) {
        expect(_.csvToArray('"id","name"\n1,"Prithwiraj"\n2,"Mark"').length).to.equal(3);
        done();
    });

    it('success scenario 2', function(done) {
        expect(_.csvToArray('"id","name"\n1,"Prithwiraj"\n2,"Mark"').length).to.equal(3);
        done();
    });

    it('error scenario 1', function(done) {
        expect(_.isNotBlank("")).to.equal(false);
        done();
    });
});
'use strict';

// Ejemplo de tarjetas para testing: http://support.worldpay.com/support/kb/bg/testandgolive/tgl5103.html

var should = require('should');
var revealCard = require('../lib');

describe("Credit Card Identifier can identify", function() {
	it("Visa", function(){
		revealCard('4929255008802878').should.eql('VISA')
		revealCard('4532971714778876').should.eql('VISA')
	});

	it("MasterCard", function(){
		revealCard('5170651768364146').should.eql('MasterCard')
		revealCard('5125796296825872').should.eql('MasterCard')
	});

	it("Amex", function(){
		revealCard('349237692562216').should.eql('Amex')
		revealCard('375886564589009').should.eql('Amex')
	});

  it('Discover', function() {
    revealCard('6011111111111117').should.eql('Discover');
    revealCard('6221261111113245').should.eql('Discover');
  });

  it('Maestro', function() {
    revealCard('6799990100000000019').should.eql('Maestro');
  });
});


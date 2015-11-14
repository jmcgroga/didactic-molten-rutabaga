var should = require('chai').should(),
    imafunction = require('../index');

describe('#test', function() {
  it('Perform test', function() {
      var param = "hello";
      imafunction(param).should.equal("I'm a function with parameter: " + param);
  });
});

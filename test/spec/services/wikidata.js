'use strict';

describe('Service: wikiData', function () {

  // load the service's module
  beforeEach(module('wikiSearchApp'));

  // instantiate service
  var wikiData;
  beforeEach(inject(function (_wikiData_) {
    wikiData = _wikiData_;
  }));

  it('should do something', function () {
    expect(!!wikiData).toBe(true);
  });

});

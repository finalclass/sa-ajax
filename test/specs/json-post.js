define(function(require) {
  var packet = {greeting: 'hello', number: 10};
  var assert = require('util/assert');
  var oninfo = require('util/oninfo');
  var ajax = require('ajax');
  describe('Ajax transport', function() {
    it('a POST to /echo should receive json response on same domain',
      function(done) {
        var callback = function(response) {
          assert(response);
          done();
        }
        var opts = {
          url: '/echo',
          method: 'post',
          type: 'json',
          headers: {
            'content-type': 'application/json'
          },
          data: packet,
          callback: callback
        };
        var info = ajax(opts);
        oninfo(info);
      }
    );
    it('a POST to http://xdomain.socialal.ly/echo should receive json response on cross domain',
      function(done) {
        var callback = function(response) {
          assert(response);
          done();
        }
        var opts = {
          url: 'http://xdomain.socialal.ly/echo',
          method: 'post',
          type: 'json',
          headers: {
            'content-type': 'application/json'
          },
          data: packet,
          callback: callback
        };
        var info = ajax(opts);
        oninfo(info);
      }
    );
  });
});

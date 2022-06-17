var dateParse = require('..');

describe("dateParse()", function() {

  describe("with UTC disabled", function() {

    it("returns Date instances with no modification", function() {

      var date = new Date('2014-11-21 10:20:45');
      var offset = date.getTimezoneOffset();
      expect(dateParse(date).getTime()).toBe(1416565245000 + offset * 60000);

    });

    it("parses an ISO date as a local date", function() {

      var offset = (new Date('2014-11-21 10:20:45')).getTimezoneOffset();
      expect(dateParse('2014-11-21 10:20:45').getTime()).toBe(1416565245000 + offset * 60000);

    });

    it("parses an ISO date", function() {

      var offset = (new Date('2014-11-21 10:20:45')).getTimezoneOffset();
      expect(dateParse('2014-11-21T10:20:45').getTime()).toBe(1416565245000 + offset * 60000);

    });

  });

  describe("with UTC enabled", function() {

    it("returns Date instances with no modification", function() {

      var offset = (new Date('2014-11-21 10:20:45')).getTimezoneOffset();
      expect(dateParse(new Date('2014-11-21 10:20:45'), true).getTime()).toBe(1416565245000 + offset * 60000);

    });

    it("parses an ISO date as an UTC date", function() {

      expect(dateParse('2014-11-21 10:20:45', true).getTime()).toBe(1416565245000);

    });

    it("parses an ISO date", function() {

      expect(dateParse('2014-11-21T10:20:45', true).getTime()).toBe(1416565245000);

    });

  });

});

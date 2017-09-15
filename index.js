module.exports = function(value, utc) {
  var timestamp;
  if (typeof value === 'number' || (!isNaN(parseFloat(value)) && isFinite(value))) {
    timestamp = Number(value) * 1000;
  } else if (typeof value === 'string') {
    var date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return date;
    }
    if (utc && !value.match(/(?:Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])/)) {
      timestamp = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    } else {
      timestamp = date.getTime();
    }
  } else {
    timestamp = value.getTime();
  }
  return new Date(timestamp);
};

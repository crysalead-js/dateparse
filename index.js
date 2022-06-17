module.exports = function(value, utc) {
  var timestamp;
  if (typeof value === 'number' || (!isNaN(parseFloat(value)) && isFinite(value))) {
    timestamp = Number(value) * 1000;
  } else if (typeof value === 'string') {
    var a = /^(\d{4})-(\d{2})-(\d{2})(?:(?:T| )(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z?)?$/.exec(value);
    if (!a || Number.isNaN(Date.parse(a[1] + '-' + a[2] + '-' +a[3] + 'T' + (a[4] || '00') + ':' + (a[5] || '00') + ':' + (a[6] || '00Z')))) {
      return;
    }
    if (utc) {
      timestamp = Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4] || 0, +a[5] || 0, +a[6] || 0);
    } else {
      timestamp = (new Date(+a[1], +a[2] - 1, +a[3], +a[4] || 0, +a[5] || 0, +a[6] || 0)).getTime();
    }
  } else {
    timestamp = value.getTime();
  }
  return new Date(timestamp);
};

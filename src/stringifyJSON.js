// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var stringified = '';
  var stringifiedArray = [];
  var objectArray = [];

  // number, null, boolean
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return obj + stringified;
  }

  // string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // array
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }

    for (var i = 0; i < obj.length; i++) {
      stringifiedArray.push(stringifyJSON(obj[i]));
    }
    return '[' + stringifiedArray + ']';
  }

  // object
  if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }

    for (var key in obj) {
      if (obj[key] === undefined) {
        return '{}';
      }
      objectArray.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]))
    }

    return '{' + objectArray.join(',') + '}';
  }
};

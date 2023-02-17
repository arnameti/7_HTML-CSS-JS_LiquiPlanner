export const stringifyWithFunctions = function (object) {
  return JSON.stringify(object, (key, val) => {
    if (typeof val === 'function') {
      return `(${val})`; // make it a string, surround it by parenthesis to ensure we can revive it as an anonymous function
    }
    return val;
  });
};

 export const parseWithFunctions = function(obj) {
  return JSON.parse(obj, (k, v) => {
    if (typeof v === 'string' && v.indexOf('function') >= 0) {
      return eval(v);
    }
    return v;
  });
};
export const unCamelCase = str => str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2").toLowerCase();
export const singleSpace = str => str.replace(/\s+/g, ' ');
export const titleCase = str => str.toLowerCase().replace(/^\w|\s\w/g, d => d.toUpperCase());
export const strJoin = (str, separator=', ') => str.reduce((o,acc) => `${o}${separator}${acc}`);

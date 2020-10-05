export type HTMLProps<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

export const unCamelCase: (string) => string = (str) =>
  str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2').toLowerCase();

export const singleSpace: (string) => string = (str) =>
  str.replace(/\s+/g, ' ');

export const titleCase: (string) => string = (str) =>
  str.toLowerCase().replace(/^\w|\s\w/g, (d) => d.toUpperCase());

export const strJoin: (string) => string = (str, separator = ', ') =>
  str.reduce((o, acc) => `${o}${separator}${acc}`);

export const contains: (object: any, query: any) => boolean = (
  object,
  query
) => {
  if (object === null) return false;
  if (typeof object === 'undefined') return false;
  return object.indexOf(query) > -1;
};

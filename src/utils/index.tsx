import { parse, format, formatRelative, differenceInDays } from 'date-fns';

export const unCamelCase = (str: string) =>
  str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2').toLowerCase();

export const singleSpace = (str: string) => str.replace(/\s+/g, ' ');

export const titleCase = (str: string) =>
  str.toLowerCase().replace(/^\w|\s\w/g, (d) => d.toUpperCase());

export const strJoin = (str: string[], separator = ', ') =>
  str.reduce((o, acc) => `${o}${separator}${acc}`);

export const contains = (object, query) => {
  if (object === null) return false;
  if (typeof object === 'undefined') return false;
  return object.indexOf(query) > -1;
};

export const formatYMDate = (date: string) =>
  format(parse(date, 'yyyyMM', new Date()), 'MMM yyyy');

export const formatRelativeDate = (date: Date, dateFormat: string) => {
  const baseDate = new Date();
  return Math.abs(differenceInDays(date, baseDate)) < 6
    ? formatRelative(date, baseDate)
    : format(date, dateFormat)};

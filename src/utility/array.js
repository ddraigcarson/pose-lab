import * as _ from 'lodash';

export const replaceAt = (arr, value, index) => {
  return _.concat(
    [],
    _.slice(arr, 0, index),
    [value],
    _.slice(arr, index+1)
  )
};

export const insertAt = (arr, value, index) => {
  return _.concat(
    [],
    _.slice(arr, 0, index+1),
    value,
    _.slice(arr, index+1)
  )
};

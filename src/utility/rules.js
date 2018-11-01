import * as _ from 'lodash';

export const ruleToCode = (rule) => {
  let code = '';
  _.map(rule, o => {
    if (o.value) {
      code+=`${o.value} `;
    }
  })
  return code;
}

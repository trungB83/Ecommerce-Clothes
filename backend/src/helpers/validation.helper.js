import { ValidationError } from 'sequelize';

export const getError = (e) => {
  if (e instanceof ValidationError) {
    e.errors.forEach((error) => {
      switch (error.validatorKey) {
        case 'isEmail':
          return 'Invalid e-mail';
        case 'isDate':
          return 'Invalid date';
        case 'isInt':
          return 'Invalid an integer number';
        case 'is_null':
          return 'Not null';
        case 'not_unique':
          return 'Not unique';
        default:
          return '';
      }
    });
  }
  if (e instanceof ValidationError) {
    e.errors.forEach((error) => {
      switch (error.validatorKey) {
        case 'isEmail':
          return 'Invalid e-mail';
        case 'isDate':
          return 'Invalid date';
        case 'isInt':
          return 'Invalid an integer number';
        case 'is_null':
          return 'Not null';
        case 'not_unique':
          return 'Not unique';
        default:
          return '';
      }
    });
  }
};

export const getValidateField = (e) => {
  const messages = {};
  if (e instanceof ValidationError) {
    e.errors.forEach((error) => {
      let message;
      switch (error.validatorKey) {
        case 'isEmail':
          message = 'Please enter a valid email';
          break;
        case 'isDate':
          message = 'Please enter a valid date';
          break;
        case 'len':
          if (error.validatorArgs[0] === error.validatorArgs[1]) {
            message = 'Use ' + error.validatorArgs[0] + ' characters';
          } else {
            message = 'Use between ' + error.validatorArgs[0] + ' and ' + error.validatorArgs[1] + ' characters';
          }
          break;
        case 'min':
          message = 'Use a number greater or equal to ' + error.validatorArgs[0];
          break;
        case 'max':
          message = 'Use a number less or equal to ' + error.validatorArgs[0];
          break;
        case 'isInt':
          message = 'Please use an integer number';
          break;
        case 'is_null':
          message = 'Please complete this field';
          break;
        case 'not_unique':
          message = error.value + ' is taken. Please choose another one';
          error.path = error.path.replace('_UNIQUE', '');
      }
      messages[error.path] = message;
    });
  }
};

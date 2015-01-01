// definitions
Forms = (_.isUndefined(Forms)) ? {} : Forms;
Forms.utils = (_.isUndefined(Forms.utils)) ? {} : Forms.utils;

/* DOLLARS TO CENTS
.................................................*/
Forms.utils.dollarsToCents = function(dollars) {
  if (!isNaN(parseFloat(dollars))) {
    return Math.round(parseFloat(dollars) * 100);
  }
};
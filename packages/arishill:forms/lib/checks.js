/* CHECKS
.................................................*/
Forms.checks.isCurrentYear = function(year) {
  var now = Forms.utils.getFullDate();
  return (parseInt(year) === now.year) ? true : false;
};
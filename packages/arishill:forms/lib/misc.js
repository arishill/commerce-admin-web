/* ARISTOTLE Forms UTILS
.................................................*/

// check if is a number
Forms.utils.isNumber = function(key){
  var num = /[^0-9]/g;
  return num.test(key) ? false : true;
};

// get full date
Forms.utils.getFullDate = function() {
  var date = new Date(),
      year_str = date.getFullYear() + '';

  date = {
    year: parseInt(year_str),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };

  date.millenium = parseInt(year_str.substring(0,2));

  return date;
};

// set selection range
Forms.utils.setSelectionRange = function(input, selectionStart, selectionEnd) {
  var input = input.get(0),
      range;

  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(selectionStart, selectionEnd);
  }
  else if (input.createTextRange) {
    range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', selectionEnd);
    range.moveStart('character', selectionStart);
    range.select();
  }
};

// get caret
Forms.utils.getCaret = function(el) {
  var el = el.get(0),
      r, re, rc;

  if (el.selectionStart) {
    return el.selectionStart;
  } else if (document.selection) {
    el.focus();

    r = document.selection.createRange();
    if (r === null) {
      return 0;
    }

    re = el.createTextRange();
    rc = re.duplicate();
    re.moveToBookmark(r.getBookmark());
    rc.setEndPoint('EndToStart', re);

    return rc.text.length;
  }

  return 0;
};

// is range
Forms.utils.isRange = function(el) {
  var el = el.get(0);
  if (el.selectionStart === el.selectionEnd) {
    return false;
  }
  else {
    return true;
  }
};
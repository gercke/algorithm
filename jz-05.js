//split和join
var replaceSpace = function(s) {
    if (typeof s == "string" && s.length >= 0 && s.length <= 10000) {
      return s.split(' ').join('%20');
    }
    return '';
};

//正则
var replaceSpace = function(s) {
    return s.replace(/ /g, "%20");
};
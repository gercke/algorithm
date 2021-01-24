var isNumber = function(s){
    return s.replace(/\s/g, '') !== '' && !isNaN (Number(s))
}

var isNumber = function(s) {
    let reg = /^\s*[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?\s*$/
    return reg.test(s)
};
  
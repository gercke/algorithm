var printNumbers = function(n) {
    res = [];
    max = Math.pow(10,n)-1;
    for(let i=0;i<max;i++){
      res[i]=i+1;
    }
    return res;
  }
//es6  
var printNumbers = function(n) {
    len = Math.pow(10,n)-1;
    return Array.from({length: len}, (item, index) => index+1);
};

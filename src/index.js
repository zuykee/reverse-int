module.exports = function reverse (n) {
      let str = String(Math.abs(n));
     let strev = new String;
     
    
     for (let i = str.length - 1; i>=0; --i) {
         strev = strev + str[i];
    }
    return Number(strev);
}

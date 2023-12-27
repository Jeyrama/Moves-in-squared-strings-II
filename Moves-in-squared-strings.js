/*
You are given a string of n lines, each substring being n characters long.

For example:
  s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings:
  Clock rotation 180 degrees: rot
  rot(s) => "ponm\nlkji\nhgfe\ndcba"

  selfie_and_rot(s) It is initial string + string obtained by 
  clock rotation 180 degrees with dots interspersed in order 
  (hopefully) to better show the rotation when printed.

  s = "abcd\nefgh\nijkl\nmnop" --> 
  "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"

  or printed:

  |rotation        |selfie_and_rot
  |abcd --> ponm   |abcd --> abcd....
  |efgh     lkji   |efgh     efgh....
  |ijkl     hgfe   |ijkl     ijkl....   
  |mnop     dcba   |mnop     mnop....
                            ....ponm
                            ....lkji
                            ....hgfe
                            ....dcba

Notice that the number of dots is the common length of 
"abcd", "efgh", "ijkl", "mnop".

Task:
  Write these two functions rot and selfie_and_rot and
  high-order function oper(fct, s) where fct is the function of one variable f 
  to apply to the string s (fct will be one of rot, selfie_and_rot)

Examples:
  s = "abcd\nefgh\nijkl\nmnop"
  oper(rot, s) => "ponm\nlkji\nhgfe\ndcba"
  oper(selfie_and_rot, s) => "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
*/


// Solution

function rot(s) {
  return s.split("").reverse().join("");
}

function selfieAndRot(s) {
  return (s = s.replace(/.+/g, t => t + t.replace(/./g, "."))) + "\n" + rot(s);
}

function oper(fn, s) {
  return fn(s);
}

// or

function revStr(strng) {
  return [...strng].reverse().join('');
} 
function vertMirror(strng) {
  return strng.split("\n").map(function(x) { return revStr(x); }).join("\n");
}
function horMirror(strng) {
  return strng.split("\n").reverse().join("\n");
}
function rot(strng) {
  return vertMirror(horMirror(strng));
}
function selfieAndRot(strng) {
  let newstr1 = strng.split("\n").map(function(x) { return x + Array(x.length + 1).join("."); }).join("\n");
  let newstr2 = rot(strng).split("\n").map(function(x) { return Array(x.length + 1).join(".") + x; }).join("\n");
  return newstr1 + "\n" + newstr2;
}
function oper(fct, s) {
  return fct(s);
}
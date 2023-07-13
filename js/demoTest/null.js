// 只区分null, undefine
var a;
var b = null;
var c = 0;
  
if(!a && a != 0) {
  console.log('a 为空');
}else{
  console.log('a 不为空');
}
  
if(!b && b != 0) {
  console.log('b 为空');
}else{
  console.log('b 不为空');
}
 
if(!c && c != 0) {
  console.log('c 为空');
}else{
  console.log('c 不为空');
}
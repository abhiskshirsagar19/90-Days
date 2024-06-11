let a = 1000;
setTimeout(function () {
  console.log(this);
}, a);

// setInterval(function () {
//   console.log(this);
// }, 1000);
/*

Timeout {
  _idleTimeout: 1000,
  _idlePrev: null,
  _idleNext: null,
  _idleStart: 13121,
  _onTimeout: [Function (anonymous)],
  _timerArgs: undefined,
  _repeat: 1000,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(kHasPrimitive)]: false,
  [Symbol(asyncId)]: 2,
  [Symbol(triggerId)]: 1
}
 */

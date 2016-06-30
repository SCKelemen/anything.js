
//fast reverse square root
var Magic = function (number) {
  var buffer = new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT);
  var floatView = new Float32Array(buf);
  var integerView = new Uint32Array(buf);
  var x = number / 2;
  floatView[0] = number;
  integerView[0] = 0x5f3759df - ( integerView[0] >>1);
  var y = floatView[0];
  return y * ( 1.5 - ( x * y *y));
};

anything.prototype.DoMagic = Magic;

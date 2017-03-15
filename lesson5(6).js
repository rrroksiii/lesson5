"use strict"
function Square(a, n){
   this._a = a;
   this._n = n;
   this.getA = function () {
      return this._a;
   };
   this.setA = function (a) {
      this._a = a;
   };
   this.getN = function () {
      return this._n;
   };
   this.setN = function (n) {
      this._n = n;
   };
   this.calcPerimeter = function(){
      var p = a*n;
      console.log("Периметр равен: " + p);
   };

}
function Cube(a, n){
   Square.call(this, a, n); 
   var parentcalcPerimeter = this.calcPerimeter;
   this.calcPerimeter = function(){
      parentcalcPerimeter.call(this);
      var s = (n/2)*a*a;
      console.log("Площадь фигуры: " + s);
   };
   
}
var square = new Square(2,4);
square.calcPerimeter();
var cube = new Cube(8,12);
cube.calcPerimeter();

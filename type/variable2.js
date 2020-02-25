var a;
var b;
var c;
var d;
var e = [1, "hello", true];
var f = [1, 2, 3];
var firstName = "Mark";
firstName = "prassu";
var lastName = "Watson";
//lastName="p"
var colorRed = 1;
var colorGreen = 2;
var colorYellow = 3;
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Yellow"] = 2] = "Yellow";
})(color || (color = {}));
console.log(color.Red);

document.addEventListener('keydown', keyPush);

const canv = document.getElementById("canvas");
const ctx = canv.getContext("2d");
const SIZE = 20;
const FPS = 15;
const MIN = 5;

let px = py = SIZE/2;
let xd = yd = 0;

let snake = [];

let tail = MIN;

let appleX = 15;
let appleY = 3;

let bananaX = 13;
let bananaY = 18;

let humanX = humanY = 5;

let senzuX = 7;
let senzuY = 19;

let score = 0;

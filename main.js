// Variables I need
var button0 = document.querySelector('#button0');
var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var button3 = document.querySelector('#button3');
var button4 = document.querySelector('#button4');
var button5 = document.querySelector('#button5');
var button6 = document.querySelector('#button6');
var button7 = document.querySelector('#button7');
var button8 = document.querySelector('#button8');
var button9 = document.querySelector('#button9');
var buttonplus = document.querySelector('#buttonplus');
var buttonminus = document.querySelector('#buttonminus');
var buttondivide = document.querySelector('#buttondivide');
var buttonmultiply = document.querySelector('#buttonmultiply');
var buttonequal = document.querySelector('#buttonequal');
var buttonclear = document.querySelector('#buttonclear');
var plusclicked = false;
var minusclicked = false;
var divideclicked = false;
var multiplyclicked = false;
var output = document.querySelector('output');
var number1 ='';
var number2= '';
var operatorclicked = false;



buttonclear.addEventListener('click', function()
{
  output.value="";
  number1 = "";
  number2 = "";
  plusclicked = false;
  minusclicked = false;
  multiplyclicked= false;
  divideclicked = false;
  operatorclicked = false;
}
)

button0.addEventListener('click', function(){
 if (!operatorclicked) {
   console.log(number1 = number1 + "0");
   document.querySelector('output').innerText
   += 0;
 } else {
   console.log(number2 = number2 + "0");
   document.querySelector('output').innerText
   += 0;
 }
});
button1.addEventListener('click', function(){
 if (!operatorclicked) {
   console.log(number1 = number1 + "1");
   document.querySelector('output').innerText
   += 1;
 } else {
   console.log(number2 = number2 + "1");
   document.querySelector('output').innerText
   += 1;

 }
});
button2.addEventListener('click', function(){
  if (!operatorclicked) {
    console.log(number1 = number1 + "2");
    document.querySelector('output').innerText
    += 2;
  } else {
    console.log(number2 = number2 + "2");
    document.querySelector('output').innerText
    += 2;

  }
 });
button3.addEventListener('click', function(){
  if (!operatorclicked) {
    console.log(number1 = number1 + "3");
    document.querySelector('output').innerText
    += 3;
  } else {
    console.log(number2 = number2 + "3");
    document.querySelector('output').innerText
    += 3;

  }
  });
button4.addEventListener('click', function(){
  if (!operatorclicked) {
    console.log(number1 = number1 + "4");
    document.querySelector('output').innerText
    += 4;
  } else {
    console.log(number2 = number2 + "4");
    document.querySelector('output').innerText
    += 4;

  }
  });
button5.addEventListener('click', function(){
  if (!operatorclicked) {
    console.log(number1 = number1 + "5");
    document.querySelector('output').innerText
    += 5;
  } else {
    console.log(number2 = number2 + "5");
    document.querySelector('output').innerText
    += 5;

  }
  });
button6.addEventListener('click', function(){
  if (!operatorclicked) {
    console.log(number1 = number1 + "6");
    document.querySelector('output').innerText
    += 6;
  } else {
    console.log(number2 = number2 + "6");
    document.querySelector('output').innerText
    += 6;

  }
  });
button7.addEventListener('click', function(){
  if (!operatorclicked) {
    console.log(number1 = number1 + "7");
    document.querySelector('output').innerText +=7;
  } else {
    console.log(number2 = number2 + "7");
    document.querySelector('output').innerText +=7;

  }
  });
button8.addEventListener('click', function(){
  if (!operatorclicked) {
    console.log(number1 = number1 + "8");
    document.querySelector('output').innerText +=8;
  } else {
    console.log(number2 = number2 + "8");
    document.querySelector('output').innerText +=8;

}
  });
button9.addEventListener('click', function(){
  if (!operatorclicked) {
    console.log(number1 = number1 + "9");
    document.querySelector('output').innerText
    += 9;
  } else {
    console.log(number2 = number2 + "9");
    document.querySelector('output').innerText
    += 9;

  }
  });

buttonplus.addEventListener('click', function () {
  plusclicked = true;
  operatorclicked = true;
  document.querySelector('output').innerText
  += "+";
});
buttonminus.addEventListener('click', function () {
  minusclicked = true;
  operatorclicked = true;
  document.querySelector('output').innerText
  += "-";
});
buttonmultiply.addEventListener('click', function () {
  multiplyclicked = true;
  operatorclicked = true;
  document.querySelector('output').innerText
  += "*";
});
buttondivide.addEventListener('click', function () {
  divideclicked = true;
  operatorclicked = true;
  document.querySelector('output').innerText
  += "/";
});

buttonequal.addEventListener('click', function() {
  if (plusclicked) {
    var sum = Number(number1) + Number(number2);
    document.querySelector('output').innerText =sum;
  } else if (minusclicked){
    var sum = Number(number1) - Number(number2);
    document.querySelector('output').innerText = sum;
  } else if (multiplyclicked){
    var sum = Number(number1) * Number(number2);
    document.querySelector('output').innerText = sum;
  } else if (divideclicked){
    var sum = Number(number1) / Number(number2);
    document.querySelector('output').innerText = sum;
  }
  number1=sum;
  number2 = "";
  plusclicked = false;
  minusclicked = false;
  multiplyclicked= false;
  divideclicked = false;
  operatorclicked = false;
});

number1.addEventListener('click',function() {
document.querySelector('output').innerText;

});

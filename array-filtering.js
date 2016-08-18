var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers = numbers.filter( function evenNumbers(number) {return number%2 == 0});

var stringOut = '';

for(var i=0; i<numbers.length; i++)
{
  //stringOut = '';

  if( i == 0 )
  {
    stringOut += '[ ';
  }

  stringOut +=  numbers[i].toString();
  //console.log( '\'' + pizzaToppings[i] + '\'' )

  if( i < numbers.length-1 )
  {
    stringOut += ', ';
    //console.log(', ')
  }
  else
  {
    stringOut += ' ]';
    //console.log(' ]')
  }


}
console.log(stringOut);


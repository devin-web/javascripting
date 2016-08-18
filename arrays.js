var pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni'];

var stringOut = '';

for(var i=0; i<pizzaToppings.length; i++)
{
  //stringOut = '';

  if( i == 0 )
  {
    stringOut += '[ ';
  }

  stringOut += '\'' + pizzaToppings[i] + '\'';
  //console.log( '\'' + pizzaToppings[i] + '\'' )

  if( i < pizzaToppings.length-1 )
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

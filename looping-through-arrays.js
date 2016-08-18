var pets = ['cat', 'dog', 'rat'];

var stringOut = '[ ';

for( var i = 0; i < pets.length; i++ )
{
  stringOut += '\''
  pets[i] = pets[i] + 's';
  stringOut += pets[i] + '\''

  if( i < pets.length-1 )
  {
    stringOut += ', ';
  }
}
stringOut += ' ]';

console.log( stringOut );
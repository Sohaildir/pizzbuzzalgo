let variablea=prompt("enter number of teting to fizz or buzz")
document.write(variablea);
 if(variablea%3==0 && variablea%5==0){
   document.write("fizzbizz")
}
 else if(variablea%3==0){
   document.write("fizz")
}
 else if(variablea%5==0){
   document.write("bizz")
}
else
{
  document.write("neither fizz nor bizz");
}
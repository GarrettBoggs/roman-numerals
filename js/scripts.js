var result = "";
var add = "";
var numerals = ["I","V","X","L","C","D","M"];
var convert = function(data)
{
  result = "";
  while(data > 0)
  {
    if(data >= 1000)
    {
      result = result + "M";
      data -= 1000;
    }
    if(data >= 900)
    {
      result = result + "CM";
      data -= 900;
    }
    else if(data >= 500)
    {
      result = result + "D";
      data -= 500;
    }
    else if(data >= 400)
    {
      result = result + "CD";
      data -= 400;
    }
    else if(data >= 100)
    {
      result = result + "C";
      data -= 100;
    }
    else if(data >= 90)
    {
      result = result + "XC";
      data -= 90;
    }
    else if(data >= 50)
    {
      result = result + "L";
      data -= 50;
    }
    else if(data >= 40)
    {
      result = result + "XL";
      data -= 40;
    }
    else if(data >= 10)
    {
      result = result + "X";
      data -= 10;
    }
    else if(data >= 9)
    {
      result = result + "IX";
      data -= 9;
    }
    else if(data >= 5)
    {
      result = result + "V";
      data -= 5;
    }
    else if(data >= 4)
    {
      result = result + "IV";
      data -= 4;
    }
    else
    {
      result = result + "I";
      data -= 1;
    }
  }

  /*for(var i = 0; i < result.length ; i ++)
  {
    if( result[i] === result[i+1] && result[i+1] === result[i+2] && result[i+2] === result[i+3])
    {
      for(var j = 0; j < numeral.length; j ++)
      {
        if(result.charAt(i) == numeral.charAt(j))
        {
          add = numeral.charAt()
        }
      }
    }
  } */

  return result;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var data = parseInt($("#number").val());
    console.log(data);
    convert(data);
    console.log(result);
    $("#output").text(result);
  });
});

let one =document.getElementsById("one");

function colorMe() {
  const val = document.querySelector('input').value;
  document.getElementById("1").style.backgroundColor = "#ffffff";
  document.getElementById("2").style.backgroundColor = "#ffffff";
  document.getElementById("3").style.backgroundColor = "#ffffff";
  document.getElementById("4").style.backgroundColor = "#ffffff";
  document.getElementById("5").style.backgroundColor = "#ffffff";
  document.getElementById("6").style.backgroundColor = "#ffffff";
  document.getElementById("7").style.backgroundColor = "#ffffff";
  document.getElementById("8").style.backgroundColor = "#ffffff";
  document.getElementById("9").style.backgroundColor = "#ffffff";

  // document.getElementsByClassName("recover").style.backgroundColor = "#ffff";
  if (val==1){
    console.log(val);
    document.getElementById("1").style.backgroundColor = "#6dca7e";
    }
    else if (val==2){
      console.log(val);
      document.getElementById("2").style.backgroundColor = "#6dca7e";
      }
      else if (val==3){
        console.log(val);
        document.getElementById("3").style.backgroundColor = "#6dca7e";
        }
        else if (val==4){
          console.log(val);
          document.getElementById("4").style.backgroundColor = "#6dca7e";
          }
          else if (val==5){
            console.log(val);
            document.getElementById("5").style.backgroundColor = "#6dca7e";
            }
            else if (val==6){
              console.log(val);
              document.getElementById("6").style.backgroundColor = "#6dca7e";
              }
              else if (val==7){
                console.log(val);
                document.getElementById("7").style.backgroundColor = "#6dca7e";
                }
                else if (val==8){
                  console.log(val);
                  document.getElementById("8").style.backgroundColor = "#6dca7e";
                  }
                  else if (val==9){
                    console.log(val);
                    document.getElementById("9").style.backgroundColor = "#6dca7e";
                    }
    
 
}
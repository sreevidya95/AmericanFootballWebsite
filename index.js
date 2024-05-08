'use strict';
window.onload=function(){
    footballDropDownList();
    let abtn=  document .getElementById('abtn');
    abtn.onclick=abtnClicked;
}
function footballDropDownList(){
    let teams = [
        { teamcode:"DAL", 
          name:"Dallas Cowboys", 
          locatedIn:"Arlington, TX"
        },
        { teamcode:"DEN", 
          name:"Denver Broncos", 
          locatedIn:"Denver, CO"
        },
        { teamcode:"HOU", 
          name:"Houston Texans", 
          locatedIn:"Houston, TX"
        },
        { teamcode:"KAN", 
          name:"Kansas City Chiefs", 
          locatedIn:"Kansas City, MO"
        }
      ];
      let select=document.getElementById("footballTeams");
   for(let i=0;i<teams.length;i++){
    let option = new Option();
     option.text=teams[i].name;
     option.value=teams[i].teamcode;
      select.appendChild(option);
   }      
}
function abtnClicked(){
    let selectOpt = document.getElementById('footballTeams');
    let value = selectOpt.value;
    let index=selectOpt.selectedIndex;
   document.getElementById('mess').innerHTML="You selected the "+selectOpt[index].text+'\t('+value+")";
}
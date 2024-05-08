'use strict';
window.onload=function(){
    footballDropDownList();
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
    let option = new Option(teams[i].name+"-"+teams[i].teamcode);
      select.appendChild(option);
   }      
}
'use strict';
let select=document.getElementById('footballTeams');
    let opt= new Option();
    opt.text="select a team";
    opt.value="";
    select.appendChild(opt);
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
     
   for(let i=0;i<teams.length;i++){
    let select=document.getElementById("footballTeams");
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
    if(value==""||value==null||value==undefined){
        document.getElementById('mess').innerHTML="";
    }
    else{
   document.getElementById('mess').innerHTML="You selected the "+selectOpt[index].text+'\t('+value+")";
   }
}
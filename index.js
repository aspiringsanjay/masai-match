// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit",myFunction);
function myFunction(){
    event.preventDefault();
    var matchNum = documnet.querySelector("#matchNum").value;
    var teamA = document.querySelector("#teamA").value;
    var teamB = document.querySelector("#teamB").value;
    var date = document.querySelector("#date").value;
    var venue = document.querySelector("#venue").value;
    console.log(matchNum,teamA,teamB,date,venue);

   var tr=document.createElement("tr");
     
   var td1=document.createElement("td");
   var matchNum=document.createElement("td");
   var td2=document.createElement("td");
   td2.innerText=teamA

   var td3=document.createElement("td");
   td3.innertext=teamB

   var td4=document.createElement("td");
   td4.innerText=date

   var td5=document.createElement("td");
   td5.innerText=venue

   var td6=document.createElement("td")
   td6.innerText=favourite

   var td7=document.createElement("td")
   td7.innerText="Remove";
   td7.style.cursor="pointer"
   td7.style.backgroundColor="red";
   td7.addEventListener("click",deleteRow);

   tr.append(td1,td2,td3,td4,td6,td7);
   document.querySelector("tbody").append(tr);

   function deleteRow(){
       console.log(event.target.parentNode.remove())
   }
}


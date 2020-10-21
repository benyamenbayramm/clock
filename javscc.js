function timee(){
    var date=new Date();
    var time=document.getElementById("time");
    time.innerHTML=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    var setdate=document.getElementById("datew");
    setdate.innerHTML=date.getDate()+"-"+parseInt(date.getMonth()+1)+"-"+date.getFullYear();
}
setInterval(timee,500);
onload=timee();
function setcolor(){
    var settcolor=document.getElementById("coo").value;
    localStorage.setItem("color",settcolor);
    document.getElementById("outbox").style.background=localStorage.getItem("color")
}
function getcolor(){
    document.getElementById("coo").value=localStorage.getItem("color")
    document.getElementById("outbox").style.background=localStorage.getItem("color")
}
onchange=getcolor();
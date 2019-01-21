window.addEventListener("load",bindevents);
// var img;
// var name;
// var des;
function bindevents(){
    buttons=document.getElementsByClassName("invis");
    for(var i=0;i< buttons.length;i++){
        buttons[i].addEventListener("click",show);
    }
}

function show(){
   var nimg=event.srcElement.parentElement.lastElementChild.getAttribute('src');
   var aimg=ImgArray[0].cimg;
   var aname=ImgArray[0].cname;
   var adesig=ImgArray[0].cdesig;
    for(var i=0;i<ImgArray.length;i++){
        if(ImgArray[i].imgname==nimg){
            aimg=ImgArray[i].cimg;
            aname=ImgArray[i].cname;
            adesig=ImgArray[i].cdesig;
        }
    }
    var place=document.getElementById("tdimg").lastElementChild;
    place.setAttribute('src',aimg);
    var placen=document.getElementById("name");
    placen.innerText=aname;
    var placed=document.getElementById("design");
    placed.innerText=adesig;
}


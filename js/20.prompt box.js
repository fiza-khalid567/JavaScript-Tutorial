 /*simple prompt box
 var a=prompt("what is your name");
alert("welcome to our website "+a);*/
var per=prompt("enter your percentage");
if(per==100){
    document.write("you are topper");
}
else if(per>=80 && per<100){
    document.write("you are first");
}
else if(per>=60 && per<80){
    document.write("you are second")
}
else if(per>=30 && per<60){
    document.write("you are third")
}
else{
    document.write("you are failed")
}
// simple function with return value
function fullname(fname,lname){
    var a=fname+lname;
    return a;
}
var fn = fullname("ram","singh");
document.write(fn);
document.write("<br>");

// advanced
function sum(maths,eng,sci){
    var s=maths+eng+sci;
    return s;
}
function percentage(tt){
    var per = tt/300*100;
    document.write(per);
}
var total = sum(78,78,98);
percentage(total);


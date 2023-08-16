//if else to check one condition

/*let age = 12;

if(age>=18){
     alert("you can vote");
}
else{
     alert("you can not vote");
}*/

//else if condiotion to check two condition

/*let age = 15;
let votercard = 'no';

if(age>=15 && votercard == 'yes'){
      alert("you can vote");
}
else if(age>=15 && votercard == 'no'){
    alert("you get your id card");
}
else{
    alert("you can vote");
}*/

//switch case

/*let input= 1;

switch(input){
    case 1:
    document.write("continue...");
    break;

    case 0:
        document.write("end....");
        break;

     case "yes":
        document.write("hello world");
        break;

      default:
        document.write("invalid input");  


}*/

// while loop

/*let counter = 1;

while(counter<=10){
       document.write("java-script ");
       counter++; 
}*/

// add all the even number till 100

/*let counter = 1;
let sum = 0;

while(counter <= 100){
     if(counter % 2==0){
         sum = sum + counter;
     }
     counter++;
}

document.write(sum);*/

// do while loop

/*let counter = 12;

do{
    document.write("hello world");
    counter++;


}while(counter <= 10);*/

//for loop

/*for(let counter = 1; counter <= 10; counter++){
           document.write("fiza....");
}*/

//break statement

/*for(let counter=1; counter<=10; counter++){
         if(counter==5){
            break;
         }
        document.write(counter);
        document.write('<br>');
}*/

//continue statement

/*for(let counter = 1; counter<=10; counter++ ){
    if(counter==5){
        continue;
    }
    document.write(counter);
    document.write('<br>');
}*/

//nested loop

/*for(let counter=1; counter<=10; counter++){
     document.write(counter);
     document.write('<br>');

     for(let counter2=1; counter2<=2 ; counter2++){

        
        document.write("fiza...");
        document.write('<br>');
     }
}*/

//alert box
//alert("hello world");

//prompt box
/*let age= prompt(`enter your age`, 20);

if(age!=null){
     document.write(`your age is ${age}`);
}
else{
    document.write("age field was blank");
}*/

//confirm box

/*let response = confirm("are you sure you want to exit");
if(response){
    document.write(`exit successfully`);
}
else{
      document.write(`not exit`);
}*/

 //type conversion

/* let type = "5" + null;
 console.log(type);
 console.log(typeof type)*/

 /*let type = "hello";
 console.log(typeof type);

 let newtype = Number(type);
 console.log(typeof newtype);*/

//string manupulation

/*let str = "fiza";

let greet = `hi ${str}`;
console.log(greet);*/

/*let str = "hello world";
console.log(str.length);*/

/*let string = "hello fiza";
console.log(string[4]);*/

// let str = "hello";
// let str2 = "world";
// // console.log(str+" "+str2);

//     let str = "hello";

//     if(str=="hello"){
//         console.log("equal")
//     }
//     else{
//         console.log("not equal");
//     }

// let str = "hello";
// let str2 = "world";
// let str3 = str.concat(" ",str2);
// console.log(str3);

// let str = "this is javascript tutorial.it is good tutorial";
// let substring = str.substr(8 , 19);
// console.log(substring);

let str = "this is javascript tutorial.it is good tutorial";
let position = str.indexOf('good');
console.log(position);







 




 




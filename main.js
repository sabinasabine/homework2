var r = Math.floor(Math.random() * 101) + 1;
console.log(r);
if (r<18){
    console.log("Учеба");
}
else if(r>18 && r<65){
    console.log("Работа");
}
else{
    console.log("Пенсия");
}


var arr=[1,2,3,4,5,6,7,8,9];
for (var i=0;i<10;i++){
    switch (arr[i]){
        case 1:
            console.log("1 разаработчик");
            break;
        case 2:
            console.log("2 разаработчика");
            break;
        case 3:
            console.log("3 разаработчика");
            break;
        case 4:
            console.log("4 разаработчика");
            break;
        case 5:
            console.log("5 разаработчиков");
            break;
        case 6:
            console.log("6 разаработчиков");
            break;
        case 7:
            console.log("7 разаработчиков");
            break;
        case 8:
            console.log("8 разаработчиков");
            break;
        case 9:
            console.log("9 разаработчиков");
            break;
       
    }
}

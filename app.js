//1-misol
//Savol : Sonlardan tashkil topgan massiv elementlar orasidan  
//toqlarni sonini topuvchi funksiya yozing.
//Javob

/*
function toqSon(massiv){
    let toqSon = 0;
    for (let i =0;  i < massiv.length; i++){
        if(massiv[i] % 2 !==0){
            toqSon++;
        }
    }
    return toqSon;
    


    }
    let  testMassiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]
    let  natija = toqSon(testMassiv);
    console.log(`Massivda ${natija} ta toq son bor`);
    */

//2-misol
//Savol : Sonlardan tashkil topgan massiv elamentlari orassian 3 ga va 7 ga karralilarning ko'paytmasini topuvchi funksiya yozing.
//Javob 
/*
function kopaytmani_top(massiv){
    let kopaytma=1;

    for( i =0;  i < massiv.length; i++){
    if(massiv[i] % 3 && massiv[i] % 7){
        kopaytma *= massiv[i];
    }

}

return kopaytma;

}
let testMassiv = [1, 4, 5, 8, 7, 9, 2, 8];
let natija = kopaytmani_top(testMassiv);
console.log("massivda 3 ga ham 7 ga ham karralini sonlar ko'paytmasi: ${natija}");
*/


//3-miol
//Savol : Sonlardan tashkil topgan massiv berilganda uning toq elementlaridan iborat yangi
//massiv hosil qiladigan funksiya yozing.





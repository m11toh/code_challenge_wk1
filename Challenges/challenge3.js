// deductions
// nssf
// nhif
// payee
//housing levy

let grosssalary = 80000
let benefits = 5000

//Grosspay calculations 
function grosspay(grosssalary,benefits){

     return  grosssalary + benefits ;
}  

//payee calculation as per the KRA
function calculatepayee(grosspay){
    console.log(grosspay)
    if(grosssalary => 24000 && grosssalary <= 288000){
        payee = grosspay * 0.1
        return `Your payee is ksh${payee}`;

    }
}

console.log(calculatepayee(grosspay(grosssalary,benefits)))


let nssf = 0.06
function calculateNssf(nssf){
    nssf = grosssalary * 0.06
    return `Your nssf is Ksh${nssf}`;

}

console.log(calculateNssf(nssf));

let nhifDeductions = 0
function calculateNhif(nhifDeductions){
        if(grosssalary >= 0 && grosssalary <= 5999){
            return 150;
        }else if(grosssalary >= 6000 && grosssalary <= 7999){
            return 300;
        }else if(grosssalary >= 8000 && grosssalary <= 11999){
            return 400;
        }else if(grosssalary >= 12000 && grosssalary <= 14999){
            return 500;
        }else if(grosssalary >= 15000 && grosssalary <= 19999){
            return 600;
        }else if(grosssalary >= 20000 && grosssalary <= 24999){
            return 750;
        }else if(grosssalary >= 25000 && grosssalary <= 29000){
            return 850;
        }else if(grosssalary >= 30000 && grosssalary <= 34999){
            return 900;
        }else if(grosssalary >= 35000 && grosssalary <= 39999){
            return 950;
        }else if(grosssalary >= 40000 && grosssalary <= 44999){
            return 1000;
        }else if(grosssalary >= 45000 && grosssalary <= 49999){
            return 1100;
        }else if(grosssalary >= 50000 && grosssalary <= 59999){
            return 1200;
        }else if(grosssalary >= 60000 && grosssalary <= 69999){
            return 1300;
        }else if(grosssalary >= 70000 && grosssalary <= 79999){
            return 1400;
        }else if(grosssalary >= 80000 && grosssalary <= 89999){
            return 1500;
        }else if(grosssalary >= 90000 && grosssalary <= 99999){
            return 1600;
        }
}
    console.log(calculateNhif(nhifDeductions));

 function calculatenetsalary(grosssalary){
    netsalary = grosspay(grosssalary, benefits) - (calculateNhif(nhifDeductions) + (calculateNssf(nhifDeductions)) + (calculatepayee(grosspay)))
    console.log(calculatenetsalary(netsalary))
    return netsalary;
 }

 
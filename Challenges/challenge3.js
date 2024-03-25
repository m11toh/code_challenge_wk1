function gross(basicsalary,benefits){
    const grossAmount = basicsalary + benefits;
    return grossAmount;
}

function NHIFdeductions(basicsalary, benefits){
    const grosssalary = gross(basicsalary, benefits)
         if(grosssalary >= 0 && grosssalary <= 7999){
            return 150;
        }else if(grosssalary >= 8000 && grosssalary <= 11999){
            return 300;
        }else if(grosssalary >= 12000 && grosssalary <= 14999){
            return 400;
        }else if(grosssalary >= 15000 && grosssalary <= 19999){
            return 500;
        }else if(grosssalary >= 20000 && grosssalary <= 24999){
            return 600;
        }else if(grosssalary >= 25000 && grosssalary <= 29999){
            return 750;
        }else if(grosssalary >= 30000 && grosssalary <= 34000){
            return 850;
        }else if(grosssalary >= 35000 && grosssalary <= 39999){
            return 900;
        }else if(grosssalary >= 40000 && grosssalary <= 44999){
            return 950;
        }else if(grosssalary >= 50000 && grosssalary <= 59999){
            return 1000;
        }else{
            return 1700
        }
}

// calculates income tax
function tax(basicsalary, benefits){
    const grosssalary = gross(basicsalary, benefits);
    const nhif = NHIFdeductions(basicsalary, benefits);
    const nssfdeductions = calculatenssf(basicsalary, benefits);
    const taxableincome = grosssalary -(nssfdeductions+nhif);
    return taxableincome;

}

//function of nssf deduction
function calculatenssf(basicsalary, benefits){
    const grosssalary = gross(basicsalary, benefits);
    const nssfdeductions = grosssalary * 0.05;


    return nssfdeductions;
}

//calculates netsalary
function calculatenetsalary(basicsalary, benefits){
    const grosssalary = gross(basicsalary, benefits);
    const nhif = NHIFdeductions(basicsalary, benefits);
    const nssfdeductions = calculatenssf(basicsalary, benefits);
    const salary = grosssalary - (nssfdeductions+nhif);

    //conditions

    if(salary  <= 24000){
        return salary * 0.10;
    }else if(salary <= 34000){
        return salary * 0.25;
    }else if(salary <= 34000){
        return salary * 0.30;
    }else if(salary <= 34000){
        return salary * 0.35;
    }else{
        return salary * 0.40;
    }
}

// net salry after deduction
console.log(calculatenetsalary(80000, 1000))

let numOfClicks=0;
let numOfOperators=0;
let minHappend=false;
let chck=false;
function insert(elem){
    let d1 = document.getElementById("display1");
    let d2 = document.getElementById("display2");
    if(numOfClicks===0){
        if(elem == "+" || elem == "-" || elem == "/" || elem == "x" || elem == "."){
            d1.innerHTML="";
            d2.innerHTML="";
        }
        else{
            d1.innerHTML=elem;
            d2.innerHTML=elem;
            numOfClicks++;
        }
    }
    else{
        if(numOfOperators===0 && minHappend===false){
            if(elem == "+" || elem == "-" || elem == "/" || elem == "x"){
                d1.innerHTML = d1.innerHTML + elem;
                numOfClicks++;
                numOfOperators++;
            }
            else{
                d1.innerHTML = d1.innerHTML + elem;
                if(numOfOperators<1){
                    d2.innerHTML = d2.innerHTML + elem;
                }
                numOfClicks++;
            }
        }
        else if(numOfOperators===0 && minHappend===true){
            d1.innerHTML = d1.innerHTML + elem
            let indeks=0;
            for(i = 0; i < d1.innerHTML.length; i++){
                if(d1.innerHTML[i]=="-"){
                    indeks=i;
                }
            }
            let numLeft="";
            let numRight="";
            for(i = 0; i < indeks-1; i++){
                numLeft = numLeft + d1.innerHTML[i];
            }
            for(i = indeks+1; i < d1.innerHTML.length; i++){
                numRight = numRight + d1.innerHTML[i];
            }
            if(d1.innerHTML[indeks-1] == "/"){
                d2.innerHTML = numLeft / (numRight * (-1));
            }
            if(d1.innerHTML[indeks-1] == "x"){
                d2.innerHTML = numLeft * (numRight * (-1));
            }
        }
        else{
            if(d1.innerHTML[d1.innerHTML.length-1] == "/" || d1.innerHTML[d1.innerHTML.length-1] == "x"){
                if(elem == "-"){
                    d1.innerHTML = d1.innerHTML + elem;
                    numOfClicks++;
                    numOfOperators=0;
                    minHappend = true;
                }
                else if (elem == "+" || elem == "/" || elem == "x"){
                    d1.innerHTML = d1.innerHTML;
                    d2.innerHTML = d2.innerHTML;
                }
                else{
                    d1.innerHTML = d1.innerHTML + elem;
                    let indeks=0;
                    for(i = 0; i < d1.innerHTML.length; i++){
                        if(d1.innerHTML[i]=="+" || d1.innerHTML[i]=="-" || d1.innerHTML[i]=="x" || d1.innerHTML[i]=="/"){
                            indeks=i;
                        }
                    }
                    let numLeft="";
                    let numRight="";
                    for(i = 0; i < indeks; i++){
                        numLeft = numLeft + d1.innerHTML[i];
                    }
                    for(i = indeks+1; i < d1.innerHTML.length; i++){
                        numRight = numRight + d1.innerHTML[i];
                    }
                    if(d1.innerHTML[indeks]=="+"){
                        d2.innerHTML=numLeft + numRight;
                    }
                    if(d1.innerHTML[indeks]=="-"){
                        d2.innerHTML=numLeft - numRight;
                    }
                    if(d1.innerHTML[indeks]=="/"){
                        d2.innerHTML=numLeft / numRight;
                    }
                    if(d1.innerHTML[indeks]=="x"){
                        d2.innerHTML=numLeft * numRight;
                    }
                }
            }
            else{
                if(elem == "+" || elem == "-" || elem == "x" || elem == "/"){
                    d1.innerHTML = d2.innerHTML + elem;
                    numOfClicks = d1.innerHTML.length - 1;
                    numOfOperators++;
                }
                else{
                    d1.innerHTML = d1.innerHTML + elem;
                    numOfClicks++;
                    let indeks=0;
                    for(i = 0; i < d1.innerHTML.length; i++){
                        if(d1.innerHTML[i]=="+" || d1.innerHTML[i]=="-" || d1.innerHTML[i]=="x" || d1.innerHTML[i]=="/"){
                            indeks=i;
                        }
                    }
                    let numLeft="";
                    let numRight="";
                    for(i = 0; i < indeks; i++){
                        numLeft = numLeft + d1.innerHTML[i];
                    }
                    for(i = indeks+1; i < d1.innerHTML.length; i++){
                        numRight = numRight + d1.innerHTML[i];
                    }
                    if(d1.innerHTML[indeks]=="+"){
                        d2.innerHTML=parseFloat(numLeft) + parseFloat(numRight);
                    }
                    if(d1.innerHTML[indeks]=="-"){
                        d2.innerHTML=numLeft - numRight;
                    }
                    if(d1.innerHTML[indeks]=="/"){
                        d2.innerHTML=numLeft / numRight;
                    }
                    if(d1.innerHTML[indeks]=="x"){
                        d2.innerHTML=numLeft * numRight;
                    }
                }
            }
        }
    }
}


function clr(){
    let d1 = document.getElementById("display1");
    let d2 = document.getElementById("display2");
    numOfClicks=0;
    numOfOperators=0;
    minHappend=false;
    chck=false;
    d1.innerHTML = "";
    d2.innerHTML = "";
}

function equal(){
    let d1 = document.getElementById("display1");
    let d2 = document.getElementById("display2");
    d1.innerHTML=d2.innerHTML;
}

function bcksp(){
    chck=false;
    let d1 = document.getElementById("display1");
    let d2 = document.getElementById("display2");
    let rj = "";
    for(i=0; i<d1.innerHTML.length; i++){
        if(d1.innerHTML[i]==="+" || d1.innerHTML[i]==="-" || d1.innerHTML[i]==="/" || d1.innerHTML[i]==="x"){
            chck=true;
        }
    }
    if(chck==true){
        if(d1.innerHTML[d1.innerHTML.length-1]=="+" || d1.innerHTML[d1.innerHTML.length-1]=="-" || 
            d1.innerHTML[d1.innerHTML.length-1]=="/" || d1.innerHTML[d1.innerHTML.length-1]=="x"){
        rj="";
        for(i = 0; i < d1.innerHTML.length-1; i++){
            rj = rj + d1.innerHTML[i];
        }
        d1.innerHTML = rj;
        d2.innerHTML = d1.innerHTML;
        }
        else if(d1.innerHTML[d1.innerHTML.length-2]=="+" || d1.innerHTML[d1.innerHTML.length-2]=="-" || 
                d1.innerHTML[d1.innerHTML.length-2]=="/" || d1.innerHTML[d1.innerHTML.length-2]=="x"){
                    rj="";
                    for(i = 0; i < d1.innerHTML.length-1; i++){
                        rj = rj + d1.innerHTML[i];
                    }
                    d1.innerHTML = rj;
                    d2.innerHTML = ""
                    for(i = 0; i < d1.innerHTML.length-1; i++){
                        d2.innerHTML = d2.innerHTML + d1.innerHTML[i];
            }
        }
        else{
            rj="";
            for(i = 0; i < d1.innerHTML.length-1; i++){
                rj = rj + d1.innerHTML[i];
            }
            d1.innerHTML = rj;
            let indeks=0;
            for(i = 0; i < d1.innerHTML.length; i++){
                if(d1.innerHTML[i]=="+" || d1.innerHTML[i]=="-" || d1.innerHTML[i]=="x" || d1.innerHTML[i]=="/"){
                    indeks=i;
                }
            }
            let numLeft="";
            let numRight="";
            for(i = 0; i < indeks; i++){
                numLeft = numLeft + d1.innerHTML[i];
            }
            for(i = indeks+1; i < d1.innerHTML.length; i++){
                numRight = numRight + d1.innerHTML[i];
            }
            if(d1.innerHTML[indeks]=="+"){
                d2.innerHTML=parseFloat(numLeft) + parseFloat(numRight);
            }
            if(d1.innerHTML[indeks]=="-"){
                d2.innerHTML=numLeft - numRight;
            }
            if(d1.innerHTML[indeks]=="/"){
                d2.innerHTML=numLeft / numRight;
            }
            if(d1.innerHTML[indeks]=="x"){
                d2.innerHTML=numLeft * numRight;
            }
        }
    }
    else{
        rj="";
        for(i = 0; i < d1.innerHTML.length-1; i++){
            rj = rj + d1.innerHTML[i];
        }
        d1.innerHTML = rj;
        d2.innerHTML=d1.innerHTML;
    }
    
}
let brojMeni=5;
let brojSoba=8;
let brojac=0;
let lista=[]
let pomocna=[]
for(i=0; i<brojMeni; i++){
    let item = document.getElementsByTagName('li')[i];
    item.addEventListener('click', () => {
        let klikMeni = document.getElementsByTagName('li')[i];
        if(brojac==0){
            lista[0]=klikMeni;
            brojac++;
            pomocna[0]=true;
        }else{
            lista[1]=klikMeni;
            brojac++;
            pomocna[1]=true;
            putanja(lista);
            lista=[]
            brojac=0;
            pomocna=[];
        }  
    });
}
for(i=0; i<brojSoba; i++){
    let item = document.getElementsByTagName('li')[brojMeni+1+i];
    item.addEventListener('click', () => {
        let klikSoba = document.getElementsByTagName('li')[brojMeni+i];
        if(brojac==0){
            lista[0]=klikSoba;
            brojac++;
            pomocna[0]=false;
        }else{
            lista[1]=klikSoba;
            brojac++;
            pomocna[1]=false;
            putanja(lista);
            lista=[]
            brojac=0;
            pomocna=[];
        }
    });
}
let string="";
function putanja(lista){
    if(pomocna[0]==true){
        if(pomocna[1]==true){
            console.log("a -> li -> ul -> li -> a");
        }
        else{
            console.log("a -> li -> ul -> div -> div -> div -> ul -> li -> a");
        }
    }
    else{
        if(pomocna[1]==true){
            console.log("a -> li -> ul -> div -> div -> div -> ul -> li -> a");
        }
        else{
            console.log("a -> li -> ul -> li -> a");
        }
    }
}
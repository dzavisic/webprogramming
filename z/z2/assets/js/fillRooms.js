let names = ["Predavaonica 1","Predavaonica 2","Predavaonica 3",
            "Predavaonica 4","Predavaonica 5","Predavaonica 6",
            "Portirnica","Referada"];
let itemsCount = ["Broj predmeta: 50","Broj predmeta: 50","Broj predmeta: 50","Broj predmeta: 50","Broj predmeta: 50","Broj predmeta: 50","Broj predmeta: 50","Broj predmeta: 50"];
let rooms = [names, itemsCount];



function fillRooms(rooms) {
    for(i=0; i<rooms[0].length; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        let h5 = document.createElement('h5');
        let h6 = document.createElement('h6');
        let prost = document.getElementById('prost');
        a.appendChild(h5);
        a.appendChild(h6);
        li.appendChild(a);
        prost.appendChild(li);
        
        let aa = document.getElementsByTagName('a')[5+i];
        aa.setAttribute("href", "#");

        let h51 = document.getElementsByTagName('h5')[i];
        h51.innerHTML=rooms[0][i];

        let h61 = document.getElementsByTagName('h6')[i];
        h61.innerHTML=rooms[1][i];
    }
};
names.sort();
fillRooms(rooms);

function sortDugme(){
    let sort = document.getElementById('sort');
    let ul1 = document.createElement('ul');
    let li1 = document.createElement('li');
    let a1 = document.createElement('a');
    
    li1.appendChild(a1);
    ul1.appendChild(li1);
    sort.appendChild(ul1);

    let li11 = document.getElementsByTagName('li')[5];
    li11.setAttribute('id', 'sortOpcija');
    li11.setAttribute('onclick', 'sortByName()');

    let a11  = document.getElementsByTagName('a')[5];
    a11.setAttribute('href', '#');
    a11.innerHTML = "Poredaj po imenu ▼";

    /* Mali popravak lošeg css-a od prošle zad */
    a11.style.textDecoration = 'none';
    a11.style.color='rgb(124, 180, 204)';
    a11.style.fontSize='9px';
    let sorty = document.getElementById('sort');
        sorty.style.paddingBottom='6px';
}
sortDugme();

let counter=0;
function sortByName(){
    counter++;
    if(counter%2==0){
        names.sort();
        for(i=0; i<names.length; i++){
            let xx = document.getElementById('prost');
            xx.removeChild(xx.firstChild);
        }
        fillRooms(rooms);
        let ss  = document.getElementsByTagName('a')[5];
        ss.innerHTML = "Poredaj po imenu ▼";

        /* Mali popravak lošeg css-a od prošle zad */
        ss.style.textDecoration = 'none';
        ss.style.color='rgb(124, 180, 204)';
        ss.style.fontSize='9px';
        let sorty = document.getElementById('sort');
        sorty.style.paddingBottom='6px';
    }
    else{
        names.reverse();
        for(i=0; i<names.length; i++){
            let xx = document.getElementById('prost');
            xx.removeChild(xx.firstChild);
        }
        fillRooms(rooms);
        let dd  = document.getElementsByTagName('a')[5];
        dd.innerHTML = "Poredaj po imenu ▲";

        /* Mali popravak lošeg css-a od prošle zad */
        dd.style.textDecoration = 'none';
        dd.style.color='rgb(124, 180, 204)';
        dd.style.fontSize='9px';
        let sorty = document.getElementById('sort');
        sorty.style.paddingBottom='6px';
    };
};

document.getElementById('sortOpcija').onclick(sortByName());




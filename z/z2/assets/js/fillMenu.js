let name = ["Inventura","Inventar","Prostorije",
            "Zaposlenici", "Administracija"];
let path = ["./assets/img/News.svg","./assets/img/Box.svg",
            "./assets/img/Classroom.svg","./assets/img/Contacts.svg","./assets/img/Services.svg"];
let alt = ["inv","inven","prostor","zap","admin"];
let image = [path, alt];
let link = ["#inventura","#inventar","#prostorije","#zaposlenici", "#administracija"];
let menuItems = [name, image, link];

function fillMenu(menuItems){
    for(i=0; i<menuItems[0].length; i++){
        let popis = document.getElementById('popis');
        let li = document.createElement('li');
        let a = document.createElement('a');
        let img = document.createElement('img');

        a.appendChild(img);
        li.appendChild(a);
        popis.appendChild(li);

        let aa = document.getElementsByTagName('a')[i];
        aa.setAttribute("href", menuItems[2][i]);

        let img1 = document.getElementsByTagName('img')[i+1];
        img1.setAttribute("src", menuItems[1][0][i]);
        img1.setAttribute("width", "20");
        img1.setAttribute("height", "20");
        img1.setAttribute("alt", menuItems[1][1][i]);
        
        aa.innerHTML = aa.innerHTML + menuItems[0][i];
    };  
};
fillMenu(menuItems);
let l = (a ,callb) => {
    let m = -Infinity;

    for(let i of a)
        if(i>m)
            m=i;
    callb(m);
}

let c = (m) => {
    console.log("Najveca je vrijednost: ", m);
}

l([1,2,3,-5,10,7], c);
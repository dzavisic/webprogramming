$(() => {
    console.log("Hello world!");
    $("button#btn").on("click", (event) => {
        $("p").first().attr("hidden", true);
    });

    $("#txt").blur((event) => {
        let userInput = $(event.target).val();
        alert(userInput);
    });

    $("ul").first().prepend("<li>0</li>");
    $("ul").first().append("<li>2</li>");

    $("ul li").eq(1).before("<li>0.5</li>");

    let l = ["dodgerblue", "tomato", "gold"];
    for(let c of l) {
        $("ol").first().append(`
            <li>
                ${c}
            </li>
        `);
    }
    let lastByFar = $("ol > li").last();
    lastByFar.before("<li>black</li>");
    
    let pu = $("#myInnerDiv span").first().parentsUntil("#myDiv");
    console.log(pu);
    
    //let circle = $(".circle").first();
    //circle.show(5000, () => {
    //    console.log("Nešto");
    //});
    let r1 = $("#r1");
    let r2 = $("#r2")
    let pulse = () => {
        r1.animate({ "borderRadius": "100%" }, 500);
        r1.animate({ "borderRadius": "0%" }, 500);
    };

    let shrink = () => {
        r2.animate({ "width": "150px" }, 500);
        r2.animate({ "height": "150px" }, 500);
        r2.animate({ "width": "50px" }, 500);
        r2.animate({ "height": "50px" }, 500);
    }

    setInterval(() => {
        pulse();
        shrink();
    }, 1000);
});
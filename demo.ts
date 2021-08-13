export
function addItem(item:string, price:number){
    let comps = JSON.parse(sessionStorage.getItem("comps") || "[]");
    let itName = JSON.parse(sessionStorage.getItem("itName") || "[]");
    let items = {it:item,
                pr:price};
    let itemName = {it: item};
    comps.push(items);
    itName.push(itemName);

    var totalApples:number=0, totalLaptops:number=0, totalHelmet:number=0, totalMobile:number=0;
    var applePrice: number=0, laptopPrice:number=0, helmetPrice:number=0, mobilePrice:number=0;

    comps.forEach(element => {
        if(element.it == "Apple"){
            totalApples++;
            applePrice += +element.pr;
        }
        else if(element.it == "Laptop"){
            totalLaptops++;
            laptopPrice += +element.pr;
        }
        else if(element.it == "Helmet"){
            totalHelmet++;
            helmetPrice += +element.pr;
        }
        else if(element.it == "Mobile"){

            mobilePrice += +element.pr;
            totalMobile++;
        }
    });

    let totalX= <HTMLParagraphElement>document.getElementById("totalApple");
    if(totalX){
        totalX.innerHTML = "x"+totalApples;
    }
    let totalL = <HTMLParagraphElement>document.getElementById("totalLaptop");
    if(totalL){
        totalL.innerHTML = "x"+totalLaptops;
    }
    let totalH = <HTMLParagraphElement>document.getElementById("totalHelmet");
    if(totalH){
        totalH.innerHTML = "x"+totalHelmet;
    }
    let totalY = <HTMLParagraphElement>document.getElementById("totalMobile");
    if(totalY){
        totalY.innerHTML = "x"+totalMobile;
    }

    sessionStorage.setItem("comps", JSON.stringify(comps));
    sessionStorage.setItem("itName", JSON.stringify(itName));
    console.log("Data is stored in the sessionStorage");
}



function removeItem(itemName:string){
    let comps = JSON.parse(sessionStorage.getItem("comps") || "[]");

    for(var i = 0; i < comps.length; i++){
        if(comps[i].it == itemName){
            comps.splice(i, 1);
            break;
        }
    }
    var totalApples:number=0, totalLaptops:number=0, totalHelmet:number=0, totalMobile:number=0;
    var applePrice:number= 0, laptopPrice:number=0, helmetPrice:number=0, mobilePrice:number=0;

    comps.forEach(element => {
        if(element.it == "Apple"){
            totalApples++;
            applePrice += +element.pr;
        }
        else if(element.it == "Laptop"){
            totalLaptops++;
            laptopPrice += +element.pr;
        }
        else if(element.it == "Helmet"){
            totalHelmet++;
            helmetPrice += +element.pr;
        }
        else if(element.it == "Mobile"){

            mobilePrice += +element.pr;
            totalMobile++;
        }
    });

    let totalX= <HTMLParagraphElement>document.getElementById("totalApple");
    if(totalX){
        totalX.innerHTML = "x"+totalApples;
    }
    let totalL = <HTMLParagraphElement>document.getElementById("totalLaptop");
    if(totalL){
        totalL.innerHTML = "x"+totalLaptops;
    }
    let totalH = <HTMLParagraphElement>document.getElementById("totalHelmet");
    if(totalH){
        totalH.innerHTML = "x"+totalHelmet;
    }
    let totalY = <HTMLParagraphElement>document.getElementById("totalMobile");
    if(totalY){
        totalY.innerHTML = "x"+totalMobile;
    }

    sessionStorage.setItem("comps", JSON.stringify(comps));
}

function displayData(){
    let comps = JSON.parse(sessionStorage.getItem("comps") || "[]");
    let itName = JSON.parse(sessionStorage.getItem("itName") || "[]");
    var unique = {};
    comps.forEach(function(item) {
        var name = unique[item.it] = unique[item.it] || {};
        name[item.pr] = true;
    });
    var outputList = [];
    for(var name in unique){
        for(var priceTag in unique[name]){
            outputList.push({it: name, pr: priceTag});
        }
    }
    let uniqueJSON = JSON.stringify(outputList, null, 4);
    console.log(uniqueJSON);
    let obj = JSON.parse(uniqueJSON);
    console.log(obj);
    // console.log(itName);
    // console.log(itName[0].it);
    var tableContent = "";
    var startTable = "<table border=1><tr><th>Item Name</th><th>Price</th></tr>"
    var total = 0;
    var totalApples:number=0, totalLaptops:number=0, totalHelmet:number=0, totalMobile:number=0;
    var applePrice:number = 0, laptopPrice:number=0, helmetPrice:number=0, mobilePrice:number=0;
    comps.forEach(element => {
        if(element.it == "Apple"){
            totalApples++;
            applePrice += +element.pr;
        }
        else if(element.it == "Laptop"){
            totalLaptops++;
            laptopPrice += +element.pr;
        }
        else if(element.it == "Helmet"){
            totalHelmet++;
            helmetPrice += +element.pr;
        }
        else if(element.it == "Mobile"){

            mobilePrice += +element.pr;
            totalMobile++;
        }
        total += +element.pr;
    });
    obj.forEach(elem=>{

        if(elem.it == "Apple")
        {
            console.log("Apple Price: "+ applePrice + "\ttotal Apples: " + totalApples);
            tableContent += "<tr><td id = \"apple\">" + elem.it + " x"+totalApples+ "</td><td>$" + applePrice.toFixed(2) + "</td></tr>";          
        }
        else if(elem.it == "Laptop")
        {
            tableContent += "<tr><td>" + elem.it + " x" + totalLaptops+ "</td><td>$" + laptopPrice.toFixed(2) + "</td></tr>";
        }
        else if(elem.it == "Helmet")
        {
            tableContent += "<tr><td>" + elem.it + " x"+ totalHelmet+ "</td><td>$" + helmetPrice.toFixed(2) + "</td></tr>";
        }
        else if(elem.it == "Mobile")
        {
            tableContent += "<tr><td>" + elem.it + " x"+ totalMobile+ "</td><td>$" + mobilePrice.toFixed(2) + "</td></tr>";
        }
    })
    var endTable = "</table><br>Total Price: $" + total.toFixed(2);
    tableContent = startTable + tableContent + endTable;
    let table = <HTMLDivElement>document.getElementById("table");
    if(table){
        table.innerHTML = tableContent;
    }
}
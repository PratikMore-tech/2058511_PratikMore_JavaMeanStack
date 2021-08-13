function addItem(item, price) {
    var comps = JSON.parse(sessionStorage.getItem("comps") || "[]");
    var itName = JSON.parse(sessionStorage.getItem("itName") || "[]");
    var items = { it: item,
        pr: price };
    var itemName = { it: item };
    comps.push(items);
    itName.push(itemName);
    var totalApples = 0, totalLaptops = 0, totalHelmet = 0, totalMobile = 0;
    var applePrice = 0, laptopPrice = 0, helmetPrice = 0, mobilePrice = 0;
    comps.forEach(function (element) {
        if (element.it == "Apple") {
            totalApples++;
            applePrice += +element.pr;
        }
        else if (element.it == "Laptop") {
            totalLaptops++;
            laptopPrice += +element.pr;
        }
        else if (element.it == "Helmet") {
            totalHelmet++;
            helmetPrice += +element.pr;
        }
        else if (element.it == "Mobile") {
            mobilePrice += +element.pr;
            totalMobile++;
        }
    });
    var totalX = document.getElementById("totalApple");
    if (totalX) {
        totalX.innerHTML = "x" + totalApples;
    }
    var totalL = document.getElementById("totalLaptop");
    if (totalL) {
        totalL.innerHTML = "x" + totalLaptops;
    }
    var totalH = document.getElementById("totalHelmet");
    if (totalH) {
        totalH.innerHTML = "x" + totalHelmet;
    }
    var totalY = document.getElementById("totalMobile");
    if (totalY) {
        totalY.innerHTML = "x" + totalMobile;
    }
    sessionStorage.setItem("comps", JSON.stringify(comps));
    sessionStorage.setItem("itName", JSON.stringify(itName));
    console.log("Data is stored in the sessionStorage");
}
function removeItem(itemName) {
    var comps = JSON.parse(sessionStorage.getItem("comps") || "[]");
    for (var i = 0; i < comps.length; i++) {
        if (comps[i].it == itemName) {
            comps.splice(i, 1);
            break;
        }
    }
    var totalApples = 0, totalLaptops = 0, totalHelmet = 0, totalMobile = 0;
    var applePrice = 0, laptopPrice = 0, helmetPrice = 0, mobilePrice = 0;
    comps.forEach(function (element) {
        if (element.it == "Apple") {
            totalApples++;
            applePrice += +element.pr;
        }
        else if (element.it == "Laptop") {
            totalLaptops++;
            laptopPrice += +element.pr;
        }
        else if (element.it == "Helmet") {
            totalHelmet++;
            helmetPrice += +element.pr;
        }
        else if (element.it == "Mobile") {
            mobilePrice += +element.pr;
            totalMobile++;
        }
    });
    var totalX = document.getElementById("totalApple");
    if (totalX) {
        totalX.innerHTML = "x" + totalApples;
    }
    var totalL = document.getElementById("totalLaptop");
    if (totalL) {
        totalL.innerHTML = "x" + totalLaptops;
    }
    var totalH = document.getElementById("totalHelmet");
    if (totalH) {
        totalH.innerHTML = "x" + totalHelmet;
    }
    var totalY = document.getElementById("totalMobile");
    if (totalY) {
        totalY.innerHTML = "x" + totalMobile;
    }
    sessionStorage.setItem("comps", JSON.stringify(comps));
}
function displayData() {
    var comps = JSON.parse(sessionStorage.getItem("comps") || "[]");
    var itName = JSON.parse(sessionStorage.getItem("itName") || "[]");
    var unique = {};
    comps.forEach(function (item) {
        var name = unique[item.it] = unique[item.it] || {};
        name[item.pr] = true;
    });
    var outputList = [];
    for (var name in unique) {
        for (var priceTag in unique[name]) {
            outputList.push({ it: name, pr: priceTag });
        }
    }
    var uniqueJSON = JSON.stringify(outputList, null, 4);
    console.log(uniqueJSON);
    var obj = JSON.parse(uniqueJSON);
    console.log(obj);
    // console.log(itName);
    // console.log(itName[0].it);
    var tableContent = "";
    var startTable = "<table border=1><tr><th>Item Name</th><th>Price</th></tr>";
    var total = 0;
    var totalApples = 0, totalLaptops = 0, totalHelmet = 0, totalMobile = 0;
    var applePrice = 0, laptopPrice = 0, helmetPrice = 0, mobilePrice = 0;
    comps.forEach(function (element) {
        if (element.it == "Apple") {
            totalApples++;
            applePrice += +element.pr;
        }
        else if (element.it == "Laptop") {
            totalLaptops++;
            laptopPrice += +element.pr;
        }
        else if (element.it == "Helmet") {
            totalHelmet++;
            helmetPrice += +element.pr;
        }
        else if (element.it == "Mobile") {
            mobilePrice += +element.pr;
            totalMobile++;
        }
        total += +element.pr;
    });
    obj.forEach(function (elem) {
        if (elem.it == "Apple") {
            console.log("Apple Price: " + applePrice + "\ttotal Apples: " + totalApples);
            tableContent += "<tr><td id = \"apple\">" + elem.it + " x" + totalApples + "</td><td>$" + applePrice.toFixed(2) + "</td></tr>";
        }
        else if (elem.it == "Laptop") {
            tableContent += "<tr><td>" + elem.it + " x" + totalLaptops + "</td><td>$" + laptopPrice.toFixed(2) + "</td></tr>";
        }
        else if (elem.it == "Helmet") {
            tableContent += "<tr><td>" + elem.it + " x" + totalHelmet + "</td><td>$" + helmetPrice.toFixed(2) + "</td></tr>";
        }
        else if (elem.it == "Mobile") {
            tableContent += "<tr><td>" + elem.it + " x" + totalMobile + "</td><td>$" + mobilePrice.toFixed(2) + "</td></tr>";
        }
    });
    var endTable = "</table><br>Total Price: $" + total.toFixed(2);
    tableContent = startTable + tableContent + endTable;
    var table = document.getElementById("table");
    if (table) {
        table.innerHTML = tableContent;
    }
}

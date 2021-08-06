function blog(){
    var title = document.getElementById("title").value;
    var article = document.getElementById("article").value;
    var imgURL = document.getElementById("img").value;

    var myPTagContent = "<h2>"+ title+"</h2>" +"<br>"+article+"<br><img src = \"" + imgURL+"\">";
    
    document.getElementById("blog").innerHTML += myPTagContent;
}
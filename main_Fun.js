var count = 0;
document.getElementById("count").innerText = count;
function add(value){
    document.getElementById("item-list").innerHTML += "<li>"+value+" <button onclick='remove()' style='background-color: #e40909; border: none; color: #fff; border-radius: 50%; cursor: pointer;'>X</button></li>";
    count = count+1;
    document.getElementById("count").innerText = count;
}

function remove(){
    var listItem = document.getElementsByTagName("li");
    for(var i= 0; i<listItem.length; i++){
        listItem[i].onclick = function(){
            this.parentNode.removeChild(this);
        }
    }
    count = count-1;
    document.getElementById("count").innerText = count;
}
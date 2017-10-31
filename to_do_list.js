var li = document.createElement('li')

document.getElementById("add").onclick = function(){
  var text = document.getElementById("newInput").value
  li.innerText = text
  document.getElementById("list").appendChild(li);
  document.getElementById("collectInput").reset();
}

var listItems = document.getElementsByTagName("li");

for (var i = 0; i < listItems.length; i++) {
  listItems[i].onclick = function(){this.parentNode.removeChild(this);}
  li.onclick = function(){this.parentNode.removeChild(this);}
}

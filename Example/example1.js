const newListItem=document.createElement("li")
newListItem.textContent="coconut"
newListItem.id="coconut"
newListItem.style.fontWeight="bold"
newListItem.style.backgroundColor="lightgreen"
//document.getElementById("fruits").append(newListItem)
//document.getElementById("fruits").prepend(newListItem)
//const orange=document.getElementById("orange")
//document.getElementById("fruits").insertBefore(newListItem,orange)
const boxes=document.querySelectorAll('#fruits li')
document.getElementById('fruits').insertBefore(newListItem,boxes[1])
//document.getElementById('fruits').removeChild(newListItem)
// Step1 - Create an element
const newH1=document.createElement("h1")

// Step2 - Add attributes/properties
newH1.textContent="I like Biryani"
newH1.id="myH1"
newH1.style.color="tomato"
newH1.style.textAlign="center"

//Step3 - Add element too DOM
//document.body.append(newH1)
//document.body.prepend(newH1)
document.getElementById("box1").append(newH1)
//document.getElementById("box1").prepend(newH1)
//const box2=document.getElementById("box2")
//document.body.insertBefore(newH1,box2)
//const boxes=document.querySelectorAll(".box")
//document.body.insertBefore(newH1,boxes[0])

//Step4 Remove HTML element
//document.body.removeChild(newH1)
//document.getElementById("box1").removeChild(newH1)
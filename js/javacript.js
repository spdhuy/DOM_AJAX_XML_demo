
function selectElement() {
    var element = document.getElementById("demo_append_child");
    console.log(element);
}

function demoAppendChild(stringAppend){
    var element = document.createElement("p");
    element.appendChild(document.createTextNode(stringAppend));
    document.body.appendChild(element);
}

function demoSetAttribute(){
    var element = document.createElement("p");
    element.setAttribute("id","append_child_demo");
    document.body.appendChild(element);
    var setAttributeElement = document.getElementById("append_child_demo");
    console.log(setAttributeElement);
}

selectElement();
demoAppendChild("append child success");
demoSetAttribute();

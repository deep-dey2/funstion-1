const addNote = ()=> {
    const nodeInput = document.getElementById("nodeInput")
    const nodetext = nodeInput.value;
    console.log(nodetext);

    const li = document.createElement("li")
    li.innerText = nodetext

    document.getElementById("notelist").appendChild(li)
    nodeInput.value = ''
}

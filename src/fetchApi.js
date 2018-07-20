const stateDate = {
    todoList: [{id: "145151", name: "", value: "fafa", contentEditable: false, display: "block"}],
    statusOfList: "all"
}


const fetchaddItems = (value) => {
    if (value != "") {
        let uuid = generateUUID();
        stateDate.todoList.push({id: uuid, name: "", value: value, contentEditable: false, display: "block"})
    }
    return fetchshowItems(stateDate.statusOfList)
}

const fetchchnageItems = (id) => {
    let name = stateDate.todoList.find(item => item.id === id).name;
    name === "" ? name = "checked" : name = ""
    stateDate.todoList.find(item => item.id === id).name = name;
    return fetchshowItems(stateDate.statusOfList)

}


const fetchchnageContent = (id) => {
    let contentEditable = stateDate.todoList.find(item => item.id === id).contentEditable;
    contentEditable ? contentEditable = false : contentEditable = true;
    stateDate.todoList.find(item => item.id === id).contentEditable = contentEditable;

    return fetchshowItems(stateDate.statusOfList)
}

const fetchshowItems = (status) => {
    stateDate.todoList.map(x => {
        if (status === "all") {
            x.display = "block";
            return x;
        }
        if (status === "active") {
            if (x.name === "checked") {
                x.display = "none"
            }
            else {
                x.display = "block"
            }
        }
        if (status === "complete") {
            if (x.name === "") {
                x.display = "none"
            }
            else {
                x.display = "block"
            }
        }

    })
    stateDate.statusOfList = status;

    return stateDate

}


var generateUUID = () => {
    /*jshint bitwise:false */
    var i,
        random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }
        uuid += (i === 12
            ? 4
            : (i === 16
                ? (random & 3 | 8)
                : random)).toString(16);
    }
    return uuid;
}

export {fetchaddItems, fetchchnageContent, fetchshowItems, fetchchnageItems}
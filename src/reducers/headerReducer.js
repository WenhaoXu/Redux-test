export  default  (state={todoList:[],statusOfList:'All'},action)=>{
    switch (action.type) {

        case "AddItem":{

            let uuid=generateUUID();
            let value=action.value;
            let newState=objDeepCopy(state);
            newState.todoList.push({id:uuid,})
            // const value= document.getElementById("input-text").value;
            // document.getElementById("input-text").value =""
            // console.log(value);
            // this.props.type.push()
            // this.props.addfunc({id:uuid,name: "",value: value  ,comple:false} )

        }
    }

    var objDeepCopy = function(source){
        var sourceCopy = {};
        for (var item in source) sourceCopy[item] = typeof source[item] === 'object' ? objDeepCopy(source[item]) : source[item];
        return sourceCopy;
    }

  var generateUUID=  () => {
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





}
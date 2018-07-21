import axios from "axios/index";



export  const  checkItem =(data)=>(
    {
        type : "checkItem", data
    }
)


export const  editItem=(data)=>({type:"editItem",data})


export  const  format=(data)=>({
    type:"format",data
})

// {
//     let URL="https://5b5193a16ecd1b0014aa3519.mockapi.io/Api/StateDate";
//     axios.get(URL)
//         .then(res => {
//             console(res.data)
//             return{type:"format",data:res.data}
//         })
//
// }
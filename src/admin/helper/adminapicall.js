import {API} from '../../backend';

const addCategory=(userId,token,category)=>{
    return fetch(`${API}/create/category/${userId}`,{
        method:POST,
        headers:{
            Accept:"application/json",
            "Content-Type":"appplication/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(category)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
};

export default addCategory;
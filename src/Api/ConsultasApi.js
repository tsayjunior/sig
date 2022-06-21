const API = 'http://ec2-15-228-12-142.sa-east-1.compute.amazonaws.com/api/user'


export const getUsers = async() =>{
    const res=await fetch(API)
    return await res.json()
}
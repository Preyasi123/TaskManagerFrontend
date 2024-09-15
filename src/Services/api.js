import axios from "axios"
const BASE_URL = "http://127.0.0.1:8000/backendApp/Task_manager/"

export async function CreateTask(){
    return await axios.get(BASE_URL)
}

export async function AddTask(data){
    return await axios.post(BASE_URL,data)
}

export async function TaskDetail(id){
    return await axios.get(BASE_URL+`${id}/`)
}

export async function TaskUpdate(id,data){
    return await axios.put(BASE_URL+`${id}/` , data)
}

export async function TaskDelete(id){
    return await axios.delete(BASE_URL+`${id}/`)
}
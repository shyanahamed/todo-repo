import {Router} from "./routes/router";
import { createStore} from "./redux/store";
import { dataFetcher } from "./utils/dataFetcher";
import keyGenerator from './utils/key'

// MOVE THE ROUTER
const app = document.querySelector("#app");

const onAppInit = async function(e){
 let tasks = await dataFetcher('./data/tasks.json')
    if(tasks[0].id === undefined){
        tasks = [...keyGenerator(tasks)]
    }
    createStore(tasks)
    Router(window.location.pathname)   
}

window.addEventListener('load', onAppInit)

 




 
 

 
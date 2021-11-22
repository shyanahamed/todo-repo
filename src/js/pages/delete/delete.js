
import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
import {Router} from './../../routes/router'
import { getStore } from "../../redux/store"
import reducer from './../../redux/reducers'
 
const cancelButton = button("cancel")
const deleteButton = button("delete")

 
const deletePage = function(props){
        
    // Create A Container for the page
    // Styles either with modules.scss or styles.module.css
    const page = document.createElement('div') 

    // Component Clean Up Function
    // Remove The Listeners from the Page
    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelDelete)  
        deleteButton.removeEventListener('click', onRemoveTask) 
    }
 
    function onCancelDelete (e){
        cleanUp()
        Router('/')
    }

    function onRemoveTask (e){ 
          if(props !== null){           
            Router('/')
               const removeTask = props
               const index = getStore().findIndex(task => task.id === removeTask.id)
               const action  = {
                type:"delete",
                payload:{index},
                cb:()=> Router('/')
            }
            reducer(action)
            cleanUp()
           } 
    }
    
    let headerTemplate = `
        <header class="welcome center-in-page">
            <h3>Delete Task</h3>
            <p id="taskDeatil"></p> 
            <div></div>
        </header>
    `
    const pageHeader = makeElement(headerTemplate) 
    if(props !== null)
    {     
        pageHeader.querySelector('#taskDeatil').innerHTML = props.title;
    }
    cancelButton.addEventListener('click', onCancelDelete)  
    deleteButton.addEventListener('click', onRemoveTask) 
    pageHeader.querySelector('div').append(cancelButton, deleteButton)
    page.append(pageHeader)
    return page    
}

export default deletePage
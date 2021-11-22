
import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
import {Router} from './../../routes/router'
import { getStore } from "../../redux/store"
import reducer from './../../redux/reducers'

const cancelButton = button("Cancel")
const addButton = button("Add"  , "btnAdd")

const addPage = function(props){

    const page = document.createElement('div')  
    function onCancelAdd (e){
        Router('/')
    }
    function onAddTask (e){ 
              var taskObj ={
                id:null,
                category: document.getElementById('category').value,
                title: document.getElementById('task').value,
                isComplete: document.getElementById('completed').checked,
                startDate: document.getElementById('startDate').value,
                startTime: document.getElementById('startTime').value,
                endDate: document.getElementById('endDate').value,
                endTime:document.getElementById('endTime').value,
              } ;

               const action  = {
                type:"add",
               // payload:{id ,category , title , isComplete , startDate , startTime , endDate , endTime},
               payload: taskObj, 
                cb:()=> Router('/')
            }
            // reducer(action ,category , title)
            reducer(action)
    }
    
    let headerTemplate = `
    <div class="tasklist">
            <h3>Add New Task</h3>
            <br/>
<div class="addtodoText">
<label class="addLabel text" for="cat">Category</label>
<select class="text" name="cate" id="category">
<option value="School Project">School Project</option>
<option value="Home Work">Home Work</option>
<option value="Office Work">Office Work</option>
</select>
</div>      
<div class="addtodoText">
<label class="addLabel text" for="task">Task To Do</label>
<input name="task" id="task" type="text" class="text"></input>
</div>   
<div class="addtodoText">
<label class="addLabel text" for="startDate" >Start Date</label>
<input name="startDate" id="startDate" type="date" class="text"></input>
</div>   
<div class="addtodoText">
<label class="addLabel text" for="startTime" >Start Time</label>
<input name="startTime" id="startTime" type="time" class="text"></input>
</div>  
<div class="addtodoText">
<label class="addLabel text" for="endDate" >End Date</label>
<input name="endDate" id="endDate" type="date" class="text"></input>
</div>   
<div class="addtodoText">
<label class="addLabel text" for="endTime" >End Time</label>
<input name="endTime" id="endTime" type="time" class="text"></input>
</div>
<div class="addtodoText">
<label class="addLabel text" for="completed" >Completed</label>
<input name="completed" id="completed" type="checkbox"></input>
</div> 
<div id="footer"></div>   
</div>   
       
        </div>`;
     
     const pageHeader = makeElement(headerTemplate) 
    // if(props !== null)
    // {     
    //     pageHeader.querySelector('#taskDeatil').innerHTML = props.title;
    // }
    cancelButton.addEventListener('click', onCancelAdd)  
    addButton.addEventListener('click', onAddTask) 
 
    pageHeader.querySelector('#footer').append(cancelButton, addButton)
    page.append(pageHeader)
    return page    
}

export default addPage
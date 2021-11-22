import makeElement from "../../utils/makeElement"
import directory from "../../components/cards/todolist"
import todoitem from "../../components/cards/todoitem"
import { getStore } from "../../redux/store"
import { Router } from "../../routes/router"
 
let createPage = true;

const employeeDirectory = function(){
    
  const page = document.createElement('div')
  const employeeContainer = directory(); 

  function cleanUp( ){
     const employees = employeeContainer.querySelectorAll('aside') 
     employees.forEach((employee)=>{
          employee.removeEventListener('click', onDeleteEmployee)
     })
  }


 // EVENT HANDLER FUNCTION FOR REMOVING AN EMPLOYEE
  function onDeleteEmployee (e){
        const employeeId = e.currentTarget.dataset.key
        const employee = getStore().filter((employee) => employee.id === employeeId)
        cleanUp()
        Router('/delete', employee[0])

  }

   function render (){ 
      const employees = getStore()
      const div =  employeeContainer.querySelector('#tasks')       
      // create li from the store data
      const employeeElements =  getStore().map(emp=> todoitem(emp))
    
      employeeElements.forEach(element => {        
        element.querySelector('#delete').addEventListener('click', onDeleteEmployee)
        div.append(element)
      });
       page.append(employeeContainer)
   }
      render()
    return page
}
export default employeeDirectory


 
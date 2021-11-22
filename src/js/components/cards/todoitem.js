import makeElement from "../../utils/makeElement";

const task = function ({id,category,title,isComplete,endDate}) {
  const template = `       
  <li  class="task" data-key="${id}">
     <h3>${category} category</h3>
     <p> ${title} </p>
     <p>Due: ${endDate}</p>
     <div><p> ${(isComplete == true) ? 'Completed' : ''} </p>
     <p class="controls">
     <button id="edit" data-key="${id}" class="btnEdit">Edit</button>
     <button id="delete" data-key="${id}" class="btnDelete">Delete</button></p>      
  </li>        
  `;
  return makeElement(template)
};
export default task;

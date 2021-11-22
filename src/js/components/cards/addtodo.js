import makeElement from "../../utils/makeElement";

const todoItem = function () {
  const template = `       
  <div class="addToDoItem"><div class="addtodoText">
  <input type="text" class="text"></input>  </div>   
  <div class="addtodoBtn"><button class="btnAdd">Add</button></p>      
  </div></div>        
  `;
  return makeElement(template)
};
export default todoItem;

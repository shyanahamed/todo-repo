import makeElement from '../../utils/makeElement'
const directory = function (){
    const template1 = `
    <div id="tasklist" class="tasklist">
    <div id="tasks">
    <ul class="tasklist1">
     </ul>
     </div>
    <footer>

    </footer>
</div>`;
   

//  <header>
//         <h3>To-Do List</h3>
//     </header>
    return makeElement(template1)
}

export default directory
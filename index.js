document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('add');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');


    function removeTodo(index) {
        table.deleteRow(index);
    }



    function addTodo() {
        if (title.value === '' || description.value === '') {
            alert.classList.remove('d-none');
            alert.innerHTML = 'campos requeridos';
            return;
        }
        alert.classList.add('d-none');
        const row = table.insertRow();
        row.innerHTML = `
        <td>${title.value}</td>
        <td>${description.value}</td>
        <td class="text-center">
        <input type="checkbox">
        </td>
        <td class="text-right">
            <button class="btn btn-primary mb-1">
            <i class="fa fa-pencil"></i>
            </button>      
        </td>
        `;
        const removeBtn= document.createElement('button');
        removeBtn.classList.add('btn','btn-danger','mb-1');
        removeBtn.innerHTML='<i class="fa fa-trash"></i>';
        row.children[3].appendChild(removeBtn)




        removeBtn.onclick = function (e) {          

            const index = $(this).closest('tr').index() + 1;
            removeTodo(index);
           // $(this).closest('tr').remove();
            //console.log($(this).closest('tr').index());
           // removeTodo();
 

        }


    };
    btn.onclick = addTodo;
});

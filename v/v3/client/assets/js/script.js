$(() => {

    $.ajax({
        url: '/api/todos',
        method: 'GET'
    }).done((data) => {
        data.forEach((todo) => renderTodo(todo));
    });

    $('#addButton').on('click', () => {
        $.ajax({
            url: '/api/todos',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                description: $('#addTodo').val()
            })
        }).done((data) => {
            if(data.id){
                renderTodo(data);
            }
        });
    });
});

const renderTodo = (todo) => {
    const container = $('.content').eq(0);
    const todoContainer = $('<div class="todo"></div>');
    const descriptionContainer = $('<div></div>');
    const actionsContainer = $('<div></div>');
    const descriptionSpan = $(`<span>${todo.description}</span>`);
    const editButton = $('<span class="material-icons edit">edit</span>');
    const doneButton = $('<span class="material-icons done">done</span>');
    const restoreButton = $('<span class="material-icons done">restore</span>');
    const deleteButton = $('<span class="material-icons delete">delete</span>');
    const editInput = $('<input type="text">');
    const saveButton = $('<span class="material-icons edit">save</span>');

    if(todo.status === 'done'){
        descriptionSpan.css({textDecoration: 'line-through'});
        doneButton.hide();
        restoreButton.show();
    }else{
        restoreButton.hide();
    };


    actionsContainer.append(doneButton);
    actionsContainer.append(restoreButton);
    actionsContainer.append(deleteButton);


    descriptionContainer.append(descriptionSpan);
    descriptionContainer.append(editButton);
    descriptionContainer.append(editInput);
    descriptionContainer.append(saveButton);

    editInput.val(todo.description);
    editInput.hide();
    saveButton.hide();

    todoContainer.append(descriptionContainer);
    todoContainer.append(actionsContainer);

    container.append(todoContainer);

    deleteButton.on('click', () => {
        $.ajax({
            url: `/api/todos/${todo.id}`,
            method: 'DELETE'
        }).done((data) => {
            todoContainer.hide(500, () => {
                todoContainer.remove();
            });
        });
    });

    todoContainer.hide();
    todoContainer.show(500);

    doneButton.on('click', () => {
        $.ajax({
            url: `/api/todos/${todo.id}`,
            method: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify({
                status: 'done'
            })
        }).done((data) => {
            if(data.status === 'done'){
                descriptionSpan.css({textDecoration: 'line-through'});
                doneButton.hide();
                restoreButton.show();
            }
        });
    });

    restoreButton.on('click', () => {
        $.ajax({
            url: `/api/todos/${todo.id}`,
            method: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify({
                status: 'open'
            })
        }).done((data) => {
            if(data.status === 'open'){
                descriptionSpan.css({textDecoration: 'none'});
                doneButton.show();
                restoreButton.hide();
            }
        });
    });

    editButton.on('click', () => {
        editButton.hide();
        descriptionSpan.hide(10);
        editInput.show(10);
        saveButton.show(10);       
    });

    saveButton.on('click', () => {
        $.ajax({
            url: `/api/todos/${todo.id}`,
            method: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify({
                description: editInput.val()
            })
        }).done((data) => {
            if(data.description === editInput.val()){
                editButton.show();
                descriptionSpan.show(10);
                editInput.hide(10);
                saveButton.hide(10);

                descriptionSpan.html(data.description);
            }
        });
    });


}

let nextTodoId = 0
export const addTodo = text => {
    // console.log(text, 'text', nextTodoId++,);
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = filter => {
    console.log(filter, 'filter');
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = id => {
    console.log(id, 'id');
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

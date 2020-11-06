export const addTodo = () => ({
    type: 'ADD_TODO',
    payload: { text: 'Novo Todo' }
})

export const markAdCompleted = id => ({
    type: 'MARK_AS_COMPLETED',
    payload: { id }
})
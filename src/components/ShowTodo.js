

const ShowTodo = (props) => {



    const retrieveTodoList = props.TodoItems.map((TodoItem) => {
        return (
            <div>
                <h4>{TodoItem.name}</h4>

            </div>
        )
    })

    return (
        <>
            <h2>Todo List:-</h2>
            {retrieveTodoList}
        </>
    )
}

export default ShowTodo;
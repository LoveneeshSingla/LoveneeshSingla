

const ShowTodo = (props) => {


    const retrieveTodoList = props.TodoItems.map((TodoItem) => {
        return (
            <div style={{ "display": "flex" }}>
                <h4>{TodoItem.name}</h4>
                <h4>{TodoItem.id}</h4>

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
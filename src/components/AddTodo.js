import "./Components.css"
import React from "react";
class AddTodo extends React.Component {
    state = {
        name: "",
        id: Date.now() + Math.random(),
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "") {
            alert("Please add Todo")
            return
        }
        this.props.addTodoHandler(this.state);
        this.setState({ name: "" })
    }
    render() {
        return (
            <>
                <form onSubmit={this.add}>
                    <input type="text" placeholder="Enter Todo" style={{ padding: "5px 30px" }}
                        value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    <button className="addBtn">Add</button>
                </form>
            </>
        )
    }
}


export default AddTodo;
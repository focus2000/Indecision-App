class Todos extends React.Component {
  constructor(props) {
    super(props)


    this.handleSubmit = this.handleSubmit.bind(this)

    this.deleteTodo = this.deleteTodo.bind(this)

    this.state = {
      todos: ['make bed', 'be nice', 'practice make perfect']
    }
  }


  componentDidMount() {
    try {
      const json = localStorage.getItem('todos');
      const todos = JSON.parse(json);
      this.setState(() => ({ todos: todos }))

    } catch (e) {

    }

  }




  componentDidUpdate(prevProps, prevState) {
    const json = JSON.stringify(this.state.todos);
    localStorage.setItem('todos', json)
  }


  handleSubmit(todo) {
    this.setState((prevState) => ({
      todos: prevState.todos.concat(todo)
    }))

  }

  deleteTodo(todoToDelete) {
    try {

      this.setState((prevState) => ({
        todos: prevState.todos.filter((todo) => {
          return todoToDelete !== todo
        })
      }))

    } catch (e) {

    }




  }

  render() {
    return (
      <div>
        <TodoItem todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo handleSubmit={this.handleSubmit} />
      </div>
    )
  }


}

const TodoItem = (props) => {
  return (
    <div>
      {
        props.todos.map((todo) =>
          <li key={todo}>


            {todo}
            <button onClick={(e) => { props.deleteTodo(todo) }}>X</button>

          </li>
        )
      }
    </div>
  )
}


class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      error: undefined
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    const todo = e.target.elements.todo.value.trim();
    const error = this.props.deleteTodo(todo);

    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = '';
    }

    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="todo" />
            <button>Add</button>
          </form>
        </div>
      )
    }
  }






  ReactDOM.render(<Todos />, document.getElementById('app'));
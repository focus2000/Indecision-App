class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleIncrease = this.handleIncrease.bind(this)

    this.handleDecrease = this.handleDecrease.bind(this)

    this.handleReset = this.handleReset.bind(this)

    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    try {
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount, 10);
      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }

    } catch (e) {

    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }
  handleIncrease() {


    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
    // this.setState((prevState) => ({ count: prevState.count + 1 }))

  }

  handleDecrease() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  handleReset() {
    this.setState((prevState) => {
      return {
        count: 0
      }
    })
  }
  render() {
    return (

      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleIncrease}>Increament +</button>
        <button onClick={this.handleDecrease}>Decreament -</button>
        <button onClick={this.handleReset}>Reset</button>

      </div>
    )
  }




}

ReactDOM.render(<Counter />, document.getElementById('app'));

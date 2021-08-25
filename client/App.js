import TodoList from './TodoList.js';
​
export default class App extends React.Component {
  //BIRTH (Part 1)
  constructor(props) {
    super(props);
    this.state = {
      todos: ['wash the dog', 'wash the cat', 'wash the car'],
      numOfTasks: 0,
      value: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //BIRTH (part 3)
  componentDidMount(){
    this.setState({
      numOfTasks: this.state.todos.length,
    })
  }

  //GROWTH (part 1)
  // componentDidUpdate(prevprops,prevstate,){
  //   //this would be for when state and props have changed and we need to make a new request to an API...
  //   // if (prevState.todos !== this.state.todos){
  //   //   ajax.request
  //   // }
  // }

  //DEATH (part 3)
  //componentDidUnmount(){
    // this would be to capture any of your state or props before losing it when you've removed an element or component
  //}
​
  handleChange(event){
    this.setState({
      value: event.target.value,
    })
  }
​
  handleSubmit(event){
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos,this.state.value],
      value: '',
    })
  }
  //BIRTH (part 2) & GROWTH (part 2)
  render(){
    return(
      <div>
        <h2>Pingping's Todo List!</h2>
        <h5>There are {this.state.numOfTasks} todos to do.</h5>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
          <li>{this.state.todos[3]}</li>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>What do I need to do today?</label>
          <input type='text' placeholder='Submit more todos' value={this.state.value} onChange={() => {this.handleChange(event)}}></input>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    )
  }
}
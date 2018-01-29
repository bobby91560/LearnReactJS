import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class InputCompteur extends React.Component {

  constructor(props) {
    super(props);
    this.state =  { title: "Mon titre par défaut" };
    this.changeValueInput = this.changeValueInput.bind(this);
  }

  changeValueInput(event){
    this.props.onChangeTitle(event.target.value);
  }

  render() {
    return (
      <div className="input">
        <form>
          <input type="text" onChange={this.changeValueInput}/>
        </form>
      </div>
    );
  }
}


class Title extends React.Component {

  render() {
    return (
      <div className="allo">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class App extends React.Component {

  state = { title: "Default's Title"};

  changeTitle = (value) => {
    this.setState({ title: value});
  }

  render() {
    return(
      <div className="global">
        <InputCompteur onChangeTitle={this.changeTitle}/>
        <Title title={this.state.title}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

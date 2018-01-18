import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class InputCompteur extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {title: "Mon titre par défaut"};
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle(event){
    this.setState({title: event.target.value});
  }

  render() {
    return (
      <div className="input">
        <form>
          <input type="text" value={this.state.title} onChange={this.changeTitle}/>
        </form>
        <Title title={this.state.title}/>
      </div>
    );
  }
}


class Title extends React.Component {

  constructor(props) {
    super(props);
    this.state = {title: props.title}
  }

  render() {
    return (
      <div className="global">
        <div className="allo">
         <h1>{this.state.title}</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<InputCompteur />, document.getElementById('root'));

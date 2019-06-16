import React from 'react';
import './App.css';
import NavBar from'./components/navBar/NavBar';
import Tabs from './components/tabs/Tabs';

class App extends React.Component {
  // state = {
  //   apiKey: 'YYBOLHhzDP8ArfpU4Li4OJqswsKIQGRf',
  //   apiUrl: 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=',
  //   articles: []
  // }
  // componentDidMount(){
  //   fetch(this.state.apiUrl + this.state.apiKey)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       this.setState({articles: JSON.stringify(data.results[0])});
  //       console.log(this.state.articles);
  //     });
  // }
  render(){
    return (
      <div className="App">
        <NavBar />
        <Tabs />
      </div>
    );
  }
}

export default App;

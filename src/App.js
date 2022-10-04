import { Component } from 'react';
import NavBar from './components/NavBar';
import Preview from './components/Preview';
import FillDetails from './components/FillDetails';
class App extends Component{
  constructor() {
    super();
    this.state = {
      inPreview: false,
    }
  }

  handlePreviewChange = (e) => {
    this.setState({
      inPreview: !this.state.inPreview,
    });
  }

  render() {
    let navbar = (
      <NavBar 
        inPreview={this.state.inPreview} 
        handlePreviewChange={this.handlePreviewChange} 
      />);

    if (this.state.inPreview) {
      return (
        <div id="app">
          {navbar}
          <Preview />
        </div>
      )
    }  
    else {
      return (
        <div id="app">
          {navbar}
          <FillDetails />
        </div>
      );
    }
  }
}


export default App;

import { Component } from 'react';
import NavBar from './components/NavBar';
import Preview from './components/Preview';
import FillDetails from './components/FillDetails';
class App extends Component{
  constructor() {
    super();
    this.state = {
      inPreview: false,
      personal: null,
      academic: null,
      professional: null,
    }
  }

  handlePreviewChange = (e) => {
    this.setState({
      inPreview: !this.state.inPreview,
    });
  }

  setPersonal = (personObject) => {
    this.setState({
        personal: personObject,
    });
  }

  setAcademic = (academicObject) => {
    this.setState({
        academic: academicObject,
    });
  }

  setProf = (profObject) => {
    this.setState({
        professional: profObject,
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
          <FillDetails 
            setPersonal={this.setPersonal} 
            setAcademic={this.setAcademic}
            setProf={this.setProf}
            personal={this.state.personal} 
            academic={this.state.academic}
            prof={this.state.professional}
          />
        </div>
      );
    }
  }
}


export default App;

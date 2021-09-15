import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import allbeast from './components/data.json'
import SelectedBeast from './components/SelectedBeast';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      allbeast: allbeast,
      show: false,
      dataClicked: {}
    }
  }
  
  
  showpost =(title)=>{
    let dataClicked = allbeast.find(data => {
      if (data.title === title) {
        return data;
      }
    })
    this.setState({
      show : true,
      dataClicked: dataClicked
    })
  }
  
  handleClose = ()=>{
    this.setState({
      show : false
    })
  }
  
  
  
  
  
  
  render() {
    return (
      <>
        <Header />

            <Main allbeast ={this.state.allbeast} showpost={this.showpost} />
            <SelectedBeast dataClicked={this.state.dataClicked} handleClose={this.handleClose} show={this.state.show}/>
         
        <Footer />
      </>
    )
  }
}

export default App;

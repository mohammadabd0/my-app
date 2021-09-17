import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import allbeast from './components/data.json'
import SelectedBeast from './components/SelectedBeast';
import Form from 'react-bootstrap/Form';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      allbeast: allbeast,
      show: false,
      dataClicked: {},
      numumberhoners : 0,
      sendbeast: allbeast
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
  
  filterArray = (num)=>{
    let filterarr = allbeast.filter(element=>{
      if(num===0){
        return element;
      }else{
        if(element.horns ===num){
          return true;
        }
        else{
          return false;
        }
      }
    });
    return filterarr;
 
  }
  
  eventhandler = async (event) =>{
    event.preventDefault();
    await this.setState({
      numumberhoners: event.target.value,
      sendbeast : this.filterArray(Number(event.target.value))
    });
    console.log(this.state.sendbeast);
  };
  
  
  
  render() {
    return (
      <>
        <Header />
        <Form.Select name="hor" aria-label="Default select example" onChange={this.eventhandler}>
  <option>Open this select menu</option>
  <option value="0">all</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="100">wow...</option>
</Form.Select>  
      
            <Main allbeast ={this.state.allbeast} showpost={this.showpost} allbeast={this.state.sendbeast}  />
            <SelectedBeast dataClicked={this.state.dataClicked} handleClose={this.handleClose} show={this.state.show}/>
        <Footer />
      </>
    )
  }
}

export default App;

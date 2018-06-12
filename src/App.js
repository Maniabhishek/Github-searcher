import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Auth0Lock from 'auth0-lock';

import Headers from './Components/Headers'
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      idToken:'',
      profile:{}
    };
  }

  static defaultProps = {
  clientID:'bpgnmN0gsERXMq9TT6dhBSMjTuHjnApe',
  domain:'mani9798.auth0.com'
}
componentWillMount(){
  this.lock = new Auth0Lock(this.props.clientID, this.props.domain);
  this.lock.on('authenticated',(authResult) => {
   //console.log(authResult);
   this.lock.getProfile(authResult.idToken,(error,profile)=>{
     if(error){
       console.log(error);
       return;
     }
     console.log(profile);
   })
  });

}


showLock(){
  this.lock.show();
}
  render() {
    return (
      <div className="App">
        <Headers
           onLogin={this.showLock.bind(this)}
          />
        <Header />
      </div>
    );
  }
}

export default App;

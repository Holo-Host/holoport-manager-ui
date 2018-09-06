import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">

        <div className="login">
          <h1>Holoport Manager</h1>
          <form className="form" method="post" action="">
            <p className="field">
              <input type="text" name="login" placeholder="Username or email"/>
              <i className="fa fa-user"/>
            </p>
            <p className="field">
              <input type="password" name="password" placeholder="Password"/>
              <i className="fa fa-lock"/>
            </p>
            <p className="submit">
              <input type="submit" name="commit" value="Login"/>
            </p>
          </form>
        </div>

      </div>
    );
  }
}

export default App;

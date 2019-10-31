import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Login></Login>>
      </div>
    </Provider>
  );
};

export default App;

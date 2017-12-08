import React, { Component } from 'react';

import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1>Recipe Trunk</h1>
        </header>
        <RecipeList />
        <RecipeDetail />
      </div>
    );
  }
}

export default App;

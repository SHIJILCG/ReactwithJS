import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import PostList from './Component/PostList';
import PostForm from './Component/PostForm';

export default class App extends Component {
  render() {
    return (
      <div>
        
        {/* <PostList /> */}
        <PostForm />
      </div>
    )
  }
}


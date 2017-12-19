import React, { Component } from 'react';
import Title from './title';
import Plot from './plot';

export default class App extends Component {
  render() {
    return (
      <main>
        <Title title='Data / React Test' />
        <Plot />
      </main>
    );
  }
}

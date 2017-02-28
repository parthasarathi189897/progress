import React from 'react';
import ReactDOM from 'react-dom';
import PageBody from './PageBody';
const App = (props) => {
  return (<section>
    <PageBody/>
  </section>);
}

/**
 * Reactdom to render the component, Here App is the entry component
 */
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
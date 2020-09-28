import React, { Component } from 'react';
import { withRouter} from "react-router-dom"
import './index.css'

class Layout extends Component {


  render() {
    const { headerElem, assideElem, children } = this.props
    return (
      <div className="container">
        <header className="header">
          {headerElem}
        </header>
        <section className="sect">
          <aside className="asside">
            {assideElem}
          </aside>
          <main className="main">
            {children}
          </main>
        </section>
      </div>
    );
  }
}

export default Layout;

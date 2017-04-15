import React from 'react';

import './App.css';
import Logo from './Logo';
import NavItem from './NavItem';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      navItems: [
        'Zeroth', 'First', 'Second', 'Third', 'Fourth', 'Fifth',
        'Sixth', 'Seventh', 'Eight', 'Ninth', 'Tenth'
      ],
      indexOfSelectedNavItem: 0
    };
    this.changeNavItem = this.changeNavItem.bind(this);
  }

  changeNavItem(e) {
    const indexOfNextNavItem = parseInt(e.target.id, 10);
    this.setState({
      indexOfSelectedNavItem: indexOfNextNavItem
    }, this.scrollNav);
  }

  scrollNav() {
    const {indexOfSelectedNavItem} = this.state;
    const navList = this.refs.navList;
    const selectedNavItem = navList.children[indexOfSelectedNavItem];

    const destination = selectedNavItem.offsetLeft
                         - window.innerWidth/2
                         + selectedNavItem.offsetWidth/2;
    const distance = destination - navList.scrollLeft;

    let scrollCount = 0;
    const scrollInterval = setInterval(() => {
      navList.scrollLeft += distance/5;
      scrollCount++;
      if (scrollCount >= 5) { clearInterval(scrollInterval); }
    }, 16);
  }

  render() {
    const renderNavItems = this.state.navItems.map((item, index) => {
      return (
        <NavItem
          key={item}
          id={index}
          isSelected={this.state.indexOfSelectedNavItem === index}
          handleClick={this.changeNavItem}
        >
          {item}
        </NavItem>
      );
    });

    return (
      <main className="app">

        <nav className="nav">
          <Logo />
          <ul className="nav__list" ref="navList">
            {renderNavItems}
          </ul>
        </nav>

        <section className="content">
          <div className="card">
            <h2 className="card__title">.</h2>
            <div className="card__graph">.</div>
          </div>
        </section>

      </main>
    );
  }

}

export default App;

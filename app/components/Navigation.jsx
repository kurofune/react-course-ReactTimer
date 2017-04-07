const React = require('react');
const { Link, IndexLink } = require('react-router');

const Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Countdown</IndexLink>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by Nate Gross
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;

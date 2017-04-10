const React = require('react');
const Clock = require('Clock');

const Countdown = React.createClass({
  render: function () {
    return (
      <Clock totalSeconds={129} />
    );
  },
});

module.exports = Countdown;

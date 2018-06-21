var Footer = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'footer'},
      React.createElement(Counter),
      React.createElement(Counter),
      React.createElement(Counter)
      )
    )
  }
});

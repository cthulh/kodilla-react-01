var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'http://icons.veryicon.com/png/System/nDroid/contacts%20blue%20glow.png'
        }),
        React.createElement('div',{className: 'contactInfo'},
          React.createElement('p', {className: 'contactLabel'},
            React.createElement('span', {className: 'bold'}, 'First name: '), this.props.item.firstName),
          React.createElement('p', {className: 'contactLabel'},
            React.createElement('span', {className: 'bold'}, 'Last name: '), this.props.item.lastName),
          React.createElement('a', {className: 'contactEmail', href: `mailto:${this.props.item.email}`},
            this.props.item.email
          )
        )
      )
    )
  },
});

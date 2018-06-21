var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'http://icons.veryicon.com/png/System/nDroid/contacts%20blue%20glow.png'} />
        <div className={'contactInfo'}>
          <p className={'contactLabel'}>
            <span className={'bold'}>'First name: '</span>{this.props.item.firstName}
          </p>
          <p className={'contactLabel'}>
            <span className={'bold'}>'Last name: '</span>{this.props.item.lastName}
          </p>
          <a className={'contactEmail'} href={`mailto:${this.props.item.email}`}>
            {this.props.item.email}
          </a>
        </div>
      </div>
    )
  }
});

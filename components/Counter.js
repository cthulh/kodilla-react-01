var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    componentDidMount: function() {
      console.log(`Component has been mounted correctly with state of ${JSON.stringify(this.state)}`);
    },
    componentDidUpdate: function() {
      console.log(`Component updated correctly with state of ${JSON.stringify(this.state)}`);
    },
    componentWillUnmount: function() {
      console.log(`Component has been unmounted correctly with state of ${JSON.stringify(this.state)}`);
    },
    render: function() {
        return React.createElement('div', {className: 'counterPanel'},
            React.createElement('img', {className: 'counterIncremental', onClick: this.increment, src: 'http://icons.veryicon.com/png/System/iVista%202%20OS%20X%20Icons/Plus.png'}),
            React.createElement('img', {className: 'counterDecremental', onClick: this.decrement, src: 'http://icons.veryicon.com/png/System/iVista%202%20OS%20X%20Icons/Minus.png'}),
            React.createElement('span', {className: 'counterState'}, this.state.counter),
        )
    }
});

var FirstCounter = React.createClass({
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

    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {className: 'counterButton', onClick: this.increment}, 'Dodaj 1: ' ),
        React.createElement('button', {className: 'counterButton', onClick: this.decrement}, 'Odejmij 1: ' ),
        React.createElement('p', {className: 'counter'}, 'Wynik: ' + this.state.counter),
        );
    }
});

var element = React.createElement(FirstCounter);
ReactDOM.render(element, document.getElementById('first-app'));

var SecondCounter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

   addTwo: function() {
        this.setState({
            counter: this.state.counter + 2
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {className: 'counterButton', onClick: this.addTwo}, 'Dodaj 2: ' ),
        React.createElement('p', {className: 'counter'}, 'Wynik: ' + this.state.counter),
        );
    }
});

var element = React.createElement(SecondCounter);
ReactDOM.render(element, document.getElementById('second-app'));
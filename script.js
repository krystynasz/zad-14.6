var FirstCounter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0,
            data: "Pierwszy stan",
        };
    },

    getDefaultProps: function() {
        console.log("getDefaultProps - pozwala mi ustawić wartości domyślne, które są wykorzystywane w sytuacjach, gdy użytkownik nie podaje własnych, np. gdy jest formularz, a użytkownik nie podaje nic w name");
        return {
          name: 'anonimowy gracz',
        };
      },
      componentWillMount:  function() {
        console.log("componentWillMount - nie proponuję nic, bo według dokumentacji to już jest przestarzałe: https://reactjs.org/docs/react-component.html#unsafe_componentwillmount")
      },

      componentDidMount:  function() {
        console.log("componentDidlMount - pozwala zmieniać stan po utworzeniu komponentu. Jeśli dobrze rozumiem, to się przydaje, jeśli chcę pobrać jakieś dane z serwera - mogę wrzucić jakiś placeholder w getInitialState, a potem podstawić pod niego treść pobraną z serwera")
        this.setState({
            data: "Stan zmieniony przez componentDidMount"
        });
    },

    componentWillReceiveProps: function() {
        console.log("componentWillReceiveProps - nie proponuję nic, bo według dokumentacji to już jest przestarzałe: https://reactjs.org/docs/react-component.html#unsafe_componentwillmount")
      },
     
    shouldComponentUpdate: function() {
        console.log("shouldComponentUpdate - mogę uzależnić renderowanie od tego, jaką wartość ma okreslony props lub stan")
        if (this.state.data === "Pierwszy stan") {
            return true;
          }
    },
    
    componentWillUpdate: function() {
        console.log("componentWillUpdate - nie proponuję nic, bo według dokumentacji to już jest przestarzałe:   https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate")
      },
  
      componentDidUpdate: function() {
        console.log("componentDidUpdate - wyczytałam, że to się przydaje, jeśli stosujemy React łącznie z innymi bibliotekami, które wykonują operacje na DOM. Wg stackoverflow: I think the most common use-case is when you have other libraries (jQuery, D3...) that work directly on the DOM, coupled together with React. In such scenarios, if the other library needs to perform DOM transformations, you should use componentDidUpdate to ensure React shadow DOM has been flushed to the real DOM. ")
      },

      componentWillUnmount: function() {
        console.log("componentWillUnmount - mogę w ten sposób usunąć eventListener lub np. wyzerować licznik https://stackoverflow.com/questions/40760308/reactjs-how-to-properly-use-componentwillunmount ")
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
        console.log(this.state.data),
        );
    },
    

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

setTimeout(function(){ 
    ReactDOM.unmountComponentAtNode(document.getElementById('first-app')); 
    console.log("Dorzuciłam unmount, żeby przetestować componentWillUnmount. I udało mi się nie umrzeć z nudów, robiąc to ćwiczenie :D")
}, 5000);

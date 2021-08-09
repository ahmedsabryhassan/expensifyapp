'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.addOne = _this.addOne.bind(_this);
        _this.minusOne = _this.minusOne.bind(_this);
        _this.Reset = _this.Reset.bind(_this);
        _this.state = {
            count: props.count
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('count');
                var count = JSON.parse(json);
                if (count) this.setState(function () {
                    return { count: count };
                });
            } catch (e) {
                // do nothing
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) {
                var json = JSON.stringify(this.state.count);
                localStorage.setItem('count', json);
            }
        }
    }, {
        key: 'addOne',
        value: function addOne() {
            //prevstate hena al paramter byb2a al object al 25yr al mogod fy al class men al state we 22dr a3ml access l 2y haga 3nado we a8yerha
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'minusOne',
        value: function minusOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'Reset',
        value: function Reset() {
            this.setState(function (prevState) {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.addOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.minusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.Reset },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

Counter.defaultProps = {
    count: 0
};
ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

/*
let count = 2;

const addOne = () =>{
    count++;
    Starter();
}
const minusOne = () =>{
    count--;
    Starter();
}
const Reset = () =>{
    count=0;
    Starter();
}


const AppRoot = document.getElementById("app");
const Starter = () =>{
    const templete =(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );   
    ReactDOM.render(templete,AppRoot);
}
Starter(); 
*/

/*
    // creating object in Js
    const ahmed = {
        name:"Ahmed",
        age:18,
        leve:50,
        location:"egypt"
    }
    // creating a function in Js
    function getLocation(loco){
        if(loco!=null)
            return <h1>Location: {loco}</h1> ;
        else
            return <h1>Location: unknown</h1> ;
    }
    // for logical and we got statment && what happens if statment true
    const templete = (
        <div>
            <h1>name: {ahmed.name?ahmed.name:"anonymous"}</h1>
            {ahmed.age>=18 && <h1>Age: {ahmed.age}</h1>}
            <h1>Level: {ahmed.leve}</h1>
            {getLocation(ahmed.location)}
        </div> 
    );
*/

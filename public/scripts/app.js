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

        _this.OnPlusOne = _this.OnPlusOne.bind(_this);
        _this.OnMinusOne = _this.OnMinusOne.bind(_this);
        _this.OnReset = _this.OnReset.bind(_this);
        _this.state = { //this is predifined, you cannot change `state` name
            count: 0,
            age: 22,
            iiii: 42
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var raw_count = localStorage.getItem('Count');
            var num = parseInt(raw_count, 10);
            if (!isNaN(num)) {
                this.setState(function () {
                    return { count: num };
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) {
                localStorage.setItem('Count', this.state.count);
                console.log('componentDidUpdate ');
            }
        }
    }, {
        key: 'OnPlusOne',
        value: function OnPlusOne() {
            this.setState(function (prevState) {
                return { //no need to change other attributes that dont change 
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'OnMinusOne',
        value: function OnMinusOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'OnReset',
        value: function OnReset() {
            //newer approach
            this.setState(function () {
                return {
                    count: 0
                };
            });

            //old approach
            //***************************************************************************/
            //***************************************************************************/
            //***************************************************************************/
            //BIG NOTICE 
            //calls to setState are asynchronse, so there is no guarantee for two sequential setState 
            //calls to be called in order. 
            //try this, it is not reseted, incremented instead, to prevent this unusual behavior, use newer approach
            //cause it passes prevState to setState()
            //
            //this.setState({ 
            //    count: 0
            //});
            //this.setState({ 
            //    count: this.state.count + 1
            //});
            //***************************************************************************/
            //***************************************************************************/
            //***************************************************************************/
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
                    ' Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.OnPlusOne },
                    '+1 '
                ),
                React.createElement(
                    'button',
                    { onClick: this.OnMinusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.OnReset },
                    'reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('appdiv'));

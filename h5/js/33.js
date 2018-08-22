(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"289":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),l=n(45),o=_interopRequireDefault(n(46)),i=_interopRequireDefault(n(52));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(290);var u=function(e){function AtInput(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtInput),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtInput.__proto__||Object.getPrototypeOf(AtInput)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtInput,r.default.Component),a(AtInput,[{"key":"handleInput","value":function handleInput(e){var t;(t=this.props).onChange.apply(t,[e.target.value].concat(Array.prototype.slice.call(arguments)))}},{"key":"handleFocus","value":function handleFocus(e){var t;(t=this.props).onFocus.apply(t,[e.target.value].concat(Array.prototype.slice.call(arguments)))}},{"key":"handleBlur","value":function handleBlur(e){var t;(t=this.props).onBlur.apply(t,[e.target.value].concat(Array.prototype.slice.call(arguments)))}},{"key":"handleConfirm","value":function handleConfirm(e){var t;(t=this.props).onConfirm.apply(t,[e.target.value].concat(Array.prototype.slice.call(arguments)))}},{"key":"clearValue","value":function clearValue(){var e;(e=this.props).onChange.apply(e,[""].concat(Array.prototype.slice.call(arguments)))}},{"key":"handleClickErrIcon","value":function handleClickErrIcon(){var e;(e=this.props).onErrorClick.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.name,n=e.type,a=e.cursorSpacing,o=e.confirmType,u=e.maxlength,c=e.disabled,s=e.border,f=e.title,p=e.editable,d=e.error,h=e.clear,m=e.placeholder,b=e.autoFocus,y=e.value,v=u,_=n,g=c,w=["at-input__container"];d&&w.push("at-input--error"),c&&w.push("at-input--disabled"),"phone"===n&&(v=11,_="number"),!1===c&&!1===p&&(g=!0);var E="";return s||(E="border: none;"),r.default.createElement(l.View,{"className":"at-input","style":E},r.default.createElement(l.View,{"className":w},f?r.default.createElement(l.Label,{"className":"at-input__title","for":t},f):null,r.default.createElement(l.Input,{"className":"at-input__input","id":t,"type":_,"placeholderClass":"placeholder","placeholder":m,"cursorSpacing":a,"maxlength":v,"autoFocus":b,"value":y,"confirmType":o,"disabled":g,"onInput":this.handleInput.bind(this),"onChange":this.handleInput.bind(this),"onFocus":this.handleFocus.bind(this),"onBlur":this.handleBlur.bind(this),"onConfirm":this.handleConfirm.bind(this)}),h&&y?r.default.createElement(l.View,{"className":"at-input__icon","onTouchStart":this.clearValue.bind(this)},r.default.createElement(i.default,{"value":"close-circle","color":"#ccc","size":"15"})):null,d?r.default.createElement(l.View,{"className":"at-input__icon","onTouchStart":this.handleClickErrIcon.bind(this)},r.default.createElement(i.default,{"value":"alert-circle","color":"#FF4949","size":"15"})):null,r.default.createElement(l.View,{"className":"at-input__children"},this.props.children)))}}]),AtInput}(),c=function defaultFunc(){};u.defaultProps={"value":"","name":"","placeholder":"","title":"","cursorSpacing":50,"confirmType":"完成","maxlength":140,"type":"text","disabled":!1,"border":!0,"editable":!0,"error":!1,"clear":!1,"autoFocus":!1,"onChange":c,"onFocus":c,"onBlur":c,"onConfirm":c,"onErrorClick":c},u.propTypes={"value":o.default.oneOfType([o.default.string,o.default.number]),"name":"","placeholder":o.default.string,"title":o.default.string,"confirmType":o.default.string,"cursorSpacing":o.default.number,"maxlength":o.default.number,"type":o.default.string,"disabled":o.default.bool,"border":o.default.bool,"editable":o.default.bool,"error":o.default.bool,"clear":o.default.bool,"backgroundColor":o.default.string,"autoFocus":o.default.bool,"onChange":o.default.func,"onFocus":o.default.func,"onBlur":o.default.func,"onConfirm":o.default.func,"onErrorClick":o.default.func},t.default=u},"290":function(e,t,n){},"292":function(e,t,n){e.exports=n.p+"static/images/verification_code.png"},"293":function(e,t,n){},"39":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),l=_interopRequireDefault(n(0)),o=n(45),i=_interopRequireDefault(n(289)),u=_interopRequireDefault(n(84)),c=_interopRequireDefault(n(292)),s=_interopRequireDefault(n(49));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(293);var f=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"value1":"","value2":"","value3":"","value4":"","value5":"","value6":"","value7":"","value8":"","value9":"","value10":"","value13":"","value14":"","value15":"","disabled":!1,"second":60},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,l.default.Component),a(Index,[{"key":"showTipText","value":function showTipText(){return this.state.disabled?this.state.second+"s后重试":"发送验证码"}},{"key":"sendCode","value":function sendCode(){var e=this;if(!this.state.disabled){this.setState({"disabled":!0});var t=setInterval(function(){e.state.second>0?e.setState({"second":e.state.second-1}):(e.setState({"second":60,"disabled":!1}),clearInterval(t))},1e3)}}},{"key":"handleInput","value":function handleInput(e,t){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},e,t))}},{"key":"handleClick","value":function handleClick(){r.default.showToast({"title":"已发送验证码","icon":"success","duration":2e3})}},{"key":"onClickErrorIcon","value":function onClickErrorIcon(){r.default.showToast({"title":"请输入数字","icon":"success","duration":2e3})}},{"key":"render","value":function render(){return l.default.createElement(o.View,{"className":"page"},l.default.createElement(s.default,{"title":"Input 输入框"}),l.default.createElement(o.View,{"className":"doc-body"},l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"基础用法"),l.default.createElement(o.View,{"className":"panel__content no-padding"},l.default.createElement(o.View,{"className":"component-item"},l.default.createElement(u.default,null,l.default.createElement(i.default,{"name":"value1","title":"标准五个字","type":"text","placeholder":"标准五个字","value":this.state.value1,"onChange":this.handleInput.bind(this,"value1")}),l.default.createElement(i.default,{"name":"value2","title":"标题实在特别长就换行","placeholder":"其他列保持正常间距","value":this.state.value2,"onChange":this.handleInput.bind(this,"value2")}),l.default.createElement(i.default,{"name":"value3","border":!1,"placeholder":"无标题","value":this.state.value3,"onChange":this.handleInput.bind(this,"value3")}))))),l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"输入框类型"),l.default.createElement(o.View,{"className":"panel__content no-padding"},l.default.createElement(o.View,{"className":"component-item"},l.default.createElement(u.default,null,l.default.createElement(i.default,{"name":"value4","title":"文本","type":"text","placeholder":"单行文本","value":this.state.value4,"onChange":this.handleInput.bind(this,"value4")}),l.default.createElement(i.default,{"name":"value5","title":"数字","type":"number","placeholder":"请输入数字","value":this.state.value5,"onChange":this.handleInput.bind(this,"value5")}),l.default.createElement(i.default,{"name":"value6","title":"密码","type":"password","placeholder":"密码不能少于10位数","value":this.state.value6,"onChange":this.handleInput.bind(this,"value6")}),l.default.createElement(i.default,{"name":"value7","title":"身份证","type":"idcard","placeholder":"身份证号码","value":this.state.value7,"onChange":this.handleInput.bind(this,"value7")}),l.default.createElement(i.default,{"name":"value8","title":"小数","type":"digit","placeholder":"请输入小数","value":this.state.value8,"onChange":this.handleInput.bind(this,"value8")}),l.default.createElement(i.default,{"name":"value9","border":!1,"title":"手机号码","type":"phone","placeholder":"手机号码","value":this.state.value9,"onChange":this.handleInput.bind(this,"value9")}))))),l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"状态"),l.default.createElement(o.View,{"className":"panel__content no-padding"},l.default.createElement(o.View,{"className":"component-item"},l.default.createElement(u.default,null,l.default.createElement(i.default,{"name":"value10","disabled":!0,"title":"禁用","type":"text","placeholder":"禁止输入","value":this.state.value10,"onChange":this.handleInput.bind(this,"value10")}),l.default.createElement(i.default,{"name":"value11","error":!0,"title":"出现错误","type":"text","placeholder":"点击按钮触发回调","value":this.state.value11,"onChange":this.handleInput.bind(this,"value11"),"onErrorClick":this.onClickErrorIcon.bind(this)}),l.default.createElement(i.default,{"name":"value12","editable":!1,"title":"不可编辑","type":"text","placeholder":"不可编辑","value":"不可编辑的内容"}),l.default.createElement(i.default,{"name":"value13","border":!1,"clear":!0,"title":"清除按钮","type":"text","placeholder":"点击清除按钮清空内容","value":this.state.value13,"onChange":this.handleInput.bind(this,"value13")}))))),l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"自定义右边栏"),l.default.createElement(o.View,{"className":"panel__content no-padding"},l.default.createElement(o.View,{"className":"component-item"},l.default.createElement(u.default,null,l.default.createElement(i.default,{"title":"验证码","type":"text","maxlength":"4","clear":!0,"placeholder":"验证码","value":this.state.value14,"onChange":this.handleInput.bind(this,"value14")},l.default.createElement(o.Image,{"src":c.default})),l.default.createElement(i.default,{"border":!1,"type":"phone","clear":!0,"placeholder":"请输入手机号码","value":this.state.value15,"onChange":this.handleInput.bind(this,"value15")},l.default.createElement(o.View,{"style":{"color":this.state.disabled?"#FF4949":"","fontSize":"12px","width":"90px"},"onClick":this.sendCode.bind(this)},this.showTipText()))))))))}}]),Index}();t.default=f},"46":function(e,t,n){e.exports=n(47)()},"47":function(e,t,n){"use strict";var a=n(48);function emptyFunction(){}e.exports=function(){function shim(e,t,n,r,l,o){if(o!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"48":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"49":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(1),l=(_interopRequireDefault(r),_interopRequireDefault(n(0))),o=_interopRequireDefault(n(46)),i=n(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(50);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.Component),a(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return l.default.createElement(i.View,{"className":"doc-header"},l.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":o.default.string}},"50":function(e,t,n){},"52":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),l=_interopRequireDefault(n(46)),o=n(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(53);var i=function(e){function AtIcon(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtIcon),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtIcon.__proto__||Object.getPrototypeOf(AtIcon)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtIcon,r.default.Component),a(AtIcon,[{"key":"handleClick","value":function handleClick(){var e;(e=this.props).onClick.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.value,n=void 0===t?"":t,a={"fontSize":e.size+"px","color":e.color},l=["at-icon","at-icon-"+n];return r.default.createElement(o.Text,{"className":l,"style":a})}}]),AtIcon}();t.default=i,i.defaultProps={"color":"","size":"24","onClick":function onClick(){}},i.propTypes={"color":l.default.string,"size":l.default.oneOfType([l.default.string,l.default.number]),"onClick":l.default.func}},"53":function(e,t,n){},"84":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),l=n(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(85);var o=function(e){function AtForm(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtForm),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtForm.__proto__||Object.getPrototypeOf(AtForm)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtForm,r.default.Component),a(AtForm,[{"key":"render","value":function render(){return r.default.createElement(l.View,{"className":"at-form","style":this.props.style},this.props.children)}}]),AtForm}();o.defaultProps={"style":""},t.default=o},"85":function(e,t,n){}}]);
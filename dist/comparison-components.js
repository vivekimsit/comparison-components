module.exports=function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ComparisonBarTable=t.ComparisonTable=void 0;var a=r(13),o=n(a),l=r(9),s=n(l);t.ComparisonTable=o.default,t.ComparisonBarTable=s.default},function(e,t){e.exports=require("react")},function(e,t){"use strict";function r(e){return fetch(o+e,{method:"GET",headers:l})}function n(e,t,n){return r("/comparisons?source="+e+"&target="+t+"&amount="+n+"&includeGoogle=false")}function a(e,t){return r("/comparisons/providers?source="+e+"&target="+t)}Object.defineProperty(t,"__esModule",{value:!0}),t.comparisonsFor=n,t.providersFor=a;var o="https://api.transferwise.com/v1",l={"Content-type":"application/json",Authorization:"Basic YjRhODM3MWUtZTE3Yi00NTIzLWE2MDgtMGMwNDFmYTBiOTRlOjEwMjIxNDFhLTliZGMtNDNkZS1hZGU0LWVlMzQ4OGNiNmNhZQ=="}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),u=n(i),c=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"addZero",value:function(e){return parseInt(e,10)<10?"0"+e:e}},{key:"render",value:function(){var e=new Date(this.props.date);return u.default.createElement("span",null,e.getFullYear()+"-"+this.addZero(e.getMonth()+1)+"-"+this.addZero(e.getDate()),this.props.time?u.default.createElement("span",null," at ",this.addZero(e.getUTCHours()),":",this.addZero(e.getUTCMinutes())):null)}}]),t}(i.Component);t.default=c},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),u=n(i),c=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"loader"},u.default.createElement("div",{className:"loader-spinner"}),u.default.createElement("div",{className:"loader-flag"},u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"52",height:"52",viewBox:"-2 -2 56 56"},u.default.createElement("polygon",{className:"loader-flag-stroke",stroke:"#00B9FF",strokeWidth:"2",strokeLinejoin:"miter",strokeLinecap:"round",strokeMiterlimit:"10",strokeDasharray:"300",strokeDashoffset:"300",fill:"none",points:"24.6,27.3 0,27.3 14.3,13.7 6.1,0 48.2,0 26.3,52 19.5,52 39.2,5.5 16.8,5.5 21.6,13.6 13.4,21.8 27,21.8"})),u.default.createElement("svg",{className:"loader-flag-fill",xmlns:"http://www.w3.org/2000/svg",width:"52",height:"52",viewBox:"0 2 52 48"},u.default.createElement("polygon",{fill:"#00B9FF",points:"6.1,0 14.3,13.7 0,27.3 24.6,27.3 27,21.8 13.4,21.8 21.6,13.6 16.8,5.5 39.2,5.5 19.5,52 26.3,52 48.2,0 "}))))}}]),t}(i.Component);t.default=c},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),u=n(i),c=r(4),d=n(c),f=r(2),p=r(3),h=n(p),m=function(e){function t(){var e,r,n,l;a(this,t);for(var s=arguments.length,i=Array(s),u=0;u<s;u++)i[u]=arguments[u];return r=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={loading:!1,error:!1,providers:[]},n.clear=function(e){e.preventDefault(),n.setState({providers:[]})},n.loadProviders=function(e){e.preventDefault(),n.setState({loading:!0}),(0,f.providersFor)(n.props.source,n.props.target).then(function(e){return e.json()}).then(function(e){n.setState({providers:e.providers,loading:!1})}).catch(function(e){throw n.setState({error:!0,loading:!1}),e})},l=r,o(n,l)}return l(t,e),s(t,[{key:"renderData",value:function(){return this.state.loading?u.default.createElement("div",{className:"text-xs-center m-t-3"},u.default.createElement(d.default,null)):this.state.providers.length>0?u.default.createElement("div",{className:"small m-t-2"},u.default.createElement("p",null,"Price comparisons are based on data obtained online through the relevant providers’ website(s). The name of these providers, the date and time of data collection are listed in table below."),u.default.createElement("table",{className:"table table-condensed table-striped"},u.default.createElement("thead",null,u.default.createElement("tr",null,u.default.createElement("td",null,"Provider"),u.default.createElement("td",null,"Currency route"),u.default.createElement("td",null,"Transfer threshold"),u.default.createElement("td",null,"Date and time of collection"))),u.default.createElement("tbody",null,this.state.providers.map(function(e){return Object.keys(e.routes).map(function(t){return Object.keys(e.routes[t]).map(function(r){return e.routes[t][r].recordedAmounts.map(function(n){return u.default.createElement("tr",null,u.default.createElement("td",null,e.name),u.default.createElement("td",null,t," to ",r),u.default.createElement("td",null,n.amount," ",t),u.default.createElement("td",null,u.default.createElement(h.default,{date:n.dateCollected,time:!0})))})})})}))),u.default.createElement("p",null,"The comparison shows the overall costs to a consumer and the amount received by the recipient of sending the specified amount internationally in the currency selected using different providers."),u.default.createElement("p",null,"The upfront cost represents the advertised fee charged by the relevant provider for using their service. The hidden cost represents the cost that is concealed in the exchange rate given by the provider compared to the mid-market rate (provided by Reuters at the time of data collection from the relevant provider) multiplied by the amount sent. In simple terms:"),u.default.createElement("p",null,u.default.createElement("code",null,"Hidden cost = (mid-market rate - provider rate) X amount of transfer")),u.default.createElement("p",null,"The total cost is calculated by adding together the upfront cost and the hidden cost. This represents the entire financial cost to a consumer:"),u.default.createElement("p",null,u.default.createElement("code",null,"Total cost  = upfront cost + hidden cost")),u.default.createElement("p",null,"The data is manually collected in specific thresholds (see table for more detail) and if the amount of transfer is in between these thresholds, we used the provider’s rate applicable for the higher transfer threshold. For example, if a provider’s has a threshold of 5000 ",this.props.source," and 10000 ",this.props.source,", and we want to calculate the total cost of sending 5500 ",this.props.source,", then we will use the exchange rate and fee for sending 10000 ",this.props.source,". Generally, providers give better exchange rates and charge smaller fees for higher-value transfers, this approach helps to reduce the risk of inflating the cost of using the relevant provider, in fact it may show a better rate for the relevant providers than what they  may actually be."),u.default.createElement("p",null,"In this comparison we have not taken into account the cost to the recipient which a recipient provider may charge for an international transfer.  With TransferWise, the recipient will not be charged for receiving the transfer.")):void 0}},{key:"render",value:function(){return u.default.createElement("div",null,this.state.providers.length>0?u.default.createElement("div",{className:"small"},u.default.createElement("a",{href:"",onClick:this.clear},"Close")):u.default.createElement("div",{className:"small"},"How do we collect this data? ",u.default.createElement("a",{href:"",onClick:this.loadProviders},"Learn more")),this.renderData())}}]),t}(i.Component);t.default=m},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),c=n(u),d=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.currency,r=e.value,n=a(e,["currency","value"]);return c.default.createElement("span",n,parseFloat(r).toFixed(2)," ",c.default.createElement("span",{className:"small text-primary"},t))}}]),t}(u.Component);t.default=d},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),u=n(i),c=r(4),d=n(c),f=r(2),p=r(8),h=n(p),m=r(5),v=n(m);r(14);var y=function(e){function t(){var e,r,n,l;a(this,t);for(var s=arguments.length,i=Array(s),u=0;u<s;u++)i[u]=arguments[u];return r=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={showMore:!1,providers:[],loading:!0,error:!1},n.showMore=function(e){e.preventDefault(),n.setState({showMore:!0})},n.showLess=function(e){e.preventDefault(),n.setState({showMore:!1})},n.maxFee=function(e,t){return Math.max.apply(null,e.map(function(e){return e.fees+e.hiddenFees}))},n.filterProviders=function(e,t){return t?e.filter(function(e){return t.some(function(t){return e.alias.toLowerCase().includes(t.toLowerCase())})}):e},l=r,o(n,l)}return l(t,e),s(t,[{key:"componentDidMount",value:function(){this.loadProviders(this.props.amount)}},{key:"componentWillReceiveProps",value:function(e){this.setState({loading:!0,error:!1}),this.loadProviders(e.amount)}},{key:"loadProviders",value:function(e){var t=this;(0,f.comparisonsFor)(this.props.source,this.props.target,e).then(function(e){return e.json()}).then(function(r){var n=t.filterProviders(r.providers,t.props.providers),a=t.maxFee(n,e);t.setState({providers:n.map(function(e){return{id:e.id,logo:e.logo,name:e.name,rate:e.rate,fees:e.fees,hiddenFees:e.hiddenFees,amount:e.receivedAmount,maxFee:a,collectedAt:e.dateCollected}}),loading:!1})}).catch(function(e){throw t.setState({error:!0,loading:!1}),e})}},{key:"renderError",value:function(){return u.default.createElement("div",{className:"alert alert-danger",role:"alert"},u.default.createElement("strong",null,"Ups!")," There was a problem retrieving data. Please try again later.")}},{key:"renderLoader",value:function(){return u.default.createElement("div",{className:"text-xs-center m-t-5 m-b-3"},u.default.createElement(d.default,null))}},{key:"renderTable",value:function(){var e=this;if(this.state.error)return this.renderError();if(this.state.loading)return this.renderLoader();var t=this.state.showMore?this.state.providers:this.state.providers.slice(0,3);return u.default.createElement("div",{className:"table-responsive",style:{position:"static"}},u.default.createElement("table",{className:"table"},u.default.createElement("tbody",null,u.default.createElement("tr",null,u.default.createElement("th",null,"Provider"),u.default.createElement("th",{className:"text-xs-right hidden-xs text-md-left text-xs-nowrap"},"Total cost of sending ",this.props.amount," ",this.props.source," to ",this.props.target),u.default.createElement("th",{className:"text-xs-right"},"Amount received"))),u.default.createElement("tbody",null,t.map(function(t){return u.default.createElement(h.default,{key:t.id,name:t.name,logo:t.logo,fees:t.fees,rate:t.rate,hiddenFees:t.hiddenFees,maxFee:t.maxFee,source:e.props.source,target:e.props.target,amount:t.amount,collectedAt:t.collectedAt})}))))}},{key:"render",value:function(){var e=this.state.showMore?this.state.providers:this.state.providers.slice(0,3),t=e.length<this.state.providers.length;return u.default.createElement("div",{className:"tw-comparison-bar-table"},this.renderTable(),u.default.createElement("div",{className:"text-xs-center m-b-3"},!this.state.showMore&&t?u.default.createElement("a",{href:"",onClick:this.showMore},"Show more providers ",u.default.createElement("span",{className:"icon icon-down"})):null,this.state.showMore?u.default.createElement("a",{href:"",onClick:this.showLess},"Show fewer providers ",u.default.createElement("span",{className:"icon icon-up"})):null),u.default.createElement(v.default,{source:this.props.source,target:this.props.target}))}}]),t}(i.Component);t.default=y},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),u=n(i),c=r(6),d=n(c),f=r(3),p=(n(f),function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"hasNoHiddenFees",value:function(){return 0===parseFloat(this.props.hiddenFees)}},{key:"render",value:function(){var e=(this.props.hiddenFees+this.props.fees)/this.props.maxFee*100*.5,t=this.props.fees/(this.props.hiddenFees+this.props.fees)*100;return u.default.createElement("tr",null,u.default.createElement("td",{className:"provider-name text-xs-nowrap"},u.default.createElement("div",{className:"h3 font-weight-normal m-t-3"},u.default.createElement("img",{className:"provider-logo",src:this.props.logo,alt:this.props.name}))),u.default.createElement("td",{className:"hidden-xs hidden-sm"},u.default.createElement("div",{className:"m-t-3 text-xs-nowrap"},u.default.createElement("div",{className:"progress progress-lg",style:{position:"relative",width:e+"%",verticalAlign:"middle",minWidth:"35px"}},parseFloat(this.props.fees)>0?u.default.createElement("div",{className:"progress-bar",style:{width:t+"%"}}):null),u.default.createElement(d.default,{className:"h2 font-weight-normal text-no-wrap m-l-2",style:{verticalAlign:"middle",margin:0},currency:this.props.source,value:this.props.fees+this.props.hiddenFees})),u.default.createElement("div",null,u.default.createElement("small",{className:"text-primary"},"Fee"),this.props.hiddenFees>0?u.default.createElement("small",{className:"text-danger m-l-2"},"Rate markup"):null)),u.default.createElement("td",{className:"hidden-xs hidden-md hidden-lg hidden-xl text-xs-right"},u.default.createElement("div",{className:"progress",style:{width:e+"%"}},u.default.createElement("div",{className:"progress-bar",style:{width:t+"%"}})),u.default.createElement("br",null),u.default.createElement(d.default,{className:"m-b-0 h2 font-weight-normal text-xs-nowrap",style:{display:"inline-block"},currency:this.props.source,value:this.props.fees+this.props.hiddenFees}),u.default.createElement("br",null),u.default.createElement("div",{style:{display:"inline-block"}},u.default.createElement("small",null,this.hasNoHiddenFees()?"Fair and honest fee":u.default.createElement("span",null,"Hidden in rate ",u.default.createElement(d.default,{currency:this.props.source,value:this.props.hiddenFees}))))),u.default.createElement("td",{className:"text-xs-right amount-received"},u.default.createElement("div",{className:"m-t-3"},u.default.createElement(d.default,{className:"m-b-0 h2 font-weight-normal text-xs-nowrap",currency:this.props.target,value:this.props.amount}),u.default.createElement("small",{className:"text-xs-nowrap"},this.hasNoHiddenFees()?u.default.createElement("div",null,"Real rate ",u.default.createElement("span",{className:"text-default"},this.props.rate)):u.default.createElement("div",null,this.props.name," rate ",u.default.createElement("span",{className:"text-danger"},this.props.rate))))))}}]),t}(i.Component));t.default=p},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(7),o=n(a);t.default=o.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),c=n(u),d=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.currency,r=e.value,n=a(e,["currency","value"]);return c.default.createElement("strong",n,parseFloat(r).toFixed(this.props.precision||2)," ",c.default.createElement("span",{className:"text-primary"},t))}}]),t}(u.Component);t.default=d},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),u=n(i),c=r(4),d=n(c),f=r(2),p=r(12),h=n(p),m=r(5),v=n(m);r(15);var y=function(e){function t(){var e,r,n,l;a(this,t);for(var s=arguments.length,i=Array(s),u=0;u<s;u++)i[u]=arguments[u];return r=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={showMore:!1,providers:[],loading:!0,error:!1},n.showMore=function(e){e.preventDefault(),n.setState({showMore:!0})},n.showLess=function(e){e.preventDefault(),n.setState({showMore:!1})},n.maxFee=function(e,t){return Math.max.apply(null,e.map(function(e){return e.fees+e.hiddenFees}))},n.filterProviders=function(e,t){return t?e.filter(function(e){return t.some(function(t){return e.alias.toLowerCase().includes(t.toLowerCase())})}):e},l=r,o(n,l)}return l(t,e),s(t,[{key:"componentDidMount",value:function(){this.loadProviders(this.props.amount)}},{key:"componentWillReceiveProps",value:function(e){this.setState({loading:!0,error:!1}),this.loadProviders(e.amount)}},{key:"loadProviders",value:function(e){var t=this;(0,f.comparisonsFor)(this.props.source,this.props.target,e).then(function(e){return e.json()}).then(function(r){var n=t.filterProviders(r.providers,t.props.providers),a=t.maxFee(n,e);t.setState({providers:n.map(function(e){return{id:e.id,logo:e.logo,name:e.name,rate:e.rate,fees:e.fees,hiddenFees:e.hiddenFees,amount:e.receivedAmount,maxFee:a,collectedAt:e.dateCollected}}),loading:!1})}).catch(function(e){throw t.setState({error:!0,loading:!1}),e})}},{key:"renderError",value:function(){return u.default.createElement("div",{className:"alert alert-danger",role:"alert"},u.default.createElement("strong",null,"Ups!")," There was a problem retrieving data. Please try again later.")}},{key:"renderLoader",value:function(){return u.default.createElement("div",{className:"text-xs-center m-t-5 m-b-3"},u.default.createElement(d.default,null))}},{key:"renderTable",value:function(){var e=this;if(this.state.error)return this.renderError();if(this.state.loading)return this.renderLoader();var t=this.state.showMore?this.state.providers:this.state.providers.slice(0,3);return u.default.createElement("div",{className:"table-responsive"},u.default.createElement("table",{className:"table table-bordered"},u.default.createElement("thead",null,u.default.createElement("tr",{className:"bg-primary text-inverse"},u.default.createElement("th",null,"Provider"),u.default.createElement("th",{className:"hidden-md hidden-lg hidden-xl text-xs-right text-xs-nowrap"},"Amount received"),u.default.createElement("th",{className:"hidden-md hidden-lg hidden-xl text-xs-right text-xs-nowrap"},"Exchange rate"),u.default.createElement("th",{className:"text-xs-right text-xs-nowrap"},"Service fee"),u.default.createElement("th",{className:"hidden-xs hidden-sm text-xs-right hidden-xs text-xs-nowrap"},"Exchange rate"),u.default.createElement("th",{className:"hidden-xs hidden-sm text-xs-right text-xs-nowrap"},"Amount received"))),u.default.createElement("tbody",null,t.map(function(r){return u.default.createElement(h.default,{key:r.id,name:r.name,logo:r.logo,fees:r.fees,rate:r.rate,hiddenFees:r.hiddenFees,maxFee:r.maxFee,source:e.props.source,target:e.props.target,amount:r.amount,highestAmount:t[0].amount,collectedAt:r.collectedAt})}))))}},{key:"render",value:function(){var e=this.state.showMore?this.state.providers:this.state.providers.slice(0,3),t=e.length<this.state.providers.length;return u.default.createElement("div",{className:"tw-comparison-table"},this.renderTable(),u.default.createElement("div",{className:"text-xs-center m-b-3"},!this.state.showMore&&t?u.default.createElement("a",{href:"",onClick:this.showMore},"Show more providers ",u.default.createElement("span",{className:"icon icon-down"})):null,this.state.showMore?u.default.createElement("a",{href:"",onClick:this.showLess},"Show fewer providers ",u.default.createElement("span",{className:"icon icon-up"})):null),u.default.createElement(v.default,{source:this.props.source,target:this.props.target}))}}]),t}(i.Component);t.default=y},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),u=n(i),c=r(10),d=n(c),f=r(3),p=(n(f),function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"hasNoHiddenFees",value:function(){return 0===parseFloat(this.props.hiddenFees)}},{key:"render",value:function(){return u.default.createElement("tr",null,u.default.createElement("td",null,u.default.createElement("img",{className:"provider-logo",src:this.props.logo,alt:this.props.name})),u.default.createElement("td",{className:"amount-received hidden-md hidden-lg hidden-xl text-xs-right text-primary"},u.default.createElement(d.default,{className:(this.props.highestAmount==this.props.amount?"highest-amount":"")+" text-xs-nowrap",currency:this.props.target,value:this.props.amount})),u.default.createElement("td",{className:"hidden-md hidden-lg hidden-xl text-xs-right"},u.default.createElement(d.default,{className:this.hasNoHiddenFees()?"text-success":"text-danger",value:this.props.rate,precision:4})),u.default.createElement("td",{className:"text-xs-right"},u.default.createElement(d.default,{className:"text-no-wrap text-primary",currency:this.props.source,value:this.props.fees+this.props.hiddenFees})),u.default.createElement("td",{className:"hidden-xs hidden-sm text-xs-right"},u.default.createElement(d.default,{className:this.hasNoHiddenFees()?"text-success":"text-danger",value:this.props.rate,precision:4})),u.default.createElement("td",{className:"hidden-xs hidden-sm text-xs-right"},u.default.createElement(d.default,{className:(this.props.highestAmount==this.props.amount?"highest-amount":"")+" text-primary text-xs-nowrap amount-received",currency:this.props.target,value:this.props.amount})))}}]),t}(i.Component));t.default=p},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(11),o=n(a);t.default=o.default},function(e,t){},function(e,t){}]);
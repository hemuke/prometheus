(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{BLAY:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"DataSourceDashboards",(function(){return j}));var o=n("q1tI"),r=n.n(o),a=n("0cfB"),i=n("/MKj"),u=n("ZGyg"),c=n("vHOe"),s=n("lzJ5"),p=n("X+V3"),f=n("5BCB"),l=n("jGYO"),d=n("J4KJ"),b=n("frIo");function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e,n,o,r,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(o,r)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=function(t){function e(){var t,n;y(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=g(this,(t=w(e)).call.apply(t,[this].concat(r)))).onImport=function(t,e){var o=n.props,r=o.dataSource,a=o.importDashboard,i={pluginId:t.pluginId,path:t.path,overwrite:e,inputs:[]};r&&i.inputs.push({name:"*",type:"datasource",pluginId:r.type,value:r.name}),a(i,t.title)},n.onRemove=function(t){n.props.removeDashboard(t.importedUri)},n}var n,o,a,i,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(e,t),n=e,(o=[{key:"componentDidMount",value:(i=regeneratorRuntime.mark((function t(){var e,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props,n=e.loadDataSource,o=e.pageId,t.next=3,n(o);case 3:this.props.loadPluginDashboards();case 4:case"end":return t.stop()}}),t,this)})),s=function(){var t=this,e=arguments;return new Promise((function(n,o){var r=i.apply(t,e);function a(t){v(r,n,o,a,u,"next",t)}function u(t){v(r,n,o,a,u,"throw",t)}a(void 0)}))},function(){return s.apply(this,arguments)})},{key:"render",value:function(){var t=this,e=this.props,n=e.dashboards,o=e.navModel,a=e.isLoading;return r.a.createElement(u.a,{navModel:o},r.a.createElement(u.a.Contents,{isLoading:a},r.a.createElement(c.a,{dashboards:n,onImport:function(e,n){return t.onImport(e,n)},onRemove:function(e){return t.onRemove(e)}})))}}])&&m(n.prototype,o),a&&m(n,a),e}(o.PureComponent);var D={importDashboard:d.e,loadDataSource:f.d,loadPluginDashboards:l.b,removeDashboard:d.g};e.default=Object(a.hot)(t)(Object(i.connect)((function(t){var e=Object(p.c)(t.location);return{navModel:Object(s.a)(t.navIndex,"datasource-dashboards-".concat(e)),pageId:e,dashboards:t.plugins.dashboards,dataSource:Object(b.a)(t.dataSources,e),isLoading:t.plugins.isLoadingPluginDashboards}}),D)(j))}.call(this,n("3UD+")(t))}}]);
//# sourceMappingURL=DataSourceDashboards.77c6cb2b767d3da10797.js.map
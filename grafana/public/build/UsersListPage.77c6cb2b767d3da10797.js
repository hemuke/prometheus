(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"1Xqh":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("Y/nG"),i=n("kDLi");function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.a=function(e){var t=e.users,n=e.onRoleChange,c=e.onRemoveUser,s=u(Object(r.useState)(!1),2),l=s[0],f=s[1];return o.a.createElement("table",{className:"filter-table form-inline"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null),o.a.createElement("th",null,"Login"),o.a.createElement("th",null,"Email"),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Seen"),o.a.createElement("th",null,"Role"),o.a.createElement("th",{style:{width:"34px"}}))),o.a.createElement("tbody",null,t.map((function(e,t){return o.a.createElement("tr",{key:"".concat(e.userId,"-").concat(t)},o.a.createElement("td",{className:"width-2 text-center"},o.a.createElement("img",{className:"filter-table__avatar",src:e.avatarUrl})),o.a.createElement("td",{className:"max-width-6"},o.a.createElement("span",{className:"ellipsis",title:e.login},e.login)),o.a.createElement("td",{className:"max-width-5"},o.a.createElement("span",{className:"ellipsis",title:e.email},e.email)),o.a.createElement("td",{className:"max-width-5"},o.a.createElement("span",{className:"ellipsis",title:e.name},e.name)),o.a.createElement("td",{className:"width-1"},e.lastSeenAtAge),o.a.createElement("td",{className:"width-8"},o.a.createElement(a.a,{value:e.role,onChange:function(t){return n(t,e)}})),o.a.createElement("td",null,o.a.createElement(i.Button,{size:"sm",variant:"destructive",onClick:function(){return f(e.login)},icon:"times"}),o.a.createElement(i.ConfirmModal,{body:"Are you sure you want to delete user ".concat(e.login,"?"),confirmText:"Delete",title:"Delete",onDismiss:function(){return f(!1)},isOpen:e.login===l,onConfirm:function(){c(e)}})))}))))}},"4sTo":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("/MKj"),i=n("nKOl"),u=n("kDLi");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return s(this,t),f(this,p(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.invitee,n=e.revokeInvite;return o.a.createElement("tr",null,o.a.createElement("td",null,t.email),o.a.createElement("td",null,t.name),o.a.createElement("td",{className:"text-right"},o.a.createElement(u.ClipboardButton,{variant:"secondary",size:"sm",getText:function(){return t.url}},"Copy Invite")," "),o.a.createElement("td",null,o.a.createElement(u.Button,{variant:"destructive",size:"sm",icon:"times",onClick:function(){return n(t.code)}})))}}])&&l(n.prototype,r),a&&l(n,a),t}(r.PureComponent),v={revokeInvite:i.d},h=Object(a.connect)((function(){return{}}),v)(y);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return j}));var j=function(e){function t(){return d(this,t),w(this,O(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.invitees;return o.a.createElement("table",{className:"filter-table form-inline"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Email"),o.a.createElement("th",null,"Name"),o.a.createElement("th",null),o.a.createElement("th",{style:{width:"34px"}}))),o.a.createElement("tbody",null,e.map((function(e,t){return o.a.createElement(h,{key:"".concat(e.id,"-").concat(t),invitee:e})}))))}}])&&g(n.prototype,r),a&&g(n,a),t}(r.PureComponent)},DWvN:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"UsersListPage",(function(){return k}));var r=n("q1tI"),o=n.n(r),a=n("0cfB"),i=n("/MKj"),u=n("Obii"),c=n("ZGyg"),s=n("vKCI"),l=n("1Xqh"),f=n("4sTo"),p=n("nKOl"),m=n("lzJ5"),y=n("KvmV"),v=n("nABS");function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){b(a,r,o,i,u,"next",e)}function u(e){b(a,r,o,i,u,"throw",e)}i(void 0)}))}}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=E(this,j(t).call(this,e))).onRoleChange=function(e,t){var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{role:e});n.props.updateUser(r)},n.onShowInvites=function(){n.setState((function(e){return{showInvites:!e.showInvites}}))},n.props.externalUserMngInfo&&(n.externalUserMngInfoHtml=Object(u.renderMarkdown)(n.props.externalUserMngInfo)),n.state={showInvites:!1},n}var n,r,a,i,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.fetchUsers(),this.fetchInvitees()}},{key:"fetchUsers",value:(p=d(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.loadUsers();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})},{key:"fetchInvitees",value:(i=d(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.loadInvitees();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"renderTable",value:function(){var e=this,t=this.props,n=t.invitees,r=t.users;return this.state.showInvites?o.a.createElement(f.a,{invitees:n}):o.a.createElement(l.a,{users:r,onRoleChange:function(t,n){return e.onRoleChange(t,n)},onRemoveUser:function(t){return e.props.removeUser(t.userId)}})}},{key:"render",value:function(){var e=this.props,t=e.navModel,n=e.hasFetched,r=this.externalUserMngInfoHtml;return o.a.createElement(c.a,{navModel:t},o.a.createElement(c.a.Contents,{isLoading:!n},o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{onShowInvites:this.onShowInvites,showInvites:this.state.showInvites}),r&&o.a.createElement("div",{className:"grafana-info-box",dangerouslySetInnerHTML:{__html:r}}),n&&this.renderTable())))}}])&&O(n.prototype,r),a&&O(n,a),t}(r.PureComponent);var x={loadUsers:p.b,loadInvitees:p.a,setUsersSearchQuery:v.c,updateUser:p.e,removeUser:p.c};t.default=Object(a.hot)(e)(Object(i.connect)((function(e){return{navModel:Object(m.a)(e.navIndex,"users"),users:Object(y.c)(e.users),searchQuery:Object(y.d)(e.users),invitees:Object(y.a)(e.users),externalUserMngInfo:e.users.externalUserMngInfo,hasFetched:e.users.hasFetched}}),x)(k))}.call(this,n("3UD+")(e))},KvmV:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return i}));var r=function(e){var t=new RegExp(e.searchQuery,"i");return e.users.filter((function(e){return t.test(e.login)||t.test(e.email)||t.test(e.name)}))},o=function(e){var t=new RegExp(e.searchQuery,"i");return e.invitees.filter((function(e){return t.test(e.name)||t.test(e.email)}))},a=function(e){return e.invitees.length},i=function(e){return e.searchQuery}},nKOl:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return f}));var r=n("t8hP"),o=n("nABS");function a(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){a(i,r,o,u,c,"next",e)}function c(e){a(i,r,o,u,c,"throw",e)}u(void 0)}))}}function u(){return function(){var e=i(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.getBackendSrv)().get("/api/org/users");case 2:n=e.sent,t(Object(o.d)(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function c(){return function(){var e=i(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.getBackendSrv)().get("/api/org/invites");case 2:n=e.sent,t(Object(o.b)(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function s(e){return function(){var t=i(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(r.getBackendSrv)().patch("/api/org/users/".concat(e.userId),{role:e.role});case 2:n(u());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function l(e){return function(){var t=i(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(r.getBackendSrv)().delete("/api/org/users/".concat(e));case 2:n(u());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function f(e){return function(){var t=i(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(r.getBackendSrv)().patch("/api/org/invites/".concat(e,"/revoke"),{});case 2:n(c());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},vKCI:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("/MKj"),i=n("nABS"),u=n("KvmV"),c=n("EKT6"),s=n("kDLi");function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return f(this,t),m(this,y(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.canInvite,n=e.externalUserMngLinkName,r=e.externalUserMngLinkUrl,a=e.searchQuery,i=e.pendingInvitesCount,u=e.setUsersSearchQuery,l=e.onShowInvites,f=e.showInvites,p=[{label:"Users",value:"users"},{label:"Pending Invites (".concat(i,")"),value:"invites"}];return o.a.createElement("div",{className:"page-action-bar"},o.a.createElement("div",{className:"gf-form gf-form--grow"},o.a.createElement(c.a,{labelClassName:"gf-form--has-input-icon",inputClassName:"gf-form-input width-20",value:a,onChange:u,placeholder:"Search user by login, email or name"}),i>0&&o.a.createElement("div",{style:{marginLeft:"1rem"}},o.a.createElement(s.RadioButtonGroup,{value:f?"invites":"users",options:p,onChange:l})),o.a.createElement("div",{className:"page-action-bar__spacer"}),t&&o.a.createElement(s.LinkButton,{href:"org/users/invite"},"Invite"),r&&o.a.createElement(s.LinkButton,{href:r,target:"_blank",rel:"noopener"},n)))}}])&&p(n.prototype,r),a&&p(n,a),t}(r.PureComponent);var b={setUsersSearchQuery:i.c};t.a=Object(a.connect)((function(e){return{searchQuery:Object(u.d)(e.users),pendingInvitesCount:Object(u.b)(e.users),externalUserMngLinkName:e.users.externalUserMngLinkName,externalUserMngLinkUrl:e.users.externalUserMngLinkUrl,canInvite:e.users.canInvite}}),b)(h)}}]);
//# sourceMappingURL=UsersListPage.77c6cb2b767d3da10797.js.map
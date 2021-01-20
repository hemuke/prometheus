(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"0Tfw":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("kDDq"),o=n("kDLi"),c=function(e){var t=e.currentFormValues,n=e.imageRendererAvailable,r=e.register;return a.a.createElement(o.CollapsableSection,{label:"Notification settings",isOpen:!1},a.a.createElement(o.Field,null,a.a.createElement(o.Checkbox,{name:"isDefault",ref:r,label:"Default",description:"Use this notification for all alerts"})),a.a.createElement(o.Field,null,a.a.createElement(o.Checkbox,{name:"settings.uploadImage",ref:r,label:"Include image",description:"Captures an image and include it in the notification"})),t.uploadImage&&!n&&a.a.createElement(o.InfoBox,{title:"No image renderer available/installed"},"Grafana cannot find an image renderer to capture an image for the notification. Please make sure the Grafana Image Renderer plugin is installed. Please contact your Grafana administrator to install the plugin."),a.a.createElement(o.Field,null,a.a.createElement(o.Checkbox,{name:"disableResolveMessage",ref:r,label:"Disable Resolve Message",description:"Disable the resolve message [OK] that is sent when alerting state returns to false"})),a.a.createElement(o.Field,null,a.a.createElement(o.Checkbox,{name:"sendReminder",ref:r,label:"Send reminders",description:"Send additional notifications for triggered alerts"})),t.sendReminder&&a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Field,{label:"Send reminder every",description:"Specify how often reminders should be sent, e.g. every 30s, 1m, 10m, 30m or 1h etc. Alert reminders are sent after rules are evaluated. Therefore a reminder can never be sent more frequently than a configured alert rule evaluation interval."},a.a.createElement(o.Input,{name:"frequency",ref:r,width:8}))))},u=function(e){var t=e.control,n=e.option,r=e.register,i=e.invalid,c=n.secure?"secureSettings.".concat(n.propertyName):"settings.".concat(n.propertyName);switch(n.element){case"input":return a.a.createElement(o.Input,{invalid:i,type:n.inputType,name:"".concat(c),ref:r({required:!!n.required&&"Required",validate:function(e){return""===n.validationRule||l(e,n.validationRule)}}),placeholder:n.placeholder});case"select":return a.a.createElement(o.InputControl,{as:o.Select,options:n.selectOptions,control:t,name:"".concat(c),invalid:i});case"textarea":return a.a.createElement(o.TextArea,{invalid:i,name:"".concat(c),ref:r({required:!!n.required&&"Required",validate:function(e){return""===n.validationRule||l(e,n.validationRule)}})});default:return console.error("Element not supported",n.element),null}},l=function(e,t){return!!RegExp(t).test(e)||"Invalid format"},s=function(e){var t=e.control,n=e.currentFormValues,r=e.errors,i=e.selectedChannelOptions,c=e.register,l=e.onResetSecureField,s=e.secureFields;return a.a.createElement(a.a.Fragment,null,i.map((function(e,i){var f,p="".concat(e.label,"-").concat(i),d=n["settings.".concat(e.showWhen.field)]&&n["settings.".concat(e.showWhen.field)].value;return e.showWhen.field&&d!==e.showWhen.is?null:"checkbox"===e.element?a.a.createElement(o.Field,{key:p},a.a.createElement(o.Checkbox,{name:e.secure?"secureSettings.".concat(e.propertyName):"settings.".concat(e.propertyName),ref:c,label:e.label,description:e.description})):a.a.createElement(o.Field,{key:p,label:e.label,description:e.description,invalid:r.settings&&!!r.settings[e.propertyName],error:r.settings&&(null===(f=r.settings[e.propertyName])||void 0===f?void 0:f.message)},s&&s[e.propertyName]?a.a.createElement(o.Input,{readOnly:!0,value:"Configured",suffix:a.a.createElement(o.Button,{onClick:function(){return l(e.propertyName)},variant:"link",type:"button",size:"sm"},"Clear")}):a.a.createElement(u,{option:e,register:c,control:t}))})))},f=function(e){var t=e.control,n=e.currentFormValues,r=e.errors,i=e.secureFields,c=e.selectedChannel,u=e.channels,l=e.register,f=e.resetSecureField;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Field,{label:"Name",invalid:!!r.name,error:r.name&&r.name.message},a.a.createElement(o.Input,{name:"name",ref:l({required:"Name is required"})})),a.a.createElement(o.Field,{label:"Type"},a.a.createElement(o.InputControl,{name:"type",as:o.Select,options:u,control:t,rules:{required:!0}})),a.a.createElement(s,{selectedChannelOptions:c.options.filter((function(e){return e.required})),currentFormValues:n,secureFields:i,onResetSecureField:f,register:l,errors:r,control:t}))},p=function(e){var t=e.control,n=e.currentFormValues,r=e.errors,i=e.selectedChannel,c=e.secureFields,u=e.register,l=e.resetSecureField;return a.a.createElement(o.CollapsableSection,{label:"Optional ".concat(i.heading),isOpen:!1},""!==i.info&&a.a.createElement(o.InfoBox,null,i.info),a.a.createElement(s,{selectedChannelOptions:i.options.filter((function(e){return!e.required})),currentFormValues:n,register:u,errors:r,control:t,onResetSecureField:l,secureFields:c}))},d=n("ZFWI");function m(){var e=g(["\n      padding-top: ",";\n    "]);return m=function(){return e},e}function b(){var e=g(["\n      flex-grow: 1;\n      padding-top: ",";\n    "]);return b=function(){return e},e}function v(){var e=g([""]);return v=function(){return e},e}function g(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return h}));var h=function(e){var t=e.control,n=e.errors,i=e.selectedChannel,u=e.selectableChannels,l=e.register,s=e.watch,m=e.getValues,b=e.imageRendererAvailable,v=e.onTestChannel,g=e.resetSecureField,h=e.secureFields,j=O(Object(o.useTheme)()),w=new Set(null==i?void 0:i.options.filter((function(e){return e.showWhen.field})).map((function(e){return"settings.".concat(e.showWhen.field)})))||[];Object(r.useEffect)((function(){s(["type","sendReminder","uploadImage"].concat(y(w)))}),[w]);var E=m();return i?a.a.createElement("div",{className:j.formContainer},a.a.createElement("div",{className:j.formItem},a.a.createElement(f,{selectedChannel:i,channels:u,secureFields:h,resetSecureField:g,currentFormValues:E,register:l,errors:n,control:t})),i.options.filter((function(e){return!e.required})).length>0&&a.a.createElement("div",{className:j.formItem},a.a.createElement(p,{selectedChannel:i,secureFields:h,resetSecureField:g,currentFormValues:E,register:l,errors:n,control:t})),a.a.createElement("div",{className:j.formItem},a.a.createElement(c,{imageRendererAvailable:b,currentFormValues:E,register:l,errors:n,control:t})),a.a.createElement("div",{className:j.formButtons},a.a.createElement(o.HorizontalGroup,null,a.a.createElement(o.Button,{type:"submit"},"Save"),a.a.createElement(o.Button,{type:"button",variant:"secondary",onClick:function(){return v(m({nest:!0}))}},"Test"),a.a.createElement("a",{href:"".concat(d.b.appSubUrl,"/alerting/notifications")},a.a.createElement(o.Button,{type:"button",variant:"secondary"},"Back"))))):a.a.createElement(o.Spinner,null)},O=Object(o.stylesFactory)((function(e){return{formContainer:Object(i.css)(v()),formItem:Object(i.css)(b(),e.spacing.md),formButtons:Object(i.css)(m(),e.spacing.xl)}}))},"4vLh":function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"f",(function(){return m})),n.d(t,"a",(function(){return b})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return g})),n.d(t,"d",(function(){return y})),n.d(t,"c",(function(){return h}));var r=n("Obii"),a=n("t8hP"),i=n("HJRA"),o=n("3SGO"),c=n("qOGI");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t,n,r,a,i,o){try{var c=e[i](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){f(i,r,a,o,c,"next",e)}function c(e){f(i,r,a,o,c,"throw",e)}o(void 0)}))}}function d(e){return function(){var t=p(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(c.b)()),t.next=3,Object(a.getBackendSrv)().get("/api/alerts",e);case 3:r=t.sent,n(Object(c.c)(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function m(e,t){return function(){var n=p(regeneratorRuntime.mark((function n(r,i){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(a.getBackendSrv)().post("/api/alerts/".concat(e,"/pause"),t);case 2:o=i().location.query.state||"all",r(d({state:o.toString()}));case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}function b(e){return function(){var t=p(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(a.getBackendSrv)().post("/api/alert-notifications",e);case 3:i.a.emit(r.AppEvents.alertSuccess,["Notification created"]),n(Object(o.d)({path:"alerting/notifications"})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),i.a.emit(r.AppEvents.alertError,[t.t0.data.error]);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function v(e){return function(){var t=p(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(a.getBackendSrv)().put("/api/alert-notifications/".concat(e.id),e);case 3:i.a.emit(r.AppEvents.alertSuccess,["Notification updated"]),n(Object(o.d)({path:"alerting/notifications"})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),i.a.emit(r.AppEvents.alertError,[t.t0.data.error]);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function g(e){return function(){var t=p(regeneratorRuntime.mark((function t(n,r){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r().notificationChannel.notificationChannel,t.next=3,Object(a.getBackendSrv)().post("/api/alert-notifications/test",l({id:i.id},e));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}function y(){return function(){var e=p(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.getBackendSrv)().get("/api/alert-notifiers");case 2:n=e.sent,r=n.sort((function(e,t){return e.name>t.name?1:-1})),t(Object(c.f)(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function h(e){return function(){var t=p(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(y());case 2:return t.next=4,Object(a.getBackendSrv)().get("/api/alert-notifications/".concat(e));case 4:r=t.sent,n(Object(c.d)(r));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},gKHt:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return f}));var r=n("Wwog");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u={id:-1,name:"",type:{value:"email",label:"Email"},sendReminder:!1,disableResolveMessage:!1,frequency:"15m",settings:{uploadImage:n("t8hP").config.rendererAvailable,autoResolve:!0,httpMethod:"POST",severity:"critical"},secureSettings:{},secureFields:{},isDefault:!1},l=Object(r.a)((function(e){return e.map((function(e){return{value:e.value,label:e.label,description:e.description}}))})),s=function(e){var t=Object.fromEntries(Object.entries(e.settings).map((function(e){var t=c(e,2),n=t[0],r=t[1];return[n,r&&r.hasOwnProperty("value")?r.value:r]})));return i({},u,{},e,{frequency:""===e.frequency?u.frequency:e.frequency,type:e.type.value,settings:i({},u.settings,{},t),secureSettings:i({},e.secureSettings)})},f=function(e){var t;return{name:e.name,type:e.type.value,frequency:null!==(t=e.frequency)&&void 0!==t?t:u.frequency,settings:i({},Object.assign(u.settings,e.settings)),secureSettings:i({},e.secureSettings)}}},x9oW:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("/MKj"),o=n("t8hP"),c=n("kDLi"),u=n("ZGyg"),l=n("0Tfw"),s=n("gKHt"),f=n("lzJ5"),p=n("4vLh"),d=n("qOGI");function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){var e,n;y(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=O(this,(e=j(t)).call.apply(e,[this].concat(a)))).onSubmit=function(e){n.props.createNotificationChannel(Object(s.c)(v({},s.a,{},e)))},n.onTestChannel=function(e){n.props.testNotificationChannel(Object(s.d)(v({},s.a,{},e)))},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.props.loadNotificationTypes()}},{key:"render",value:function(){var e=this,t=this.props,n=t.navModel,r=t.notificationChannelTypes;return a.a.createElement(u.a,{navModel:n},a.a.createElement(u.a.Contents,null,a.a.createElement("h2",{className:"page-sub-heading"},"New notification channel"),a.a.createElement(c.Form,{onSubmit:this.onSubmit,validateOn:"onChange",defaultValues:s.a,maxWidth:600},(function(t){var n=t.register,i=t.errors,c=t.control,u=t.getValues,f=t.watch,p=r.find((function(e){return e.value===u().type.value}));return a.a.createElement(l.a,{selectableChannels:Object(s.b)(r),selectedChannel:p,onTestChannel:e.onTestChannel,register:n,errors:i,getValues:u,control:c,watch:f,imageRendererAvailable:o.config.rendererAvailable,resetSecureField:e.props.resetSecureField,secureFields:{}})}))))}}])&&h(n.prototype,r),i&&h(n,i),t}(r.PureComponent),S={createNotificationChannel:p.a,loadNotificationTypes:p.d,testNotificationChannel:p.e,resetSecureField:d.e};t.default=Object(i.connect)((function(e){return{navModel:Object(f.a)(e.navIndex,"channels"),notificationChannelTypes:e.notificationChannel.notificationChannelTypes}}),S)(E)}}]);
//# sourceMappingURL=NewNotificationChannel.77c6cb2b767d3da10797.js.map
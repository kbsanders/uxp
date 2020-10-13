(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"/Vo6":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return b}));var a,d=n("wx14"),r=n("zLVn"),i=(n("q1tI"),n("7ljp")),m=n("LHWr"),c=(n("qKvR"),{}),l=(a="JsDocParameters",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.mdx)("div",e)}),o={_frontmatter:c},p=m.a;function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.mdx)(p,Object(d.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("a",{name:"entrypoints",id:"entrypoints"}),Object(i.mdx)("h1",{id:"requireuxpentrypoints"},"require('uxp').entrypoints"),Object(i.mdx)(l,{mdxType:"JsDocParameters"}),Object(i.mdx)("a",{name:"entrypoints-setup",id:"entrypoints-setup"}),Object(i.mdx)("h2",{id:"setupentrypoints"},"setup(entrypoints)"),Object(i.mdx)("p",null,"API for plugin to add handlers and menu items for entrypoints defined in manifest.\nThis API can only be called once and there after other apis can be used to modify menu items.\nThe function throws in case of any error in entrypoints data or if its called more than once."),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Param"),Object(i.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Type"),Object(i.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"Object")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"Describes your plugin's entrypoint functions and properties.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.plugin"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"Object")," ","|"," ",Object(i.mdx)("inlineCode",{parentName:"td"},"function")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"(Not in 4.1) This can be an object or a function. If this is a function, it is                                           assumed as the ",Object(i.mdx)("inlineCode",{parentName:"td"},"create")," handler (described below).")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.plugin.create"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"function")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"(Not in 4.1) This is called after plugin is loaded. ",Object(i.mdx)("inlineCode",{parentName:"td"},"this")," can be used to access                                         ",Object(i.mdx)("a",Object(d.a)({parentName:"td"},{href:"/uxp/uxp/reference-js/Modules/uxp/Entry%20Points/UxpPluginInfo/#uxpplugininfo"}),"UxpPluginInfo")," object. This function can return a promise. If ",Object(i.mdx)("inlineCode",{parentName:"td"},"plugin"),"                                         object is defined, ",Object(i.mdx)("inlineCode",{parentName:"td"},"create")," must be defined.                                         To signal failure, you should throw an exception or return a rejected promise.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.plugin.destroy"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"function")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"(Not in 4.1) This is called before plugin is unloaded. ",Object(i.mdx)("inlineCode",{parentName:"td"},"this")," can be used to access                                          ",Object(i.mdx)("a",Object(d.a)({parentName:"td"},{href:"/uxp/uxp/reference-js/Modules/uxp/Entry%20Points/UxpPluginInfo/#uxpplugininfo"}),"UxpPluginInfo")," object.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.panels"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"Array.<(Object\\|function())>")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"This contains a list of key-value pairs where each key is a panel id (string) and                               value is the data for the panel whose type can be object/function.                               If a function, it is assumed to be the ",Object(i.mdx)("inlineCode",{parentName:"td"},"show")," method (described below).                               If an object, it can contain following properties but it must                               define either of ",Object(i.mdx)("inlineCode",{parentName:"td"},"create")," or 'show'.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.panels[].create"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"function")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"(Not in 4.1) This is called when a panel is created. ",Object(i.mdx)("inlineCode",{parentName:"td"},"this")," can be used to access                                         ",Object(i.mdx)("a",Object(d.a)({parentName:"td"},{href:"/uxp/uxp/reference-js/Modules/uxp/Entry%20Points/UxpPanelInfo/#uxppanelinfo"}),"UxpPanelInfo")," object. This function can return a promise.                                         To signal failure, throw an exception or return a rejected promise.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.panels[].show"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"function")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"This is called when a panel is shown. ",Object(i.mdx)("inlineCode",{parentName:"td"},"this")," can be used to access                                         ",Object(i.mdx)("a",Object(d.a)({parentName:"td"},{href:"/uxp/uxp/reference-js/Modules/uxp/Entry%20Points/UxpPanelInfo/#uxppanelinfo"}),"UxpPanelInfo")," object. This function can return a promise.                                         To signal failure, throw an exception or return a rejected promise.                                         The callback function will be passed an object with a ",Object(i.mdx)("inlineCode",{parentName:"td"},"node")," field. You can attach your root UI node to this node using ",Object(i.mdx)("inlineCode",{parentName:"td"},"node.appendChild(yourRoot)"),".")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.panels[].hide"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"function")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"This is called when a panel is hidden. ",Object(i.mdx)("inlineCode",{parentName:"td"},"this")," can be used to access                                       ",Object(i.mdx)("a",Object(d.a)({parentName:"td"},{href:"/uxp/uxp/reference-js/Modules/uxp/Entry%20Points/UxpPanelInfo/#uxppanelinfo"}),"UxpPanelInfo")," object. This function can return a promise.                                       To signal failure, throw an exception or return a rejected promise.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.panels[].destroy"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"function")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"(Not in 4.1) This is called when a panel is going to be destroyed. ",Object(i.mdx)("inlineCode",{parentName:"td"},"this")," can be                                          used to access ",Object(i.mdx)("a",Object(d.a)({parentName:"td"},{href:"/uxp/uxp/reference-js/Modules/uxp/Entry%20Points/UxpPanelInfo/#uxppanelinfo"}),"UxpPanelInfo")," object. This function can return a promise.                                          To signal failure, throw an exception or return a rejected promise.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.panels[].invokeMenu"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"function")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"This is called when a panel menu item is invoked.                                             The associated menu id is passed as the first argument to this function. ",Object(i.mdx)("inlineCode",{parentName:"td"},"this")," can be                                             used to access ",Object(i.mdx)("a",Object(d.a)({parentName:"td"},{href:"/uxp/uxp/reference-js/Modules/uxp/Entry%20Points/UxpPanelInfo/#uxppanelinfo"}),"UxpPanelInfo")," object. This function can return a promise.                                             To signal failure, throw an exception or return a rejected promise.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.panels[].menuItems"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"Array")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),'array of menu items. Each menu item can be a string or an object with                                         properties defined below. Menu items are displayed in the                                         same order as specified in this array. For specifying a separator,                                         a value of "-" can be used at required place in the array.')),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.panels[].menuItems.id"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"string")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"Identifier of the menu item. ",Object(i.mdx)("strong",{parentName:"td"},"Must be unique across the entire plugin, including commands in the manifest."))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.panels[].menuItems.label"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"string")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"Display text for the menu item. Should be localized. If label is not                                              specified, id is used as label.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.panels[].menuItems.enabled"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"boolean")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"Enabled/disabled state for the menu item. Default - true.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.panels[].menuItems.checked"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"boolean")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"Checked state for the menu item. Default - false.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.panels[].menuItems.submenu"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"Array")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"Submenu for this menu item again as an array of 'menuItems'.                                               ",Object(i.mdx)("inlineCode",{parentName:"td"},"id")," of submenus should still be unique across panel.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.commands"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"Array.<Object>")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"This object contains a list of key-value pairs where each key is the command id and                                 value is command's data whose type can be an object or function.                                 If a function, it is assumed to be ",Object(i.mdx)("inlineCode",{parentName:"td"},"run")," method (described below).                                 If an object, it can contain following properties but ",Object(i.mdx)("inlineCode",{parentName:"td"},"run")," is required.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.commands[].run"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"function")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"This is called when the command is invoked via menu entry. ",Object(i.mdx)("inlineCode",{parentName:"td"},"this")," can be used                                      to access ",Object(i.mdx)("a",Object(d.a)({parentName:"td"},{href:"/uxp/uxp/reference-js/Modules/uxp/Entry%20Points/UxpCommandInfo/#uxpcommandinfo"}),"UxpCommandInfo")," object. This function can return a promise.                                      To signal failure, throw an exception or return a rejected promise.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entrypoints.commands[].cancel"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"function")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"(Not in 4.1) Reserved for future use.")))),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(d.a)({parentName:"pre"},{}),' const { entrypoints } = require("uxp"); \n entrypoints.setup({\n      plugin: {\n         create() {..},\n         destroy() {..}\n     },\n     panels: {\n         "panel1": {\n             create() {..},\n             show() {..},\n             hide() {..},\n             destroy() {..},\n             invokeMenu() {..},\n             menuItems: [\n                 {\n                     id: "signIn",\n                     label: "Sign In...",\n                     enabled: false,\n                     checked: false\n                     submenu: [\n                         { id: "submenu1", label: "submenu1", enabled: false, checked: false},\n                         { "submenu2" }\n                     ]\n                 },\n                 "-",  // separator.\n                 "Sign out",  // by default enabled, and the id will be same with the label.\n             ]\n         },\n         "panel2": {..}\n     },\n     commands: {\n         "command1": {\n             run() {..},\n             cancel() {..}\n         },\n         "command2": function(){..}\n     }\n });\n')),Object(i.mdx)("a",{name:"entrypoints-getpanel",id:"entrypoints-getpanel"}),Object(i.mdx)("h2",{id:"getpanelid"},"getPanel(id)"),Object(i.mdx)("p",null,"Get panel with specified id"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(i.mdx)("inlineCode",{parentName:"p"},"UxpPanelInfo")," - - Information about the associated panel or ",Object(i.mdx)("inlineCode",{parentName:"p"},"null")," if the panel with the requested ",Object(i.mdx)("inlineCode",{parentName:"p"},"id")," was not found.  "),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Param"),Object(i.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Type"),Object(i.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"id"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"String")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"panel id")))),Object(i.mdx)("a",{name:"entrypoints-getcommand",id:"entrypoints-getcommand"}),Object(i.mdx)("h2",{id:"getcommandid"},"getCommand(id)"),Object(i.mdx)("p",null,"Get command with specified id"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(i.mdx)("inlineCode",{parentName:"p"},"UxpCommandInfo")," - - Information about the associated command or ",Object(i.mdx)("inlineCode",{parentName:"p"},"null")," if the command with the requested ",Object(i.mdx)("inlineCode",{parentName:"p"},"id")," was not found.  "),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Param"),Object(i.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Type"),Object(i.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"id"),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"String")),Object(i.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"command id")))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-uxp-reference-js-modules-uxp-entry-points-entry-points-md-9ac4a8006291063ec6b9.js.map
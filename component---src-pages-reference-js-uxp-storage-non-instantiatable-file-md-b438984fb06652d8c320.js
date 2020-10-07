(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{Uao2:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n,d=a("wx14"),r=a("zLVn"),m=(a("q1tI"),a("7ljp")),l=a("LHWr"),i=(a("qKvR"),{}),c=(n="JsDocParameters",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(m.mdx)("div",e)}),b={_frontmatter:i},o=l.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(m.mdx)(o,Object(d.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("a",{name:"module-storage-file",id:"module-storage-file"}),Object(m.mdx)("h1",{id:"file"},"File"),Object(m.mdx)("p",null,"Represents a file on a file system. Provides methods for reading from and\nwriting to the file. You'll never instantiate a ",Object(m.mdx)("inlineCode",{parentName:"p"},"File")," directly; instead\nyou'll get access via a ",Object(m.mdx)("a",Object(d.a)({parentName:"p"},{href:"#module-storage-filesystemprovider"}),"FileSystemProvider"),"."),Object(m.mdx)(c,{mdxType:"JsDocParameters"}),Object(m.mdx)("a",{name:"module-storage-file-isfile",id:"module-storage-file-isfile"}),Object(m.mdx)("h2",{id:"isfile"},"isFile"),Object(m.mdx)("p",null,"Indicates that this instance is a file."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(d.a)({parentName:"pre"},{className:"language-js"}),"if (anEntry.isFile) {\n    await anEntry.read();\n}\n")),Object(m.mdx)("a",{name:"module-storage-file-mode",id:"module-storage-file-mode"}),Object(m.mdx)("h2",{id:"mode--symbol"},"mode : ",Object(m.mdx)("inlineCode",{parentName:"h2"},"Symbol")),Object(m.mdx)("p",null,"Indicates whether this file is read-only or read-write. See ",Object(m.mdx)("a",Object(d.a)({parentName:"p"},{href:"readOnly"}),"readOnly")," and ",Object(m.mdx)("a",Object(d.a)({parentName:"p"},{href:"readWrite"}),"readWrite"),"."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(d.a)({parentName:"pre"},{className:"language-js"}),'if (aFile.mode === modes.readOnly) {\n    throw new Error("Can\'t write to a file opened as read-only.");\n}\n')),Object(m.mdx)("a",{name:"module-storage-file-read",id:"module-storage-file-read"}),Object(m.mdx)("h2",{id:"readoptions"},"read(options)"),Object(m.mdx)("p",null,"Reads data from the file and returns it. The file format can be specified\nwith the ",Object(m.mdx)("inlineCode",{parentName:"p"},"format")," option. If a format is not supplied, the file is assumed\nto be a text file using UTF8 encoding."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(m.mdx)("inlineCode",{parentName:"p"},"Promise.<(string\\|ArrayBuffer)>")," - the contents of the file  "),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Param"),Object(m.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Type"),Object(m.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Default"),Object(m.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"options"),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"any")),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null})),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"[options.format]"),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"Symbol")),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"formats.utf8")),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"The format of the file; see ",Object(m.mdx)("a",Object(d.a)({parentName:"td"},{href:"utf8"}),"utf8")," and ",Object(m.mdx)("a",Object(d.a)({parentName:"td"},{href:"binary"}),"binary"),".")))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(d.a)({parentName:"pre"},{className:"language-js"}),"const text = await myNovel.read();\n")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(d.a)({parentName:"pre"},{className:"language-js"}),"const data = await myNovel.read({format: formats.binary});\n")),Object(m.mdx)("a",{name:"module-storage-file-write",id:"module-storage-file-write"}),Object(m.mdx)("h2",{id:"writedata-options"},"write(data, options)"),Object(m.mdx)("p",null,"Writes data to a file, appending if desired. The format of the file\nis controlled via the ",Object(m.mdx)("inlineCode",{parentName:"p"},"format")," option, and defaults to UTF8."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Throws"),":"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"FileIsReadOnly")," if writing to a read-only file"),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"OutOfSpace")," If writing to the file causes the file system to exceed the available space (or quota)")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Param"),Object(m.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Type"),Object(m.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Default"),Object(m.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"data"),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"string")," ","|"," ",Object(m.mdx)("inlineCode",{parentName:"td"},"ArrayBuffer")),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null})),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"the data to write to the file")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"options"),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"any")),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null})),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"[options.format]"),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"Symbol")),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"formats.utf8")),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"the format of the file; see ",Object(m.mdx)("a",Object(d.a)({parentName:"td"},{href:"utf8"}),"utf8")," and ",Object(m.mdx)("a",Object(d.a)({parentName:"td"},{href:"binary"}),"binary"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"[options.append]"),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"boolean")),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"false")),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"if ",Object(m.mdx)("inlineCode",{parentName:"td"},"true"),", the data is written to the end of the file")))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(d.a)({parentName:"pre"},{className:"language-js"}),'await myNovel.write("It was a dark and stormy night.\\n");\nawait myNovel.write("Cliches and tropes aside, it really was.", {append: true});\n')),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(d.a)({parentName:"pre"},{className:"language-js"}),"const data = new ArrayBuffer();\nawait aDataFile.write(data, {format: formats.binary});\n")),Object(m.mdx)("a",{name:"module-storage-file-isfile",id:"module-storage-file-isfile"}),Object(m.mdx)("h2",{id:"isfileentry"},"isFile(entry)"),Object(m.mdx)("p",null,"Determines if the entry is a file or not. This is safe to use even if the\nentry is ",Object(m.mdx)("inlineCode",{parentName:"p"},"null")," or ",Object(m.mdx)("inlineCode",{parentName:"p"},"undefined"),"."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(m.mdx)("inlineCode",{parentName:"p"},"boolean")," - if ",Object(m.mdx)("inlineCode",{parentName:"p"},"true"),", the entry is a file.  "),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Param"),Object(m.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Type"),Object(m.mdx)("th",Object(d.a)({parentName:"tr"},{align:null}),"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"entry"),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"any")),Object(m.mdx)("td",Object(d.a)({parentName:"tr"},{align:null}),"the entry to check")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-js-uxp-storage-non-instantiatable-file-md-b438984fb06652d8c320.js.map
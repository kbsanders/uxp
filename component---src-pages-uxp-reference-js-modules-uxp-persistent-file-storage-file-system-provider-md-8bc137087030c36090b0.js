(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{Bigp:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return m})),a.d(t,"default",(function(){return p}));var n,r=a("wx14"),l=a("zLVn"),i=(a("q1tI"),a("7ljp")),d=a("LHWr"),m=(a("qKvR"),{}),o=(n="JsDocParameters",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.mdx)("div",e)}),s={_frontmatter:m},c=d.a;function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.mdx)(c,Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("a",{name:"module-storage-filesystemprovider",id:"module-storage-filesystemprovider"}),Object(i.mdx)("h1",{id:"requireuxpstoragefilesystemprovider"},"require('uxp').storage.FileSystemProvider"),Object(i.mdx)("p",null,"Provides access to files and folders on a file system. You'll never\ninstantiate this directly; instead you'll use an instance of one that has\nalready been created for you by UXP."),Object(i.mdx)(o,{mdxType:"JsDocParameters"}),Object(i.mdx)("a",{name:"module-storage-filesystemprovider-isfilesystemprovider",id:"module-storage-filesystemprovider-isfilesystemprovider"}),Object(i.mdx)("h2",{id:"isfilesystemprovider"},"isFileSystemProvider"),Object(i.mdx)("p",null,"Indicates that this is a ",Object(i.mdx)("inlineCode",{parentName:"p"},"FileSystemProvider"),". Useful for type-checking."),Object(i.mdx)("a",{name:"module-storage-filesystemprovider-supporteddomains",id:"module-storage-filesystemprovider-supporteddomains"}),Object(i.mdx)("h2",{id:"supporteddomains"},"supportedDomains"),Object(i.mdx)("p",null,"An array of the domains this file system supports. If the file system can\nopen a file picker to the user's ",Object(i.mdx)("inlineCode",{parentName:"p"},"documents")," folder, for example, then\n",Object(i.mdx)("a",Object(r.a)({parentName:"p"},{href:"/uxp/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/domains/#module-storage-domains-userdocuments"}),"userDocuments")," will be in this list."),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'if (fs.supportedDomains.contains(domains.userDocuments)) {\n    console.log("We can open a picker to the user\'s documents.")\n}\n')),Object(i.mdx)("a",{name:"module-storage-filesystemprovider-getfileforopening",id:"module-storage-filesystemprovider-getfileforopening"}),Object(i.mdx)("h2",{id:"getfileforopeningoptions"},"getFileForOpening(options)"),Object(i.mdx)("p",null,"Gets a file (or files) from the file system provider for the purpose of\nopening them. Files are read-only."),Object(i.mdx)("p",null,"Multiple files can be returned if the ",Object(i.mdx)("inlineCode",{parentName:"p"},"allowMultiple")," option",Object(i.mdx)("inlineCode",{parentName:"p"},"is"),"true`."),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(i.mdx)("inlineCode",{parentName:"p"},"File")," ","|"," ",Object(i.mdx)("inlineCode",{parentName:"p"},"Array.<File>")," - based on allowMultiple is true or false, or empty if no file were selected.  "),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Param"),Object(i.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(i.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"options"),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"*")),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"[options.initialDomain]"),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"Symbol")),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"[options.types]"),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"Array.<string>")),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"[&#x27;.*&#x27;]")),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"array of file types that the file open picker displays.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"[options.initialLocation]"),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"File")," ","|"," ",Object(i.mdx)("inlineCode",{parentName:"td"},"Folder")),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"the initial location of the file picker. You can pass an existing file or folder entry to suggest the picker to start at this location. If this is a file entry then the method will pick its parent folder as initial location. This will override initialDomain option.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"[options.allowMultiple]"),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"boolean")),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"false")),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"if true, multiple files can be returned (as an array)")))),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const folder = await fs.getFolder({initialDomain = domains.userDocuments});\nconst file = await fs.getFileForOpening({initialLocation = folder});\nif (!file) {\n    // no file selected\n    return;\n}\nconst text = await file.read();\n")),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const files = await fs.getFileForOpening({allowMultiple: true, types: fileTypes.images});\nif (files.length === 0) {\n    // no files selected\n}\n")),Object(i.mdx)("a",{name:"module-storage-filesystemprovider-getfileforsaving",id:"module-storage-filesystemprovider-getfileforsaving"}),Object(i.mdx)("h2",{id:"getfileforsavingoptions"},"getFileForSaving(options)"),Object(i.mdx)("p",null,'Gets a file reference suitable for saving. The file is read-write. Any\nfile picker displayed will be of the "save" variety.'),Object(i.mdx)("p",null,"If the user attempts to save a file that doesn't exist, the file is\ncreated automatically."),Object(i.mdx)("p",null,"If the act of writing to the file would overwrite it, the file picker\nshould prompt the user if they are OK with that action. If not, the file\nshould not be returned."),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(i.mdx)("inlineCode",{parentName:"p"},"File")," - returns the selected file, or ",Object(i.mdx)("inlineCode",{parentName:"p"},"null")," if no file were selected.  "),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Param"),Object(i.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"options"),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"*")),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"[options.initialDomain]"),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"Symbol")),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"[options.types]"),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"Array.<string>")),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"array of valid file types that the user can choose to assign to a file.")))),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const [file] = await fs.getFileForSaving({ types = [ "txt" ]});\nif (!file) {\n    // no file selected, or the user didn\'t want to overwrite one they did select\n    return;\n}\nawait file.write("It was a dark and stormy night");\n')),Object(i.mdx)("a",{name:"module-storage-filesystemprovider-getfolder",id:"module-storage-filesystemprovider-getfolder"}),Object(i.mdx)("h2",{id:"getfolderoptions"},"getFolder(options)"),Object(i.mdx)("p",null,"Gets a folder from the file system via a folder picker dialog. The files\nand folders within can be accessed via ",Object(i.mdx)("a",Object(r.a)({parentName:"p"},{href:"/uxp/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/Folder/#module-storage-folder-getentries"}),"Folder#getEntries"),". Any\nfiles within are read-write."),Object(i.mdx)("p",null,"If the user dismisses the picker, ",Object(i.mdx)("inlineCode",{parentName:"p"},"null")," is returned instead."),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(i.mdx)("inlineCode",{parentName:"p"},"Folder")," - the selected folder or ",Object(i.mdx)("inlineCode",{parentName:"p"},"null")," if no folder is selected.  "),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Param"),Object(i.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"options"),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"any")),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"[options.initialDomain]"),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"Symbol")),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead.")))),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const folder = await fs.getFolder();\nconst myNovel = (await fs.getEntries()).filter(entry => entry.name.indexOf('novel') > 0);\nconst text = await myNovel.read();\n")),Object(i.mdx)("a",{name:"module-storage-filesystemprovider-gettemporaryfolder",id:"module-storage-filesystemprovider-gettemporaryfolder"}),Object(i.mdx)("h2",{id:"gettemporaryfolder"},"getTemporaryFolder()"),Object(i.mdx)("p",null,"Returns a temporary folder. The contents of the folder will be removed when\nthe extension is disposed."),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const temp = await fs.getTemporaryFolder();\n")),Object(i.mdx)("a",{name:"module-storage-filesystemprovider-getdatafolder",id:"module-storage-filesystemprovider-getdatafolder"}),Object(i.mdx)("h2",{id:"getdatafolder"},"getDataFolder()"),Object(i.mdx)("p",null,"Returns a folder that can be used for extension's data storage without user interaction.\nIt is persistent across host-app version upgrades."),Object(i.mdx)("a",{name:"module-storage-filesystemprovider-getpluginfolder",id:"module-storage-filesystemprovider-getpluginfolder"}),Object(i.mdx)("h2",{id:"getpluginfolder"},"getPluginFolder()"),Object(i.mdx)("p",null,"Returns an plugin's folder – this folder and everything within it are read only.\nThis contains all the Plugin related packaged assets."),Object(i.mdx)("a",{name:"module-storage-filesystemprovider-getfsurl",id:"module-storage-filesystemprovider-getfsurl"}),Object(i.mdx)("h2",{id:"getfsurl"},"getFsUrl()"),Object(i.mdx)("p",null,"Returns the fs url of given entry."),Object(i.mdx)("a",{name:"module-storage-filesystemprovider-getnativepath",id:"module-storage-filesystemprovider-getnativepath"}),Object(i.mdx)("h2",{id:"getnativepath"},"getNativePath()"),Object(i.mdx)("p",null,"Returns the platform native file system path of given entry."),Object(i.mdx)("a",{name:"module-storage-filesystemprovider-isfilesystemprovider",id:"module-storage-filesystemprovider-isfilesystemprovider"}),Object(i.mdx)("h2",{id:"isfilesystemproviderfs"},"isFileSystemProvider(fs)"),Object(i.mdx)("p",null,"Checks if the supplied object is a ",Object(i.mdx)("inlineCode",{parentName:"p"},"FileSystemProvider"),". It's safe to use even\nif the object is ",Object(i.mdx)("inlineCode",{parentName:"p"},"null")," or ",Object(i.mdx)("inlineCode",{parentName:"p"},"undefined"),". Useful for type checking."),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(i.mdx)("inlineCode",{parentName:"p"},"boolean")," - If ",Object(i.mdx)("inlineCode",{parentName:"p"},"true"),", the object is a file system provider  "),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Param"),Object(i.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"fs"),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"any")),Object(i.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"the object to check")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-uxp-reference-js-modules-uxp-persistent-file-storage-file-system-provider-md-8bc137087030c36090b0.js.map
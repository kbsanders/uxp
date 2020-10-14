(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{m9Be:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return j}));var n,r=a("wx14"),l=a("zLVn"),d=(a("q1tI"),a("7ljp")),m=a("LHWr"),c=(a("qKvR"),{}),b=(n="JsDocParameters",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(d.mdx)("div",e)}),i={_frontmatter:c},o=m.a;function j(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(d.mdx)(o,Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("a",{name:"module-storage-folder",id:"module-storage-folder"}),Object(d.mdx)("h1",{id:"requireuxpstoragefolder"},"require('uxp').storage.Folder"),Object(d.mdx)("p",null,"Represents a folder on a file system. You'll never instantiate this directly,\nbut will get it by calling ",Object(d.mdx)("a",Object(r.a)({parentName:"p"},{href:"/uxp/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/FileSystemProvider/#module-storage-filesystemprovider-gettemporaryfolder"}),"FileSystemProvider.getTemporaryFolder"),",\n",Object(d.mdx)("a",Object(r.a)({parentName:"p"},{href:"/uxp/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/FileSystemProvider/#module-storage-filesystemprovider-getfolder"}),"FileSystemProvider.getFolder"),",\nor via ",Object(d.mdx)("a",Object(r.a)({parentName:"p"},{href:"/uxp/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/Folder/#module-storage-folder-getentries"}),"Folder.getEntries"),"."),Object(d.mdx)(b,{mdxType:"JsDocParameters"}),Object(d.mdx)("a",{name:"module-storage-folder-isfolder",id:"module-storage-folder-isfolder"}),Object(d.mdx)("h2",{id:"isfolder"},"isFolder"),Object(d.mdx)("p",null,"Indicates that this instance is a folder. Useful for type checking."),Object(d.mdx)("a",{name:"module-storage-folder-getentries",id:"module-storage-folder-getentries"}),Object(d.mdx)("h2",{id:"getentries"},"getEntries()"),Object(d.mdx)("p",null,"Returns an array of entries contained within this folder."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(d.mdx)("inlineCode",{parentName:"p"},"Array.<Entry>")," - The entries within the folder.",Object(d.mdx)("br",{parentName:"p"}),"\n",Object(d.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const entries = await aFolder.getEntries();\nconst allFiles = entries.filter(entry => entry.isFile);\n")),Object(d.mdx)("a",{name:"module-storage-folder-createentry",id:"module-storage-folder-createentry"}),Object(d.mdx)("h2",{id:"createentryname-options"},"createEntry(name, options)"),Object(d.mdx)("p",null,"Creates an entry within this folder and returns the appropriate instance."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(d.mdx)("inlineCode",{parentName:"p"},"File")," ","|"," ",Object(d.mdx)("inlineCode",{parentName:"p"},"Folder")," - the created entry  "),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Param"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"name"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"string")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"the name of the entry to create")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"options"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"any")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"[options.type]"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"Symbol")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"types.file")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"Indicates which kind of entry to create. Pass ",Object(d.mdx)("a",Object(r.a)({parentName:"td"},{href:"/uxp/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/Folder/"}),"folder")," to create a new folder. Note that if the type is file then this method just create a file entry object and not the actual file on the disk. The file actually gets created when you call for eg: write method on the file entry object.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"[options.overwrite]"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"boolean")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"false")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"If ",Object(d.mdx)("inlineCode",{parentName:"td"},"true"),", the create attempt can overwrite an existing file")))),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const myNovel = await aFolder.createEntry("mynovel.txt");\n')),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const catImageCollection = await aFolder.createEntry("cats", {type = types.folder});\n')),Object(d.mdx)("a",{name:"module-storage-folder-createfile",id:"module-storage-folder-createfile"}),Object(d.mdx)("h2",{id:"createfilename-options"},"createFile(name, options)"),Object(d.mdx)("p",null,"Creates a File Entry object within this folder and returns the appropriate instance.\nNote that this method just create a file entry object and not the actual file on the disk.\nThe file actually gets created when you call for eg: write method on the file entry object."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(d.mdx)("inlineCode",{parentName:"p"},"File")," - the created file entry  "),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Param"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"name"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"string")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"the name of the file to create.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"options"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"any")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"[options.overwrite]"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"boolean")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"false")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"If ",Object(d.mdx)("inlineCode",{parentName:"td"},"true"),", the create attempt can overwrite an existing file")))),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const myNovelTxtFile = await aFolder.createFile("mynovel.txt");\n')),Object(d.mdx)("a",{name:"module-storage-folder-createfolder",id:"module-storage-folder-createfolder"}),Object(d.mdx)("h2",{id:"createfoldername"},"createFolder(name)"),Object(d.mdx)("p",null,"Creates a Folder within this folder and returns the appropriate instance."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(d.mdx)("inlineCode",{parentName:"p"},"Folder")," - the created folder entry object  "),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Param"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"name"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"string")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"the name of the folder to create.")))),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const myCollectionsFolder = await aFolder.createFolder("collections");\n')),Object(d.mdx)("a",{name:"module-storage-folder-getentry",id:"module-storage-folder-getentry"}),Object(d.mdx)("h2",{id:"getentryfilepath"},"getEntry(filePath)"),Object(d.mdx)("p",null,"Gets an entry from within this folder and returns the appropriate instance."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(d.mdx)("inlineCode",{parentName:"p"},"File")," ","|"," ",Object(d.mdx)("inlineCode",{parentName:"p"},"Folder")," - the fetched entry.  "),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Param"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"filePath"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"string")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"the name/path of the entry to fetch")))),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const myNovel = await aFolder.getEntry("mynovel.txt");\n')),Object(d.mdx)("a",{name:"module-storage-folder-renameentry",id:"module-storage-folder-renameentry"}),Object(d.mdx)("h2",{id:"renameentryentry-newname-options"},"renameEntry(entry, newName, options)"),Object(d.mdx)("p",null,"Renames an entry to a new name."),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Param"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"entry"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"Entry")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"the entry to rename")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"newName"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"string")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"the new name to assign")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"options"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"any")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"[options.overwrite]"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"boolean")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"false")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"if ",Object(d.mdx)("inlineCode",{parentName:"td"},"true"),", renaming can overwrite an existing entry")))),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'await myNovels.rename(myNovel, "myFantasticNovel.txt");\n')),Object(d.mdx)("a",{name:"module-storage-folder-isfolder",id:"module-storage-folder-isfolder"}),Object(d.mdx)("h2",{id:"isfolderentry"},"isFolder(entry)"),Object(d.mdx)("p",null,"Checks if an entry is a folder. Safe to use if entry might be ",Object(d.mdx)("inlineCode",{parentName:"p"},"null")," or\n",Object(d.mdx)("inlineCode",{parentName:"p"},"undefined"),". Useful for type checking."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(d.mdx)("inlineCode",{parentName:"p"},"boolean")," - if ",Object(d.mdx)("inlineCode",{parentName:"p"},"true"),", the entry is a folder  "),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Param"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"entry"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"any")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"the entry to check")))))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-uxp-reference-js-modules-uxp-persistent-file-storage-folder-md-1384c3b152d8e89219cd.js.map
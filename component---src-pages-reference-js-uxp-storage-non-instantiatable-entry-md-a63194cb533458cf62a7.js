(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{fJr8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return i}));var n=a("wx14"),r=a("zLVn"),m=(a("q1tI"),a("7ljp")),d=a("LHWr"),l=(a("qKvR"),{}),o={_frontmatter:l},c=d.a;function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(m.mdx)(c,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("a",{name:"module-storage-entry",id:"module-storage-entry"}),Object(m.mdx)("h2",{id:"entry"},"Entry"),Object(m.mdx)("p",null,"An ",Object(m.mdx)("inlineCode",{parentName:"p"},"Entry")," is the base class for ",Object(m.mdx)("inlineCode",{parentName:"p"},"File")," and ",Object(m.mdx)("inlineCode",{parentName:"p"},"Folder"),". You'll\ntypically never instantiate an ",Object(m.mdx)("inlineCode",{parentName:"p"},"Entry")," directly, but it provides\nthe common fields and methods that both ",Object(m.mdx)("inlineCode",{parentName:"p"},"File")," and ",Object(m.mdx)("inlineCode",{parentName:"p"},"Folder"),"\nshare."),Object(m.mdx)("a",{name:"new-module-storage-entry-new",id:"new-module-storage-entry-new"}),Object(m.mdx)("h3",{id:"entryname-provider-id"},"Entry(name, provider, id)"),Object(m.mdx)("p",null,"Creates an instance of Entry."),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"*"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"provider"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"*"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"*"))))),Object(m.mdx)("a",{name:"module-storage-entry-isentry",id:"module-storage-entry-isentry"}),Object(m.mdx)("h3",{id:"isentry--boolean"},"isEntry : ",Object(m.mdx)("inlineCode",{parentName:"h3"},"boolean")),Object(m.mdx)("p",null,"Indicates that this instance is an ",Object(m.mdx)("inlineCode",{parentName:"p"},"Entry"),". Useful for type-checking."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"if (something.isEntry) {\n    return something.getMetadata();\n}\n")),Object(m.mdx)("a",{name:"module-storage-entry-isfile",id:"module-storage-entry-isfile"}),Object(m.mdx)("h3",{id:"isfile--boolean"},"isFile : ",Object(m.mdx)("inlineCode",{parentName:"h3"},"boolean")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Read only"),"\nIndicates that this instance is ",Object(m.mdx)("strong",{parentName:"p"},"not")," a ",Object(m.mdx)("inlineCode",{parentName:"p"},"File"),". Useful for type-\nchecking."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'if (!anEntry.isFile) {\n    return "This entry is not a file.";\n}\n')),Object(m.mdx)("a",{name:"module-storage-entry-isfolder",id:"module-storage-entry-isfolder"}),Object(m.mdx)("h3",{id:"isfolder--boolean"},"isFolder : ",Object(m.mdx)("inlineCode",{parentName:"h3"},"boolean")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Read only"),"\nIndicates that this instance is ",Object(m.mdx)("strong",{parentName:"p"},"not")," a folder. Useful for type-\nchecking."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'if (!anEntry.isFolder) {\n    return "This entry is not a folder.";\n}\n')),Object(m.mdx)("a",{name:"module-storage-entry-name",id:"module-storage-entry-name"}),Object(m.mdx)("h3",{id:"name--string"},"name : ",Object(m.mdx)("inlineCode",{parentName:"h3"},"string")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Read only"),"\nThe name of this entry. Read-only."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"console.log(anEntry.name);\n")),Object(m.mdx)("a",{name:"module-storage-entry-provider",id:"module-storage-entry-provider"}),Object(m.mdx)("h3",{id:"provider--filesystemprovider"},"provider : ",Object(m.mdx)("inlineCode",{parentName:"h3"},"FileSystemProvider")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Read only"),"\nThe associated provider that services this entry. Read-only."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'if (entryOne.provider !== entryTwo.provider) {\n    throw new Error("Providers are not the same");\n}\n')),Object(m.mdx)("a",{name:"module-storage-entry-url",id:"module-storage-entry-url"}),Object(m.mdx)("h3",{id:"url--string"},"url : ",Object(m.mdx)("inlineCode",{parentName:"h3"},"string")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Read only"),"\nThe url of this entry. You can use this url as input to other entities of the extension system like for eg: set as src attribute of a Image widget in UI. Read-only."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"console.log(anEntry.url);\n")),Object(m.mdx)("a",{name:"module-storage-entry-nativepath",id:"module-storage-entry-nativepath"}),Object(m.mdx)("h3",{id:"nativepath--string"},"nativePath : ",Object(m.mdx)("inlineCode",{parentName:"h3"},"string")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Read only"),"\nThe platform native file-system path of this entry. Read-only"),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"console.log(anEntry.nativePath);\n")),Object(m.mdx)("a",{name:"module-storage-entry-tostring",id:"module-storage-entry-tostring"}),Object(m.mdx)("h3",{id:"tostring"},"toString()"),Object(m.mdx)("p",null,"returns the details of the given entry like name, type and native path in a readable string format."),Object(m.mdx)("a",{name:"module-storage-entry-copyto",id:"module-storage-entry-copyto"}),Object(m.mdx)("h3",{id:"copytofolder-options"},"copyTo(folder, options)"),Object(m.mdx)("p",null,"Copies this entry to the specified ",Object(m.mdx)("inlineCode",{parentName:"p"},"folder"),"."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Throws"),":"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"EntryExists")," if the attempt would overwrite an entry and ",Object(m.mdx)("inlineCode",{parentName:"li"},"overwrite")," is ",Object(m.mdx)("inlineCode",{parentName:"li"},"false")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"PermissionDenied")," if the underlying file system rejects the attempt"),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"OutOfSpace")," if the file system is out of storage space")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"folder"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"Folder")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"the folder to which to copy this entry")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"options"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"*")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"[options.overwrite]"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"boolean")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"false")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"if ",Object(m.mdx)("inlineCode",{parentName:"td"},"true"),", allows overwriting existing entries")))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await someFile.copyTo(someFolder);\n")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await someFile.copyTo(someFolder, {overwrite: true});\n")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await someFolder.copyTo(anotherFolder, {overwrite: true});\n")),Object(m.mdx)("a",{name:"module-storage-entry-moveto",id:"module-storage-entry-moveto"}),Object(m.mdx)("h3",{id:"movetofolder-options"},"moveTo(folder, options)"),Object(m.mdx)("p",null,"Moves this entry to the target folder, optionally specifying a new name."),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"folder"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"Folder")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"the folder to which to move this entry")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"options"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"*")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"[options.overwrite]"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"boolean")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"false")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(m.mdx)("inlineCode",{parentName:"td"},"true")," allows the move to overwrite existing files")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"[options.newName]"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"string")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"If specified, the entry is renamed to this name")))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await someFile.moveTo(someFolder);\n")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await someFile.moveTo(someFolder, {overwrite: true});\n")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await someFolder.moveTo(anotherFolder, {overwrite: true});\n")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await someFile.moveTo(someFolder, {newName: 'masterpiece.txt'})\n")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await someFile.moveTo(someFolder, {newName: 'novel.txt', {overwrite: true})\n")),Object(m.mdx)("a",{name:"module-storage-entry-delete",id:"module-storage-entry-delete"}),Object(m.mdx)("h3",{id:"delete"},"delete()"),Object(m.mdx)("p",null,"Removes this entry from the file system. If the entry is a folder, all the\ncontents will also be removed."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await aFile.delete();\n")),Object(m.mdx)("a",{name:"module-storage-entry-getmetadata",id:"module-storage-entry-getmetadata"}),Object(m.mdx)("h3",{id:"getmetadata"},"getMetadata()"),Object(m.mdx)("p",null,"Returns this entry's metadata."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(m.mdx)("inlineCode",{parentName:"p"},"Promise.<EntryMetadata>"),Object(m.mdx)("br",{parentName:"p"}),"\n",Object(m.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const metadata = aFile.getMetadata();\n")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-js-uxp-storage-non-instantiatable-entry-md-a63194cb533458cf62a7.js.map

<a name="comment" id="comment"></a>

# window.Comment
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Comment  


<a name="new-comment-new" id="new-comment-new"></a>

## Comment(document, comment)
Creates an instance of Comment.


| Param | Type |
| --- | --- |
| document | `Document` | 
| comment | `string` | 



<a name="comment-nodename" id="comment-nodename"></a>

## nodeName : `string`
**Read only**


<a name="comment-nodetype" id="comment-nodetype"></a>

## nodeType : `number`
**Read only**


<a name="characterdata-data" id="characterdata-data"></a>

## data : `string`


<a name="characterdata-textcontent" id="characterdata-textcontent"></a>

## textContent : `string`


<a name="characterdata-nodevalue" id="characterdata-nodevalue"></a>

## nodeValue : `string`


<a name="characterdata-length" id="characterdata-length"></a>

## length : `number`
**Read only**


<a name="node-contenteditable" id="node-contenteditable"></a>

## contentEditable
**Read only**


<a name="node-isconnected" id="node-isconnected"></a>

## isConnected : `boolean`
**Read only**


<a name="node-parentnode" id="node-parentnode"></a>

## parentNode : `Node`
**Read only**


<a name="node-parentelement" id="node-parentelement"></a>

## parentElement : `Element`
**Read only**


<a name="node-firstchild" id="node-firstchild"></a>

## firstChild : `Node`
**Read only**


<a name="node-lastchild" id="node-lastchild"></a>

## lastChild : `Node`
**Read only**


<a name="node-previoussibling" id="node-previoussibling"></a>

## previousSibling : `Node`
**Read only**


<a name="node-nextsibling" id="node-nextsibling"></a>

## nextSibling : `Node`
**Read only**


<a name="node-firstelementchild" id="node-firstelementchild"></a>

## firstElementChild : `Node`
**Read only**


<a name="node-lastelementchild" id="node-lastelementchild"></a>

## lastElementChild : `Node`
**Read only**


<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

## previousElementSibling : `Node`
**Read only**


<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

## nextElementSibling : `Node`
**Read only**


<a name="node-childnodes" id="node-childnodes"></a>

## childNodes : `NodeList`
**Read only**


<a name="node-children" id="node-children"></a>

## children : `HTMLCollection`
**Read only**


<a name="node-ownerdocument" id="node-ownerdocument"></a>

## ownerDocument
**Read only**


<a name="node-attributes" id="node-attributes"></a>

## attributes
**Read only**


<a name="characterdata-substringdata" id="characterdata-substringdata"></a>

## substringData(offset, count)
**Returns**: `string`  

| Param | Type |
| --- | --- |
| offset | `*` | 
| count | `*` | 



<a name="characterdata-appenddata" id="characterdata-appenddata"></a>

## appendData(arg)

| Param | Type |
| --- | --- |
| arg | `string` | 



<a name="characterdata-insertdata" id="characterdata-insertdata"></a>

## insertData(offset, arg)

| Param | Type |
| --- | --- |
| offset | `number` | 
| arg | `string` | 



<a name="characterdata-deletedata" id="characterdata-deletedata"></a>

## deleteData(offset, count)

| Param | Type |
| --- | --- |
| offset | `number` | 
| count | `number` | 



<a name="characterdata-replacedata" id="characterdata-replacedata"></a>

## replaceData(offset, count, arg)

| Param | Type |
| --- | --- |
| offset | `number` | 
| count | `number` | 
| arg | `string` | 



<a name="node-haschildnodes" id="node-haschildnodes"></a>

## hasChildNodes()
**Returns**: `boolean`  


<a name="node-clonenode" id="node-clonenode"></a>

## cloneNode(deep)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| deep | `boolean` | 



<a name="node-appendchild" id="node-appendchild"></a>

## appendChild(child)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| child | `Node` | 



<a name="node-insertbefore" id="node-insertbefore"></a>

## insertBefore(child, before)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| child | `Node` | 
| before | `Node` | 



<a name="node-replacechild" id="node-replacechild"></a>

## replaceChild(newChild, oldChild)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| newChild | `Node` | 
| oldChild | `Node` | 



<a name="node-removechild" id="node-removechild"></a>

## removeChild(child)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| child | `Node` | 



<a name="node-remove" id="node-remove"></a>

## remove()


<a name="node-before" id="node-before"></a>

## before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 



<a name="node-after" id="node-after"></a>

## after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 



<a name="node-replacewith" id="node-replacewith"></a>

## replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 



<a name="node-contains" id="node-contains"></a>

## contains(node)

| Param | Type |
| --- | --- |
| node | `Node` | 



<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

## addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | `false` | 



<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

## removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | `false` | 



<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

## dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `*` | 


  
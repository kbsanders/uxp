
<a name="module-global-websocket" id="module-global-websocket"></a>

# window.WebSocket


<a name="new-module-global-websocket-new" id="new-module-global-websocket-new"></a>

## WebSocket(url, protocols)
**Throws**:

- `Error` if invalid url or protocols is passed


| Param | Type | Description |
| --- | --- | --- |
| url | `string` | The URL to which to connect; this should be the URL to which the WebSocket server will respond. |
| protocols | `string` \| `Array<string>` | Either a single protocol string or an array of protocol strings. |

**Example**  
```js
var ws = new WebSocket("ws://demos.kaazing.com/echo","xmpp");
```


<a name="module-global-websocket-protocol" id="module-global-websocket-protocol"></a>

## protocol ⇒ `string`
**Returns**: `string` - returns a string indicating the name of the sub-protocol the server selected;
this will be one of the strings specified in the protocols parameter when creating the WebSocket object.  


<a name="module-global-websocket-bufferedamount" id="module-global-websocket-bufferedamount"></a>

## bufferedAmount ⇒ `number`
**Returns**: `number` - returns the number of bytes of data that have been queued using calls to send() but not yet transmitted to the network.
This value resets to zero once all queued data has been sent.
This value does not reset to zero when the connection is closed;
if you keep calling send(), this will continue to climb. Read only  


<a name="module-global-websocket-binarytype" id="module-global-websocket-binarytype"></a>

## binaryType

| Param | Type | Description |
| --- | --- | --- |
| data | `string` | A string indicating the type of binary data being transmitted by the connection. This should be either "blob" if DOM Blob objects are being used or "arraybuffer" if ArrayBuffer objects are being used. |



<a name="module-global-websocket-binarytype" id="module-global-websocket-binarytype"></a>

## binaryType ⇒ `string`
**Returns**: `string` - returns the string indicating the binary data type.  


<a name="module-global-websocket-send" id="module-global-websocket-send"></a>

## send(data)
Enqueues the specified data to be transmitted to the other end over the WebSocket connection,
increasing the value of bufferedAmount by the number of bytes needed to contain the data.
If the data can't be sent (for example, because it needs to be buffered but the buffer is full), the socket is closed automatically.


| Param | Type | Description |
| --- | --- | --- |
| data | `string` \| `ArrayBuffer` \| `ArrayBufferView` | Data to be sent |

**Example**  
```js
ws.send(new Float32Array([ 5, 2, 1, 3, 6, -1 ]))
```
**Example**  
```js
ws.send(new Int32Array([5,-1]).buffer)
```


<a name="module-global-websocket-close" id="module-global-websocket-close"></a>

## close([code], [reason])
Closes the websocket connection

**Throws**:

- `Error` if invalid code or reason is passed


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [code] | `integer` | `1000` | A integer value as per https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close(). |
| [reason] | `string` | `&quot;​&quot;` | A human-readable string explaining why the connection is closing. |


  
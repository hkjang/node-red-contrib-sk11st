node-red-contrib-sk11st
================

Node-RED node for sk11st



## Install

To install the stable version use the `Menu - Manage palette - Install`
option and search for node-red-contrib-sk11st, or run the following
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-sk11st
    npm install node-red-contrib-iconv


## sample params
```js
msg = {};
msg.api = 'product';
msg.action = 'search';
msg.params = {
    'keyword' : '세탁기'
};
return msg;
```
## sample flows
```js
[{"id":"db12bc55.4a185","type":"sk11st","z":"2729d699.f7b26a","name":"","api":"","action":"","params":"","creds":"ed8d8d21.36666","x":410,"y":40,"wires":[["e1309fcf.cc14b"]]},{"id":"ba321df7.5d2fc","type":"inject","z":"2729d699.f7b26a","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":110,"y":40,"wires":[["10d470e4.d8ef7f"]]},{"id":"10d470e4.d8ef7f","type":"function","z":"2729d699.f7b26a","name":"","func":"msg = {};\nmsg.api = 'product';\nmsg.action = 'search';\nmsg.params = {\n    'keyword' : '세탁기'\n};\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":260,"y":40,"wires":[["db12bc55.4a185"]]},{"id":"c584406d.91bf9","type":"debug","z":"2729d699.f7b26a","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":1030,"y":80,"wires":[]},{"id":"aa0098c2.3d8708","type":"converter","z":"2729d699.f7b26a","name":"","from":"EUC-KR","x":560,"y":80,"wires":[["754e05ea.ae763c"]]},{"id":"e1309fcf.cc14b","type":"function","z":"2729d699.f7b26a","name":"","func":"msg.payload = msg.payload.data;\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":560,"y":40,"wires":[["aa0098c2.3d8708"]]},{"id":"754e05ea.ae763c","type":"xmljson","z":"2729d699.f7b26a","name":"Parse xml to json","x":730,"y":80,"wires":[["a0f6d79.32db828"]]},{"id":"a0f6d79.32db828","type":"json","z":"2729d699.f7b26a","name":"","property":"payload","action":"","pretty":false,"x":890,"y":80,"wires":[["c584406d.91bf9"]]},{"id":"ed8d8d21.36666","type":"sk11stKey","z":"","name":""}]
```


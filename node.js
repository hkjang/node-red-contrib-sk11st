const sk11st = require("sk11st");
module.exports = function (RED) {
    function FunctionNode(n) {
        RED.nodes.createNode(this, n);
        if (RED.nodes.getNode(n.creds)){
            this.appKey = RED.nodes.getNode(n.creds).credentials.appKey;
        } else {
            this.appKey = "";
        }
        var node = this;
        this.name = n.name;

        for (var key in n) {
            node[key] = n[key] || "";
        }
        this.on('input', function (msg) {
            for (var i in msg) {
                if (i !== 'req' | i !== 'res' | i !== 'payload' | i !== 'send' | i !== '_msgid') {
                    node[i] = node[i] || msg[i];
                }
            }
            if(node.params === '' | typeof node.params === 'undefined'){
                node.params = {};
            }
            // node.error(node.api);
            // node.error(node.action);
            // node.error(node.appKey);
            // node.error(node.params);
            sk11st[node.api][node.action](node.appKey, node.params).then(response => {
                msg.payload = response;
                node.send(msg);
            });
            // node.send(msg);
        });
    }

    RED.nodes.registerType("sk11st", FunctionNode, {
        credentials: {
            appKey: {type:"text"}
        }
    });

    function sk11stKey(n){
        RED.nodes.createNode(this, n);
        this.appKey = n.appKey;
    }

    RED.nodes.registerType("sk11stKey", sk11stKey,{
        credentials: {
            appKey: {type:"text"}
        }
    });
};

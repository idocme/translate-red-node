module.exports = function (RED) {
    "use strict";
    var translate = require('@vitalets/google-translate-api');

    function GoogleTranslateNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        this.on('input', function (msg) {
            var conf = { to: config.to };
            var phrase = msg.payload + '';
            if (config.from) {
                if (msg.payload.to || config.to === 'prog') {
                    conf = { from: msg.payload.from, to: msg.payload.to }
                } else {
                    conf = { from: msg.payload.from, to: config.to }
                }
            }
            if (msg.payload.phrase) {
                phrase = msg.payload.phrase;
            }
            translate(phrase + '', conf).then(function (res) {
                msg.payload = res.text;
                node.send(msg);
            }).catch(function (err) {
                node.error(err);
            });
        });
    }

    RED.nodes.registerType("google-translate", GoogleTranslateNode);
};

# node-red-contrib-parse-gps

[![Travis (.com) branch](https://img.shields.io/travis/com/tmobile/node-red-contrib-parse-gps/main?style=flat-square)](https://travis-ci.com/tmobile/node-red-contrib-parse-gps) ![GitHub package.json version](https://img.shields.io/github/package-json/v/tmobile/node-red-contrib-parse-gps?style=flat-square) [![npm (scoped)](https://img.shields.io/npm/v/@tmus/node-red-contrib-parse-gps?style=flat-square)](https://www.npmjs.com/package/@tmus/node-red-contrib-parse-gps)
Parse GPS Data

> **Warning**: This Node-RED node has only been tested on the [Quectel EC25A](https://www.quectel.com/product/ec25.htm) module. If you find this node to work with other modules, or wish to contribute support for additional modules, let us know!

This node takes a `payload` of GPS data and parses it into a structured JSON object. Attach this to 
the corresponding Serial In node - recognized data will be converted to coordinate values, speed, and 
name values (msg.payload.name, msg.payload.lat, msg.payload.lon, msg.speed, msg.location.lat, 
msg.location.lon).

**Found this useful?** You might also like the [`node-red-contrib-enable-gps`](https://github.com/tmobile/node-red-contrib-enable-gps) node.

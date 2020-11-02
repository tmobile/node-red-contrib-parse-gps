/**
Copyright 2020 T-Mobile USA, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

See the LICENSE file for additional language around the disclaimer of warranties.
Trademark Disclaimer: Neither the name of “T-Mobile, USA” nor the names of
its contributors may be used to endorse or promote products
*/

module.exports = function(RED) {
    function ParseGPSNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var sdata = msg.payload.toString().split(",");
            if(sdata.includes("$GPRMC") && sdata[2]!="V"){
                var lat = sdata[3];
                var latdir = sdata[4];
                var lon = sdata[5];
                var londir = sdata[6];
                var speed = sdata[7];
                var latx = lat.split(".");
                var lathead = latx[0];
                var lattail = latx[1];
                var latdeg = lathead.slice(0,-2);
                var latmin = lathead.slice(-2).concat(".").concat(lattail);
                var latDD = parseFloat(latdeg)+(parseFloat(latmin)/60);
                var lonx = lon.split(".");
                var lonhead = lonx[0];
                var lontail = lonx[1];
                var londeg = lonhead.slice(0,-2);
                var lonmin = lonhead.slice(-2).concat(".").concat(lontail);
                var lonDD = parseFloat(londeg)+(parseFloat(lonmin)/60);
                if(latdir == 'S'){
                    latDD = latDD*(-1);
                }
                if(londir == 'W'){
                    lonDD = lonDD*(-1);
                }
                msg.payload=JSON.parse("{\"name\":\"GPS\",\"lat\":"+latDD.toString()+",\"lon\":"+lonDD.toString()+"}");
                msg.location=msg.payload;
                msg.speed=parseFloat(speed)*1.852;
            }
            node.send(msg);
        });
    }
    RED.nodes.registerType("parse-gps",ParseGPSNode);
}

import { Puppet } from './puppet';

class ReactPuppetClient {
    
    static connect(instance) {

        fetch('http://192.168.1.170:8080/HelloWorld', { headers: { 'Accept': 'text/html' } }).then(function (res) {

            if (res.ok) {
                res.text().then(function (text) {
                    console.log('Connecting to', "http://192.168.1.170:8080" + text);
                    var defaultLocalVersionPath = "/_ver#c$";
                    var defaultRemoteVersionPath = "/_ver#s";
                    instance.puppet = new Puppet({
                        remoteUrl: "http://192.168.1.170:8080" + text, ot: true, localVersionPath: defaultLocalVersionPath,
                        remoteVersionPath: defaultRemoteVersionPath, useWebSocket: true, usePolling: false, callback: function (obj) {
                            instance.puppetObj = obj;
                            instance.puppetObj.Save$ = 1;
                            console.log('Initial object is: ', obj);
                            console.log('Connected to', "http://192.168.1.170:8080" + text);
                        }
                    });
                    instance.puppet.on('patch-applied', instance.updateHappened.bind(instance));
                });
            }
        });
    }
}
export default ReactPuppetClient;
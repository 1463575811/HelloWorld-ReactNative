import { Puppet } from './puppet';

class ReactPuppetClient {

    static connect(instance, onLoad) {
        console.log('Connecting to', "http://192.168.1.170:8080/HelloWorld");
        var defaultLocalVersionPath = "/_ver#c$";
        var defaultRemoteVersionPath = "/_ver#s";
        instance.puppet = new Puppet({
            remoteUrl: "http://192.168.1.170:8080/HelloWorld", ot: true, localVersionPath: defaultLocalVersionPath,
            remoteVersionPath: defaultRemoteVersionPath, useWebSocket: true, usePolling: false, callback: function (obj) {
                instance.puppetObj = obj;
                instance.puppetObj.Save$ = 1;
                console.log('Connected to', "http://192.168.1.170:8080/HelloWorld");
                onLoad();
            }
        });
        instance.puppet.on('patch-applied', instance.updateHappened.bind(instance));
    }
}
export default ReactPuppetClient;
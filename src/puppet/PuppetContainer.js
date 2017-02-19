import { Puppet } from './puppet';
import { resetState } from '../actions';

const PuppetContainer = (store) => {
        var defaultLocalVersionPath = "/_ver#c$";
        var defaultRemoteVersionPath = "/_ver#s";
        let puppet = new Puppet({
            remoteUrl: "http://192.168.1.170:8080/HelloWorld", ot: true, localVersionPath: defaultLocalVersionPath,
            remoteVersionPath: defaultRemoteVersionPath, useWebSocket: true, usePolling: false, callback: function (obj) {
                store.dispatch(resetState(obj))
            }
        });
        //instance.puppet.on('patch-applied', );
    }

export default PuppetContainer;
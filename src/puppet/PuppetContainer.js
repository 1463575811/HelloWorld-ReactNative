import { Puppet } from "./puppet";
import { resetState } from "../actions";

const PuppetContainer = (store, onConnected) => {
  var defaultLocalVersionPath = "/_ver#c$";
  var defaultRemoteVersionPath = "/_ver#s";
  let puppet = new Puppet({
    remoteUrl: "http://192.168.1.170:8080/HelloWorld",
    ot: true,
    localVersionPath: defaultLocalVersionPath,
    remoteVersionPath: defaultRemoteVersionPath,
    useWebSocket: true,
    usePolling: false,
    callback: function(obj) {
      store.dispatch(resetState(obj));
      store.subscribe(() => {
        let newState = store.getState();
        for (let key in newState) {
          if (newState.hasOwnProperty(key)) obj[key] = newState[key];
        }
        puppet.observer && puppet.observer.touch();
      });
      puppet.on("patch-applied", () => store.dispatch(resetState(puppet.obj)));
      onConnected();
    }
  });
  return puppet;
};

export default PuppetContainer;

import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';
var storage=new Storage({
  size:1000,
  storageBackend:AsyncStorage,
  defaultExpires:1000*60*60*24,
  enableCache:true,
});

global.storage = storage;

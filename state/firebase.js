import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC3-Mn-jUF07cjiIz9-FV4ZrA9BP5ifX4",
  authDomain: "onemex-8d535.firebaseapp.com",
  databaseURL: "https://onemex-8d535.firebaseio.com",
  projectId: "onemex-8d535",
  storageBucket: "onemex-8d535.appspot.com",
  messagingSenderId: "125184474941",
  appId: "1:125184474941:web:bb4e8d84006a4fef"
};

let docCart, db; 
let initialized = false;

const init = () => {
    if (initialized) return
    firebase.initializeApp(firebaseConfig);
    firebase.auth();
    db = firebase.firestore();
    // db.settings({
    //   cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
    // });
    // db.enablePersistence();
    initialized = true;
    docCart = db.collection("cart").doc("sams");
}

const sync = cb => {
    init();
    cb();
};

init();

export { docCart, sync, db };

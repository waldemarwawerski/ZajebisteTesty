import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from "firebase/database";

const apiKeys = {
  FirebaseConfig: {
    apiKey: "AIzaSyDNE0LIl1fCajP-7PWXGBIKpyKCyxvIT0c",
    authDomain: "loriinitribes.firebaseapp.com",
    databaseURL:
      "https://loriinitribes-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "loriinitribes",
    storageBucket: "loriinitribes.appspot.com",
    messagingSenderId: "897777474320",
  },
};

const app = initializeApp(apiKeys.FirebaseConfig);
const database = getDatabase(app);


const starCountRef = ref(database, "/");


const getData = new Promise(function(resolve, reject){
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    resolve(data);
  });
});






export {getData};

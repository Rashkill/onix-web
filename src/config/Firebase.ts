import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: `${import.meta.env.VITE_APP_NAME}.firebaseapp.com`,
  projectId: `${import.meta.env.VITE_APP_NAME}`,
  storageBucket: `${import.meta.env.VITE_APP_NAME}.appspot.com`,
  messagingSenderId: "550822480106",
  appId: "1:550822480106:web:c2abbeb7c142a9b4a8ef93",
  // value: `https://${
  //   import.meta.env.VITE_APP_NAME
  // }-default-rtdb.firebaseio.com/`,
};

export default class Firebase {
  static App = initializeApp(firebaseConfig);
}

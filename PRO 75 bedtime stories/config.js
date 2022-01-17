import firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBzyAVP8wYYajROoh7i-JZx49Llfh40M3M",
  authDomain: "bedtime-stories-3693d.firebaseapp.com",
  projectId: "bedtime-stories-3693d",
  storageBucket: "bedtime-stories-3693d.appspot.com",
  messagingSenderId: "979060188784",
  appId: "1:979060188784:web:2faebc2c96af8d4026b6b5"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()

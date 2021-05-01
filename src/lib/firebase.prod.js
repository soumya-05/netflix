import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
//import { seedDatabase } from '../seed'

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBV6k5sTr5n57fkiRmw1nyRGJBZ6hWYXaQ',
  authDomain: 'netflix-clone-4dabc.firebaseapp.com',
  projectId: 'netflix-clone-4dabc',
  storageBucket: 'netflix-clone-4dabc.appspot.com',
  messagingSenderId: '1017355783490',
  appId: '1:1017355783490:web:5b61a7cf26c67cbc448cdb',
  measurementId: 'G-PYEYZB2ZQD',
}

const firebase = Firebase.initializeApp(config)
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data
//seedDatabase(firebase)
export { firebase }

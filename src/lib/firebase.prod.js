import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
//import { seedDatabase } from '../seed'

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
}

const firebase = Firebase.initializeApp(config)
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data
//seedDatabase(firebase)
export { firebase }

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyBwaRGP3kJ6yUvEfGD5bllv8BhXu5zF5_I',
	authDomain: 'hnfin-c35a4.firebaseapp.com',
	projectId: 'hnfin-c35a4',
	storageBucket: 'hnfin-c35a4.firebasestorage.app',
	messagingSenderId: '961809135204',
	appId: '1:961809135204:web:6e494e5fb705e90b6fd171',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { app, auth, db }

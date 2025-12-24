import { initializeApp } from 'firebase/app'
import {
	createUserWithEmailAndPassword,
	FacebookAuthProvider,
	getAuth,
	GithubAuthProvider,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth'
import {
	collection,
	doc,
	getDoc,
	getFirestore,
	onSnapshot,
	query,
	serverTimestamp,
	setDoc,
	where,
} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyBwaRGP3kJ6yUvEfGD5bllv8BhXu5zF5_I',
	authDomain: 'hnfin-c35a4.firebaseapp.com',
	projectId: 'hnfin-c35a4',
	storageBucket: 'hnfin-c35a4.firebasestorage.app',
	messagingSenderId: '961809135204',
	appId: '1:961809135204:web:0b4b79c4502b76886fd171',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)

// auth providers
const githubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider()
const googleProvider = new GoogleAuthProvider()

export {
	auth,
	collection,
	createUserWithEmailAndPassword,
	db,
	doc,
	facebookProvider,
	getDoc,
	githubProvider,
	googleProvider,
	onAuthStateChanged,
	onSnapshot,
	query,
	serverTimestamp,
	setDoc,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
	where,
}

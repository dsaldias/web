import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
var auth = getAuth(initializeApp({
	apiKey: "AIzaSyBmi5YVYzUezal_pvZA8QNlkEFKLDFLcOA",
	authDomain: "autentificador-994.firebaseapp.com",
	projectId: "autentificador-994",
	storageBucket: "autentificador-994.appspot.com",
	messagingSenderId: "944733909164",
	appId: "1:944733909164:web:a2859e077fd7bae0bc6f09",
	measurementId: "G-YD8VEM3LQW"
}));
auth.languageCode = "es";
var provider = new GoogleAuthProvider();
var loginGoogle = async () => {
	await signOut(auth);
	const res = await signInWithPopup(auth, provider).then((d) => d).catch((e) => e);
	console.log("resss", res);
	if (res && res.user) {
		const user = res.user;
		return {
			user: {
				nombres: user.displayName,
				celular: user.phoneNumber,
				correo: user.email,
				username: user.uid,
				password: user.uid
			},
			err: null
		};
	} else {
		const error = res;
		const errorCode = error.code;
		const errorMessage = error.message;
		const email = error.customData.email;
		const credential = GoogleAuthProvider.credentialFromError(error);
		console.log("rrrrrrrr", errorCode);
		console.log("rrrrrrrr", credential);
		console.log("rrrrrrrr", errorMessage);
		console.log("rrrrrrrr", email);
		return {
			user: null,
			err: errorMessage
		};
	}
};
//#endregion
export { loginGoogle };

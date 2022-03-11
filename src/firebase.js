import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA3WIUBijdccD1u0FJ4N6kd80XU61a_wdw",
  authDomain: "drive-clone-312ab.firebaseapp.com",
  projectId: "drive-clone-312ab",
  storageBucket: "drive-clone-312ab.appspot.com",
  messagingSenderId: "498615028170",
  appId: "1:498615028170:web:aba1e42d74afee0a73a733"
}

const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()
export default app

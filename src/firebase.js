// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJjhFx0iMk6kQYSJbRcgrF9YaaAz4UfHE",
    authDomain: "amhi-zadkari-2.firebaseapp.com",
    databaseURL: "https://amhi-zadkari-2-default-rtdb.firebaseio.com",
    projectId: "amhi-zadkari-2",
    storageBucket: "amhi-zadkari-2.appspot.com",
    messagingSenderId: "521038407125",
    appId: "1:521038407125:web:3ae588dad998cd1036495c",
    measurementId: "G-3DY80596CL",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export function getEvents() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Events`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                var jsonData = JSON.stringify(snapshot.val());
                localStorage.setItem("events", jsonData);
            } else {
                console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

import { initializeApp } from "firebase/app";
import { getDatabase, ref as dbRef, set, get } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const storage = getStorage(app);


export async function uploadImage({file, id, category}){
  const imageRef = storageRef(storage, `images/${category}/${id}`)
  return uploadBytes(imageRef, file).then((snapshot) => 
    getDownloadURL(snapshot.ref)).then((downloadURL) => {
      return downloadURL;
    })
}

export async function addImageWork({ list, preViewImageURL,imageURL, id }) {
  return set(dbRef(database, `images/${id}`), {
    ...list,
    id,
    image: imageURL,
    previewimage : preViewImageURL,
    description: list.description.split(",")
  });
}

export async function getImageWork(){
  return get(dbRef(database, 'images')).then((snapshot) => {
    if(snapshot.exists()) {
      return Object.values(snapshot.val())
    }
    return [];
  })
}
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const fetchBlogs = async () => {
  const querySnapshot = await getDocs(collection(db, "blogs"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
};

fetchBlogs();
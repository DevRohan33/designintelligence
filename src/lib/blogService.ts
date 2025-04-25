import { 
    collection, 
    doc, 
    getDocs, 
    getDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc,
    query,
    where 
  } from 'firebase/firestore';
  import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
  import { db, storage } from '@/firebase';
  import { BlogPost } from '@/types/blog';
  import { CollectionReference, Query } from 'firebase/firestore';
  
  const blogsCollection = collection(db, "blogs");
  
  export const getBlogs = async (includeDrafts = false): Promise<BlogPost[]> => {
    let queryRef : CollectionReference | Query =  blogsCollection;
    
    if (!includeDrafts) {
      queryRef = query(blogsCollection, where("isDraft", "==", false));
    }
  
    const snapshot = await getDocs(queryRef);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as BlogPost));
  };
  
  export const getBlogById = async (id: string): Promise<BlogPost | null> => {
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } as BlogPost : null;
  };
  
  export const createBlog = async (blogData: Omit<BlogPost, 'id'>): Promise<string> => {
    const docRef = await addDoc(blogsCollection, {
      ...blogData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  };
  
  export const updateBlog = async (id: string, blogData: Partial<BlogPost>): Promise<void> => {
    await updateDoc(doc(db, "blogs", id), {
      ...blogData,
      updatedAt: new Date()
    });
  };
  
  export const uploadImage = async (file: File): Promise<string> => {
    const storageRef = ref(storage, `blog-images/${Date.now()}-${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  };
  export const deleteBlog = async (id: string | number) => {
    const blogRef = doc(db, "blogs", id.toString());
    await deleteDoc(blogRef);
  }
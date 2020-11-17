import { useState, useEffect } from "react";

import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = projectFirestore //unsub: unsubscribe 
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      }); // this returns unsubscribe from the collection function!!!


      return () => unsub(); //cleanup function : 사진을 불러오고 ImageGrid comp에서 쓰이면 더이상 필요없어지기 때문에 클린업 함수를 만든다.
  }, [collection]);

  return { docs };
};

export default useFirestore;

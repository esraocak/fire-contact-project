import { getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";
import { useEffect, useState } from "react";
import firebase from "./firebase";
import Toastify from "./toastify";

//! Create user info

export const AddUser = (info) => {
  const db = getDatabase(firebase); //* database açıp bu benim databasim diyoruz bu ve alttaki satırda firebase firebase.js den export users da firebase de verdiğimiz isim
  const userRef = ref(db,"users/");
  const newUserRef= push (userRef);
  set(newUserRef, {
    username:info.username,
    phoneNumber:info.phoneNumber,
    gender:info.gender,
  })
  console.log("AddUser a bilgiler kaydedildi")
}

//! Read info

export const useFetch = () => {
    const [isloading, setIsloading] = useState(true)
    const [contactList, setContactList] = useState()
    useEffect(() => {
        const db = getDatabase(firebase);
        const userRef = ref(db,"users/");

        onValue(userRef,(snapshot) => {
            const data = snapshot.val();
            const userArray=[]
            
            for (let id in data){
                userArray.push({id,...data[id]})
            }
            setContactList(userArray) //*gelen veri çok olduğu için userArray arrayini oluşturup for,push ile verileri içine attık arrayı dışarda kullanabilmek için statede tuttuk
            setIsloading(false)
        })
    }, [])
    return {isloading,contactList}
}

//! Delete info item

export const DeleteUser = (id) =>{
    const db = getDatabase(firebase);
    // const userRef = ref(db,"users/");
    remove(ref(db,"users/"+id))
    Toastify("Deleted Successfully")

}

//! Update user

export const UpdateUser= (info) =>{
    const db = getDatabase(firebase);
    const userRef = ref(db,"users/");

    const updates = {};

    updates["users/"+info.id]=info

    return update(ref(db), updates);

}
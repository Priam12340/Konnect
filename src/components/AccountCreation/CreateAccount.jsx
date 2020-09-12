import React, { useState } from "react";
import Interests from './Interests';
import './CreateAccount.scss';
import { useFirebase, useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from 'react-redux';

const CreateAccount = (props) => {

  const firebase = useFirebase();
  const storageRef = firebase.storage().ref();


  useFirestoreConnect([
    { collection: 'interests' } // or 'interests'
  ])

  const interestsObj = useSelector((state) => state.firestoreReducer.ordered.interests)

  // eslint-disable-next-line
  function setImgRefInFirestore() {
    // Create a reference under which you want to list
    var listRef = storageRef.child('interests');

    // Find all the prefixes and items.
    listRef.listAll().then(function (res) {
      console.log("Res ", res);

      res.prefixes.forEach(function (folderRef) {
        console.log("folderRef ", folderRef);

        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach(function (itemRef) {
        // All the items under listRef.
        const fileRef = storageRef.child(itemRef.fullPath);
        fileRef.getDownloadURL().then(function (url) {
          // Insert url into an <img> tag to "download"
          console.log("Showing download url ", url);
        }).catch(function (error) {

          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/object-not-found':
              // File doesn't exist
              break;

            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;

            case 'storage/canceled':
              // User canceled the upload
              break;

            case 'storage/unknown':
              // Unknown error occurred, inspect the server response
              break;

            default :
              break;
          }
        });

      });
    }).catch(function (error) {
      // Uh-oh, an error occurred!
    });
  }


  // eslint-disable-next-line
  const [interests, setInterests] = useState(interestsObj);

  function persistDetails(interests) {
    console.log("Showing interests ", interests);
    setInterests(interests);
  };

  return (
    <Interests className="CreateAccount"
      interests={interestsObj}
      setInterests={setInterests}
      persistDetails={persistDetails} />
  );

}

export default CreateAccount;
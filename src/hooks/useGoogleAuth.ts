import React, { useState } from "react";
import { signInWithPopup } from "@firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { User } from "../types";

export default function useGoogleAuth() {
  const [user, setUser] = useState<User | null>(null);

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;

        setUser({
          id: user.uid,
          name: user.displayName,
          pictureUrl: user.photoURL,
        });
      })
      .catch((error) => console.error("!!! error: ", error));
  };

  return { user, signInWithGoogle };
}

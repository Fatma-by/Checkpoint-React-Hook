import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import { useNavigate } from "react-router-dom";


function Annonce() {
  const push = useNavigate();

  function decodeUrl(encodedString) {
    try {
      return decodeURIComponent(encodedString);
    } catch (error) {
      // If decoding fails, return the original string
      console.error("Error decoding URL:", error);
      return encodedString;
    }
  }

  return (
    <>
    <div>
      {" "}
      <video controls>
        <source
          src={decodeUrl(window.location.href.split("annonce?annonce=")[1])}
          type="video/mp4"
        />
        <p>
          Votre navigateur ne prend pas en charge les vidéos HTML5. Voici
          <a href="myVideo.mp4">un lien pour télécharger la vidéo</a>.
        </p>
      </video>
    </div>
    <button
    onClick={() => {
      push("/");
    }}
  >
    Back home
  </button>
  </>
  );
  
}

export default Annonce;

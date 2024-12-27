import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const LoginPage = ({}) => {
  //*Butona tıklama anında
  const handleClick = () => {
    //* Google ile oturum aç
    signInWithPopup(auth, provider).catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Chat Odası</h1>
        <p>Devam Etmek İçin Giriş Yapınız...</p>

        <button onClick={handleClick}>
          <img src="/google.png" alt="google-icon" width={30} />
          <span>Google ile Gir</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import ChatPage from "./pages/ChatPage";

const App = () => {
  //* Kullanıcının Yetkisi var mı
  const [isAuth, setIsAuth] = useState(false);

  //* Hangi odaya girildiği state */

  const [room, setRoom] = useState(null);

  useEffect(() => {
    //* Kullanıcının oturum durumu her değiştiğinde güncel veriyi çeker
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user ? true : false);
    });
  }, []);

  //*Yetkisi yoksa LoginPage ekrana bas
  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} />;

  //*Yetkisi varsa oda seçme sayfasını ekrana bas
  return (
    <div className="container">
      {room ? (
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        <RoomPage setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;

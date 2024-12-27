import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Roompage = ({ setRoom }) => {
  //* Form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    //* İnputtaki veriyi al
    const room = e.target[0].value.toLowerCase();

    //* Seçili oda state'ini güncelle
    setRoom(room);
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Gireceksiniz</p>
      <input type="text" placeholder="örn:haftasonu" required />
      <button>Odaya Gir</button>

      <button onClick={() => signOut(auth)}>Çıkış Yap</button>
    </form>
  );
};

export default Roompage;

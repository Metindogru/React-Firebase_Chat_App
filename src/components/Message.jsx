import { auth } from "../firebase";
import generateColor from "../utils/generateColor";

const Message = ({ data }) => {
  //* Mesajı oturumu açık o kullanıcı attıysa : sağ

  if (auth.currentUser.uid === data.author.id) {
    return <p className="msg-user">{data.text}</p>;
  }
  //* Mesajı farklı bir kullanıcı attıysa : sol

  return (
    <div className="msg-other">
      <div>
        <img src={data.author.photo} alt="" />
      </div>
      <div>
        <span
          style={{ color: generateColor(data.author.id, data.author.name) }}
        >
          {data.author.name}
        </span>

        <p className="msg-text">{data.text} </p>
      </div>
    </div>
  );
};

export default Message;

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./StreamChat.css";
import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpeg";
import img3 from "../../assets/images/img-3.jpeg";
import img4 from "../../assets/images/img-4.jpg";
import img5 from "../../assets/images/img-5.jpeg";
import img6 from "../../assets/images/img-6.jpeg";

const allUsers = [
  {
    id: 1122,
    name: "John Serriy",
    img: img1,
    comment: "How are you?",
  },
  {
    id: 1122,
    name: "Rakibul Islam",
    img: img2,
    comment: "Excellent vedio...",
  },
  {
    id: 1122,
    name: "Anisur Rahman",
    img: img3,
    comment: "interested too...",
  },
  {
    id: 1122,
    name: "Shimanta Barua",
    img: img5,
    comment: "Excellent vedio ...",
  },
];
// import { StreamChat } from "stream-chat";
// import {
//   Chat,
//   Channel,
//   ChannelHeader,
//   MessageInput,
//   MessageInputSmall,
//   VirtualizedMessageList,
//   Window,
// } from "stream-chat-react";

// import "stream-chat-react/dist/css/index.css";

// const chatClient = StreamChat.getInstance("njrju6gwq3c3");
// const userToken =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic3VwZXItZnJvZy0yIn0.WFuTlR62u4p1bTWBk48HEPAO9486XiHq9PjAKA5UbgI";

// chatClient.connectUser(
//   {
//     id: "super-frog-2",
//     name: "super-frog-2",
//     image: "https://getstream.io/random_png/?id=super-frog-2&name=super-frog-2",
//   },
//   userToken
// );

// const channel = chatClient.channel("livestream", "spacex", {
//   image: "https://goo.gl/Zefkbx",
//   name: "SpaceX launch discussion",
// });

const StreamChatMain = () => {
  const [comment, setComment] = useState("");

  const [users, setUsers] = useState(allUsers);

  const handleInputText = (e) => {
    setComment(e.target.value);
  };
  const handleComment = (e) => {
    const newUser = {
      id: 1122,
      name: "Rakibul Islam",
      img: img4,
      comment: comment,
    };
    setUsers([...users, newUser]);

    e.preventDefault();
  };
  return (
    <Container fluid className="chat-box">
      <div
        style={{ height: "100%", flexGrow: 1 }}
        className="d-flex flex-column"
      >
        <div>
          <h5 className="pink mb-3">Top Gifters</h5>
          <div className="d-flex">
            {users.slice(0, 6).map((user) => (
              <div>
                <img
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "none",
                    borderRadius: "50%",
                  }}
                  className="mx-1"
                  src={user.img}
                  alt=""
                />
              </div>
            ))}
            <p
              style={{
                marginLeft: "15px",
                marginRight: "10px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              see more
            </p>
          </div>
        </div>
        <hr style={{ color: "gray", height: "1px" }} />
        <div className="chat-main" style={{ flexGrow: 1 }}>
          <div className="users">
            {users.map((user) => (
              <div className="d-flex my-4">
                <img
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "none",
                    borderRadius: "50%",
                  }}
                  src={user.img}
                  alt=""
                />
                <div
                  className="mx-2 pink"
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  {`${user.name} :`}
                </div>
                <p>{user?.comment}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex align-items-center ">
          <form onSubmit={handleComment} className="w-100 d-flex">
            <input
              onChange={handleInputText}
              style={{ width: "100%" }}
              className="chat-input mx-2"
              type="text"
              placeholder="Say Something.."
            />
            <button type="submit" className="chat-btn">
              <i class="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default StreamChatMain;

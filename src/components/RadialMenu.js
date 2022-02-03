import { useState } from "react";
import classes from "./RadialMenu.module.css";
import callOnImage from "../radial_menu/callOn.png";
import callOffImage from "../radial_menu/callOff.png";
import emojiOn from "../radial_menu/emojiOn.png";
import emojiOff from "../radial_menu/emojiOff.png";
import callDialing from "../radial_menu/callDialing.png";
import musicOff from "../radial_menu/musicOff.png";
import micOff from "../radial_menu/micOff.png";
import shockedEmoji from "../radial_menu/shocked.png";
import loveEmoji from "../radial_menu/love.png";
import laughEmoji from "../radial_menu/laugh.png";
import messageImage from "../radial_menu/messages.png";
import menu from "../radial_menu/game_menu_01.png";
const RadialMenu = () => {
  const messges = ["Hi There", "Nice Try", "OH WOW!", "Well Done"];
  const [items, setItems] = useState(3);
  const [showMessages, setShowMessages] = useState(false);
  const [showGameMenu, setShowGameMenu] = useState(false);

  const switchHandler = (noOfItems) => {
    const emojiMenu = document.getElementById("emojiMenu");
    const callMenu = document.getElementById("callMenu");
    const callImage = document.getElementById("callImage");
    const emojiMenuImage = document.getElementById("emojiMenuImage");
    if (noOfItems === 4) {
      emojiMenu.setAttribute("fill", "#A0CC3B");
      callMenu.setAttribute("fill", "white");
      callImage.setAttribute("href", callOffImage);
      emojiMenuImage.setAttribute("href", emojiOn);
    } else {
      emojiMenu.setAttribute("fill", "white");
      callMenu.setAttribute("fill", "#A0CC3B");
      callImage.setAttribute("href", callOnImage);
      emojiMenuImage.setAttribute("href", emojiOff);
    }
    setItems(noOfItems);
  };
  const handleMessageMenu = () => {
    setShowMessages(!showMessages);
  };
  const handleMenuClick = (item) => {
    console.log(item);
  };
  var path = (
    <>
      <path
        style={{ cursor: "pointer" }}
        onClick={handleMessageMenu}
        d="M 198 256 L 198 300 A 148 148 0 0 1 125 295 L 148.5 246 A 128 128 1 0 0 198 256 "
        fill="white"
        strokeWidth="1"
        stroke="#E6E6E6"
      />
      <path
        style={{ cursor: "pointer" }}
        onClick={() => handleMenuClick("laugh")}
        d="M 148.5 246 L 125 295 A 148 148 0 0 1 66 258 L 107 218 A 128 128 1 0 0 148.5 246  "
        fill="white"
        strokeWidth="1"
        stroke="#E6E6E6"
      />
      <path
        style={{ cursor: "pointer" }}
        onClick={() => handleMenuClick("love")}
        d="M 107 218 L 66 258 A 148 148 0 0 1 31 200 L 80 178 A 128 128 1 0 0 107 218  "
        fill="white"
        strokeWidth="1"
        stroke="#E6E6E6"
      />
      <path
        style={{ cursor: "pointer" }}
        onClick={() => handleMenuClick("shocked")}
        d="M 80 178 L 31 200 A 148 148 0 0 1 26 128 L 70 128 A 128 128 1 0 0 80 178  "
        fill="white"
        strokeWidth="1"
        stroke="#E6E6E6"
      />
      <image
        onClick={handleMessageMenu}
        id="messageImage"
        style={{ cursor: "pointer" }}
        href={messageImage}
        width="20px"
        height="20px"
        x={157}
        y={264}
      />
      <image
        onClick={() => handleMenuClick("laugh")}
        id="laughImage"
        style={{ cursor: "pointer" }}
        href={laughEmoji}
        width="20px"
        height="20px"
        x={102}
        y={244}
      />
      <image
        onClick={() => handleMenuClick("love")}
        id="loveImage"
        style={{ cursor: "pointer" }}
        href={loveEmoji}
        width="20px"
        height="20px"
        x={61}
        y={203}
      />
      <image
        onClick={() => handleMenuClick("shocked")}
        id="shockedImage"
        style={{ cursor: "pointer" }}
        href={shockedEmoji}
        width="20px"
        height="20px"
        x={40}
        y={148}
      />
    </>
  );
  if (items === 3) {
    path = (
      <>
        <path
          onClick={() => handleMenuClick("call")}
          d="M 198 256 L 198 305 A 200 200 0 0 1 95 280 L 128.5 236 A 128 128 1 0 0 198 256 "
          fill="white"
          strokeWidth="1"
          stroke="#E6E6E6"
        />
        <path
          onClick={() => handleMenuClick("music")}
          d="M 128.5 236 L 95 280 A 200 200 0 0 1 40 222 L 85 190 A 128 128 1 0 0 128.5 236  "
          fill="white"
          strokeWidth="1"
          stroke="#E6E6E6"
        />
        <path
          onClick={() => handleMenuClick("mic")}
          d="M 85 190 L 40 222 A 200 200 0 0 1 18 128 L 70 128 A 128 128 1 0 0 85 190  "
          fill="white"
          strokeWidth="1"
          stroke="#E6E6E6"
        />
        <image
          onClick={() => handleMenuClick("call")}
          id="callDialingImage"
          style={{ cursor: "pointer" }}
          href={callDialing}
          width="28px"
          height="28px"
          x={141}
          y={260}
        />
        <image
          onClick={() => handleMenuClick("music")}
          id="musicImage"
          style={{ cursor: "pointer" }}
          href={musicOff}
          width="20px"
          height="20px"
          x={75}
          y={225}
        />
        <image
          onClick={() => handleMenuClick("mic")}
          id="micImage"
          style={{ cursor: "pointer" }}
          href={micOff}
          width="20px"
          height="20px"
          x={40}
          y={157}
        />
      </>
    );
  }
  return (
    <>
      {!showGameMenu && (
        <div
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            zIndex: 2,
          }}
          onClick={() => {
            setShowGameMenu(true);
          }}
        >
          <img width="100px" style={{ margin: "-18px -12px 0 0" }} src={menu} />
        </div>
      )}

      {showGameMenu && (
        <>
          <svg
            viewBox="-202 127 400 400"
            className={classes.svg_wrapper}
            // preserveAspectRatio="xMidYMid meet"
            // x="0"
            // y="0"
          >
            <path
              id="emojiMenu"
              style={{ cursor: "pointer" }}
              onClick={() => switchHandler(4)}
              d="M 197 128  L 107 218  A 128 128 0 0 1 70 128 L 70 128 L197 128"
              fill="white"
              strokeWidth="1"
              stroke="#E6E6E6"
            />
            <path
              id="callMenu"
              style={{ cursor: "pointer" }}
              onClick={() => switchHandler(3)}
              d="M 197 128 L 198 256 A 128 128 0 0 1 107 218 L 107 218 L 197 128"
              fill="#A0CC3B"
              strokeWidth="1"
              stroke="#E6E6E6"
            />

            <image
              id="callImage"
              style={{ cursor: "pointer" }}
              href={callOnImage}
              width="30px"
              height="30px"
              x={152}
              y={185}
              onClick={() => switchHandler(3)}
            />
            <image
              id="emojiMenuImage"
              style={{ cursor: "pointer" }}
              href={emojiOff}
              width="30px"
              height="30px"
              x={110}
              y={143}
              onClick={() => switchHandler(4)}
            />
            {path}
          </svg>
          {showMessages && (
            <div
              className={classes.message_parent}
              id="message-parent"
              style={{ zIndex: 1, right: 0, top: "11.5em" }}
            >
              {messges.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      console.log(item);
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default RadialMenu;

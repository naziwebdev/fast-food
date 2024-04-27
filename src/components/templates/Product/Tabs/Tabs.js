"use client";

import styles from "./Tabs.module.css";
import { useState } from "react"
import { BsCardText } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import Comments from "./Comments/Comments";
import Description from "./Description/Description/Description";
import Infos from "./Infos/Infos";

export default function Tabs() {
    const [btnActive, setBtnActive] = useState('btn1')
  return (
    <div data-aos="zoom-in-down">
      <div className={styles.tab_container}>
        <div className={styles.btns}>
          <button
            onClick={() => setBtnActive("btn1")}
            className={`${styles.btn} ${
              btnActive === "btn1" && styles.btn2
            }`}
          >
               <TbListDetails className={`${styles.btn_icon} ${
              btnActive === "btn1" && styles.btn_icon2
            }`}/>
            مشخصات 
          </button>
          <button
            onClick={() => setBtnActive("btn2")}
            className={`${styles.btn} ${
              btnActive === "btn2" && styles.btn2
            }`}
          >
            <BsCardText  className={`${styles.btn_icon} ${
              btnActive === "btn2" && styles.btn_icon2
            }`}/> 
            توضیحات 
          </button>
          <button
            onClick={() => setBtnActive("btn3")}
            className={`${styles.btn} ${
              btnActive === "btn3" && styles.btn2
            }`}
          >
            <FaRegCommentDots  className={`${styles.btn_icon} ${
              btnActive === "btn3" && styles.btn_icon2
            }`}/>
            کامنت ها
          </button>
        </div>
        <div className={styles.tabs_content}>
          {btnActive === "btn1" ? (
            <Infos/>
          ) : btnActive === "btn2" ? (
            <Description/>
          ) : (
            btnActive === "btn3" && (
             <Comments/>
            )
          )}
        </div>
      </div>
    </div>
  );
}

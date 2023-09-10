"use client";

import { useEffect, useState } from "react";
import IconLeft from "../icons/IconLeft";
import IconRight from "../icons/IconRight";

import { SliderProps } from "./Slider.type";
import MyImage from "../myImage/MyImage";
import styles from "./Slider.module.css";

const Slider = ({ arrUrl }: SliderProps) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPage((prevPage) => (prevPage + 1) % arrUrl.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [arrUrl.length, page]);

  const ClickPage = (value: string) => {
    const pageValue =
      value === "+"
        ? (page + arrUrl.length - 1) % arrUrl.length
        : (page + 1) % arrUrl.length;
    setPage(pageValue);
  };

  return (
    <div className={styles.slider}>
      <IconLeft onClick={() => ClickPage("+")} />
      <div>
        <MyImage el={arrUrl[page]} />
      </div>
      <IconRight onClick={() => ClickPage("-")} />
    </div>
  );
};

export default Slider;

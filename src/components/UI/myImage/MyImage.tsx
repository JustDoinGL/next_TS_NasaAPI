import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { MyImageProps } from "./MyImage.type";

import styles from "./MyImage.module.css";

const MyImage = ({ el }: MyImageProps) => {
  return (
    <Link href={`/_next/image?url=${el}&w=640&q=75`}>
      <div className={styles.container}>
        <Image
        className={styles.img}
          src={el}
          width={400}
          height={400}       
          alt="Picture of the Earth"
          priority
        />
      </div>
    </Link>
  );
};

export default MyImage;

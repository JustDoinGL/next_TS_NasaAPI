"use client";

import { fetchAsteroids } from "@/actions/fetchAsteroids";
import { AsteroidsProps } from "./Asteroids.type";
import getCurrentDate from "@/actions/getDay";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { IAsteroidsDate } from "@/interface/Asteroids";
import Loader from "@/components/UI/loader/Loader";
import styles from "./Asteroids.module.css";
import Image from "next/image";

const Asteroids = ({ activeKilometers }: AsteroidsProps) => {
  const { getAsteroids } = fetchAsteroids;
  const { ref, inView } = useInView();

  // TODO: 11111

  const [day, setDay] = useState(0);
  const [asteroids, setAsteroids] = useState<IAsteroidsDate[]>([]);
// TODO: 1111
  useEffect(() => {
    const fetchData = async () => {
      const dayRight = getCurrentDate(day);
      const data = await getAsteroids(dayRight);
      setAsteroids((prevAsteroids) => [...prevAsteroids, ...data.result]);
      setDay((prevDay) => prevDay - 1);
    };
    if (inView) {
      fetchData();
    }
  }, [day, getAsteroids, inView]);

  return (
    <>
      {asteroids.map((el) => (
        <div className={styles.container} key={el.id}>
          <h3 className={styles.h3}>{el.close_approach_data[0].close_approach_date}</h3>
          <div className={styles.container__main}>
            <div>
              <p className={styles.container__main_left}>
                {!activeKilometers
                  ? `${el.close_approach_data[0].miss_distance.lunar.split(".")[0]} lunar orbits`
                  : `${el.close_approach_data[0].miss_distance.kilometers
                      .split(".")[0]
                      .split("")
                      .reverse()
                      .join("")
                      .replace(/(\d{3}(?!$))/g, "$1 ")} km`}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="129"
                height="6"
                viewBox="0 0 129 6"
                fill="none"
              >
                <path
                  d="M0 3L5 5.88675L5 0.113249L0 3ZM129 3.00001L124 0.113259L124 5.88676L129 3.00001ZM4.5 3.5L124.5 3.50001L124.5 2.50001L4.5 2.5L4.5 3.5Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </svg>
            </div>
            {/* <img src="" alt="2222" /> */}
            <div>
              <h3 className={styles.year}>{el.name.match( /\((.*?)\)/g)?.map(match => match.substring(1, match.length - 1))}</h3>
              <p className={styles.pm}>Ø {Math.floor(el.estimated_diameter.meters.estimated_diameter_max)} м</p>
            </div>
          </div>
        </div>
      ))}
      <div ref={ref}>
        <Loader />
      </div>
    </>
  );
};

export default Asteroids;

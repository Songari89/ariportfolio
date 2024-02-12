import React from "react";
import styles from "./WorkList.module.css";
import { useQuery } from "@tanstack/react-query";

export default function WorkList() {
  const {
    isLoading,
    error,
    data: works,
  } = useQuery({
    queryKey: [],
    queryFn: () => {
      return fetch("/data/webcoding.json").then((res) => res.json());
    },
  });
  return (
    <ul className={styles.lists}>
      {works &&
        works.map((work, index) => (
          <li key={index} className={styles.list}>
            <img className={styles.image} src={work.image} alt={work.title} />
            <div className={styles.contents}>
              <p className={styles.title}>{work.title}</p>
              <p>{work.type}</p>
              <p>{work.tool}</p>
              <p>{work.part}</p>
            </div>
            <button className={styles.btn}>자세히 보기</button>
          </li>
        ))}
    </ul>
  );
}

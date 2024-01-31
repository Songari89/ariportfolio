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
    <ul>
      {works &&
        works.map((work, index) => (
          <li key={index}>
            <img className={styles.image} src={work.image} alt={work.title} />
            <div className={styles.content}></div>
          </li>
        ))}
    </ul>
  );
}

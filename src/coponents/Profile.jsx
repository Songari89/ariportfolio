import React from "react";
import { useQuery } from "@tanstack/react-query";
import styles from './Profile.module.css';

export default function Profile({ title}) {
  const {
    data: profiles,
  } = useQuery({
    queryKey: ["aboutme", title],
    queryFn: () => {
      return fetch("/data/aboutme.json")
        .then((res) => res.json())
        .then((data) => data.aboutme[title].contents);
    },
  });

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <ul>
        {profiles &&
          profiles.map((profile, index) => (
            <li key={index} className={styles.list}>
              {profile}
            </li>
          ))}
      </ul>
    </div>
  );
}

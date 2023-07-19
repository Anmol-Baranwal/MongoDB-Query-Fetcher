import React, { useState, useEffect } from "react";
import Head from "next/head";
import Table from "@/components/table/table";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [userResults, setUserResults] = useState([]);
  const [apiSelection, setApiSelection] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/api/test/loadDB");
        const data = await response.json();
        console.log(data); // to verify that data has been loaded successfully
      } catch (error) {
        console.log("error in loading data " + error);
      }
    };

    loadData();
  }, []);

  const handleApiChange = async (e) => {
    try {
      const { value } = e.target;
      console.log(`Option Choosed: ${value}`);

      if (value === "1") {
        const response = await fetch("/api/query/bmwMercedesIncome");
        const data = await response.json();
        setUserResults(data);
        setApiSelection(value);
      } else if (value === "2") {
        const response = await fetch("/api/query/malePhonePrice");
        const data = await response.json();
        setUserResults(data);
        setApiSelection(value);
      } else if (value === "3") {
        const response = await fetch("/api/query/AudiEmailNoDigit");
        const data = await response.json();
        setUserResults(data);
        setApiSelection(value);
      } else if (value === "4") {
        const response = await fetch("/api/query/lastNameCharacterLength");
        const data = await response.json();
        setUserResults(data);
        setApiSelection(value);
      } else if (value === "5") {
        const response = await fetch("/api/query/top10Cities");
        const data = await response.json();
        setUserResults(data);
        setApiSelection(value);
      } else {
        setUserResults([]);
        setApiSelection("");
      }
    } catch (error) {
      console.log("error in handling api change " + error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Full Stack Internship Project</title>
        <meta name="description" content="Show Stats based on MongoDB Query" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/github.svg" />
      </Head>
      <h1 className={styles.heading}>
        <span className={styles.heading2}>API</span> Data
      </h1>
      <p className={styles.subheading}>Select any choice to fetch data</p>
      <select onChange={handleApiChange} className={styles.menu}>
        <option value="">--Select an API--</option>
        <option value="1">
          Users which have income lower than $5 USD and have a car of brand BMW
          or Mercedes.
        </option>
        <option value="2">
          Male Users which have phone price greater than 10,000.
        </option>
        <option value="3">
          Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose
          email does not include any digit.
        </option>
        <option value="4">
          Users whose last name starts with “M” and has a quote character length
          greater than 15 and email includes his/her last name
        </option>
        <option value="5">
          Show the data of top 10 cities which have the highest number of users
          and their average income.
        </option>
      </select>
      <div className={styles.table}>
        {!!userResults.length && (
          <Table userData={userResults} apiSelection={apiSelection} />
        )}
      </div>
    </div>
  );
}

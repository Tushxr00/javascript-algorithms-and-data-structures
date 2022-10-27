import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  // const { performance } = require("perf_hooks");

  /**
   * Basic approach used when trying to find the sum of number from 1 to n
   *
   * @param {Number} n Number uptill which the sum needs to be calculated
   */
  const addUpTo = (n) => {
    let total = 0;
    for (let i = 0; i <= n; i++) {
      total += i;
    }
    return total;
    // console.log({ firstApproach: total });
  };
  if (typeof window !== "undefined") {
    let start = performance.now();
    // console.log({ start: performance.now() });
    console.log("original approach", addUpTo(6));
    // console.log(performance);
    let end = performance.now();
    // console.log(`start : ${start} , end: ${end}`);
    console.log(
      `Time taken to execute the function addUpTo , ${end - start} seconds `
    );
  }

  /**
   * Mathematical approach used when trying to find the sum of number from 1 to n
   *
   * @param {Number} n Number uptill which the sum needs to be calculated
   */
  const addUpTo2 = (n) => {
    const total = (n * (n + 1)) / 2;
    return total;
    // console.log({ secondApproach: total });
  };
  addUpTo2(10);
  if (typeof window !== "undefined") {
    let start = performance.now();
    // console.log({ start: performance.now() });
    console.log("second approach", addUpTo2(10));
    // console.log(performance);
    let end = performance.now();
    // console.log(`start : ${start} , end: ${end}`);
    console.log(
      `Time taken to execute the function addUpTo , ${end - start} seconds `
    );
  }
  return <div className={styles.container}>Hello World</div>;
};

export default Home;

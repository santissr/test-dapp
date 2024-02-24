import {ReactElement} from "react";
import styles from './Main.module.css'
export const Main = (): ReactElement => {
  return (<div className={styles.containerDad}>
    <div className={styles.imageContainer}>
    </div>
    <div className={styles.filter}></div>
    <main className={styles.main}>
      <h1 className={styles.h1}>Compra o vende tu propiedad con nosotros</h1>
    </main>
  </div>)
}

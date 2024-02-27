import {ReactElement} from "react";
import styles from './Main.module.css'

export const Main = (): ReactElement => {
  return (<div className={styles.containerDad}>
    <div className={styles.imageContainer}>
    </div>
    <div className={styles.filter}></div>
    <main className={styles.main}>
      <h1 className={styles.h1}>Transformamos el acceso a la inversion de bienes raices</h1>
      <p className={styles.p}>Tokenizacion de activos de renta fija</p>
    </main>
  </div>)
}

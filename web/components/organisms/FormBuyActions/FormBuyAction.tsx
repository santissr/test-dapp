import styles from './FormBuyActions.module.css'
import {IconFire} from "@/components/svgs/IconFire";
import {YoutubeVideo} from "@/components/organisms/Video/YoutubeVideo";
import {projects} from "../../../../anchor/programs/projects";

export const FormBuyAction = ({id}: { id: string }) => {

  const cards = projects;

  return <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>Parques Del Rio Sabaneta 158</h1>
        <div className={styles.danger}>
          <IconFire/>
          <p className={styles.paragraph}>60 dias para cerrar</p>
        </div>
      </div>
      <div>
        <YoutubeVideo urlVideo={'https://www.youtube.com/embed/km8YSiE8JJw'}/>
        <div style={{
          background: 'black',
          width: '100%',
          height: '20px',
          borderBottomRightRadius: '20px',
          borderBottomLeftRadius: '20px'
        }}></div>
      </div>
      <h1 className={styles.title2}>¿Que es Parques Del Rio?</h1>
      <p className={styles.p}>Hermosas casas cerca del lugar que soñas, imagina no solamente hacer parte de este gran
        proyecto, sino además de esto recibir un pago por esto</p>
      <form className={styles.form}>
        <label className={styles.label}>Tokens a comprar:</label>
        <input className={styles.input} placeholder={'Ingresa cantidad a adquirir'}></input>
        <button className={styles.button}>Comprar</button>
      </form>
    </div>
  </section>
}

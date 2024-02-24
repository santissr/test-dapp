import styles from './FormBuyActions.module.css'
import {IconFire} from "@/components/svgs/IconFire";
import {YoutubeVideo} from "@/components/organisms/Video/YoutubeVideo";
import {projects} from "../../../../anchor/programs/projects";
import {useState} from "react";

const cards = projects;
export const FormBuyAction = ({id}: { id: string }) => {
  const [infoProject, setInfoProject] = useState(cards[Number(id)])


  return <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>{infoProject.name}</h1>
        <div className={styles.danger}>
          <IconFire/>
          <p className={styles.paragraph}>{infoProject.closeDate} dias para cerrar</p>
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
      <h1 className={styles.title2}>¿Que es nido de agua?</h1>
      <p className={styles.p}>Un bosque que te atiende de lunes a domingo donde sea que estes y a la hora que este donde
        quiera
        blalblablalblalavl</p>
      <form className={styles.form}>
        <label className={styles.label}>Tokens a comprar:</label>
        <input className={styles.input} placeholder={'Ingresa cantidad a adquirir'}></input>
        <button className={styles.button}>Comprar</button>
      </form>
    </div>
  </section>
}

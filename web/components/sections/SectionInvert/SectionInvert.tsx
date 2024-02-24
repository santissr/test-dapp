'use client'
import {CompanyNamePhoto} from "@/components/organisms/companyNamePhoto/CompanyNamePhoto";
import {ReactElement, useState} from "react";
import {YoutubeVideo} from "@/components/organisms/Video/YoutubeVideo";
import styles from './SectionInvert.module.css'
import Link from "next/link";
import {projects} from "../../../../anchor/programs/projects";
import {Cards} from "@/components/organisms/Cards/Cards";

const cards = projects
export const SectionInvert = (): ReactElement => {
  const [infoState, setInfoState] = useState(cards[0])


  return <section className={styles.section}>
    <h1 className={styles.h1}>Encuentra proyectos para invertir y crecer</h1>
    <div>
      <div className={styles.containerVideo}>
        <YoutubeVideo urlVideo={'https://www.youtube.com/embed/km8YSiE8JJw'}/>
      </div>
      <div className={styles.containerInvert}>
        <CompanyNamePhoto/>
        <div>
          <p className={styles.title}>Campaña</p>
          <p className={styles.text}>{infoState.campain}</p>
        </div>
        <Link href={`/property-id/${infoState.index}`}>
          <button className={styles.button}>Invertir</button>
        </Link>
      </div>
    </div>
    <div className={styles.containerInfo}>
      <div>
        <h1 className={styles.title2}>{infoState.name}</h1>
        <p className={styles.subtitle}><span className={styles.span}>Medellin</span>, Colombia</p>
        <p className={styles.paragraph}>{infoState.description}</p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title2}>$ 8278 Millones COP <span
          className={styles.span2}>/ Etapa 1 - 100% completada</span></h2>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          color: 'black',
          fontSize: "18px",
          fontWeight: "700",
          width: "472px"
        }}>
          <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-500">
            <div className="bg-gray-700 h-2.5 rounded-full" style={{width: "61%"}}></div>
          </div>
          <p>61.00%</p>
        </div>
        <div className={styles.infoSpecific}>
          <div className={styles.containersInfo2}>
            <p className={styles.text1}>+15%</p>
            <p className={styles.text2}>Retorno estimado</p>
          </div>
          <div className={styles.containersInfo2}>
            <p className={styles.text1}>$120mil</p>
            <p className={styles.text2}>Valos $ Por unit</p>
          </div>
          <div className={styles.containersInfo2}>
            <p className={styles.text1}>670</p>
            <p className={styles.text2}>Total de socios</p>
          </div>
          <div className={styles.containerFirst}>
            <div className={styles.containerCounter}>
              <p className={styles.number}>60</p>
              <span className={styles.text01}>Días</span>
              <p className={styles.text02}>Para cerrar</p>
            </div>
            <div className={styles.containerCounter2}>
              <p className={styles.number}>424</p>
              <p className={styles.text02}>Inversionistas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
    <div className={styles.containerCards}>
      {cards.map((card, index) => (
        <Cards onClick={() => {
          setInfoState(cards[index])
        }} key={index} link={card.linkImg} name={card.name} text={card.description}/>))}
    </div>
  </section>
}

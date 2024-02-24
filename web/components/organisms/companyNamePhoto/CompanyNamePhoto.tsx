import styles from './CompanyNamePhoto.module.css'
import Image from "next/image";

export const CompanyNamePhoto = () => {
  return <div className={styles.container}>
    <div className={styles.image}>
      <Image className={styles.image} height={50} width={50} alt={'Company Photo'}
             src={'https://img.freepik.com/vector-gratis/ilustracion-concepto-empresa_114360-2581.jpg'}></Image>
    </div>
    <div>
      <p className={styles.title}>Empresa</p>
      <p className={styles.name}>Lorem ipsum blabla</p>
    </div>
  </div>
}

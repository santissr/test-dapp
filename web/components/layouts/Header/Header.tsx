import Image from "next/image";
import propiImage from '@/src/assets/propi-image2.png'

export const Header = () => {
  return <header>
    <Image alt={'Logo'} src={propiImage}></Image>
    <nav></nav>
  </header>
}

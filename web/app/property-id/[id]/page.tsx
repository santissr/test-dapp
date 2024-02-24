import {FormBuyAction} from "@/components/organisms/FormBuyActions/FormBuyAction";

interface PageProps {
  searchParams: {
    id: string;
    // Otros parámetros que esperas recibir en searchParams
  };
}

export default function Page({searchParams}: PageProps) {
  return <FormBuyAction id={searchParams.id}/>
}

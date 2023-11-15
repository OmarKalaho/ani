"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'
import styles from './page.module.css'
import Logo from '@/Components/logo'
import Buttons from '@/Components/buttons'
import LangButton from '@/Components/langButton'


export default function Home() {
  const [lang,setLang] = useState("EN");
  const router = useRouter();
  const pathName = usePathname();
  const params = useSearchParams();
  useEffect(() => {
    const plang = params.get("lang");
    if((plang != null) && (plang=="EN" || plang=="AR"))
      if(plang != lang)
        setLang(plang);
    }
  , []);
  
  const handleButtonClick = () =>{
    if(lang == "EN"){
      setLang("AR");
    }
    else{
      setLang("EN")
    }
  }
  return (
    <main className={styles.main}>
      <div className={styles.logoSection}>
        <Logo/>
      </div>
      <div className={styles.buttonSection}>
        <Buttons lang = {lang}/>
        <LangButton lang = {lang} onClick={handleButtonClick} />
      </div>
      
    </main>
  )
}

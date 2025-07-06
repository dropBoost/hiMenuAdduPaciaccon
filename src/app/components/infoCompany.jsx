import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons'

const ICONfacebook = <FontAwesomeIcon icon={faFacebook}/>
const ICONwhatsApp = <FontAwesomeIcon icon={faWhatsapp}/>
const ICONtikTok = <FontAwesomeIcon icon={faTiktok}/>
const ICONinstagram = <FontAwesomeIcon icon={faInstagram}/>
const ICONtel = <FontAwesomeIcon icon={faSquarePhone}/>
const ICONemail = <FontAwesomeIcon icon={faEnvelope}/>

// PERSONALIZZAZIONI

export const companyName = "Addu' Paciaccon"
export const logoDark = "/logo-dark.png"
export const logoLight = "/logo-white.png"
export const colorLight = "#4fbbb7"
export const colorDark = "#282828"

export const socialLink = [
    {name:'whatsApp',link:'https://www.whatsapp.com',icon: ICONwhatsApp, info:"+39 366 35 85 395"},
    {name:'facebook',link:'fasc',icon: ICONfacebook, info:"@facebbok"},
    {name:'instagram',link:'ggf',icon: ICONinstagram, info:"@instagram"},
    {name:'tiktok',link:'#',icon: ICONtikTok, info:"@tiktok"},
    {name:'email',link:'#',icon: ICONemail, info:"info@email.it"},
    {name:'tel',link:'dsda',icon: ICONtel, info:"+39 366 35 85 395"},
  ]

export const navLink = [
    {name:'zingare',link:'/zingare',img:'/imageDefault.png',attivo:'true'},
    {name:'menu', link:'/menu',img:'/imageDefault.png',attivo:'true'},
    {name:'personalizza',link:'/personalizza',img:'/imageDefault.png',attivo:'true'},
    {name:'hotdog', link:'/hotdog',img:'/imageDefault.png',attivo:'true'},
    {name:'sfizi', link:'/sfizi',img:'/imageDefault.png',attivo:'true'},
    {name:'dolci', link:'/dolci',img:'/imageDefault.png',attivo:'true'},
    {name:'bibite', link:'/bibite',img:'/imageDefault.png',attivo:'true'},
  ]
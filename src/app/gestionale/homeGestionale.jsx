'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEgg, faCloud, faCalendarWeek, faUser, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const iconaDashboard = <FontAwesomeIcon icon={faCloud} className='h-[100px] text-neutral-200 hover:text-appText-500' />
const iconaGestioneMenu = <FontAwesomeIcon icon={faEgg}  className='h-[100px] text-neutral-200 hover:text-appText-500' />
const iconaRedazionePreventivi = <FontAwesomeIcon icon={faCirclePlus} className='h-[100px] text-neutral-200 hover:text-appText-500'  />
const iconaAgendaEventi = <FontAwesomeIcon icon={faCalendarWeek} className='h-[100px] text-neutral-200 hover:text-appText-500'  />
const iconaClienti = <FontAwesomeIcon icon={faUser} className='h-[100px] text-neutral-200 hover:text-appText-500'  />

export default function HomeGestionale () {

 const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
      <div className="flex w-full flex-wrap flex-row justify-start items-center md:flex-row gap-4 p-5">
        <div>
          <Link
            href="./gestionale/dashboard"
            className={`flex items-center flex-col justify-center rounded-[1.5rem] p-2 h-[200px] w-[200px] transition duration-700 ${
              isActive('/gestionale/dashboard') ? 'bg-appColor-500' : 'bg-white hover:bg-appColor-500'
            }`}>
            {iconaDashboard}
            <span className='mt-3 text-sm'>DASHBOARD</span>
          </Link>
        </div>
        <div>
          <Link
            href="./gestionale/agenda-eventi"
            className={`flex items-center flex-col justify-center rounded-[1.5rem] p-2 h-[200px] w-[200px] transition duration-700 ${
              isActive('/gestionale/dashboard') ? 'bg-appColor-500' : 'bg-white hover:bg-appColor-500'
            }`}
          >
            {iconaAgendaEventi}
            <span className='mt-3 text-sm'>AGENDA PRENOTAZIONI</span>
          </Link>
        </div>
        <div>
          <Link
            href="./gestionale/clienti"
            className={`flex items-center flex-col justify-center rounded-[1.5rem] p-2 h-[200px] w-[200px] transition duration-700 ${
              isActive('/gestionale/dashboard') ? 'bg-appColor-500' : 'bg-white hover:bg-appColor-500'
            }`}
          >
            {iconaClienti}
            <span className='mt-3 text-sm'>CLIENTI</span>
          </Link>
        </div>
        <div>
          <Link
            href="./gestionale/redazione-preventivi"
            className={`flex items-center flex-col justify-center rounded-[1.5rem] p-2 h-[200px] w-[200px] transition duration-700 ${
              isActive('/gestionale/dashboard') ? 'bg-appColor-500' : 'bg-white hover:bg-appColor-500'
            }`}
          >
            {iconaRedazionePreventivi}
            <span className='mt-3 text-sm'>AGGIUNGI PRENOTAZIONE</span>
          </Link>
        </div>
        <div>
          <Link
            href="./gestionale/gestione-menu"
            className={`flex items-center flex-col justify-center rounded-[1.5rem] p-2 h-[200px] w-[200px] transition duration-700 ${
              isActive('/gestionale/dashboard') ? 'bg-appColor-500' : 'bg-white hover:bg-appColor-500'
            }`}
          >
            {iconaGestioneMenu}
            <span className='mt-3 text-sm'>GESTIONE MENU</span>
          </Link>
        </div>
      </div>
  );
}
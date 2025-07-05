// 'use client'

// import Link from 'next/link'
// import { useState } from 'react'
// import { companyName, navLink } from './infoCompany'
// import Image from 'next/image'

// const Navbar = (props) => {

//     const logo = props.logo
//     const background = props.background

//     const [isOpen, setIsOpen] = useState(false)

//     const toggleMenu = () => setIsOpen(!isOpen)

//     return (
//         <nav className={`${background} fixed top-0 inset-x-0 z-50 shadow-md`}>
//         <div className="max-w-7xl mx-auto h-16 flex px-4 sm:px-6 lg:px-8 items-center justify-between">
//             <Link href="/" className="text-xl font-bold text-brand-500">
//                 <Image src={logo} width={50} height={50} alt={`logo-${companyName}`}/>
//             </Link>
//             <div className="hidden md:flex space-x-6">

//                 {navLink.map((link, index) => (
//                     <Link key={index} href={link.link} className="hover:text-brand-500">{link.nome}</Link>
//                 ))}

//             </div>
//             <div className="md:hidden">
//             <button onClick={toggleMenu}>
//                 {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//             </div>
//         </div>

//         {isOpen && (
//             <div className="md:hidden fixed inset-0 bg-neutral-900 z-40 flex flex-col justify-center items-center space-y-8 text-xl">

//                 {navLink.map((link, index) => (
//                     <Link key={index} href={link.link} onClick={toggleMenu}  className="hover:text-brand-500">{link.nome}</Link>
//                 ))}

//             {/* Icone social in fondo */}
//             <div className="absolute bottom-10 flex space-x-6">
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-500">
//                 <Facebook size={24} />
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-500">
//                 <Twitter size={24} />
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-500">
//                 <Instagram size={24} />
//                 </a>
//             </div>

//             <button onClick={toggleMenu} className="absolute top-6 right-6">
//                 <X size={28} />
//             </button>
//             </div>
//         )}
//         </nav>
//     )
// }

// export default Navbar

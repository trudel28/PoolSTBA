import Link from 'next/link'
import { useRouter } from 'next/router';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ExposurePlus1OutlinedIcon from '@material-ui/icons/ExposurePlus1Outlined';
import SwapHorizOutlinedIcon from '@material-ui/icons/SwapHorizOutlined';


function Sidebar() {

    const router = useRouter();

    return (
        <div className="hidden md:flex p-2 border-r bg-white flex-col w-16 lg:w-60 h-full">
            <div className="flex items-center justify-center text-3xl h-14 mb-24">Poolstba</div>
            <div className="flex flex-col space-y-4">
                <Link href="/">
                   <div className={router.pathname == "/" ? "active-link": "cursor-pointer px-4 py-4 rounded-xl text-lg font-medium"}><div className="flex items-center"><HomeOutlinedIcon className="mr-4"/>Accueil</div></div>
                </Link>
                <Link href="/standing">
                    <div className={router.pathname == "/standing" ? "active-link": "cursor-pointer px-4 py-4 rounded-xl text-lg font-medium"}><div className="flex items-center"><AssessmentOutlinedIcon className="mr-4"/>Classement</div></div>
                </Link>
                <Link href="/lineup">
                    <div className={router.pathname == "/lineup" ? "active-link": "cursor-pointer px-4 py-4 rounded-xl text-lg font-medium"}><div className="flex items-center"><PeopleAltOutlinedIcon className="mr-4"/>Alignement</div></div>
                </Link>
                <Link href="/stats">
                    <div className={router.pathname == "/stats" ? "active-link": "cursor-pointer px-4 py-4 rounded-xl text-lg font-medium"}><div className="flex items-center"><ExposurePlus1OutlinedIcon className="mr-4"/>Stats</div></div>
                </Link>
                <Link href="/trade">
                    <div className={router.pathname == "/trade" ? "active-link": "cursor-pointer px-4 py-4 rounded-xl text-lg font-medium"}><div className="flex items-center"><SwapHorizOutlinedIcon className="mr-4"/>Échanges</div></div>
                </Link>
            
            </div>    
        </div>
    )
}

export default Sidebar

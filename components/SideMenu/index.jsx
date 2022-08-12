import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartPie, faGauge, faTable, faFile, faBell, faAngleRight, faAngleDown, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useRouter } from 'next/router';
import { useRecoilState } from "recoil"
import { showMenu } from "../../store"

const SideMenu = () => {
    const router = useRouter();
    const [menu, setMenu] = useRecoilState(showMenu)

    return (
        <div className={`w-64 bg-gradient-to-r from-violet-500 dark:from-violet-800 to-fuchsia-500 dark:to-fuchsia-800 p-3 m-2 rounded-xl shadow-lg flex-col ${menu ? "flex" : "hidden"} md:${menu ? "flex" : "hidden"}`}>
            <div className="flex justify-center w-full my-4 mb-10">
                <span className="font-bold capitalize text-white">X-Dashboard</span>
            </div>
            <div className="flex flex-col h-full">
                <div className={`flex justify-center w-full my-2 rounded-xl py-3 ${router.pathname === "/" ? "bg-gray-100 dark:bg-gray-300" : ""}`}>
                    <Link href="/" className="w-full">
                        <a className="w-full">
                            <div className={`flex items-center w-full ${router.pathname === "/" ? "text-gray-600" : "text-white"}`}>
                                <div className="flex mx-4">
                                    <FontAwesomeIcon icon={faGauge} size="lg"/>
                                </div>
                                <div className="flex w-full ml-2">
                                    <span>
                                        Dashboard
                                    </span>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={`flex justify-center w-full my-2 rounded-xl py-3 ${router.pathname === "/chart" ? "bg-gray-100 dark:bg-gray-300" : ""}`}>
                    <Link href="/chart" className="w-full">
                        <a className="w-full">
                            <div className={`flex items-center w-full ${router.pathname === "/chart" ? "text-gray-600" : "text-white"}`}>
                                <div className="flex mx-4">
                                    <FontAwesomeIcon icon={faChartPie} size="lg"/>
                                </div>
                                <div className="flex w-full ml-2">
                                    <span>
                                        Chart
                                    </span>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={`flex justify-center w-full my-2 rounded-xl py-3 ${router.pathname === "/datatables" ? "bg-gray-100 dark:bg-gray-300" : ""}`}>
                    <Link href="/datatables" className="w-full">
                        <a className="w-full">
                            <div className={`flex items-center w-full ${router.pathname === "/datatables" ? "text-gray-600" : "text-white"}`}>
                                <div className="flex mx-4">
                                    <FontAwesomeIcon icon={faTable} size="lg"/>
                                </div>
                                <div className="flex w-full ml-2">
                                    <span>
                                        Datatables
                                    </span>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={`flex justify-center w-full my-2 rounded-xl py-3 ${router.pathname === "/login" ? "bg-gray-100 dark:bg-gray-300" : ""}`}>
                    <Link href="/login" className="w-full">
                        <a className="w-full">
                            <div className={`flex items-center w-full ${router.pathname === "/login" ? "text-gray-600" : "text-white"}`}>
                                <div className="flex mx-4">
                                    <FontAwesomeIcon icon={faFile} size="lg"/>
                                </div>
                                <div className="flex w-full ml-2">
                                    <span>
                                        Pages
                                    </span>
                                </div>
                                <div className="flex pr-4">
                                    <FontAwesomeIcon icon={faAngleDown} size="lg"/>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={`flex justify-center w-full my-2 rounded-xl py-3 ${router.pathname === "/alert" ? "bg-gray-100 dark:bg-gray-300" : ""}`}>
                    <Link href="/alert" className="w-full">
                        <a className="w-full">
                            <div className={`flex items-center w-full ${router.pathname === "/alert" ? "text-gray-600" : "text-white"}`}>
                                <div className="flex mx-4">
                                    <FontAwesomeIcon icon={faBell} size="lg"/>
                                </div>
                                <div className="flex ml-2 w-full">
                                    <span>
                                        Alert
                                    </span>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="flex">
                <div className={`flex justify-center w-full my-2 rounded-xl py-3 ${router.pathname === "/alert" ? "bg-gray-100 dark:bg-gray-300" : ""}`}>
                    <div className={`flex items-center w-full text-gray-600`}>
                        <div className="flex ml-2 w-full justify-center">
                            <span>
                                Logout
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideMenu
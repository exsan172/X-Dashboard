import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';
import Link from "next/link"
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil"
import { activeMenu } from "../../stores"

const MenuItemsWithSubMenu = ({ icon="null", text="null", subMenu=[], open=false, click}) => {
    const router = useRouter();
    const [openDrop, setOpenDrop] = useState(false)
    const [active, setActive] = useRecoilState(activeMenu)

    useEffect(() => {
        setOpenDrop(open)
        
        console.log("text => ", text, "setActive => ", active);
        if(text.toLowerCase() === active.toLowerCase()) {
            setOpenDrop(true)
        }

        // if(subMenu.length > 0) {
        //     subMenu.map(menu => {
        //         if(active === menu.url) {
        //         }
        //     })
        // }
    }, [open, active])
    
    return (
        <div>
            <div className={`flex justify-center w-full my-2 rounded-xl py-3 text-ms flex-col`}>
                <div className={`flex items-center w-full text-white cursor-pointer select-none`} onClick={click}>
                    <div className="flex w-2/12 ml-4 justify-start">
                        <FontAwesomeIcon icon={icon} size="1x"/>
                    </div>
                    <div className="flex ml-2 w-full">
                        <span className="capitalize text-md">
                            {text}
                        </span>
                    </div>
                    <div className="flex pr-4">
                        {
                            openDrop === false ?
                            <FontAwesomeIcon icon={faAngleDown} size="sm"/>
                            :
                            <FontAwesomeIcon icon={faAngleUp} size="sm"/>
                        }
                    </div>
                </div>
                {
                    openDrop === true &&
                    <div className="flex mt-5 flex-col px-5 mx-1 py-2 bg-gray-100 dark:bg-gray-300 rounded-lg text-sm">
                        {
                            subMenu.length > 0 &&
                            subMenu.map((menu, i) => {
                                return (
                                    <div className={`flex my-2 text-gray-600 ${router.pathname === menu.url ? "text-gray-800 font-bold" : " text-gray-500"}`} key={i}>
                                        {
                                            menu.redirect === true ?
                                            <a className="w-full" href={menu.url} target="_blank" rel="noreferrer">
                                                <div className={`flex items-center w-full`}>
                                                    <div className="flexw-full">
                                                        <span className="capitalize">
                                                            {menu.text}
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                            :
                                            <Link href={menu.url} className="w-full">
                                                <a className="w-full">
                                                    <div className={`flex items-center w-full`}>
                                                        <div className="flexw-full">
                                                            <span className="capitalize">
                                                                {menu.text}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default MenuItemsWithSubMenu
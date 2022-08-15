import { faChartPie, faGauge, faTable, faFile, faBell, faAngleRight, faAngleDown, faArrowRightFromBracket, faFileLines, faBook, faBoxesStacked } from "@fortawesome/free-solid-svg-icons"
import { useRecoilState } from "recoil"
import { showMenu, activeMenu } from "../../stores"
import { useRouter } from 'next/router';
import MenuItems from "../MenuItems";
import MenuItemsWithSubMenu from "../MenuItemsWithSubMenu";
import Button from "../Button";
import { useEffect } from "react";

const SideMenu = () => {
    const router = useRouter();
    const [menu, setMenu] = useRecoilState(showMenu)
    const [openDropdown, setOpenDropdown] = useRecoilState(activeMenu)

    useEffect(() => {
        setOpenDropdown(router.pathname.split("/")[1])
    }, [])

    const menuDropdown = {
        "drop_components" : "Components",
        "drop_pages" : "Pages"
    }

    const clickMenu = (val) => {
        console.log("val => ", val);
        setOpenDropdown(val)
    }

    const logout = () => {
        console.log("logout");
    }

    return (
        <div className={`w-64 bg-gradient-to-r from-violet-500 dark:from-violet-800 to-fuchsia-500 dark:to-fuchsia-800 p-3 m-2 rounded-xl shadow-lg flex-col ${menu ? "flex" : "hidden"} md:${menu ? "flex" : "hidden"}`}>
            <div className="flex justify-center w-full my-4 mb-6">
                <span className="font-bold capitalize text-white text-2xl">X-Dashboard</span>
            </div>
            <div className="flex flex-col h-full overflow-auto scrollbar-hide">
                <MenuItems 
                    url="/" 
                    icon={faGauge} 
                    text="Dashboard" 
                    click={() => clickMenu("Dashboard")}
                />
                <MenuItems 
                    url="/chart" 
                    icon={faChartPie} 
                    text="Chart" 
                    click={() => clickMenu("Chart")}
                />
                <MenuItems 
                    url="/datatables" 
                    icon={faTable} 
                    text="Datatables" 
                    click={() => clickMenu("datatables")}
                />
                <MenuItems 
                    url="/alert" 
                    icon={faBell} 
                    text="Alert" 
                    click={() => clickMenu("alert")}
                />
                <MenuItemsWithSubMenu 
                    text="Pages" 
                    icon={faFileLines} 
                    click={() => clickMenu("pages")} 
                    open={menuDropdown.drop_pages === openDropdown ? true : false} 
                    subMenu={[
                        { url : "/login", text : "Login"},
                        { url : "/register", text : "Register", redirect: true },
                        { url : "/forgot-password", text : "Forgot password", redirect: true },
                    ]}
                />
                <MenuItemsWithSubMenu 
                    text="Components" 
                    icon={faBoxesStacked}
                    click={() => clickMenu("Components")} 
                    open={menuDropdown.drop_components === openDropdown ? true : false} 
                    subMenu={[
                        { url : "/form", text : "Form" },
                        { url : "/button", text : "Button" },
                        { url : "/modals", text : "Modals" },
                    ]}
                />
                <MenuItems 
                    url="/licence" 
                    icon={faBook} 
                    text="Licence" 
                    click={() => clickMenu("Licence")}
                />
            </div>
            <div className="flex">
                <Button text="Logout" click={() => logout()} className="w-full border"/>
            </div>
        </div>
    )
}

export default SideMenu
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faUserTie } from "@fortawesome/free-solid-svg-icons"
import { useRecoilState } from "recoil"
import { showMenu } from "../../stores"

const TopBar = () => {
    const [menu, setMenu] = useRecoilState(showMenu)

    return (
        <div className="flex w-full justify-center p-5 items-center">
            <div className="flex text-gray-500 dark:text-gray-200 cursor-pointer select-none" onClick={() => setMenu(menu ? false : true)}>
                <FontAwesomeIcon icon={faBars} size="lg"/>
            </div>
            <div className="flex w-full justify-end select-none items-center">
                <div className="flex mr-2 text-gray-700 dark:text-gray-200">
                    <FontAwesomeIcon icon={faUserTie} size="lg"/>
                </div>
                <div className="flex ml-2 mr-4">
                    <span className="text-gray-500 text-sm dark:text-gray-300">
                        Hi, Admin
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TopBar
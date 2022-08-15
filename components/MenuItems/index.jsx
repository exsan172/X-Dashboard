import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from 'next/router';
import Link from "next/link"

const MenuItems = ({ url="null", icon="null", text="null", click}) => {
    const router = useRouter();

    return (
        <div>
            <div className={`flex justify-center w-full my-2 rounded-xl py-3 text-ms ${router.pathname === url ? "bg-gray-100 dark:bg-gray-300" : ""}`} onClick={click}>
                <Link href={url} className="w-full">
                    <a className="w-full text-md">
                        <div className={`flex items-center w-full ${router.pathname === url ? "text-gray-600" : "text-white"}`}>
                            <div className="flex w-2/12 ml-4 justify-start">
                                <FontAwesomeIcon icon={icon} size="1x"/>
                            </div>
                            <div className="flex ml-2 w-full">
                                <span className="capitalize">
                                    {text}
                                </span>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default MenuItems
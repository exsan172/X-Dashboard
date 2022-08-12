import Link from "next/link"

const BreadCum = ({ path, title }) => {
    return (
        <div className="flex w-full my-5 flex-col">
            <div className="flex">
                <span className="text-3xl text-dark dark:text-white">{title}</span>
            </div>
            <div className="flex mt-2 text-gray-400 dark:text-gray-400 text-sm">
                {
                    path.length > 0 &&
                    path.map((bread, i) => {
                        return (
                            <div key={i}>
                                {
                                    bread.url !== "" ?
                                    <Link href={bread.url}>
                                        <a>
                                            <span>{bread.name}</span>
                                            
                                        </a>
                                    </Link>
                                    :
                                    <span>
                                        {bread.name}
                                    </span>
                                }
                                {
                                    i !== path.length-1 &&
                                    <span>&nbsp;/&nbsp;</span>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BreadCum
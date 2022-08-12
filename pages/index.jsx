import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie, faDollar, faCreditCard } from "@fortawesome/free-solid-svg-icons"
import BreadCum from "../components/BreadCum"

const Dashboard = () => {
	return (
		<div className="flex px-5 flex-col w-full">
			<div className="flex">
				
				<BreadCum path={[
					{ name: "Dashboard", url : "/" },
					{ name: "Home", url : "/login" }
				]} title="Dashboard"/>

			</div>
			<div className="flex w-full flex-wrap flex-col md:flex-row ">
				<div className="flex m-1 rounded-lg shadow px-5 w-12/12 md:w-3/12 h-36 bg-gray-200 dark:bg-slate-700 flex-col">
					<div className="flex items-center h-full">
						<div className="flex mr-6 text-gray-500 dark:text-white">
							<FontAwesomeIcon icon={faUserTie} size="3x"/>
						</div>
						<div className="flex flex-col">
							<div className="flex text-gray-700 dark:text-white">
								<span className="text-2xl">Total User</span>
							</div>
							<div className="flex mt-2 text-gray-500 dark:text-gray-300">
								<span>300 Users</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex m-1 rounded-lg shadow px-5 w-12/12 md:w-3/12 h-36 bg-gray-200 dark:bg-slate-700 flex-col">
					<div className="flex items-center h-full">
						<div className="flex mr-6 text-gray-500 dark:text-white">
							<FontAwesomeIcon icon={faDollar} size="3x"/>
						</div>
						<div className="flex flex-col">
							<div className="flex text-gray-700 dark:text-white">
								<span className="text-2xl">Total Income</span>
							</div>
							<div className="flex mt-2 text-gray-500 dark:text-gray-300">
								<span>$ 300</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex m-1 rounded-lg shadow px-5 w-12/12 md:w-3/12 h-36 bg-gray-200 dark:bg-slate-700 flex-col">
					<div className="flex items-center h-full">
						<div className="flex mr-6 text-gray-500 dark:text-white">
							<FontAwesomeIcon icon={faCreditCard} size="3x"/>
						</div>
						<div className="flex flex-col">
							<div className="flex text-gray-700 dark:text-white">
								<span className="text-2xl">Total Debt</span>
							</div>
							<div className="flex mt-2 text-gray-500 dark:text-gray-300">
								<span>$ 200</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
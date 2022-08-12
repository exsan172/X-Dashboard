import BreadCum from "../components/BreadCum"

const Datatables = () => {
    return (
        <div className="flex px-5 flex-col w-full">
			<div className="flex">
				
				<BreadCum path={[
					{ name: "Dashboard", url : "/" },
					{ name: "Datatable", url : "" }
				]} title="Datatable"/>

			</div>
			<div className="flex w-full flex-wrap flex-col bg-white dark:bg-slate-700 p-7 rounded-lg shadow-md">
                Datatable
            </div>
        </div>
    )
}

export default Datatables
// import DataTable from "react-data-table-component"
// import Extention from "react-data-table-component-extensions"
import BreadCum from "../components/BreadCum"

// const columns = [
// 	{
// 		name : "Title",
// 		selector : row => row.title,
// 		sortable: true,
// 		right: true,
// 		reorder: true
// 	},
// 	{
// 		name: "Release Year",
// 		selector: (row) => row.releaseYear,
// 		sortable: true,
// 		right: true,
// 		reorder: true
// 	},
// 	{
// 		name: "Total Episode",
// 		selector: (row) => row.totalEpisode,
// 		sortable: true,
// 		right: true,
// 		reorder: true
// 	}
// ]

const Datatables = () => {
	// const data = [
	// 	{
	// 		id : 1,
	// 		title : "One piece",
	// 		releaseYear : "1999",
	// 		totalEpisode : "1.026"
	// 	}
	// ]

    return (
        <div className="flex px-5 flex-col w-full">
			<div className="flex">
				
				<BreadCum path={[
					{ name: "Dashboard", url : "/" },
					{ name: "Datatable", url : "" }
				]} title="Datatable"/>

			</div>
			<div className="flex w-full flex-wrap flex-col bg-white dark:bg-slate-700 p-7 rounded-lg shadow-md">
				{/* <Extention columns={columns} data={data}>
					<DataTable/>
				</Extention> */}
            </div>
        </div>
    )
}

export default Datatables
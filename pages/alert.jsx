import Swal from "sweetalert2"
import BreadCum from "../components/BreadCum"
import Button from "../components/Button"

const Alert = () => {

    const successAlert = () => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }

    const warningAlert = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        })
    }

    const errorAlert = () => {
        Swal.fire({
            title: 'Error !',
            text: "Failed Insert data!",
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Yes'
        })
    }

    return (
        <div className="flex px-5 flex-col w-full">
			<div className="flex">
				
				<BreadCum path={[
					{ name: "Dashboard", url : "/" },
					{ name: "Alert", url : "" }
				]} title="Alert"/>

			</div>
			<div className="flex w-full flex-wrap flex-col bg-white dark:bg-slate-700 p-7 rounded-lg shadow-md">
                <div className="flex text-gray-800 dark:text-gray-100">
                    <p>Official documentation sweet alert : <a href="https://sweetalert2.github.io/" target="_blank" className="text-blue-600">https://sweetalert2.github.io/</a></p>
                </div>
                <div className="flex mt-10 flex-col">
                    <p className="text-4xl text-gray-800 dark:text-gray-100">Example sweetAlert</p>
                    <div className="flex mt-10 flex-col">
                        <div className="flex">
                            <Button text="Success Alert" click={() => successAlert()}/>
                        </div>
                    </div>

                    <div className="flex mt-5 flex-col">
                        <div className="flex">
                            <Button text="Warning Alert" click={() => warningAlert()}/>
                        </div>
                    </div>

                    <div className="flex mt-5 flex-col">
                        <div className="flex">
                            <Button text="Error Alert" click={() => errorAlert()}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alert
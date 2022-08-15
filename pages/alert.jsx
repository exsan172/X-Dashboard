import Swal from "sweetalert2"
import BreadCum from "../components/BreadCum"
import Button from "../components/Button"

const Alert = () => {

    const basicExample = () => {
        Swal.fire('Any fool can use a computer')
    }

    const titleWithUnderExample = () => {
        Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'question'
        )
    }

    const modalWithTitleAndFooterExample = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }

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
                <div className="flex flex-col">
                    <p className="text-3xl text-gray-800 dark:text-gray-100">Example sweetAlert</p>
                    <p className="text-gray-800 dark:text-gray-300 mt-3">Official documentation sweet alert : <a href="https://sweetalert2.github.io/" target="_blank" className="text-blue-600" rel="noreferrer">https://sweetalert2.github.io/</a></p>
                    <div className="flex flex-wrap">
                        <div className="flex w-10/12 md:w-4/12">
                            <div className="flex mt-10 flex-col p-1">
                                <div className="flex h-full">
                                    <p className="text-md text-gray-600 dark:text-gray-300">A basic message</p>
                                </div>
                                <div className="flex mt-2">
                                    <Button text="Try me" click={() => basicExample()}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-10/12 md:w-4/12">
                            <div className="flex mt-10 flex-col p-1">
                                <div className="flex h-full">
                                    <p className="text-md text-gray-600 dark:text-gray-300">A title with a text under</p>
                                </div>
                                <div className="flex mt-2">
                                    <Button text="Try me" click={() => titleWithUnderExample()}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-10/12 md:w-4/12">
                            <div className="flex mt-10 flex-col p-1">
                                <div className="flex h-full">
                                    <p className="text-md text-gray-600 dark:text-gray-300">A modal with a title, an error icon, a text, and a footer</p>
                                </div>
                                <div className="flex mt-2">
                                    <Button text="Try me" click={() => modalWithTitleAndFooterExample()}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-10/12 md:w-4/12">
                            <div className="flex mt-10 flex-col p-1">
                                <div className="flex h-full">
                                    <p className="text-md text-gray-600 dark:text-gray-300">Show success message</p>
                                </div>
                                <div className="flex mt-2">
                                    <Button text="Try me" click={() => successAlert()}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-10/12 md:w-4/12">
                            <div className="flex mt-10 flex-col p-1">
                                <div className="flex h-full">
                                    <p className="text-md text-gray-600 dark:text-gray-300">Show warning message</p>
                                </div>
                                <div className="flex mt-2">
                                    <Button text="Try me" click={() => warningAlert()}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-10/12 md:w-4/12">
                            <div className="flex mt-10 flex-col p-1">
                                <div className="flex h-full">
                                    <p className="text-md text-gray-600 dark:text-gray-300">Show error message</p>
                                </div>
                                <div className="flex mt-2">
                                    <Button text="Try me" click={() => errorAlert()}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-10/12 md:w-4/12">
                            <div className="flex mt-10 flex-col p-1">
                                <div className="flex h-full">
                                    <p className="text-md text-gray-600 dark:text-gray-300">Show error message</p>
                                </div>
                                <div className="flex mt-2">
                                    <Button text="Try me" click={() => errorAlert()}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-10/12 md:w-4/12">
                            <div className="flex mt-10 flex-col p-1">
                                <div className="flex h-full">
                                    <p className="text-md text-gray-600 dark:text-gray-300">Show error message</p>
                                </div>
                                <div className="flex mt-2">
                                    <Button text="Try me" click={() => errorAlert()}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-10/12 md:w-4/12">
                            <div className="flex mt-10 flex-col p-1">
                                <div className="flex h-full">
                                    <p className="text-md text-gray-600 dark:text-gray-300">Show error message</p>
                                </div>
                                <div className="flex mt-2">
                                    <Button text="Try me" click={() => errorAlert()}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-10/12 md:w-4/12">
                            <div className="flex mt-10 flex-col p-1">
                                <div className="flex h-full">
                                    <p className="text-md text-gray-600 dark:text-gray-300">Show error message</p>
                                </div>
                                <div className="flex mt-2">
                                    <Button text="Try me" click={() => errorAlert()}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-10/12 md:w-4/12">
                            <div className="flex mt-10 flex-col p-1">
                                <div className="flex h-full">
                                    <p className="text-md text-gray-600 dark:text-gray-300">Show error message</p>
                                </div>
                                <div className="flex mt-2">
                                    <Button text="Try me" click={() => errorAlert()}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-10/12 md:w-4/12">
                            <div className="flex mt-10 flex-col p-1">
                                <div className="flex h-full">
                                    <p className="text-md text-gray-600 dark:text-gray-300">Show error message</p>
                                </div>
                                <div className="flex mt-2">
                                    <Button text="Try me" click={() => errorAlert()}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-10/12 md:w-4/12">
                            <div className="flex mt-10 flex-col p-1">
                                <div className="flex h-full">
                                    <p className="text-md text-gray-600 dark:text-gray-300">Show error message</p>
                                </div>
                                <div className="flex mt-2">
                                    <Button text="Try me" click={() => errorAlert()}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-10/12 md:w-4/12">
                            <div className="flex mt-10 flex-col p-1">
                                <div className="flex h-full">
                                    <p className="text-md text-gray-600 dark:text-gray-300">Show error message</p>
                                </div>
                                <div className="flex mt-2">
                                    <Button text="Try me" click={() => errorAlert()}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-10/12 md:w-4/12">
                            <div className="flex mt-10 flex-col p-1">
                                <div className="flex h-full">
                                    <p className="text-md text-gray-600 dark:text-gray-300">Show error message</p>
                                </div>
                                <div className="flex mt-2">
                                    <Button text="Try me" click={() => errorAlert()}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alert
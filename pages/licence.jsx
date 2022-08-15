import BreadCum from "../components/BreadCum"

const License = () => {
    return (
        <div className="flex px-5 flex-col w-full">
			<div className="flex">
				
				<BreadCum path={[
					{ name: "Dashboard", url : "/" },
					{ name: "Licence", url : "" }
				]} title="Licence"/>

			</div>
			<div className="flex w-full flex-wrap flex-col bg-white dark:bg-slate-700 p-7 rounded-lg shadow-md">
                <p className="text-gray-500 dark:text-gray-300">
                    <p>MIT License</p>
                    <p>-----------</p><br/>

                    Copyright (c) 2022 Exsan Renaldhi (<a href="https://exsan.my.id" target="_blank" rel="noreferrer" className="text-blue-500">https://exsan.my.id</a>)<br/>
                    Permission is hereby granted, free of charge, to any person<br/>
                    obtaining a copy of this software and associated documentation<br/>
                    files (the &quot;Software&quot;), to deal in the Software without<br/>
                    restriction, including without limitation the rights to use,<br/>
                    copy, modify, merge, publish, distribute, sublicense, and/or sell<br/>
                    copies of the Software, and to permit persons to whom the<br/>
                    Software is furnished to do so, subject to the following<br/>
                    conditions:<br/><br/>

                    The above copyright notice and this permission notice shall be<br/>
                    included in all copies or substantial portions of the Software.<br/><br/>

                    THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND,<br/>
                    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES<br/>
                    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND<br/>
                    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT<br/>
                    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,<br/>
                    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING<br/>
                    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR<br/>
                    OTHER DEALINGS IN THE SOFTWARE.<br/>
                </p>
            </div>
        </div>
    )
}

export default License
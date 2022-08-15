import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import Components from '../components'

const MyApp = ({ Component, pageProps }) => {
	return (
		<RecoilRoot>
			<div className="flex w-full">
				<Components.Header/>
				<div className="flex min-h-screen h-screen">
					<Components.SideMenu/>
				</div>
				<div className="flex flex-col w-full max-h-screen overflow-auto">
					<div className="flex min-w-fit sticky top-0 bg-gray-100 dark:bg-slate-800">
						<Components.TopBar/>
					</div>
					<div className="flex w-full min-w-fit flex-col">
						<div className="flex">
							<Component {...pageProps} />
						</div>
						<div className="flex w-full">
							<Components.Footer/>
						</div>
					</div>
				</div>
			</div>
		</RecoilRoot>
	)
}

export default MyApp

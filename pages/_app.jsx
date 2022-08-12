import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import Components from '../components'

const MyApp = ({ Component, pageProps }) => {
	return (
		<RecoilRoot>
			<div className="flex w-full">
				<Components.Header/>
				<div className="flex min-h-screen">
					<Components.SideMenu/>
				</div>
				<div className="flex flex-col w-full max-h-screen overflow-x-auto">
					<div className="flex w-full">
						<Components.TopBar/>
					</div>
					<div className="flex w-full">
						<Component {...pageProps} />
					</div>
					<div className="flex w-full">
						<Components.Footer/>
					</div>
				</div>
			</div>
		</RecoilRoot>
	)
}

export default MyApp

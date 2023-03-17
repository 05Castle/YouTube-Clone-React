import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import styled from 'styled-components'
import Header from './Header'

function PageLayout() {
	return (
		<LayoutContainer>
			<Header />
			<main>
				<SideBar />
				<Outlet />
			</main>
		</LayoutContainer>
	)
}

export default PageLayout

const LayoutContainer = styled.div`
	main {
		width: 100%;
		position: relative;
		float: right;
	}
`

import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
const Container = styled.div`
	display: flex;
	margin: 0;
	padding: 0;
`;
const Main = styled.div`
	flex: 7;
`;
const Wrapper = styled.div`
	padding: 22px 96px;
`;

function App() {
	return (
		<>
			<Container>
				<Menu />
				<Main>
					<Navbar />
					<Wrapper>videoa</Wrapper>
				</Main>
			</Container>
		</>
	);
}

export default App;

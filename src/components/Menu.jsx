import React from "react";
import styled from "styled-components";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";
const Container = styled.div`
	flex: 1;
	background-color: #202020;
	height: 100vh;
	font-size: 14px;
	position: sticky;
	top: 0;
	color: white;
`;
const Wrapper = styled.div`
	padding: 18px 26px;
`;
const Logo = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	font-weight: bold;
	margin-bottom: 25px;
`;
const Img = styled.img`
	height: 25px;
`;
const Item = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	cursor: pointer;
	padding: 7.5px 0px;
	&:hover {
		background-color: ${({ theme }) => theme.soft};
	}
`;

function Menu() {
	return (
		<Container>
			<Wrapper>
				{/* <Link to="/" style={{ textDecoration: "none", color: "inherit" }}> */}
				<Logo>
					<Img src={logo} />
					YouTube
				</Logo>
				{/* </Link> */}
				<Item>Home</Item>
			</Wrapper>
		</Container>
	);
}

export default Menu;

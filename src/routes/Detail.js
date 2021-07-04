/* eslint-disable import/no-anonymous-default-export */

import { useParams } from 'react-router';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
// query getMovie 부분은 Apollo 꺼 변수의 type을 검사해줌.
// 밑에 movie 부터는 서버로 가는 query
const GET_MOVIE = gql`
	query getMovie($id: Int!) {
		movie(id: $id) {
			title
			medium_cover_image
			language
			rating
			description_intro
		}
		suggestions(id: $id) {
			id
			medium_cover_image
		}
	}
`;

const Container = styled.div`
	height: 100vh;
	background-image: linear-gradient(-45deg, #d754ab, #fd723a);
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: white;
`;

const Column = styled.div`
	margin-left: 10px;
	width: 50%;
`;

const Title = styled.h1`
	font-size: 65px;
	margin-bottom: 15px;
`;

const Subtitle = styled.h4`
	font-size: 35px;
	margin-bottom: 10px;
`;

const Description = styled.p`
	font-size: 28px;
`;

const Poster = styled.div`
	width: 25%;
	height: 60%;
	background-color: transparent;
	background-image: url(${(props) => props.bg});
	background-size: cover;
	background-position: center center;
`;

export default () => {
	const { id } = useParams();
	const { loading, data } = useQuery(GET_MOVIE, {
		variables: { id: Number(id) },
	});
	console.log(data);
	return (
		<Container>
			<Column>
				<Title>{loading ? 'Loading...' : data.movie.title}</Title>
				<Subtitle>
					{data?.movie?.language} · {data?.movie?.rating}
				</Subtitle>
				<Description>{data?.movie?.description_intro}</Description>
			</Column>
			<Poster bg={data?.movie?.medium_cover_image}></Poster>
		</Container>
	);
};

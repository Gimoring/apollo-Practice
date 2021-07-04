import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://localhost:4000/',
	cache: new InMemoryCache(), //  캐시는 쿼리결과 가져온 후에 캐시하는데 사용하는 InMemoryCache의 인스턴스이다.
});

export default client;

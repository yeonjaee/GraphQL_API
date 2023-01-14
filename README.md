# GraphQL API

- [Tweetql](/Tweetql/)
- [graphql-spec](https://github.com/graphql/graphql-spec)

### GraphQL 은 Rest API 에 대한 직접적인 해결책이다.

1. <b>Over-fetching 문제점을 해결한다</b>
   
   - Ask for what you need, get exactly that
   - Graphql 로는 url 로 data 를 즉시 받지 않는다. 대신에 필요한 data 를 요청한다.
   - query 를 API 에 보내면 정확히 요청한 것만 받는다.


2. <b>Under-fetching 문제점을 해결한다</b>
   - Get many resources in a single request
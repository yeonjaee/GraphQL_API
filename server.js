import { ApolloServer,gql} from "apollo-server";

// explain the shape of the data to GraphQL
// using GraphQL SDK
const typeDefs = gql`
    type Query {
        text: String
        allFilms: String
        film: String
}
`;

const server = new ApolloServer({typeDefs})


server.listen().then(({url})=>{
    console.log(`Running on ${url}`);
})


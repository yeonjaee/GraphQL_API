import { ApolloServer, gql } from "apollo-server";

const tweets=[
    {
        id : "1",
        text: "first one",
    },
    {
        id : "2",
        text: "second one",
    }
]

// explain the shape of the data to GraphQL
// using GraphQL SDK
const typeDefs = gql`
  type User {
    id: ID
    username: String!
    firstName: String!
    lastName: String
  }
  type Tweet {
    id: ID!
    text: String!
    author: User
  }
  type Query {
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
    ping: String!
  }
  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
`;

// GET /api/v1/tweets
// POST DELETE PUT /api/v1/tweets
// GET /api/v1/tweet/:id

// resolver 는 하나의 로직. 하나의 객체.
const resolvers = {
    Query:{
        allTweets(){
            return tweets;
        },
        tweet(root, {id}){
            return tweets.find(tweet => tweet.id === id);
        }
    }
}
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Running on ${url}`);
});


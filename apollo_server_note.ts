// 필요한 건 nodejs, git
// 프로젝트 폴더 만들어줌
// 서버를 돌릴 것이기에 c드라이브 user 하위에 만들어주기로 한다.
// 디렉터리 이름은 graphql_backend
// git clone https://github.com/GNUCSAssistants/TypeScript-Init
// cd TypeScript-Init
// npm i
// npm start
// src/index.ts
// 여기서 console.log()를 바꾸면, 자동으로 터미널에 반영될 것

// npm install apollo-server 
// npm install graqhql

// src/index.ts
import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";

const server = new ApolloServer({ typeDefs });

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/dev
  `);
});

// src/schema.ts
import { gql } from "apollo-server";

export const typeDefs = gql`
  # Your schema will go here
`;


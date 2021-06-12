// 필요한 건 nodejs, git
// 프로젝트 폴더 만들어줌
// 서버를 돌릴 것이기에 c드라이브 user 하위에 만들어주기로 한다.
// 디렉터리 이름은 graphql_backend
// git clone https://github.com/GNUCSAssistants/TypeScript-Init

// npm init

// package name: (jonydev) graphql_backend
// version: (1.0.0)
// description: test for graphql_backend
// entry point: (index.js)
// test command:
// git repository:
// keywords:
// author: Jon Jaryong Lee
// license: (ISC)

// dist, src 폴더 만들어줌

// npm install typescript
// npm install tsc-watch --include=dev

// package.json 수정
{
  "name": "graphql_backend",
  "version": "1.0.0",
  "description": "test for graphql_backend",
  "main": "index.js",
  "scripts": {
    "start": "tsc-watch --onSuccess \" node dist/index.js\" ",
    "prestart": "tsc"
  },
  "author": "Jon Jaryong Lee",
  "license": "ISC",
  "dependencies": {
    "tsc-watch": "^4.4.0",
    "typescript": "^4.3.2"
  }
}

// tsconfig.json 파일 만들어줌(js로 컴파일 옵션)
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2015",
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

// src 디렉터리 안에 index.ts 만들고, console.log("hello");

// 그리고 npm start 하면 변화를 자동추적할것.

// npm install apollo-server graqhql

// src/schema.ts 
type Launch {
  id: ID!
  site: String
  mission: Mission
  rocket: Rocket
  isBooked: Boolean!
}

// src/index.ts
import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";

const server = new ApolloServer({ typeDefs });


// src/schema.ts
import { gql } from "apollo-server";
const typeDefs = gql`
  # Your schema will go here
`;

export typeDefs;


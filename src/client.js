import { ApolloClient, InMemoryCache, gql } from '@apollo/client'


const client = new ApolloClient({
  uri: "https://groups.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "X-Hasura-Admin-Secret": "M8l9mlStKzMH8Z4hGI7CcXFnsXWfd3PatheiJSROGXI1XYtuwpJd96op7XJg3FHQ"
  }
})


export const GET_GROUPS = gql`
query groups{
  Groups  (
order_by: {id: desc}
){
    id
    name
    description
    cover_image
    image
    members
    
  }
}`






export default client;
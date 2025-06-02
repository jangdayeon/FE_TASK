import { gql, useQuery } from '@apollo/client';

const GET_HELLO = gql`
  query GetHello {
    hello
  }
`;

export default function Hello() {
  const { data } = useQuery(GET_HELLO);

  return <div>{data?.hello}</div>;
}

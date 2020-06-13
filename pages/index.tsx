import Head from 'next/head'
import styled from 'styled-components';

export default function Home() {
  return (
    <div>
      <Title>My First Next.js Page</Title>
    </div>
  )
}

const Title = styled.h1`
  color: red;
`;
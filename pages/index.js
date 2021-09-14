import Head from 'next/head'
import { GraphQLClient, gql } from 'graphql-request'

export default function Home ({ homepages }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>{homepages[0].h1}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='text-5xl'>{homepages[0].h1}</div>
      <div class='flex justify-center items-center w-screen h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500'>
        <div class=' bg-white   rounded-3xl w-3/12 h-1/6 md:w-9/12 md:h-5/6 overflow-y-auto'>
          
          <img src={homepages[0].heroImage.url} />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const client = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/ckt1luygx026j01xu7vfa6vtn/master')
  const query = gql`
    query MyQuery {
      homepages {
        h1
        heroImage {
          fileName
          url
        }
      }
    }
  `
  const data = await client.request(query)

  return {
    props: { homepages: data.homepages }
  }
}

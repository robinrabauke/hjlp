import { NavBar } from "../components/NavBar/NavBar";
import { Meta } from "../components/Meta/Meta";
import { Stats } from "../components/Stats/Stats";
import { Steps } from "../components/Steps/Steps";
import { Footer } from "../components/Footer/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { GraphQLClient, gql } from "graphql-request";

export default function Home({ homepages }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Meta title={homepages[0].h1} />
      <NavBar />
      <Stats />
      <Steps />

      <div class="btn-group">
        <button class="btn">Previous</button>
        <button class="btn">1</button>
        <button class="btn btn-active">2</button>
        <button class="btn">3</button>
        <button class="btn">4</button>
        <button class="btn">Next</button>
      </div>

      <Breadcrumbs />
      <br />
      <div class="card text-center shadow-2xl">
        <figure class="px-10 pt-10">
          <img src={homepages[0].heroImage.url} class="rounded-xl" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{homepages[0].h1}</h2>
          <p>{homepages[0].text}</p>
          <div class="justify-center card-actions">
            <button class="btn btn-outline btn-accent">More info</button>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div class="card shadow-xl image-full">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
        <div class="justify-end card-body">
          <h2 class="card-title">Image overlay</h2>
          <p>
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
            sit necessitatibus veritatis sed molestiae voluptates incidunt iure
            sapiente.
          </p>
          <div class="card-actions">
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div class="card shadow-sm bg-accent text-accent-content">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Accent color</h2>
          <p>
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
            sit necessitatibus veritatis sed molestiae voluptates incidunt iure
            sapiente.{" "}
          </p>
          <div class="card-actions">
            <button class="btn btn-secondary">More info</button>
          </div>
        </div>
      </div>

      <br />
      <button class="btn">
        Version 2.7.0
        <div class="badge ml-2">new</div>
      </button>
      <br />
      <button class="btn btn-primary">
        Inbox
        <div class="badge ml-2 badge-outline">3</div>
      </button>
      <br />
      <button class="btn btn-secondary btn-outline">
        Notifications
        <div class="badge ml-2 badge-outline">+999</div>
      </button>
      <br />
      <button class="btn btn-accent">
        accent
        <div class="badge ml-2 badge-outline">new</div>
      </button>

      <br />
      <div class="alert alert-success">
        <div class="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-6 h-6 mx-2 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </div>
      <br />
      <div class="alert alert-error">
        <div class="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-6 h-6 mx-2 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </div>
      <br />
      <div class="alert alert-warning">
        <div class="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-6 h-6 mx-2 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </div>
      <br />
      <button class="btn btn-primary">Button</button>
      <br />
      <button class="btn btn-secondary">Button</button>
      <br />
      <Footer />
      {/* <div className='text-5xl'>{homepages[0].h1}</div>
      <div class='flex justify-center items-center w-screen h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500'>
        <div class=' bg-white   rounded-3xl w-3/12 h-1/6 md:w-9/12 md:h-5/6 overflow-y-auto'>
          <img src={homepages[0].heroImage.url} />
        </div>
      </div> */}
    </div>
  );
}

export const getServerSideProps = async () => {
  const client = new GraphQLClient(
    "https://api-eu-central-1.graphcms.com/v2/ckt1luygx026j01xu7vfa6vtn/master"
  );
  const query = gql`
    query MyQuery {
      homepages {
        h1
        heroImage {
          fileName
          url
        }
        text
      }
    }
  `;
  const data = await client.request(query);

  return {
    props: { homepages: data.homepages },
  };
};

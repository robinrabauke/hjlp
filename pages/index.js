import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";

export default function Home({ homepages }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{homepages[0].h1}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
        <div class="px-2 mx-2 navbar-start">
          <span class="text-lg font-bold">hjälp</span>
        </div>
        <div class="hidden px-2 mx-2 navbar-center lg:flex">
          <div class="flex items-stretch">
            <a class="btn btn-ghost btn-sm rounded-btn">Home</a>
            <a class="btn btn-ghost btn-sm rounded-btn">Jobs</a>
            <a class="btn btn-ghost btn-sm rounded-btn">About</a>
            <a class="btn btn-ghost btn-sm rounded-btn">Contact</a>
          </div>
        </div>
        <div class="navbar-end">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div class="w-full shadow stats">
        <div class="stat place-items-center place-content-center">
          <div class="stat-title">Downloads</div>
          <div class="stat-value">310M</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        <div class="stat place-items-center place-content-center">
          <div class="stat-title">New Users</div>
          <div class="stat-value text-success">4,200</div>
          <div class="stat-desc text-success">↗︎ 400 (22%)</div>
        </div>
        <div class="stat place-items-center place-content-center">
          <div class="stat-title">New Registers</div>
          <div class="stat-value text-error">1,200</div>
          <div class="stat-desc text-error">↘︎ 90 (14%)</div>
        </div>
      </div>
      <br />
      <br />

      <ul class="w-full steps">
        <li class="step step-primary">Register</li>
        <li class="step step-primary">Choose plan</li>
        <li class="step">Purchase</li>
        <li class="step">Receive Product</li>
      </ul>
      <br />
      <br />

      <div class="btn-group">
        <button class="btn">Previous</button>
        <button class="btn">1</button>
        <button class="btn btn-active">2</button>
        <button class="btn">3</button>
        <button class="btn">4</button>
        <button class="btn">Next</button>
      </div>

      <div class="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>
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
      <footer class="p-10 footer bg-primary text-primary-content footer-center">
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            class="inline-block fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
          </svg>
          <p class="font-bold">
            hjälp
            <br />
            asdkjf asldkjalsk ajsdlkajsdl;kj asldkjas d
          </p>
          <p>Copyright © 2021 - All right reserved</p>
        </div>
        <div>
          <div class="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
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

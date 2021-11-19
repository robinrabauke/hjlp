import { data } from "autoprefixer";
import React from "react";

export const Benefits = ({ data }) => (
  <>
    <h2 class="text-5xl p-10 pb-0">Benefits</h2>
    <div class="flex sm:flex-col md:flex-col lg:flex-row">
      {data.map((i, id) => (
        <div
          class={`card shadow-lg flex-grow 
        bg-${id % 2 == 0 ? "primary" : "secondary"}
           m-10 p-6 pt-0 drop-shadow-2xl min-w-600`}
        >
          <div class="card-body">
            <h2 class="card-title">{i.headline}</h2>
            {i.benefitsList.map((j) => (
              <p>✓ {j}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
);

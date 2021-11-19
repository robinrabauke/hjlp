import React from "react";

import { NavBar } from "../components/NavBar/NavBar";
import { Meta } from "../components/Meta/Meta";
import { Stats } from "../components/Stats/Stats";
import { Steps } from "../components/Steps/Steps";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";

export default function Components() {
  return (
    <div>
      <Meta title={"title"} />
      <NavBar />
      <Stats />
      <Steps />
      <Breadcrumbs />
    </div>
  );
}

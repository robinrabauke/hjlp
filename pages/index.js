import { Footer } from "../components/Footer/Footer";

import { GraphQLClient, gql } from "graphql-request";

import { HeroIntro } from "../components/HeroIntro/HeroIntro";
import { Benefits } from "../components/Benefits/Benefits";
import { assertValidExecutionArguments } from "graphql/execution/execute";

export default function Home({ heroSection, benefitsList }) {
  return (
    <div>
      <HeroIntro heroSection={heroSection} />
      <Benefits data={benefitsList.benefitsLists} />
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const client = new GraphQLClient(
    "https://api-eu-central-1.graphcms.com/v2/ckt1luygx026j01xu7vfa6vtn/master"
  );
  const heroSectionQuery = gql`
    query HeroSectionQuery {
      heroSections {
        button
        buttonlink
        headline
        subline
        heroImage {
          url
          handle
        }
      }
    }
  `;

  const benefitsListQuery = gql`
    query BenefitsListQuery {
      benefitsLists {
        headline
        benefitsList
      }
    }
  `;
  const heroSection = await client.request(heroSectionQuery);
  const benefitsList = await client.request(benefitsListQuery);

  return {
    props: {
      heroSection: heroSection.heroSections[0],
      benefitsList: benefitsList,
    },
  };
};

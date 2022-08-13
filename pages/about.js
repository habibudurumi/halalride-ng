/** @format */
import Head from "next/head";
import Frame from "../components/layout/Frame";
import Concept from "../components/Concept";
import CompanyStats from "../components/CompanyStats";
import AboutInfo from "../components/AboutInfo";
import ContactUs from "../components/ContactUs";
const About = () => {
  return (
    <>
      <Head>
        <title>Halal Ride | About</title>
        <meta name='description' content='Halal Ride Nigeria' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Frame>
        <main className='main'>
          <AboutInfo />
          <CompanyStats />
          <Concept />
          <ContactUs />
        </main>
      </Frame>
    </>
  );
};

export default About;

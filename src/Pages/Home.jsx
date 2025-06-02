import Layout from '../components/Layout/layout';
import HeroSection from '../components/HomePage/HeroSection/HomeHeroSection';
import ScrollableContentWithFixedMenu from '../components/HomePage/MenuWithScrollableContent/ScrollableContentWithFixedMenu';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ScrollableContentWithFixedMenu/>
    </Layout>
  );
};

export default Home;

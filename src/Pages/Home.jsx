import Layout from '../components/Layout/layout';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Layout>
      <Typography variant="h3" gutterBottom>
        Welcome to MyAgency
      </Typography>
      <Typography>
        We build stunning, fast, and responsive websites using React and MUI.
      </Typography>
    </Layout>
  );
};

export default Home;

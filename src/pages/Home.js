import LayoutWrapper from '../components/LayoutWrapper';
import Intro from '../components/Intro';
import SearchForm from '../components/SearchForm';

import './style.css';

function Home() {
  return (
    <LayoutWrapper>
      <Intro />
      <SearchForm />
    </LayoutWrapper>
  );
}

export default Home;

import LayoutWrapper from '../components/LayoutWrapper';
import SearchForm from '../components/SearchForm';
import Result from '../components/Result';

import './style.css';

function Search() {
  return (
    <LayoutWrapper>
      <SearchForm />
      <Result />
    </LayoutWrapper>
  );
}

export default Search;

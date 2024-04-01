
import AddCompanyButton from '../../components/add-company-btn';
import Header from '../../components/header';
import SearchInput from '../../components/search-input';
import Toolbar from '../../components/toolbar';

export default function Page() {
  return (
    <>
      <Header>Dashboard</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
    </>
  );
}

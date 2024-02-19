// import StatusLabel, { Status } from './components/ststus-label';
import AddCompanyButton from '../../components/add-company-btn';
import Header from '../../components/header';
import SearchInput from '../../components/search-input';
import Toolbar from '../../components/toolbar';

export default function Page() {
  return (
    <>
      <Header>Dashbord</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      {/* <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
    </>
  );
}

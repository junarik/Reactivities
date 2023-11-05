import { useEffect } from 'react';
import { Container } from '@mui/material';
import NavBar from './NavBar';
import LoadingComponent from './LoadingComponent';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import { Outlet } from 'react-router-dom';

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  if (activityStore.loadingInitial) return <LoadingComponent />

  return (
    <>
      <NavBar />
      <Container sx={{ mt: 10 }}>
        <Outlet />
      </Container>
    </>
  )
}

export default observer(App);

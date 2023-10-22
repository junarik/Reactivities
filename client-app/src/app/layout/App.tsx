import { useEffect } from 'react';
import { Container } from '@mui/material';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';

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
        <ActivityDashboard />
      </Container>
    </>
  )
}

export default observer(App);

import { Redirect } from "expo-router";

const Home = () => {
  const isSignedIn = false;

  if (isSignedIn) {
    return <Redirect href="/index" />;
  } else {
    return <Redirect href="/(onboarding)/welcome" />;
  }
};

export default Home;

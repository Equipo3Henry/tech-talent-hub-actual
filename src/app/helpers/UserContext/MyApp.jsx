import { UserContext } from "./UserContext";

function MyApp({ Component, pageProps }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userDataFromParams = params.get("userData");
    if (userDataFromParams) {
      setUserData(JSON.parse(userDataFromParams));
    }
  }, []);

  return (
    <UserContext.Provider value={userData}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;

import "./App.css";
import UserInfoContext from "./context/UserInfoContext";
import BlogPage from "./components/BlogPage";

function App() {
  const userInfo = { username: "Admin", isAdmin: true };

  return (
    <div>
      <BlogPage></BlogPage>
      <UserInfoContext.Provider value={userInfo}></UserInfoContext.Provider>
    </div>
  );
}

export default App;

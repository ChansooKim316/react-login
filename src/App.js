import Login from './components/Login/Login';
import Page1 from './components/Page_1/Page_1';
import Page2 from './components/Page_2/Page_2';
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css"

const initialState = {
    isLoggedin: false,
    currPage: 'page1'
}


function App() {
  console.log('CURRENT STATE :', initialState.isLoggedin)
  if (!initialState.isLoggedin) {
    return <Login />
  }
  const currPage = initialState.currPage;
  switch (currPage) {
      case 'page1' :
          return (
              <div className="container">
                  <div className="sideBar">
                      <Sidebar/>
                  </div>
                  <div className="page1">
                      <Page1 />
                  </div>
              </div>
          )
      case 'page2' :
          return (
              <div className="container">
                  <div className="sideBar">
                      <Sidebar/>
                  </div>
                  <div className="page2">
                      <Page2 />
                  </div>
              </div>
          )
      // 이후 다른 페이지들 추가 가능
      default :
          return '<h3>Something went wrong. Please try again</h3>'
  }
}

export default App;
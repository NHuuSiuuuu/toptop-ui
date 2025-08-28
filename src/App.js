import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';  // Nó là thẻ chứa, không sinh thật ra DOM
import { publicRouter } from '~/routes';
import { DefaulLayout } from '~/components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            const Layout = route.layout === null ? Fragment  :  DefaulLayout; // Nếu không có layout xác định thì mặc định nó sẽ là DefaultLayout
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page /> {/*Layout tức là DefaultLayout ôm Page - Lúc này page là chilren và truyêgn vào prop của DefaultLayout*/}
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

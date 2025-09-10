import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react'; // Nó là thẻ chứa, không sinh thật ra DOM
import { publicRouter } from '~/routes';
import { DefaulLayout } from '~/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            let Layout = DefaulLayout;
            const Page = route.component; // đặt tên biến dùng trong JSX phải viết hoa chữ cái đầu

            if (route.layout) {
              //nếu có layout
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            } // Tình huống khác lấy mặc định default layout

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                    {/*Layout tức là DefaultLayout ôm Page - Lúc này page là chilren và truyêgn vào prop của DefaultLayout*/}
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

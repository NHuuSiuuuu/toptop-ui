import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/Layout';

const publicRouter = [
  // Dùng cho những router không đăng nhập mà vẫn xem được
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly }, // Layout chỉ có Header thôi
  { path: config.routes.search, component: Search, layout: null },
];

const privateRouter = [
  // Phải đăng nhập
];

export { publicRouter, privateRouter };

import routesConfig from '~/config/routes'


import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/Layout';

const publicRouter = [ // Dùng cho những router không đăng nhập mà vẫn xem được
    {path: routesConfig.home, component: Home},
    {path: routesConfig.following, component: Following},
    {path: routesConfig.profile, component: Profile},
    {path: routesConfig.upload, component: Upload, layout: HeaderOnly}, // Layout chỉ có Header thôi
    {path: routesConfig.search, component: Search, layout: null},
]

const privateRouter = [ // Phải đăng nhập
    
]

export {publicRouter, privateRouter}
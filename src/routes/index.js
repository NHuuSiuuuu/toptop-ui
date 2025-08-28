import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/Layout';

const publicRouter = [ // Dùng cho những router không đăng nhập mà vẫn xem được
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout: HeaderOnly}, // Layout chỉ có Header thôi
    {path: '/search', component: Search, layout: null},
]

const privateRouter = [ // Phải đăng nhập
    
]

export {publicRouter, privateRouter}
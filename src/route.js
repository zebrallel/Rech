import ProgressBar from './pages/ProgressBar'
import RussellLogin from './pages/RussellLogin'
import PentagonDemo from './pages/PentagonDemo'
import CanvasImg from './pages/CanvasImg'
import HMRPage from './pages/HMR'
import HooksPage from './pages/Hooks'

const routes = [
  { title: 'Progress Bar', component: ProgressBar, path: '/progress' },
  {
    title: 'Russell Login',
    component: RussellLogin,
    path: '/russell'
  },
  {
    title: 'Pentagon Demo',
    component: PentagonDemo,
    path: '/pentagon'
  },{
    title: 'Canvas img composite',
    component: CanvasImg,
    path: '/canvas-img'
  },{
    title: 'HMR',
    component: HMRPage,
    path: '/hmr'
  },{
    title: 'Hooks',
    component: HooksPage,
    path: '/hooks'
  }
]

export default routes

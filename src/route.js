import ProgressBar from './pages/ProgressBar'
import RussellLogin from './pages/RussellLogin'
import PentagonDemo from './pages/PentagonDemo'
import CanvasImg from './pages/CanvasImg'

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
  }
]

export default routes

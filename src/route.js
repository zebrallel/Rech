import ProgressBar from './pages/ProgressBar'
import RussellLogin from './pages/RussellLogin'
import PentagonDemo from './pages/PentagonDemo'

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
  }
]

export default routes

import { MotionConfig } from 'framer-motion'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { LoadingScreen } from './components/ui/LoadingScreen'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LoadingScreen />
      <MainLayout>
        <Home />
      </MainLayout>
    </MotionConfig>
  )
}

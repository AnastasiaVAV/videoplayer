import ModalVideo from './Modal'
import { Play } from 'lucide-react'
import VideoContext from '../context/VideoContext'

const VideoPlayer = () => {
  const isModalOpen = VideoContext.useSelector(state => state.matches('full'))
  const actorRef = VideoContext.useActorRef()

  const showModal = () => actorRef.send({ type: 'OPEN' })

  return (
    <div>
      <div className="preview" onClick={showModal}>
        <div className="preview-play">
          <Play color="#8585ff" size={26} />
        </div>
      </div>
      <ModalVideo isModalOpen={isModalOpen} />
    </div>
  )
}

export default VideoPlayer

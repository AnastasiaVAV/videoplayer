import React, { useState } from 'react'
import ModalVideo from './Modal'
import { Play } from 'lucide-react'

interface Props {
  className?: string
}

const VideoPlayer: React.FC<Props> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div className={className}>
      <div className="preview" onClick={showModal}>
        <div className="preview-play">
          <Play color="#8585ff" size={26} />
        </div>
      </div>
      <ModalVideo isModalOpen={isModalOpen} handleCancel={handleCancel} />
    </div>
  )
}

export default VideoPlayer

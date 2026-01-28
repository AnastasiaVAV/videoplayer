import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'antd'
import { Maximize2, Minimize2, Pause, Play } from 'lucide-react'
import ReactPlayer from 'react-player'

interface Props {
  isModalOpen: boolean
  handleCancel: () => void
}

type VideoFormat = 'mini' | 'full'

interface FooterProps {
  format: VideoFormat
  isPlay: boolean
  toggleFormat: (format: VideoFormat) => void
  togglePlay: () => void
}

const iconColor = '#8585ff'

const Footer: React.FC<FooterProps> = ({
  format,
  isPlay,
  toggleFormat,
  togglePlay,
}) => (
  <div className="modal-footer">
    {format === 'mini'
      ? (
          <Button key="full" onClick={() => toggleFormat('full')}>
            <Maximize2 color={iconColor} size={16} />
          </Button>
        )
      : (
          <Button key="mini" onClick={() => toggleFormat('mini')}>
            <Minimize2 color={iconColor} size={16} />
          </Button>
        )}
    {isPlay
      ? (
          <Button key="pause" onClick={togglePlay}>
            <Pause color={iconColor} size={16} />
          </Button>
        )
      : (
          <Button key="play" onClick={togglePlay}>
            <Play color={iconColor} size={16} />
          </Button>
        )}
  </div>
)

const ModalVideo: React.FC<Props> = ({ isModalOpen, handleCancel }) => {
  const [isPlay, setIsPlay] = useState(isModalOpen)
  const [format, setFormat] = useState<VideoFormat>('full')

  const togglePlay = () => setIsPlay(prev => !prev)
  const handlePlayerPlay = () => setIsPlay(true)
  const handlePlayerPause = () => setIsPlay(false)

  useEffect(() => {
    if (isModalOpen) setIsPlay(true)
  }, [isModalOpen])

  const handleClose = () => {
    handlePlayerPause()
    setTimeout(() => handleCancel(), 100)
  }

  return (
    <Modal
      title="Player"
      closable={{ 'aria-label': 'Custom Close Button' }}
      open={isModalOpen}
      maskClosable={true}
      onCancel={handleClose}
      footer={(
        <Footer
          format={format}
          isPlay={isPlay}
          togglePlay={togglePlay}
          toggleFormat={setFormat}
        />
      )}
    >
      <div>
        <ReactPlayer
          src="https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-
4691-a73f-a4e583391b3d/playlist.m3u8"
          playing={isPlay}
          controls={true}
          light={false}
          width="100%"
          height="100%"
          onPlay={handlePlayerPlay}
          onPause={handlePlayerPause}
          onEnded={() => setIsPlay(false)}
        />
      </div>
    </Modal>
  )
}

export default ModalVideo

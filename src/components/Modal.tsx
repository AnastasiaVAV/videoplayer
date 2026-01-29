import React, { useEffect } from 'react'
import { Modal } from 'antd'
import { Maximize2, Minimize2, Pause, Play, X } from 'lucide-react'
import ReactPlayer from 'react-player'
import VideoContext from '../context/VideoContext'

interface Props {
  isModalOpen: boolean
}

type VideoFormat = 'mini' | 'full'

interface FooterProps {
  format: VideoFormat
  isPlay: boolean
  play: () => void
  pause: () => void
  toggleFormat: () => void
}

const Footer: React.FC<FooterProps> = ({
  format,
  isPlay,
  play,
  pause,
  toggleFormat,
}) => (
  <div className="modal-footer">
    {format === 'mini'
      ? (
          <button className="modal-footer__button" key="full" onClick={() => toggleFormat()}>
            <Maximize2 size={16} />
          </button>
        )
      : (
          <button className="modal-footer__button" key="mini" onClick={() => toggleFormat()}>
            <Minimize2 size={16} />
          </button>
        )}
    {isPlay
      ? (
          <button className="modal-footer__button" key="pause" onClick={pause}>
            <Pause size={16} />
          </button>
        )
      : (
          <button className="modal-footer__button" key="play" onClick={play}>
            <Play size={16} />
          </button>
        )}
  </div>
)

const ModalVideo: React.FC<Props> = ({ isModalOpen }) => {
  const actorRef = VideoContext.useActorRef()
  const isPlaying = VideoContext.useSelector(state => state.matches({ full: 'playing' }))
  const isSmall = VideoContext.useSelector(state => state.context.isSmall)

  const play = () => actorRef.send({ type: 'PLAY' })
  const pause = () => actorRef.send({ type: 'PAUSE' })
  const toggleFormat = () => actorRef.send({ type: 'TOGGLE' })

  useEffect(() => {
    if (isModalOpen && isSmall) toggleFormat()
  }, [isModalOpen])

  const handleClose = () => {
    pause()
    setTimeout(() => actorRef.send({ type: 'CLOSE' }), 100)
  }

  return (
    <Modal
      title="Player"
      width={isSmall ? 500 : 1000}
      closable={{ 'aria-label': 'Custom Close Button' }}
      open={isModalOpen}
      maskClosable={true}
      onCancel={handleClose}
      footer={(
        <Footer
          format={isSmall ? 'mini' : 'full'}
          isPlay={isPlaying}
          play={play}
          pause={pause}
          toggleFormat={toggleFormat}
        />
      )}
    >
      <div>
        <ReactPlayer
          src="https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-
4691-a73f-a4e583391b3d/playlist.m3u8"
          playing={isPlaying}
          controls={false}
          width="100%"
          height="100%"
          onPlay={play}
          onPause={pause}
          onEnded={handleClose}
        />
      </div>
    </Modal>
  )
}

export default ModalVideo

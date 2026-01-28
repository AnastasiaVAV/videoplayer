import { createActorContext } from '@xstate/react'
import videoMachine from '../state/machine'

const VideoContext = createActorContext(videoMachine)

export default VideoContext

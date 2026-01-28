import { createActor, createMachine } from 'xstate'

// interface MachineInterface {
//   id: string
//   initial: string
//   states: {
//     mini: {
//       on: {
//         toggle: string
//       }
//     }
//     full: {
//       entry: string
//       exit: string
//       on: {
//         toggle: string
//         "key.escape": string
//       }
//     }
//   }
//   actions: {
//     playVideo: () => void
//     pauseVideo: () => void
//   }
// }

const videoMachine = createMachine({
  id: 'videoPlayer',
  initial: 'mini',
  states: {
    mini: {
      on: {
        toggle: 'full',
      },
    },
    full: {
      entry: 'playVideo',
      exit: 'pauseVideo',
      on: {
        'toggle': 'mini',
        'key.escape': 'mini',
      },
    },
  },
  // actions: {
  //   playVideo: () => {
  //     console.log("Playing video")
  //   },
  //   pauseVideo: () => {
  //     console.log("Pausing video")
  //   },
  // },
})

const actor = createActor(videoMachine)
actor.start()
actor.send({ type: 'toggle' })

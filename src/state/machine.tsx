import { assign, createMachine } from 'xstate'

const videoMachine = createMachine({
  id: 'videoPlayer',
  initial: 'mini',
  context: {
    isSmall: false,
  },
  states: {
    mini: {
      on: {
        OPEN: 'full',
      },
    },
    full: {
      initial: 'playing',
      states: {
        playing: {
          on: {
            PAUSE: 'paused',
          },
        },
        paused: {
          on: {
            PLAY: 'playing',
          },
        },
      },

      entry: 'playVideo',
      exit: 'pauseVideo',
      on: {
        TOGGLE: {
          actions: assign(({ context }) => ({
            isSmall: !context.isSmall,
          })),
        },
        CLOSE: 'mini',
        ESC: 'mini',
      },
    },
  },
})

export default videoMachine

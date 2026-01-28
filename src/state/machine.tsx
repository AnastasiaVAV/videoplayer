import { createMachine } from 'xstate'

const videoMachine = createMachine({
  id: 'videoPlayer',
  initial: 'mini',
  states: {
    mini: {
      on: {
        OPEN: 'full',
      },
    },
    full: {
      type: 'parallel',
      states: {
        format: {
          initial: 'large',
          states: {
            large: {
              on: {
                TOGGLE: 'small',
              },
            },
            small: {
              on: {
                TOGGLE: 'large',
              },
            },
          },
        },
        play: {
          initial: 'playing',
          states: {
            playing: {
              entry: 'playVideo',
              on: {
                PAUSE: 'paused',
              },
            },
            paused: {
              entry: 'pauseVideo',
              exit: 'pauseVideo',
              on: {
                PLAY: 'playing',
              },
            },
          },
        },
      },
      entry: 'playVideo',
      exit: 'pauseVideo',
      on: {
        CLOSE: 'mini',
        ESC: 'mini',
      },
    },
  },
})

export default videoMachine

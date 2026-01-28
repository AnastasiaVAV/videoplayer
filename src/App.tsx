import './App.css'
import VideoPlayer from './components/VideoPlayer'
import VideoContext from './context/VideoContext'

function App() {
  return (
    <>
      <VideoContext.Provider>
        <VideoPlayer />
      </VideoContext.Provider>
    </>
  )
}

export default App

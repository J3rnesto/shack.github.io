import { useState } from 'react'
import { Scene3D } from './components/Scene3D'

function App() {
  const [count, setCount] = useState(0)
  const [showLabel, setShowLabel] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center relative">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to My 3D App!</h1>
        
        {/* 3D Scene */}
        <div className="mb-8">
          <Scene3D />
        </div>
        
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowLabel(true)}
        >
          Show Green Label
        </button>
      </div>

      {/* Floating Green Label */}
      {showLabel && (
        <div 
          className="fixed right-50 top-1/3 transform -translater-r-1 bg-green-100/30 backdrop-blur-md p-9 rounded-lg shadow-lg border border-green-300/50 cursor-pointer transition-all hover:scale-200"
          onClick={() => setShowLabel(false)}
        >
          <p className="text-green-600 font-medium text-lg">
            Click me to hide! 🌿
          </p>
        </div>
      )}
    </div>
  )
}

export default App
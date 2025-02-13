import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, X, Check } from 'lucide-react'

const samplePolls = [
  {
    id: 1,
    question: "Should we increase funding for renewable energy?",
    category: "Environment",
    votes: {
      yes: 72,
      no: 28,
      total: 2100
    },
    countryData: [
      { code: 'us', value: 76 },
      { code: 'fr', value: 70 },
      { code: 'de', value: 74 },
      { code: 'gb', value: 68 }
    ]
  },
  {
    id: 2,
    question: "Should public transportation be free?",
    category: "Transportation",
    votes: {
      yes: 65,
      no: 35,
      total: 1800
    },
    countryData: [
      { code: 'us', value: 60 },
      { code: 'fr', value: 75 },
      { code: 'de', value: 72 },
      { code: 'gb', value: 63 }
    ]
  }
]

export function PollSwipe() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [swipeDirection, setSwipeDirection] = useState<null | 'left' | 'right'>(null)
  const startX = useRef(0)
  const currentX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
    currentX.current = startX.current
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    currentX.current = e.touches[0].clientX
    const diff = currentX.current - startX.current
    
    if (Math.abs(diff) > 20) {
      setSwipeDirection(diff > 0 ? 'right' : 'left')
    }
  }

  const handleTouchEnd = () => {
    const diff = currentX.current - startX.current
    if (Math.abs(diff) > 100) {
      handleVote(diff > 0)
    }
    setSwipeDirection(null)
  }

  const handleVote = (isYes: boolean) => {
    console.log(`Voted ${isYes ? 'Yes' : 'No'} on poll ${currentIndex}`)
    if (currentIndex < samplePolls.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const getCurrentPoll = () => samplePolls[currentIndex]
  const poll = getCurrentPoll()

  if (!poll) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <h3 className="text-xl font-semibold mb-4">No more polls available!</h3>
        <p className="text-gray-500">Check back later for new polls</p>
      </div>
    )
  }

  const getSwipeClass = () => {
    if (!swipeDirection) return ''
    return swipeDirection === 'right' 
      ? 'rotate-3 translate-x-4' 
      : '-rotate-3 -translate-x-4'
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="relative h-[500px]">
        <div
          className={`absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-200 ${getSwipeClass()}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                  {poll.category}
                </span>
                <span className="text-sm text-gray-500">{poll.votes.total.toLocaleString()} votes</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-8">{poll.question}</h2>
            
            {/* Vote buttons */}
            <div className="flex justify-between gap-4 mt-8">
              <button
                onClick={() => handleVote(false)}
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-100 rounded-lg hover:bg-red-200"
              >
                <X className="w-6 h-6" />
                <span>No</span>
              </button>
              
              <button
                onClick={() => handleVote(true)}
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-100 rounded-lg hover:bg-green-200"
              >
                <Check className="w-6 h-6" />
                <span>Yes</span>
              </button>
            </div>

            {/* Keyboard controls hint */}
            <div className="flex justify-center mt-6 text-sm text-gray-500">
              <span className="flex items-center">
                <ChevronLeft className="w-4 h-4 mr-1" /> Swipe left for No
              </span>
              <span className="mx-4">|</span>
              <span className="flex items-center">
                Swipe right for Yes <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-500">
            Poll {currentIndex + 1} of {samplePolls.length}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round((currentIndex / samplePolls.length) * 100)}% complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div 
            className="bg-blue-500 h-1 rounded-full transition-all duration-300"
            style={{ width: `${(currentIndex / samplePolls.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
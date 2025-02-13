'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, X, Check, Search, TrendingUp, Clock, Flame } from 'lucide-react'

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
    imageUrl: "/images/renewable-energy.jpg"
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
    imageUrl: "/images/public-transport.jpg"
  },
  {
    id: 3,
    question: "Support universal basic income?",
    category: "Economy",
    votes: {
      yes: 48,
      no: 52,
      total: 2400
    },
    imageUrl: "/images/basic-income.jpg"
  }
]

type VoteState = {
  selected: boolean | null
  showResults: boolean
}

const categories = [
  { name: 'New', icon: Clock },
  { name: 'Trump Presidency', icon: null },
  { name: 'DOGE', icon: null },
  { name: 'RFK Jr.', icon: null },
  { name: 'Breaking News', icon: null },
  { name: 'Gaza', icon: null },
  { name: 'AI', icon: null },
  { name: 'Ukraine', icon: null },
  { name: 'Trading', icon: null },
]

const trendingPolls = [
  {
    id: 4,
    question: "Will Putin meet with Trump in first 100 days?",
    chance: 62,
    votes: { total: 1500 }
  },
  {
    id: 5,
    question: "Trump ends Ukraine war in first 90 days?",
    chance: 35,
    votes: { total: 2300 }
  },
  // Add more trending polls...
]

export function PollSwipe() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [votes, setVotes] = useState<Map<number, VoteState>>(new Map())

  const handleVote = (isYes: boolean) => {
    const currentPoll = samplePolls[currentIndex]
    const currentVote = votes.get(currentPoll.id)

    if (currentVote?.selected === isYes) return

    setVotes(new Map(votes.set(currentPoll.id, {
      selected: isYes,
      showResults: true
    })))
  }

  const handleNext = () => {
    if (currentIndex < samplePolls.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  const poll = samplePolls[currentIndex]
  const currentVote = votes.get(poll.id) || { selected: null, showResults: false }

  if (!poll) return null

  return (
    <div>
      {/* Main Poll Swiper - Centered with max width */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="relative max-w-lg mx-auto">
          {/* Navigation Arrows - Fixed position */}
          <div className="fixed-height-container">
            <button
              onClick={handlePrevious}
              className="absolute top-[200px] left-[-3rem] p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg 
                hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50
                transition-transform hover:scale-110"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute top-[200px] right-[-3rem] p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg 
                hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50
                transition-transform hover:scale-110"
              disabled={currentIndex === samplePolls.length - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="w-full">
              {/* Poll Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  {/* Future background image will go here */}
                  <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg mb-3">
                    {/* Placeholder for image */}
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-xs">
                      {poll.category}
                    </span>
                    <span className="text-xs text-gray-500">{poll.votes.total.toLocaleString()} votes</span>
                  </div>
                  
                  <h2 className="text-lg font-medium mb-4">{poll.question}</h2>
                  
                  {/* Vote buttons - Enhanced highlighting */}
                  <div className="flex justify-between gap-4">
                    <button
                      onClick={() => handleVote(false)}
                      className={`flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg 
                        transition-all duration-200
                        ${currentVote.selected === false 
                          ? 'bg-red-300 dark:bg-red-800 text-red-800 dark:text-red-100 scale-105 shadow-lg' 
                          : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-100 hover:bg-red-200 dark:hover:bg-red-900/50'
                        }
                        ${currentVote.showResults && currentVote.selected !== false ? 'opacity-50' : ''}`}
                    >
                      <X className={`w-4 h-4 ${currentVote.selected === false ? 'scale-110' : ''}`} />
                      <span className={`text-sm ${currentVote.selected === false ? 'font-medium' : ''}`}>No</span>
                    </button>
                    
                    <button
                      onClick={() => handleVote(true)}
                      className={`flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg 
                        transition-all duration-200
                        ${currentVote.selected === true 
                          ? 'bg-green-300 dark:bg-green-800 text-green-800 dark:text-green-100 scale-105 shadow-lg' 
                          : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-900/50'
                        }
                        ${currentVote.showResults && currentVote.selected !== true ? 'opacity-50' : ''}`}
                    >
                      <Check className={`w-4 h-4 ${currentVote.selected === true ? 'scale-110' : ''}`} />
                      <span className={`text-sm ${currentVote.selected === true ? 'font-medium' : ''}`}>Yes</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="mt-4 flex justify-center gap-2">
                {samplePolls.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Results Animation */}
              {currentVote.showResults && (
                <div className="mt-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg animate-fade-in">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Poll Results</div>
                    <div className="flex justify-center items-center gap-12">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-red-500 dark:text-red-400 mb-1">
                          {poll.votes.no}%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">No</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-500 dark:text-green-400 mb-1">
                          {poll.votes.yes}%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Yes</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Sections */}
      <div className="w-full">
        {/* Categories Navigation */}
        <div className="bg-white dark:bg-gray-800 shadow mb-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="overflow-x-auto">
              <div className="flex items-center space-x-2 py-3">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="px-4 py-2 rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-700 
                      whitespace-nowrap flex items-center gap-2"
                  >
                    {category.icon && <category.icon className="w-4 h-4" />}
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Search and Trends Section */}
        <div className="bg-white dark:bg-gray-800 shadow">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search polls..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                    bg-gray-50 dark:bg-gray-900"
                />
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <TrendingUp className="w-4 h-4" />
                  Top
                </button>
                <button className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Flame className="w-4 h-4" />
                  Trending
                </button>
              </div>
            </div>

            {/* Trending Polls */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {trendingPolls.map((poll) => (
                <div
                  key={poll.id}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-800 
                    transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium flex-1">{poll.question}</h3>
                    <span className="text-sm font-bold text-blue-500">{poll.chance}%</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {poll.votes.total.toLocaleString()} votes
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
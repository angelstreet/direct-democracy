'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, X, Check, Search, TrendingUp, Clock, Flame } from 'lucide-react'

// Types
type Poll = {
  id: number
  question: string
  category: string
  votes: {
    yes: number
    no: number
    total: number
  }
  imageUrl: string
}

type VoteState = {
  selected: boolean | null
  showResults: boolean
}

// Sample Data
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
  }
]

// Main Poll Component
function MainPoll() {
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
    <div className="w-120 mx-auto px-4 mb-8">
      <div className="relative">
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
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg mb-3" />

                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-xs">
                    {poll.category}
                  </span>
                  <span className="text-xs text-gray-500">{poll.votes.total.toLocaleString()} votes</span>
                </div>
                
                <h2 className="text-lg font-medium mb-4">{poll.question}</h2>
                
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

            {currentVote.showResults && (
              <div className="mt-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg animate-fade-in">
                <div className="text-center space-y-2">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Poll Results</div>
                  <div className="flex justify-center items-center gap-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-500 dark:text-red-400">{poll.votes.no}%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">No</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500 dark:text-green-400">{poll.votes.yes}%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Yes</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Polls Explorer Component
function PollsExplorer() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeTag, setActiveTag] = useState('Top')

  const filterTags = [
    { name: 'Top', icon: TrendingUp },
    { name: 'New', icon: Clock },
    { name: 'Trending', icon: Flame }
  ]

  const categories = [
    { name: 'All', active: true },
    { name: 'Politics', active: false },
    { name: 'Sports', active: false },
    { name: 'Crypto', active: false },
    { name: 'Trump', active: false },
    { name: 'Global Elections', active: false },
    { name: 'Elon Tweets', active: false }
  ]

  // Base poll data with fixed volumes
  const basePollsData = [
    {
      id: 1,
      question: "Premier League Winner",
      type: "multi" as const,
      choices: [
        { name: "Liverpool", chance: 77 },
        { name: "Arsenal", chance: 20 },
        { name: "Man City", chance: 1 }
      ],
      volume: "$695m Vol."
    },
    {
      id: 2,
      question: "NBA Champion",
      type: "multi" as const,
      choices: [
        { name: "Boston Celtics", chance: 27 },
        { name: "Oklahoma City Thunder", chance: 27 },
        { name: "LA Clippers", chance: 12 }
      ],
      volume: "$1b Vol."
    },
    {
      id: 3,
      question: "Russia x Ukraine ceasefire in 2025?",
      type: "binary" as const,
      chance: 68,
      volume: "$2m Vol."
    },
    {
      id: 4,
      question: "Bitcoin above $97,000 on February?",
      type: "binary" as const,
      chance: 28,
      volume: "$4m Vol."
    },
    {
      id: 5,
      question: "Trump ends Ukraine war in first 90 days?",
      type: "binary" as const,
      chance: 35,
      volume: "$14m Vol."
    }
  ]

  // Create array of 15 polls by repeating the base data with consistent volumes
  const pollsData = Array.from({ length: 15 }, (_, index) => ({
    ...basePollsData[index % basePollsData.length],
    id: index + 1 // Ensure unique IDs
  }))

  return (
    <div className="w-full bg-gray-900 text-white">
      {/* Top Navigation Bar */}
      <div className="border-b border-gray-800/50">
        <div className="w-full">
          <div className="flex items-center space-x-6 px-4 py-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-2 py-1 text-sm font-medium transition-colors
                  ${activeCategory === category.name 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-gray-200'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="border-b border-gray-800/50 bg-gray-900/50">
        <div className="w-full px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search markets..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
                  text-gray-200 placeholder-gray-400 focus:outline-none focus:border-gray-600"
              />
            </div>
            <div className="flex items-center gap-2 ml-4">
              {filterTags.map((tag) => (
                <button
                  key={tag.name}
                  onClick={() => setActiveTag(tag.name)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm
                    ${activeTag === tag.name
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-400 hover:text-gray-200'}`}
                >
                  <tag.icon className="w-4 h-4" />
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Polls Grid - Fixed 5 columns */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-5 gap-3">
          {pollsData.map((poll) => (
            <div
              key={poll.id}
              className="bg-gray-800/50 rounded-lg p-3 hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-medium">{poll.question}</h3>
              </div>
              
              {poll.type === 'binary' ? (
                <div className="flex items-center justify-between"> 
                  <div className="flex gap-1.5">
                    <button className="px-8 py-1 text-xs rounded bg-red-500/20 hover:bg-red-700/30 text-red-500">
                      No
                    </button>
                    <button className="px-8 py-1 text-xs rounded bg-green-500/20 hover:bg-green-700/30 text-green-500">
                      Yes
                    </button>
                  </div>
                  <div className="text-lg font-bold text-green-400">{poll.chance}%</div>
                </div>
              ) : (
                <div className="space-y-1.5">
                  {poll.choices.map((choice, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">{choice.name}</span>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1 text-xs rounded bg-red-500/20 hover:bg-red-700/30 text-red-500">
                          No
                        </button>
                        <button className="px-3 py-1 text-xs rounded bg-green-500/20 hover:bg-green-700/30 text-green-500">
                          Yes
                        </button>
                        <span className="text-xs font-medium text-gray-300">{choice.chance}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-2 text-xs text-gray-500">
                {poll.volume}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Main Component
export function PollSwipe() {
  return (
    <div className="flex flex-col gap-8">
      <div className="max-w-4xl mx-auto px-4">
        <MainPoll />
      </div>
      <div className="-mx-4 md:-mx-8 lg:-mx-50 xl:-mx-60">
        <PollsExplorer />
      </div>
    </div>
  )
}
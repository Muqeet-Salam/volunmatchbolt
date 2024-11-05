import React from 'react'
import { Award, Gift, Star } from 'lucide-react'

const RewardsPage: React.FC = () => {
  // Dummy data for rewards
  const rewards = [
    { id: 1, name: 'Local Hero', description: 'Completed 10 local community service tasks', icon: 'award' },
    { id: 2, name: 'Time Wizard', description: 'Volunteered for over 100 hours', icon: 'clock' },
    { id: 3, name: 'Eco Warrior', description: 'Participated in 5 environmental conservation projects', icon: 'leaf' },
    { id: 4, name: 'Helping Hand', description: 'Assisted in 3 different categories of volunteer work', icon: 'hand' },
    { id: 5, name: 'Team Player', description: 'Collaborated with 20 different volunteers', icon: 'users' },
  ]

  const earnedRewards = [1, 2, 4] // IDs of earned rewards

  const pointsAndLevel = {
    points: 2750,
    level: 5,
    nextLevel: 3000,
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rewards & Achievements</h1>
      
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">Your Progress</h3>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Current Level</p>
              <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">{pointsAndLevel.level}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Points</p>
              <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">{pointsAndLevel.points}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Progress to Next Level</p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 dark:bg-blue-700">
                <div style={{ width: `${(pointsAndLevel.points / pointsAndLevel.nextLevel) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-right">{pointsAndLevel.nextLevel - pointsAndLevel.points} points to Level {pointsAndLevel.level + 1}</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">Badges & Achievements</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rewards.map((reward) => (
              <div
                key={reward.id}
                className={`relative rounded-lg border ${
                  earnedRewards.includes(reward.id)
                    ? 'border-green-500 dark:border-green-400'
                    : 'border-gray-300 dark:border-gray-600'
                } bg-white dark:bg-gray-700 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500`}
              >
                <div className="flex-shrink-0">
                  {reward.icon === 'award' && <Award className={`h-10 w-10 ${earnedRewards.includes(reward.id) ? 'text-yellow-400' : 'text-gray-400 dark:text-gray-500'}`} />}
                  {reward.icon === 'clock' && <Clock className={`h-10 w-10 ${earnedRewards.includes(reward.id) ? 'text-blue-400' : 'text-gray-400 dark:text-gray-500'}`} />}
                  {reward.icon === 'leaf' && <Leaf className={`h-10 w-10 ${earnedRewards.includes(reward.id) ? 'text-green-400' : 'text-gray-400 dark:text-gray-500'}`} />}
                  {reward.icon === 'hand' && <Hand className={`h-10 w-10 ${earnedRewards.includes(reward.id) ? 'text-purple-400' : 'text-gray-400 dark:text-gray-500'}`} />}
                  {reward.icon === 'users' && <Users className={`h-10 w-10 ${earnedRewards.includes(reward.id) ? 'text-indigo-400' : 'text-gray-400 dark:text-gray-500'}`} />}
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{reward.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{reward.description}</p>
                  </a>
                </div>
                {earnedRewards.includes(reward.id) && (
                  <div className="absolute top-2 right-2">
                    <Star className="h-6 w-6 text-yellow-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RewardsPage
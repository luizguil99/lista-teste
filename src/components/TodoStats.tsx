import { ClipboardList } from 'lucide-react'

interface TodoStatsProps {
  total: number
  completed: number
}

export function TodoStats({ total, completed }: TodoStatsProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-blue-50 rounded-full">
          <ClipboardList className="w-6 h-6 text-blue-500" />
        </div>
        <div>
          <p className="text-gray-500">Total Tasks</p>
          <p className="text-2xl font-semibold">{total}</p>
        </div>
        <div>
          <p className="text-gray-500">Completed</p>
          <p className="text-2xl font-semibold">{completed}</p>
        </div>
      </div>
    </div>
  )
}

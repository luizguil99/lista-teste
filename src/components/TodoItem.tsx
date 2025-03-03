import { useState } from 'react'
import { Check, Trash2, Edit } from 'lucide-react'

interface TodoItemProps {
  id: string
  text: string
  completed: boolean
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, newText: string) => void
}

export function TodoItem({ id, text, completed, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(text)

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(id, editText)
      setIsEditing(false)
    }
  }

  return (
    <div className="group flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex items-center space-x-3 flex-1">
        <button
          onClick={() => onToggle(id)}
          className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${
            completed
              ? 'border-blue-500 bg-blue-500'
              : 'border-gray-300 hover:border-blue-500'
          } transition-colors`}
        >
          {completed && <Check className="w-3 h-3 text-white" />}
        </button>

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
            className="flex-1 px-2 py-1 border-b-2 border-blue-500 focus:outline-none"
            autoFocus
          />
        ) : (
          <p
            className={`flex-1 ${
              completed ? 'line-through text-gray-400' : 'text-gray-700'
            }`}
          >
            {text}
          </p>
        )}
      </div>

      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsEditing(true)}
          className="p-1 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100"
        >
          <Edit className="w-4 h-4" />
        </button>
        <button
          onClick={() => onDelete(id)}
          className="p-1 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

function Calendar({ selected, onSelect }) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const handleDayClick = (day) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    onSelect(newDate)
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = []

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day)
  }

  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })

  return (
    <div className="package-calendar w-full bg-card rounded-lg border border-border p-3 sm:p-4">
      <div className="space-y-4">
        {/* Header */}
        <div className="package-calendar__header flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">{monthName}</h2>
          <div className="package-calendar__nav flex gap-1">
            <Button variant="ghost" size="icon" onClick={previousMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Weekdays */}
        <div className="package-calendar__weekdays grid grid-cols-7 gap-1 sm:gap-2">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
            <div key={day} className="text-center text-xs font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="package-calendar__days grid grid-cols-7 gap-1 sm:gap-2">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => day && handleDayClick(day)}
              className={cn(
                'package-calendar__day aspect-square text-xs sm:text-sm rounded-md sm:rounded-lg border transition-colors',
                day === null && 'invisible',
                selected &&
                  selected.getFullYear() === currentDate.getFullYear() &&
                  selected.getMonth() === currentDate.getMonth() &&
                  selected.getDate() === day
                  ? 'package-calendar__day--selected bg-primary text-primary-foreground border-primary'
                  : 'package-calendar__day--available border-border hover:bg-accent hover:border-accent',
                day === null && 'package-calendar__day--empty cursor-default'
              )}
              disabled={!day}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Calendar }

"use client"
import { useState } from 'react'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { add, format } from 'date-fns'
import { STORE_OPENING_TIME, STORE_CLOSING_TIME, INTERVAL } from '@/config/config'
export default function Calendar() {
    interface typeDate {
        justDate: Date | null;
        dateTime: Date | null;
    }
    const [date, setDate] = useState<typeDate>({
        justDate: null,
        dateTime: null
    })
    console.log(date.dateTime)
    // Now the user will have to pick a time
    const getTimes = () => {
        if (!date.justDate) {
            return null
        }
        const { justDate } = date
        //best practice to instead of writing {hours: 9 } write {hours: STORE_OPENING_TIME}
        const beginning = add(justDate, { hours: STORE_OPENING_TIME })
        const end = add(justDate, { hours: STORE_CLOSING_TIME })
        const interval = INTERVAL
        const times:Date[] = []
        for (let i = beginning; i < end; i = add(i, { minutes: interval })) {
            times.push(i)
        }
        return times
        /* If user has not selected any date then it will return null, else destructure the date */
    }
    const times = getTimes()
    return (
        <div className='p-4 flex flex-col h-screen items-center '>
            {/* The user will be asked to select a date. After the user selects the calendar disappears */}
            {date.justDate ? (
                <div className='flex items-center gap-4'>
                    {times?.map((time, i) => (
                      <div key={`time-${i}`} className='rounded-sm p-2 bg-gray-100'>
                        <button type='button' onClick={()=>{setDate((prev)=>({...prev,dateTime: time}))}}>
                            {format(time,'kk:mm')}
                        </button>
                      </div>  
                    ))}
                </div>
            ) : (
                <ReactCalendar
                    minDate={new Date()}
                    view='month'
                    onClickDay={(dateClicked) => { setDate((prev) => ({ ...prev, justDate: dateClicked })) }}
                />
            )}
        </div>
    )
}

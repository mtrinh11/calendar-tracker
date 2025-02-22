'use client';
import { useEffect, useState } from "react";


export default function Calendar() {

  const [days, setDays] = useState<Date[]>([])

  useEffect(() =>{
    calendarData();
    daysList(1)
  })

  const calendarData = () => {
    const now = new Date(Date.now())
    const day = now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()
    const totalDays = new Date(year, month + 1, 0).getDate()
    const firstDay = new Date(year, month, 1).getDay()

    console.log(totalDays, firstDay, day, month, year)
  }

  const daysList = (firstDay: number, numberOfDays: number = 28) => {
    let days: Date[] = []
    for (let i = 0; i < numberOfDays; i++) {
      days.push(new Date(2025, 1, i))
    }
    setDays(days) 
  }


  return (
    <div >
      {days.map((item: Date) => <div>{item.toString()} </div>)}
    </div>
  );
}

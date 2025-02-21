'use client';
import { useEffect } from "react";


export default function Calendar() {
  useEffect(() =>{
    calendarData();
  })

  const calendarData = () => {
    const now = new Date(Date.now())
    const day = now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()
    const totalDays = new Date(year, month + 1, 0).getDate()

    console.log(totalDays, day, month, year)
  }


  return (
    <div >

    </div>
  );
}

// const time = new Date().getTime()
// const time2 = new Date()
// const myDirthdayDate = new Date("1988-10-04T16:23:00")
// console.log(time)
// console.log(time2)
// console.log(myDirthdayDate)

// const newDate = new Date()
// const getTime = new Date().getTime()
// const dateNow =  Date.now()

// console.log(newDate)
// console.log(getTime)
// console.log(dateNow)

// const timestamp = 946684800000; // 1 Jan 2000 UTC
// const dateObj = new Date(timestamp);

// console.log(dateObj.toTimeString());

//==============
const currentDate = new Date();
// console.log(currentDate.toString());

// function showCurrentDate() {
//   const now = new Date();

//   const date = String(now.getDate()).padStart(2, '0');
//   const month = String(now.getMonth() + 1).padStart(2, '0');
//   const year = String(now.getFullYear()).padStart(2, '0');
//   const hours = String(now.getHours()).padStart(2, '0');
//   const minutes = String(now.getMinutes()).padStart(2, '0');

//   return `${date}-${month}-${year} ${hours}:${minutes}`;
// }
// console.log(showCurrentDate());

export function showWeekDay(date: Date) {
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wenesday',
    'Thursday',
    'Fiday',
    'Saturday',
  ];
  return weekDays[date.getDay()];
}


// console.log(showWeekDay(currentDate));

// function howManyDaysInMonth(year: number, month: number): number {
//   const currentMonth = new Date(year, month - 1);
//   const nextMonth = new Date(
//     month === 12 ? year + 1 : year,
//     month === 12 ? 0 : month
//   );
//   return (nextMonth.getTime() - currentMonth.getTime()) / 86400000;
// }

// function howManyDaysInMonth(year: number, month: number): number {
//     return new Date(year, month, 0).getDate();
// }

// console.log(howManyDaysInMonth(2025, 7));

// function dayDifference(firstDate: Date, secondDate: Date): number {
//   const d1UTC = Date.UTC(
//     firstDate.getUTCFullYear(),
//     firstDate.getUTCMonth(),
//     firstDate.getUTCDate()
//   );
//   const d2UTC = Date.UTC(
//     secondDate.getUTCFullYear(),
//     secondDate.getUTCMonth(),
//     secondDate.getUTCDate()
//   );
//   return Math.abs((d1UTC - d2UTC) / 86400000);
// }
// console.log(dayDifference(currentDate, new Date(946684800000)));

// function addDays(date: Date, days: number): Date {
//   return new Date(date.getTime() + days * 86400000);
// }
// console.log(addDays(currentDate, 3))

// function performanceCounter(fn: () => void): number {
//   const start = performance.now();
//   fn();
//   const end = performance.now();
//   return end - start;
// }

// console.log(
//   performanceCounter(() => {
//     for (let i = 0; i < 1e7; i++) {} // тестовый цикл
//   })
// );

// function dateFormatter(date: Date): string {
//   const weekDays = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wenesday',
//     'Thursday',
//     'Fiday',
//     'Saturday',
//   ];

//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];

//   const weekDay = weekDays[date.getDay()];
//   const days = String(date.getDate()).padStart(2, '0');
//   const month = months[date.getMonth()];
//   const year = date.getFullYear();

//   return `${weekDay}, ${days} ${month} ${year}`;
// }
// console.log(dateFormatter(currentDate))

// function howManyDaysToXmas(date: Date): number {
//   let xmas = new Date(date.getFullYear(), 11, 25);
//   if (date > xmas) {
//     xmas = new Date(date.getFullYear() + 1, 11, 25);
//   }

//   return Math.floor((xmas.getTime() - date.getTime()) / 86400000);
// }
// console.log(howManyDaysToXmas(currentDate));

// function isWeekend(date: Date): boolean {
//   return date.getDay() === 0 || date.getDay() === 6;
// }
// console.log(isWeekend(currentDate));

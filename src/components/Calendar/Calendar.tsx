import { CalendarGrid, Month } from "./Calendar.styled";

type CalendarProps = {
  availableMonths: number[];
};
export const Calendar = ({ availableMonths }: CalendarProps) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <CalendarGrid>
      {months.map((month, i) => (
        <Month isActive={availableMonths.includes(i + 1)}>{month}</Month>
      ))}
    </CalendarGrid>
  );
};

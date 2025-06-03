export function dateFormatter(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  if (hours === 0) hours = 12;

  const minutesStr = minutes.toString().padStart(2, '0');

  return `${month} ${day}. ${hours}:${minutesStr}${ampm}`;
}

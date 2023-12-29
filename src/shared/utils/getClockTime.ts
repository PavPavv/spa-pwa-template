const calcDiff = (startTime: Date, endTime: Date): Date => {
  return new Date(endTime.valueOf() - startTime.valueOf());
};

const formatDate = (date?: Date): string => {
  if (date) {
    const d = new Date(date);
    const localOffset = d.getTimezoneOffset() / 60;
    const hoursWithoutOffset = d.getHours() + localOffset;
    const hour =
      hoursWithoutOffset < 10 ? '0' + hoursWithoutOffset : hoursWithoutOffset;
    const min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    const sec = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
    return hour + ':' + min + ':' + sec;
  }
  return '--:--:--';
};

export const getClockTime = (startDate?: Date): string => {
  if (startDate) {
    const date = new Date();
    const formattedTime = formatDate(calcDiff(startDate, date));
    return formattedTime;
  }
  return '--:--:--';
};

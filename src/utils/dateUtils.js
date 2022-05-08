const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (date) => {
  const day = date.getDate();
  const month = months[date.getMonth() + 1];
  const year = date.getFullYear();

  return `${day} ${month}. ${year}`;
};

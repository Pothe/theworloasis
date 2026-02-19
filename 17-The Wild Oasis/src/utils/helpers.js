import { formatDistance, parseISO } from "date-fns";
// import { format } from "date-fns/format";
import { differenceInDays } from "date-fns/differenceInDays";

export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) => {
  if (!dateStr) return "";

  try {
    return formatDistance(parseISO(dateStr), new Date(), {
      addSuffix: true,
    })
      .replace("about ", "")
      .replace("in", "In");
  } catch (err) {
    console.error("Invalid date:", dateStr);
    return "";
  }
};

export function safeDate(value) {
  if (!value) return null;           // null/undefined
  const date = new Date(value);
  return isNaN(date) ? null : date;  // invalid date
}


export const formatDateDistance = (from, to = new Date(), options = {}) => {
  return formatDistance(new Date(from), new Date(to), {
    addSuffix: true,  
  });
};



export const getToday = function (options = {}) {
  const today = new Date();

  if (options?.end)
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);

  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(value);

export const formatDate = (date) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  let daySuffix = 'th';

  if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
    daySuffix = 'st';
  } else if (dayOfMonth === 2 || dayOfMonth === 22) {
    daySuffix = 'nd';
  } else if (dayOfMonth === 3 || dayOfMonth === 23) {
    daySuffix = 'rd';
  }

  return `${dayOfWeek}, ${month} ${dayOfMonth}${daySuffix}`;
}

export const getGreeting = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 0 && currentHour < 12) {
    return 'Good morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
}

export const getTimeDifference = (timestamp) => {
  const currentTimestamp = new Date().getTime();
  const providedTimestamp = new Date(timestamp).getTime();
  const timeDifferenceInSeconds = Math.floor((currentTimestamp - providedTimestamp) / 1000);

  if (timeDifferenceInSeconds < 60) {
    return `${timeDifferenceInSeconds} seconds ago`;
  } else if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (timeDifferenceInSeconds < 86400) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(timeDifferenceInSeconds / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
}


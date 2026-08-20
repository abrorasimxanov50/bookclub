export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const truncateText = (text: string, length: number) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

export const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
};

export const calculateReadingTime = (pageCount: number, pagesPerMinute: number = 1) => {
  return Math.ceil(pageCount / pagesPerMinute);
};

export const formatNumber = (num: number) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'm';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
};

export const getProgressColor = (percentage: number) => {
  if (percentage < 25) return 'text-red-500';
  if (percentage < 50) return 'text-amber-500';
  if (percentage < 75) return 'text-yellow-500';
  return 'text-green-500';
};

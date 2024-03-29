const formatUnixTime = (unixTimeVal: number) => {
  if (!unixTimeVal) return 'no data';
  const miliseconds = unixTimeVal * 1000;

  const formatOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  return new Date(miliseconds).toLocaleString(undefined, formatOptions);
};

export default formatUnixTime;

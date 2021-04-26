const getQueryString = (description, fulltime, location) => {
  return `https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${
    fulltime ? "on" : ""
  }`;
};

export { getQueryString };

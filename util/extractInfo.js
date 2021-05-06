const extractInfo = (results) => {
  let newList = [];

  results.forEach((result) => {
    let newObject = {
      title: result.title,
      year: new Date(result.release_date).getFullYear() || 'N/A',
      poster: result.poster_path,
      id: result.id,
      popularity: result.popularity,
    };

    newList.push(newObject);
  });

  return newList;
};

module.exports = { extractInfo };

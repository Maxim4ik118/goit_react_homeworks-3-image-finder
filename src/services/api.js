export const fetchImages = async (searchTerm = "", currentPage = 1) => {
  const response = await fetch(
    `https://pixabay.com/api/?q=${searchTerm}&page=${currentPage}&key=${process.env.REACT_APP_PIXABY_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return await response.json();
};



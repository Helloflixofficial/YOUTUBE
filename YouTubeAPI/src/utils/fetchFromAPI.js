import axios from "axios";
const option = {
  params: {
    maxResults: 10,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(
    `${"https://youtube-v31.p.rapidapi.com"}/${url}`,
    option
  );
  return data;
};

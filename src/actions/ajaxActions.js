import { FETCH_EXAMPLE } from "./types";

export const fetchExample = () => async (dispatch) => {
  const ids = {
    Munich: 2867714,
    London: 2643743,
    California: 4350049,
  };

  const fetches = await Promise.all(
    Object.values(ids).map((e) =>
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${e}&appid=` // here you put your token key
      ).then((e) => e.json())
    )
  );

  dispatch({
    type: FETCH_EXAMPLE,
    payload: {
      // iterating through object does not guarantee order, so I chose manually
      Munich: fetches[0],
      London: fetches[1],
      California: fetches[2],
    },
  });
};

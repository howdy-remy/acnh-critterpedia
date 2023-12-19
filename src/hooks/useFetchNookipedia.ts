import { useState, useEffect } from "react";

export const useFetchNookipedia: (url: string) => () => Promise<any> = (
  url
) => {
  return async () => {
    const response = await fetch(`https://api.nookipedia.com/nh/${url}`, {
      headers: {
        "X-API-KEY": "dfda704b-5968-409b-9221-cc75c7e784f5",
        "Accept-Version": "1.6.0",
      },
    });
    return await response.json();
  };
};

import React, { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    // Update the document title
    document.title = `TurboToy||${title}`;
  }, [title]);
};

export default useTitle;

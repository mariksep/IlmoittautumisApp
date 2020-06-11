import React, { useState } from "react";
import PropTypes from "prop-types";

const MediaContext = React.createContext();

const MediaProvider = ({ children }) => {
  const [list, setList] = useState(null);
  return (
    <MediaContext.Provider value={[list, setList]}>
      {children}
    </MediaContext.Provider>
  );
};

MediaProvider.propTypes = {
  children: PropTypes.node,
};

export { MediaContext, MediaProvider };

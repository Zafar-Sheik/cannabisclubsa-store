import Helmet from "react-helmet";

import React from "react";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <keywords name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Cannabis Club SA",
  description: "We sell the best cannabis products",
  keywords:
    "cannabis, weed, marijuana, edibles, growing club, south africa, sa",
};
export default Meta;

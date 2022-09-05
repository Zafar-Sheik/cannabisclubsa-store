import React from "react";

import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Link
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/products/search/${keyword}/page/${x + 1}`
                  : `/products/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
            active={x + 1 === page}
          >
            {x + 1}
          </Link>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;

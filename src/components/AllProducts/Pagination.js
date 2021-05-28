import React from "react";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div
      style={{
        background: "#150F0F",
        margin: " auto",
        padding: "30px",
        border: "10px solid #e31837",
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          flexWrap: "wrap",
          gap: "5px",
          //   width: "500px",
          margin: "auto",
          paddingBottom: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pageNumbers.map((number) => (
          <li key={number}>
            <p
              style={{
                cursor: "pointer",

                padding: "8px 10px",
                border: "3px solid #ffc500",
                borderRadius: "6px",
                alignItems: "center",
              }}
              className="page-number"
              onClick={() => paginate(number)}
            >
              {number}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;

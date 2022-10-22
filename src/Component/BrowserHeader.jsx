import React from "react";

const BrowserHeader = () => {
  return (
    <div className="Browser-Header">
      <div className="content-actions">
        <div className="actions-set">
          <div
            className="Browser-Actions"
            style={{
              backgroundColor: "rgba(237, 106, 94, 1)",

              borderColor: "rgba(206, 83, 71, 1)",
            }}
          />
          <div
            className="Browser-Actions"
            style={{
              backgroundColor: "rgba(246, 190, 79, 1)",

              borderColor: "rgba(214, 162, 67, 1)",
            }}
          />
          <div
            className="Browser-Actions"
            style={{
              backgroundColor: "rgba(98, 197, 84, 1)",

              borderColor: "rgba(88, 169, 66, 1)",
            }}
          />
        </div>
      </div>
      <div className="address-header"></div>
    </div>
  );
};

export default BrowserHeader;

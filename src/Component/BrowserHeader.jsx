import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineRefresh } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const BrowserHeader = () => {
  return (
    <div id="browserHeader">
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
        <div className="address-header">
          <div className="actions-content">
            <AiOutlineArrowLeft
              style={{
                width: "20px",
                height: "40px",
                cursor: "pointer",
              }}
            />
            <AiOutlineArrowRight
              style={{
                width: "20px",
                height: "40px",
                cursor: "pointer",
              }}
            />
            <MdOutlineRefresh
              style={{
                width: "20px",
                height: "40px",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="input-container">
            <i className="fa fa-eye"></i>
            <input
              type="url"
              class="form-control"
              placeholder="www.cartrabbit.io"
              className="address-input"
            />
          </div>
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  );
};

export default BrowserHeader;

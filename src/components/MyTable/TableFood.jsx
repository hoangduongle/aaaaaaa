import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useEffect } from "react";
import "./table.scss";

const TableFood = (props) => {
  const [dataShow, setDataShow] = useState([]);

  useEffect(() => {
    const initDataShow =
      props.limit && props.bodyData
        ? props.bodyData.slice(0, Number(props.limit))
        : props.bodyData;
    setDataShow(initDataShow);
  }, [props.bodyData, props.limit]);

  let pages = 1;

  let range = [];

   let page = Math.floor(props.bodyData.length / Number(props.limit));
   pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;

   range = [...Array(pages).keys()];


  const [currPage, setCurrPage] = useState(0);

  const selectPage = (page) => {
    const start = Number(props.limit) * page;
    const end = start + Number(props.limit);
    setDataShow(props.bodyData.slice(start, end));
    setCurrPage(page);
  };

  return (
    <div>
      <div className="table-wrapper">
        <table>
          {props.headData && props.renderHead ? (
            <thead>
              <tr>
                {props.headData.map((item, index) =>
                  props.renderHead(item, index)
                )}
              </tr>
            </thead>
          ) : null}
          {props.bodyData && props.renderBody ? (
            <>
              {dataShow.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <td>#{item.id}</td>
                    <td>{item.foodName === null ? "null" : item.foodName}</td>
                    <td>{item.price === null ? "null" : item.price}</td>
                    <td>{item.foodName === null ? "null" : item.foodName}</td>
                    <td>
                      {!item.status ? (
                        <td className="status red">Không hoạt động</td>
                      ) : (
                        <td className="status green">Hoạt động</td>
                      )}
                    </td>
                    <td>
                      <Icon className="icon" icon="bx:show-alt" />
                      <Icon className="icon" icon="bx:bx-edit-alt" />
                      <Icon
                        className="icon"
                        icon="material-symbols:delete-outline-rounded"
                      />
                    </td>
                  </tr>
                </tbody>
              ))}
            </>
          ) : null}
        </table>
      </div>
      {pages > 1 ? (
        <div className="table__pagination">
          {range.map((item, index) => (
            <div
              key={index}
              className={`table__pagination-item ${
                currPage === index ? "active" : ""
              }`}
              onClick={() => selectPage(index)}
            >
              {item + 1}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default TableFood;
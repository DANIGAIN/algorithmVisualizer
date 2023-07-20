import SortingVisualizer from "../../SortingVisualizer/SortingVisualizer";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.css";

export default function Sidebar({ isArray, isGraph, dispatch, ArrayBar ,isClickBfs}) {
  const sortRef = useRef(null);
  const searchRef = useRef(null);

  let handleClick = (e, field) => {
    field.current.nextElementSibling.classList.toggle("sub-menu");
    field.current.querySelector(".dropdown").classList.toggle("fa-rotate-90");
  };

  return (
    <>
      <div className="side-bar">
        <div id="title">
          <h2>Welcome to</h2>
          <h1>Algorithm Vizualizer</h1>
        </div>
        <div className="menu">
          <div className="item">
            <Link
              className="sub-item"
              name="newArray"
              style={{ textAlign: "center" }}
              onClick={() => dispatch({ type: "newArray", payload: ArrayBar })}
            >
              {" "}
              Generate new array{" "}
            </Link>
          </div>
          <div className={`item ${isArray ? "" : "isArrayinVisible"}`}>
            <a
              className="sub-btn"
              ref={sortRef}
              onClick={(e) => handleClick(e, sortRef)}
            >
              Sorting
              <FontAwesomeIcon icon={faAngleRight} className="fas dropdown" />
            </a>
            <div className="sub-menu">
              <Link
                className="sub-item"
                name="marge"
                onClick={() => dispatch({ type: "marge", payload: true })}
              >
                {" "}
                margeSort{" "}
              </Link>
              <Link
                className="sub-item"
                name="bubble"
                onClick={() => dispatch({ type: "bubble", payload: true })}
              >
                {" "}
                bouble sort{" "}
              </Link>
              <Link
                className="sub-item"
                name="selection"
                onClick={() => dispatch({ type: "selection", payload: true })}
              >
                selection sort{" "}
              </Link>
            </div>
          </div>
      
          <div className={`item ${isArray ? "" : "isArrayinVisible"}`}>
            <a
              className="sub-btn"
              ref={searchRef}
              onClick={(e) => handleClick(e, searchRef)}
            >
              Searching
              <FontAwesomeIcon icon={faAngleRight} className="fas dropdown" />
            </a>
            <div className="sub-menu">
              <Link
                className="sub-item"
                name="binary"
                onClick={() => dispatch({ type: "binary", value: true })}
              >
                binary search
              </Link>
              <Link
                className="sub-item"
                name="linear"
                onClick={() => dispatch({ type: "linear", value: true })}
              >
                linear search
              </Link>
            </div>
          </div>

          <div className="item">
            <Link
              className="sub-item"
              name="newGraph"
              style={{ textAlign: "center" }}
              onClick={() => dispatch({ type: "newGraph", payload: true })}
            >
              {" "}
              Generate graph{" "}
            </Link>
          </div>

          <div className={`item ${isGraph ? "" : "isArrayinVisible"}`}>
            <a
              className="sub-btn"
              ref={searchRef}
              onClick={(e) => handleClick(e, searchRef)}
            >
              Path Finding Algorithm
              <FontAwesomeIcon icon={faAngleRight} className="fas dropdown" />
            </a>
            <div className="sub-menu">
              <Link
                className="sub-item"
                name="bfs"
                onClick={isClickBfs}
              >
                Breadth First Search
              </Link>
              <Link
                className="sub-item"
                name="dfs"
                // onClick=
              >
                Depth First Search
              </Link>
            </div>
          </div>



        </div>

        <div className={`footer ${isGraph ? "" : "invisible"}`}>
          <h4 className="heading">Source node </h4>
          <div id="sourceBox"></div>
          <br />
          <h4 className="heading">Destination Node</h4>
          <div id="DestinationBox"></div>
          <br />

          <h4 className="heading">Search Node</h4>
          <div id="SearchBox"></div>
          <br />

          <h4 className="heading"> Wall Node</h4>
          <div id="wallBox"></div>

          <br />
          <h4 className="heading"> Path Node </h4>
          <div id="sortestpatchBox"></div>
        </div>
      </div>
    </>
  );
}
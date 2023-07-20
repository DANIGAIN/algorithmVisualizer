import React, { useEffect, useState } from "react";

import InputControl from "../../InputControl/InputControl";
import './style.css';

export default function Modal(props) {
    
const {setPermissionGraph ,setNumberofRow , setNumberofCol,NumberOfRow , NumberOfCol ,setNodeValue , nodeValue,setStartNode ,setFinishNode ,startNode,finishNode} = props ;
 
 let  closeHandeler =()=>
 {
      setPermissionGraph(true);
      document.querySelector('.modal').classList.add('hidden');
     
 }
   
    return (
        <div className="modal">
            <div className="contentBox">
                <button className="close" onClick={closeHandeler}></button>
                <div className="content">
                  <div >
                        <label htmlFor="Row">Number of row </label>
                        <input name="row" type="text" id="Row" value={NumberOfRow} onChange={(evant) => {
                        setNumberofRow(evant.target.value)}} />
                  </div>
                  <div>
                        <label htmlFor="Col">Number of col</label>
                        <input name="col" type="text"  id="Col" value={NumberOfCol} onChange={(evant) => {
                        setNumberofCol(evant.target.value)}} />
                  </div>
                   <div>
                         <label htmlFor="nodeSize"> Node Size</label>
                         <input name="node" type="text" value={nodeValue} id="nodeSize"  onChange={(evant) => {
                        setNodeValue(evant.target.value)}}/>
                  </div>
                  <div>
                         <label htmlFor="sourceRow">Source Row</label>
                         <input name="sourceRow" type="text" value={startNode.row} id="sourceRow" onChange={(evant) => {
                        setStartNode((prev) => ({ ...prev, row: evant.target.value }))}}/>
                  </div>

                  <div>
                         <label htmlFor="sourceCol">Source Col</label>
                         <input name="sourceCol" type="text" value={startNode.col} id="sourceCol" onChange={(evant) => {
                        setStartNode((prev) => ({ ...prev, col: evant.target.value }))}}/>
                  </div>

                  <div>
                         <label htmlFor="desRow">Destination Row</label>
                         <input name="desRow" type="text" value={finishNode.row} id="desRow" onChange={(evant) => {
                        setFinishNode((prev) => ({ ...prev, row: evant.target.value }))}}/>
                   </div>
                   <div>
                         <label htmlFor="desCol">Destination Col</label>
                         <input name="desCol" type="text" value={finishNode.col} id="desCol" onChange={(evant) => {
                        setFinishNode((prev) => ({ ...prev, col: evant.target.value }))}}/>
                   </div>
                </div>
            </div>
        </div>
    )
}
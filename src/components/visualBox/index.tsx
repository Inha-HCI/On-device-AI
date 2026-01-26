import React from "react"
import * as VisualBoxStyle from "./visualBox.module.css"

const VisualBox = () => {
  return (
    <div className={VisualBoxStyle.visualBoxWrapper}>
      <div className={VisualBoxStyle.siteDescription}>
        <h1>On-device AI Lab #Inha univ.</h1>
        <p>On-device AI System Lab</p>
      </div>
    </div>
  )
}

export default VisualBox

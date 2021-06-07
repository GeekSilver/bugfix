import React, { useEffect } from 'react'

const BugSkeleton = ({displaySkeletonProp, mode}) => {
    return (
        <div id="bug" className="container-sm my-2 pt-2 rounded"
        style={{ display: displaySkeletonProp ? "" : "none" }}>
        <div className={mode ? "card-skeleton-light" : "card-skeleton-darker"}>
          <div className="line light-bg"></div>

          <div className="d-flex my-2"><div className="tag-skeleton light-bg mr-2"></div><div className="tag-skeleton light-bg"></div></div>
          <div className="date-posted-skeleton light-bg mb-4"></div>
           {/* bug body  */}
          <div className="line light-bg"></div>
          <div className="line light-bg"></div>
          <div className="line light-bg"></div>
          <div className="line light-bg"></div>
          <div className="line light-bg"></div>
          <div className="line light-bg"></div>
          <div className="line light-bg"></div>
          <div className="line light-bg"></div>
          <div className="line light-bg"></div>
          <div className="line light-bg"></div>
          <div className="line light-bg"></div>
          <div className="line light-bg"></div>
          <div className="line light-bg"></div>
          <div className="line light-bg"></div>
          <div className="line light-bg"></div>
          <div className="card-skeleton-title light-bg"></div>
        </div>
      </div>
    )
} 
 
 export default BugSkeleton
import React from 'react'

const SpecificTagBugsSkeleton = ({ displaySkeletonProp, mode}) => {
    return (
        <div className={mode ? "card border-0 card-skeleton-light" : "card border-0 card-skeleton-darker"}
        style={{ display: displaySkeletonProp ? "" : "none" }}>
            <div  className="container">
          <div className="container">
            <div className="icon light-bg"></div>
            <div className="my-4">
              <div className="date-posted-skeleton light-bg mx-auto"></div>
              <div className="line light-bg"></div>
              <div className="card-skeleton-title light-bg"></div>
            </div>
          </div>

          <div>
            <div className="my-2 pt-2 rounded">
              <div className="line light-bg"></div>
              <div className="line light-bg"></div>
              <div className="card-skeleton-title light-bg"></div>
            </div>

            <div className="my-2 pt-2 rounded">
              <div className="line light-bg"></div>
              <div className="card-skeleton-title light-bg"></div>
            </div>
            <div className="my-2 pt-2 rounded">
              <div className="line light-bg"></div>

              <div className="card-skeleton-title light-bg"></div>
            </div>
            <div className="my-2 pt-2 rounded">
              <div className="line light-bg"></div>
              <div className="line light-bg"></div>
              <div className="card-skeleton-title light-bg"></div>
            </div>

            <div className="my-2 pt-2 rounded">
              <div className="line light-bg"></div>
              <div className="card-skeleton-title light-bg"></div>
            </div>
            <div className="my-2 pt-2 rounded">
              <div className="line light-bg"></div>

              <div className="card-skeleton-title light-bg"></div>
            </div>
            <div className="my-2 pt-2 rounded">
              <div className="line light-bg"></div>
              <div className="card-skeleton-title light-bg"></div>
            </div>
          </div>
        </div>
      </div>
    )
} 
 
 export default SpecificTagBugsSkeleton
import React from "react";
import "../tagsskeleton.css";

const TagsSkeleton = ({ displaySkeletonProp, mode }) => {
  return (
    <div className="container" style={{display: displaySkeletonProp ? "":"none"}}>
      <div className="row card-columns d-inline-block">
        {/* card 1 */}
              <div
          className={
            mode
              ? " card card-skeleton border-0 card-skeleton-light"
              : "card card-skeleton border-0 card-skeleton-darker"
              
                  }
          key="tag-skeleton-1"
        >
          <div className="container2">
            <div className="mt-2 row">
              <i
                className={
                  mode
                    ? "icon text-center icon-light-bg"
                    : "icon text-center icon-darker-bg"
                }
              ></i>
            </div>

            <div className="card-body text-center">
              <div
                className={
                  mode
                    ? "card-title card-title-light-bg"
                    : "card-title card-title-darker-bg"
                }
              ></div>

              <div
                className={mode ? "line line-light-bg" : "line line-darker-bg"}
              ></div>
              <div
                className={mode ? "line line-light-bg" : "line line-darker-bg"}
              ></div>
              <div
                className={mode ? "line line-light-bg" : "line-darker-bg"}
              ></div>

              <div
                className={
                  mode ? "card-link card-link-light-bg" : "card-link card-link-darker-bg"
                }
              ></div>
            </div>
          </div>
        </div>
              {/* end of card 1 */}
              
                      {/* card 2 */}
                      <div
          className={
            mode
              ? " card card-skeleton border-0 card-skeleton-light"
              : "card card-skeleton border-0 card-skeleton-darker"
              
                  }
          key="tag-skeleton-2"
        >
          <div className="container2">
            <div className="mt-2 row">
              <i
                className={
                  mode
                    ? "icon text-center icon-light-bg"
                    : "icon text-center icon-darker-bg"
                }
              ></i>
            </div>

            <div className="card-body text-center">
              <div
                className={
                  mode
                    ? "card-title card-title-light-bg"
                    : "card-title card-title-darker-bg"
                }
              ></div>

              <div
                className={mode ? "line line-light-bg" : "line line-darker-bg"}
              ></div>
              <div
                className={mode ? "line line-light-bg" : "line line-darker-bg"}
              ></div>
              <div
                className={mode ? "line line-light-bg" : "line-darker-bg"}
              ></div>

              <div
                className={
                  mode ? "card-link card-link-light-bg" : "card-link card-link-darker-bg"
                }
              ></div>
            </div>
          </div>
        </div>
              {/* end of card 2 */}
              
                      {/* card 3 */}
                      <div
          className={
            mode
              ? " card card-skeleton border-0 card-skeleton-light"
              : "card card-skeleton border-0 card-skeleton-darker"
              
                  }
          key="tag-skeleton-3"
        >
          <div className="container2">
            <div className="mt-2 row">
              <i
                className={
                  mode
                    ? "icon text-center icon-light-bg"
                    : "icon text-center icon-darker-bg"
                }
              ></i>
            </div>

            <div className="card-body text-center">
              <div
                className={
                  mode
                    ? "card-title card-title-light-bg"
                    : "card-title card-title-darker-bg"
                }
              ></div>

              <div
                className={mode ? "line line-light-bg" : "line line-darker-bg"}
              ></div>
              <div
                className={mode ? "line line-light-bg" : "line line-darker-bg"}
              ></div>
              <div
                className={mode ? "line line-light-bg" : "line-darker-bg"}
              ></div>

              <div
                className={
                  mode ? "card-link card-link-light-bg" : "card-link card-link-darker-bg"
                }
              ></div>
            </div>
          </div>
        </div>
              {/* end of card 3 */}
              
                      {/* card 4 */}
                      <div
          className={
            mode
              ? " card card-skeleton border-0 card-skeleton-light"
              : "card card-skeleton border-0 card-skeleton-darker"
              
                  }
          key="tag-skeleton-4"
        >
          <div className="container2">
            <div className="mt-2 row">
              <i
                className={
                  mode
                    ? "icon text-center icon-light-bg"
                    : "icon text-center icon-darker-bg"
                }
              ></i>
            </div>

            <div className="card-body text-center">
              <div
                className={
                  mode
                    ? "card-title card-title-light-bg"
                    : "card-title card-title-darker-bg"
                }
              ></div>

              <div
                className={mode ? "line line-light-bg" : "line line-darker-bg"}
              ></div>
              <div
                className={mode ? "line line-light-bg" : "line line-darker-bg"}
              ></div>
              <div
                className={mode ? "line line-light-bg" : "line-darker-bg"}
              ></div>

              <div
                className={
                  mode ? "card-link card-link-light-bg" : "card-link card-link-darker-bg"
                }
              ></div>
            </div>
          </div>
        </div>
              {/* end of card 4 */}
              
                      {/* card 5 */}
                      <div
          className={
            mode
              ? " card card-skeleton border-0 card-skeleton-light"
              : "card card-skeleton border-0 card-skeleton-darker"
              
                  }
          key="tag-skeleton-5"
        >
          <div className="container2">
            <div className="mt-2 row">
              <i
                className={
                  mode
                    ? "icon text-center icon-light-bg"
                    : "icon text-center icon-darker-bg"
                }
              ></i>
            </div>

            <div className="card-body text-center">
              <div
                className={
                  mode
                    ? "card-title card-title-light-bg"
                    : "card-title card-title-darker-bg"
                }
              ></div>

              <div
                className={mode ? "line line-light-bg" : "line line-darker-bg"}
              ></div>
              <div
                className={mode ? "line line-light-bg" : "line line-darker-bg"}
              ></div>
              <div
                className={mode ? "line line-light-bg" : "line-darker-bg"}
              ></div>

              <div
                className={
                  mode ? "card-link card-link-light-bg" : "card-link card-link-darker-bg"
                }
              ></div>
            </div>
          </div>
        </div>
              {/* end of card 5 */}
              
                      {/* card 6 */}
                      <div
          className={
            mode
              ? " card card-skeleton border-0 card-skeleton-light"
              : "card card-skeleton border-0 card-skeleton-darker"
              
                  }
          key="tag-skeleton-6"
        >
          <div className="container2">
            <div className="mt-2 row">
              <i
                className={
                  mode
                    ? "icon text-center icon-light-bg"
                    : "icon text-center icon-darker-bg"
                }
              ></i>
            </div>

            <div className="card-body text-center">
              <div
                className={
                  mode
                    ? "card-title card-title-light-bg"
                    : "card-title card-title-darker-bg"
                }
              ></div>

              <div
                className={mode ? "line line-light-bg" : "line line-darker-bg"}
              ></div>
              <div
                className={mode ? "line line-light-bg" : "line line-darker-bg"}
              ></div>
              <div
                className={mode ? "line line-light-bg" : "line-darker-bg"}
              ></div>

              <div
                className={
                  mode ? "card-link card-link-light-bg" : "card-link card-link-darker-bg"
                }
              ></div>
            </div>
          </div>
        </div>
        {/* end of card 6 */}
      </div>
    </div>
  );
};

export default TagsSkeleton;

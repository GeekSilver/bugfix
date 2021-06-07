import React from "react";
import "../tagsskeleton.css";

const TagsSkeleton = ({ displaySkeletonProp, mode }) => {
  return (
    <div
      className="container"
      style={{ display: displaySkeletonProp ? "" : "none" }}
    >
      <div className="card-columns d-md-inline-block">
        {/* card 1 */}
        <div
          className={
            mode
              ? "card card-skeleton border-0 card-skeleton-light"
              : "card card-skeleton border-0 card-skeleton-darker"
          }
          key="tag-skeleton-1"
        >
          <div>
            <div className="mt-2 row">
              <i
                className={
                  mode
                    ? "icon text-center light-bg"
                    : "icon text-center darker-bg"
                }
              ></i>
            </div>

            <div className="card-body text-center">
              <div
                className={
                  mode
                    ? "card-skeleton-title light-bg"
                    : "card-skeleton-title darker-bg"
                }
              ></div>

              <div
                className={mode ? "line light-bg" : "line darker-bg"}
              ></div>
              <div
                className={mode ? "line light-bg" : "line darker-bg"}
              ></div>
              <div
                className={mode ? "line light-bg" : "darker-bg"}
              ></div>

              <div
                className={
                  mode
                    ? "card-link light-bg"
                    : "card-link darker-bg"
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
              ? "card card-skeleton border-0 card-skeleton-light"
              : "card card-skeleton border-0 card-skeleton-darker"
          }
          key="tag-skeleton-2"
        >
          <div>
            <div className="mt-2 row">
              <i
                className={
                  mode
                    ? "icon text-center light-bg"
                    : "icon text-center darker-bg"
                }
              ></i>
            </div>

            <div className="card-body text-center">
              <div
                className={
                  mode
                    ? "card-skeleton-title light-bg"
                    : "card-skeleton-title darker-bg"
                }
              ></div>

              <div
                className={mode ? "line light-bg" : "line darker-bg"}
              ></div>
              <div
                className={mode ? "line light-bg" : "line darker-bg"}
              ></div>
              <div
                className={mode ? "line light-bg" : "darker-bg"}
              ></div>

              <div
                className={
                  mode
                    ? "card-link light-bg"
                    : "card-link darker-bg"
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
          <div>
            <div className="mt-2 row">
              <i
                className={
                  mode
                    ? "icon text-center light-bg"
                    : "icon text-center darker-bg"
                }
              ></i>
            </div>

            <div className="card-body text-center">
              <div
                className={
                  mode
                    ? "card-skeleton-title light-bg"
                    : "card-skeleton-title darker-bg"
                }
              ></div>

              <div
                className={mode ? "line light-bg" : "line darker-bg"}
              ></div>
              <div
                className={mode ? "line light-bg" : "line darker-bg"}
              ></div>
              <div
                className={mode ? "line light-bg" : "darker-bg"}
              ></div>

              <div
                className={
                  mode
                    ? "card-link light-bg"
                    : "card-link darker-bg"
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
          <div>
            <div className="mt-2 row">
              <i
                className={
                  mode
                    ? "icon text-center light-bg"
                    : "icon text-center darker-bg"
                }
              ></i>
            </div>

            <div className="card-body text-center">
              <div
                className={
                  mode
                    ? "card-skeleton-title light-bg"
                    : "card-skeleton-title darker-bg"
                }
              ></div>

              <div
                className={mode ? "line light-bg" : "line darker-bg"}
              ></div>
              <div
                className={mode ? "line light-bg" : "line darker-bg"}
              ></div>
              <div
                className={mode ? "line light-bg" : "darker-bg"}
              ></div>

              <div
                className={
                  mode
                    ? "card-link light-bg"
                    : "card-link darker-bg"
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
          <div>
            <div className="mt-2 row">
              <i
                className={
                  mode
                    ? "icon text-center light-bg"
                    : "icon text-center darker-bg"
                }
              ></i>
            </div>

            <div className="card-body text-center">
              <div
                className={
                  mode
                    ? "card-skeleton-title light-bg"
                    : "card-skeleton-title darker-bg"
                }
              ></div>

              <div
                className={mode ? "line light-bg" : "line darker-bg"}
              ></div>
              <div
                className={mode ? "line light-bg" : "line darker-bg"}
              ></div>
              <div
                className={mode ? "line light-bg" : "darker-bg"}
              ></div>

              <div
                className={
                  mode
                    ? "card-link light-bg"
                    : "card-link darker-bg"
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
          <div>
            <div className="mt-2 row">
              <i
                className={
                  mode
                    ? "icon text-center light-bg"
                    : "icon text-center darker-bg"
                }
              ></i>
            </div>

            <div className="card-body text-center">
              <div
                className={
                  mode
                    ? "card-skeleton-title light-bg"
                    : "card-skeleton-title darker-bg"
                }
              ></div>

              <div
                className={mode ? "line light-bg" : "line darker-bg"}
              ></div>
              <div
                className={mode ? "line light-bg" : "line darker-bg"}
              ></div>
              <div
                className={mode ? "line light-bg" : "darker-bg"}
              ></div>

              <div
                className={
                  mode
                    ? "card-link light-bg"
                    : "card-link darker-bg"
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

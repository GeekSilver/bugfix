import React from "react";
import Tag from "./Tag";

const Tags = ({ tags, mode }) => {
  return (
    <div className="container">
      <div className="row card-columns d-inline-block ">
        {tags.map((tag) => (
          <Tag
            icon={tag.fab ? [tag.name]: `icon-${tag.name}`}
            link={`/tags/${tag.name}`}
            tag={tag.name}
            about={tag.description}
            mode={mode}
          />
        ))}
      </div>
    </div>
  );
};

export default Tags;

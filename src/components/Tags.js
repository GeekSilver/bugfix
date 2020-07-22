import React from "react";
import Tag from "./Tag";

const Tags = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Tag
          icon={["fab", "react"]}
          link="/tags/reactjs"
          tag="React js"
          about="Bugs and exceptions in react js and create-react-app applications."
        />
        <Tag
          icon={["fab", "ubuntu"]}
          link="/tags/ubuntu"
          tag="Ubuntu"
          about="Archives bugs and exceptions thrown in systems using Ubuntu
              Operating System."
        />
        <Tag
          icon={["fab", "node"]}
          link="/tags/nodejs"
          tag="Node js"
          about="Node js bugs and exceptions. Can also include node installation
              and ecosystem problems and also bugs of node js based frameworks
              like express js or koa js."
        />
        <Tag
          icon={["fab", "android"]}
          link="/tags/android"
          tag="Android / Android Studio"
          about="Contains bugs and system related problems with Android Studio or
              android projects. Could also include bugs and exceptions thrown by
              Java or kotlin in an android project."
        />
        <Tag
          icon={["fab", "java"]}
          link="/tags/java"
          tag="Java"
          about="Java programming language specific exceptions and java projects
              bugs."
        />
        <Tag
          icon={["fab", "laravel"]}
          link="/tags/laravel"
          tag="Laravel"
          about="Bugs and Exceptions thrown in laravel project. Could also include
              php, composer or other system related problems such as configuring
              MySQL or any other databases for use in a laravel project."
              />
                      <Tag
          icon={"icon-postgres"}
          link="/tags/postgres"
          tag="Postgres / Postgresql"
          about="This contains bugs and exceptions for Postgres and also
              installation or system problems with Postgres databases."
        />
        <Tag
          icon={"icon-mysql"}
          link="/tags/mysql"
          tag="MySQL"
          about="MySQL databases bugs, exceptions and system problems such as
              installation and MySQL user problems."
        />
      </div>
    </div>
  );
};

export default Tags;

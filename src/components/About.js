import React from "react";
import '../bugs.css'

const About = () => {
  return (
    <div className="col-md-6 mx-auto mt-md-5 about">
      <h2 className="text-center" id="text-muted">
        Genesis
      </h2>
      <article>
        BugFix is inspired by painful, exhausting and frustrating experiences
        while finding fixes for exceptions.It aims to make the debugging
        experience easier and less time and energy consuming by providing
        solutions to many common exceptions both in programming and environment
        setup issues in different operating systems.
      </article>

      <div id="disclaimer" className="mt-4">
        <h3 className="text-center">Terms and Conditions</h3>{" "}
        <p>
          While BugFix shares the information in goodwill it cautions users to
          be careful when choosing what fix to implement as some could result in
          irreversible loss of data or damage. Use of version control to track
          project state before and after a possible fix from this site is
          advised. This inorder to be able to easily undo any changes at will.
          All actions taken following fixes in this site a considered a personal
          and as such BugFix or any of its affiliates don't bear responsibility
          for their consequences.
        </p>
      </div>
    </div>
  );
};

export default About;

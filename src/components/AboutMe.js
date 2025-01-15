import { useEffect } from "react";

export default function AboutMe() {
  useEffect(() => {
    const aboutSection = document.getElementById("about");
    aboutSection.style.opacity = 0;
    aboutSection.style.transition = "opacity 2s";
    setTimeout(() => {
      aboutSection.style.opacity = 1;
    }, 100);
  }, []);

  return (
    <section id="about" className="container pt-5 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-md-8">
          <h1 className="display-4">Hi, I'm Michael.</h1>
          <h3 className="my-3">
            I'm an aspiring front-end developer in Los Angeles, CA.
          </h3>
          <p className="lead">
            I have a passion for creating and functional web applications. I
            enjoy working with the latest technologies and continuously learning
            new skills to improve my craft.
          </p>
        </div>
      </div>
    </section>
  );
}

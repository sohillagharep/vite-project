import { useState } from "react";

export default function Skills() {
  const [darkMode, setDarkMode] = useState(true);

  const skills = [
  {
    name: "HTML",
    image: "/html",
    description: "Building structured and semantic web pages",
  },
  {
    name: "CSS",
    image: "/css.jpg",
    description: "Creating responsive and attractive designs",
  },
  {
    name: "JavaScript",
    image: "/js (2).png",
    description: "Adding interaction and dynamic functionality",
  },
  {
    name: "React",
    image: "/react.png",
    description: "Building modern and interactive interfaces",
  },
  {
    name: "Bootstrap",
    image: "/b.jpg",
    description: "Creating responsive layouts quickly",
  },
  {
    name: "Git & GitHub",
    image: "/git.png",
    description: "Managing and sharing projects",
  },
  {
    name: "C , C++",
    image: "/c.png",
    description: "Managing and sharing projects",
  },
  {
    name: "Python",
    image: "/py.jpg",
    description: "Managing and sharing projects",
  },
];

  return (
    <div
      className={
        darkMode
          ? "bg-dark text-white min-vh-100"
          : "bg-light text-dark min-vh-100"
      }
    >

    

      <style>
        {`
         

          .skill-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .skill-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(13, 110, 253, 0.25);
          }
        `}
      </style>

      {/* Skills Section */}
      <section className="min-vh-100 py-5">
        <div className="container py-5">

          {/* Title */}
          <div className="text-center mb-5">

            <p className="text-primary fw-semibold fs-5 mb-2">
              My Skills
            </p>

            <h1 className="display-4 fw-bold">
              What I <span className="text-primary">Can Do</span>
            </h1>

            <p
              className={
                darkMode
                  ? "text-secondary fs-5 mt-3"
                  : "text-muted fs-5 mt-3"
              }
            >
              Technologies and tools I use to create modern web experiences.
            </p>

          </div>

          {/* Skills Cards */}
          <div className="row g-4 justify-content-center">

            {skills.map((skill, index) => (
              <div className="col-md-6 col-lg-4" key={index}>

                <div
                  className={
                    darkMode
                      ? "skill-card bg-black bg-opacity-25 border border-secondary rounded-4 p-4 text-center h-100"
                      : "skill-card bg-white border rounded-4 p-4 text-center h-100 shadow-sm"
                  }
                >

                  <div className="mb-3">
  <img
    src={skill.image}
    alt={skill.name}
    style={{
      width: "70px",
      height: "70px",
      objectFit: "contain",
    }}
  />
</div>

                  <p
                    className={
                      darkMode
                        ? "text-secondary mb-0"
                        : "text-muted mb-0"
                    }
                  >
                    {skill.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}


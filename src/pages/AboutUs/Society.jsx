import React from "react";
import "../../Css/Society.css";
const Society = () => {
  return (
    <>
      <div className="society-container">
        <div className="society">
          <div>
            <p className="textsociety">DPS Society</p>
          </div>
        </div>

        <section className="section-column">
          <div className="textsection">
            <p className="text-section-society">
              The Delhi Public School Society is the central guiding force of
              over 200 English medium, coeducational, secular schools within and
              outside the country, imparting quality education to thousands of
              children. From its inception in 1949, the Society has been a
              treasure trove of excellent practices in education. The Society is
              governed by a Committee comprising of distinguished personalities
              from various spheres of life, who have selflessly guided the
              Society over the years to keep pace with changing times and helped
              formulate proactive policies in the larger interest of learners
              under its care. <br />
              The philosophy of quality education for all is the root motivation
              for the Society’s being, and the effort of the Society to
              establish schools in all parts of the country to cater to the
              educational needs of as many children as possible.
              <br /> The centralized governance by people of eminence and
              authority has helped DPS Society to maintain the highest
              standards, and to stay ahead with a vision of an enlightened and
              well educated social order for India. With more and more DPS
              emerging as a result of this educational movement, DPS Society has
              become the single largest school education society in the
              continent, and perhaps in the entire world.
            </p>
          </div>
        </section>

        <section className="dividercostum">
          <div className="sectioncostum">
            <div className="imagelogo">
              <img
                src="https://dpskollam.com/wp-content/uploads/2019/09/Mr-VK-Shunglu-Chairman.png"
                alt="Chairman Image"
              />
            </div>

            <div className="textareasection">
              <p className="societysaintmichal">
                I warmly greet the parents and learners seeking to be associated
                with the school and am confident that the wonderful world of
                opportunities that they will discover in the scholastic and
                co-scholastic canvas of this school will be truly fulfilling.
              </p>
              <p>
                <strong>Mr.V.K. Shunglu, Chairman</strong>
                <br />
                Delhi Public School Society
              </p>
            </div>
          </div>
        </section>

        <section className="eventpic">
          <img
            src="https://dpskollam.com/wp-content/uploads/2019/08/Padma-Bhushan-2-1.jpg"
            alt="Society Event"
          />
        </section>
      </div>
    </>
  );
};

export default Society;

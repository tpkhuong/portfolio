import React from "react";
import PassionStyles from "./Passion.module.css";
import { IoClose } from "react-icons/io5";

export default function Passion({ children, setStateFunc }) {
  return (
    <div className={PassionStyles[`tab-passion-container`]}>
      <div className={PassionStyles[`tab-container`]}>
        {/* inline-end border */}
        <h2>Brief Introduction</h2>
        <button
          role="button"
          onClick={(event) => {
            document
              .getElementById("html")
              .setAttribute("data-isselected", "false");

            setStateFunc((values) => {
              return {
                ...values,
                renderInfo: null,
                panelButtonClicked: "passion",
              };
            });
          }}
          aria-label="close brief introduction panel"
          className={PassionStyles[`tab-close-btn`]}
        >
          <IoClose className={PassionStyles[`tab-icon`]} />
        </button>
      </div>
      <div className={PassionStyles[`passion-container`]}>
        <HtmlItem tagContent="Title">
          <h2>Journey in Inclusive Web Development.</h2>
        </HtmlItem>

        <div className={PassionStyles[`style-container`]}>
          <HtmlItem tagContent="Paragraph">
            <p>I am a self-taught Web Inclusive Developer.</p>
          </HtmlItem>
          <HtmlItem tagContent="Paragraph">
            <p>
              Always had a passion of helping people. Passion of helping people
              any way I can, led to my journey of learning Web Development.
            </p>
          </HtmlItem>
        </div>

        {/* quick story */}

        <HtmlItem tagContent="Title">
          <h2>Quick story</h2>
        </HtmlItem>

        <div className={PassionStyles[`style-container`]}>
          <HtmlItem tagContent="Paragraph">
            <p>How I started learning Web Development.</p>
          </HtmlItem>
          <HtmlItem tagContent="Paragraph">
            <p>
              While working with Homestead Hospice as an IT support, one of the
              laptops had an popup error message window. In that error message,
              there was a code. I copied the error code and perform a google
              search. Most of the results were in a language, I couldn't read.
              The language was a Computer Programming Language. I felt helpless.
              I hated that feeling.
            </p>
          </HtmlItem>
          <HtmlItem tagContent="Paragraph">
            <p>
              But I am grateful for that experience and the feeling of
              helplessness because that experience sparked the question of,
              "What If I speak Computer and understood code?" If I speak the
              same language as computer, I can better understand computer errors
              and better help people when they get a computer error.
            </p>
          </HtmlItem>
          <HtmlItem tagContent="Paragraph">
            <p>
              Having the knowledge of building Web Applications and Web sites,
              won't help better solve PC computer errors. I'm fine with that
              because I get help people in another way by building Inclusive Web
              Applications and Inclusive Web Sites.
            </p>
          </HtmlItem>
        </div>

        {/* passion */}

        <HtmlItem tagContent="Title">
          <h2>Passion</h2>
        </HtmlItem>

        <div className={PassionStyles[`style-container`]}>
          <HtmlItem tagContent="Paragraph">
            <p>
              I love building interactive Web sites/applications. Making the
              sites/applications, the most inclusive as I can with my current
              skills/knowledge.
            </p>
          </HtmlItem>
          <HtmlItem tagContent="Paragraph">
            <p>
              Doing my best to build inclusive websites/applications, while
              learning web development. The goal is to build as many inclusive
              applications and sites before I leave this earth.
            </p>
          </HtmlItem>
        </div>
        {/* <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          quidem laboriosam, molestiae amet delectus sit ipsam laudantium, optio
          non necessitatibus neque dolorum iure sunt, enim explicabo consequatur
          illum deleniti nulla. Voluptatum ab, doloremque soluta eaque veniam
          provident autem unde accusantium obcaecati. Tempora ut rem vitae
          reiciendis, voluptatibus, ipsam delectus accusamus repudiandae esse
          voluptatem similique eveniet, a autem ducimus provident corporis.
          Optio facilis distinctio earum ab reiciendis sit recusandae quidem
          aspernatur, pariatur nihil accusamus voluptatum tenetur, dolorem ipsa
          accusantium eum quod molestias cupiditate fuga odit necessitatibus.
          Libero possimus dolor illo aliquam. Ex asperiores velit vitae ea vel
          deleniti maiores, totam, facere facilis nisi veritatis? Quisquam
          tenetur id unde officia a iusto veritatis. Magni, rerum error!
          Repellat suscipit laborum iste delectus enim? Quidem, praesentium
          debitis vel magni nobis libero quisquam quibusdam quam officiis in
          quos iusto saepe inventore porro dignissimos, dolores aliquid id, quod
          veniam obcaecati quae molestiae similique necessitatibus! Error, iure!
          Perspiciatis expedita sapiente iure soluta aut saepe tenetur ea sunt
          facilis consequatur provident ducimus, non dolor veritatis sint earum
          odit, nulla officia praesentium? Fugit inventore esse molestiae odio
          similique delectus? Sint ad soluta architecto quos eius fugiat, iste
          quia ipsum eveniet doloremque temporibus assumenda perferendis,
          voluptates iure ipsa distinctio voluptas, similique nobis nulla
          dolorum ducimus? Aliquid omnis molestias nostrum dolores! Alias
          repellat, impedit nobis atque libero placeat ipsa, natus quae non at
          dolor? Quas aliquam perspiciatis earum. Dolores delectus quae nostrum.
          Sed eaque eius debitis asperiores autem numquam facilis vero?
          Reprehenderit, dolorum. Rem aliquid corrupti laudantium repudiandae,
          dolores vero numquam, debitis, quaerat natus iste aut quibusdam saepe
          eligendi a error autem temporibus reiciendis culpa tempore deserunt.
          Eos beatae ipsum earum. Explicabo, non modi, ab architecto velit
          dolores excepturi illum praesentium accusantium inventore, totam
          repellendus soluta veniam dolorem sequi enim quae
        </p> */}
      </div>
    </div>
  );
}

function HtmlItem({ children, tagContent }) {
  return (
    <React.Fragment>
      {/* font-size 1.2rem */}
      {/* font-weight 600 */}
      {/* <MdChevronLeft /> */}
      {/* <CgFormatSlash /> */}
      <div className={PassionStyles[`html-container`]}>
        <div className={`${PassionStyles["opening"]} ${PassionStyles[`tag`]}`}>
          <span className={PassionStyles[`tag-sign`]}>&lt;</span>
          <span className={PassionStyles[`tag-name`]}>{tagContent}</span>
          <span className={PassionStyles[`tag-sign`]}>&gt;</span>
        </div>
        {/* <MdChevronRight /> */}
        <span className={PassionStyles[`element-content`]}>{children}</span>
        <div className={`${PassionStyles["closing"]} ${PassionStyles[`tag`]}`}>
          {/* <MdChevronLeft /> */}
          {/* <CgFormatSlash /> */}
          <span className={PassionStyles[`tag-sign`]}>&lt;</span>
          <span className={PassionStyles[`tag-sign`]}>/</span>
          <span className={PassionStyles[`tag-name`]}>{tagContent}</span>
          <span className={PassionStyles[`tag-sign`]}>&gt;</span>
          {/* <MdChevronRight /> */}
        </div>
      </div>
    </React.Fragment>
  );
}

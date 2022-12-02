import React from "react";
import ResumeStyles from "./Resume.module.css";
import Passion from "./Passion/index";
import Skills from "./Skills";
import Professional from "./Professional";
import { GoTriangleDown, GoChevronRight } from "react-icons/go";
import { FaHtml5, FaCss3Alt, FaJs, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ResumeInfo({ children, ...props }) {
  const memoizedInitialValues = React.useMemo(() => {
    return {
      panelButtonClicked: null,
      renderInfo: null,
    };
  }, []);

  const [{ panelButtonClicked, renderInfo }, setResumeInfo] = React.useState({
    memoizedInitialValues,
  });

  React.useEffect(() => {
    panelButtonClicked
      ? document.getElementById("emptyresumeinfo").focus()
      : null;
  }, [panelButtonClicked]);

  return (
    <div className={ResumeStyles[`resume-container`]}>
      {/* learn-more-contact-container */}
      {/* inline-start border */}
      <aside
        role="complementary"
        className={ResumeStyles[`learn-more-contact-container`]}
      >
        {/* file selector */}
        <div className={ResumeStyles[`file-selector`]}>
          {/* file selector text */}
          <div className={ResumeStyles[`arrow-text-container`]}>
            {/* arrow down */}
            <GoTriangleDown className={ResumeStyles[`triangle-down`]} />
            {/* hide at mobile size */}
            <h2 id="files">Info Selector</h2>
          </div>

          {/* selectors-container */}
          <div
            className={ResumeStyles[`selectors-container`]}
            onClick={(event) => {
              if (event.target.closest("BUTTON")) {
                const buttonID = event.target
                  .closest("BUTTON")
                  .getAttribute("id");

                if (buttonID == "html") {
                  const htmlBtn = document.getElementById(buttonID);

                  htmlBtn.getAttribute("data-isselected") == "false"
                    ? htmlBtn.setAttribute("data-isselected", "true")
                    : null;

                  htmlBtn.nextElementSibling.getAttribute("data-isselected") ==
                  "true"
                    ? htmlBtn.nextElementSibling.setAttribute(
                        "data-isselected",
                        "false"
                      )
                    : null;

                  htmlBtn.nextElementSibling.nextElementSibling.getAttribute(
                    "data-isselected"
                  ) == "true"
                    ? htmlBtn.nextElementSibling.nextElementSibling.setAttribute(
                        "data-isselected",
                        "false"
                      )
                    : null;

                  setResumeInfo((prevValues) => {
                    return {
                      ...prevValues,
                      renderInfo: "passion",
                      panelButtonClicked: null,
                    };
                  });
                }

                if (buttonID == "css") {
                  const cssBtn = document.getElementById(buttonID);

                  cssBtn.getAttribute("data-isselected") == "false"
                    ? cssBtn.setAttribute("data-isselected", "true")
                    : null;

                  cssBtn.previousElementSibling.getAttribute(
                    "data-isselected"
                  ) == "true"
                    ? cssBtn.previousElementSibling.setAttribute(
                        "data-isselected",
                        "false"
                      )
                    : null;

                  cssBtn.nextElementSibling.getAttribute("data-isselected") ==
                  "true"
                    ? cssBtn.nextElementSibling.setAttribute(
                        "data-isselected",
                        "false"
                      )
                    : null;

                  setResumeInfo((prevValues) => {
                    return {
                      ...prevValues,
                      renderInfo: "skills",
                      panelButtonClicked: null,
                    };
                  });
                }

                if (buttonID == "js") {
                  const jsBtn = document.getElementById(buttonID);

                  jsBtn.getAttribute("data-isselected") == "false"
                    ? jsBtn.setAttribute("data-isselected", "true")
                    : null;

                  jsBtn.previousElementSibling.getAttribute(
                    "data-isselected"
                  ) == "true"
                    ? jsBtn.previousElementSibling.setAttribute(
                        "data-isselected",
                        "false"
                      )
                    : null;

                  jsBtn.previousElementSibling.previousElementSibling.getAttribute(
                    "data-isselected"
                  ) == "true"
                    ? jsBtn.previousElementSibling.previousElementSibling.setAttribute(
                        "data-isselected",
                        "false"
                      )
                    : null;

                  setResumeInfo((prevValues) => {
                    return {
                      ...prevValues,
                      renderInfo: "professional",
                      panelButtonClicked: null,
                    };
                  });
                }
              }
            }}
          >
            {/* block border */}
            {/* html */}
            <button
              tabIndex="-1"
              data-isselected="false"
              id="html"
              className={ResumeStyles[`selector-btn`]}
            >
              {/* arrow icon */}
              <GoChevronRight className={ResumeStyles[`file-right-icon`]} />
              {/* file icon */}
              <FaHtml5 className={ResumeStyles[`html-icon`]} />
              {/* text */}
              <span className={ResumeStyles[`file-name`]}>briefBio.html</span>
            </button>
            {/* css */}
            <button
              data-isselected="false"
              id="css"
              className={ResumeStyles[`selector-btn`]}
            >
              <GoChevronRight className={ResumeStyles[`file-right-icon`]} />
              <FaCss3Alt className={ResumeStyles[`css-icon`]} />
              <span className={ResumeStyles[`file-name`]}>education.css</span>
            </button>
            {/* js */}
            <button
              data-isselected="false"
              id="js"
              className={ResumeStyles[`selector-btn`]}
            >
              <GoChevronRight className={ResumeStyles[`file-right-icon`]} />
              <FaJs className={ResumeStyles[`js-icon`]} />
              <span className={ResumeStyles[`file-name`]}>
                workExperience.js
              </span>
            </button>
          </div>
        </div>
        {/* content */}
        <div className={ResumeStyles[`contact-container`]}>
          <div className={ResumeStyles[`arrow-text-container`]}>
            {/* hide at mobile size */}
            {/* block-end border */}
            {/* arrow down */}
            <GoTriangleDown className={ResumeStyles[`triangle-down`]} />
            <h2>Contacts</h2>
          </div>
          <div className={ResumeStyles[`contact-info`]}>
            {/* email */}
            <a href="https://tpkhuong@gmail.com">
              {/* icon */}
              <MdEmail className={ResumeStyles[`contact-email-icon`]} />
              {/* text */}
              <span>user@gmail.com</span>
            </a>
            {/* phone */}
            <a href="tel:3233849875">
              <FaPhoneAlt className={ResumeStyles[`contact-phone-icon`]} />
              <span>323-384-9875</span>
            </a>
          </div>
        </div>
      </aside>
      {/* resume-sections-container */}
      <div className={ResumeStyles[`resume-sections-container`]}>
        {/* inline border */}
        {!renderInfo ? (
          <button
            id="emptyresumeinfo"
            onClick={(event) => {
              document.getElementById("html").focus();

              event.target
                .closest("BUTTON")
                .getAttribute("data-emptybtnclicked") === ""
                ? event.target
                    .closest("BUTTON")
                    .setAttribute("data-emptybtnclicked", "true")
                : null;

              setTimeout(() => {
                event.target
                  .closest("BUTTON")
                  .getAttribute("data-emptybtnclicked") === "true"
                  ? event.target
                      .closest("BUTTON")
                      .setAttribute("data-emptybtnclicked", "")
                  : null;
              }, 500);
            }}
            data-emptybtnclicked=""
            className={ResumeStyles[`empty-btn`]}
          >
            <span className={ResumeStyles[`empty-btn-wrapper`]}>
              <span className={ResumeStyles[`empty-btn-text`]}>
                Select a File to view info.
              </span>
            </span>
          </button>
        ) : null}
        {renderInfo == "passion" ? (
          <Passion setStateFunc={setResumeInfo} />
        ) : null}
        {renderInfo == "skills" ? (
          <Skills setStateFunc={setResumeInfo} />
        ) : null}
        {renderInfo == "professional" ? (
          <Professional setStateFunc={setResumeInfo} />
        ) : null}
      </div>
    </div>
  );
}

{
  /* {renderInfo == "yup" ? (
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            quidem laboriosam, molestiae amet delectus sit ipsam laudantium,
            optio non necessitatibus neque dolorum iure sunt, enim explicabo
            consequatur illum deleniti nulla. Voluptatum ab, doloremque soluta
            eaque veniam provident autem unde accusantium obcaecati. Tempora ut
            rem vitae reiciendis, voluptatibus, ipsam delectus accusamus
            repudiandae esse voluptatem similique eveniet, a autem ducimus
            provident corporis. Optio facilis distinctio earum ab reiciendis sit
            recusandae quidem aspernatur, pariatur nihil accusamus voluptatum
            tenetur, dolorem ipsa accusantium eum quod molestias cupiditate fuga
            odit necessitatibus. Libero possimus dolor illo aliquam. Ex
            asperiores velit vitae ea vel deleniti maiores, totam, facere
            facilis nisi veritatis? Quisquam tenetur id unde officia a iusto
            veritatis. Magni, rerum error! Repellat suscipit laborum iste
            delectus enim? Quidem, praesentium debitis vel magni nobis libero
            quisquam quibusdam quam officiis in quos iusto saepe inventore porro
            dignissimos, dolores aliquid id, quod veniam obcaecati quae
            molestiae similique necessitatibus! Error, iure! Perspiciatis
            expedita sapiente iure soluta aut saepe tenetur ea sunt facilis
            consequatur provident ducimus, non dolor veritatis sint earum odit,
            nulla officia praesentium? Fugit inventore esse molestiae odio
            similique delectus? Sint ad soluta architecto quos eius fugiat, iste
            quia ipsum eveniet doloremque temporibus assumenda perferendis,
            voluptates iure ipsa distinctio voluptas, similique nobis nulla
            dolorum ducimus? Aliquid omnis molestias nostrum dolores! Alias
            repellat, impedit nobis atque libero placeat ipsa, natus quae non at
            dolor? Quas aliquam perspiciatis earum. Dolores delectus quae
            nostrum. Sed eaque eius debitis asperiores autem numquam facilis
            vero? Reprehenderit, dolorum. Rem aliquid corrupti laudantium
            repudiandae, dolores vero numquam, debitis, quaerat natus iste aut
            quibusdam saepe eligendi a error autem temporibus reiciendis culpa
            tempore deserunt. Eos beatae ipsum earum. Explicabo, non modi, ab
            architecto velit dolores excepturi illum praesentium accusantium
            inventore, totam repellendus soluta veniam dolorem sequi enim quae
            id amet quos autem. Error obcaecati ea quo iste saepe? Tempore
            eligendi consequatur sunt porro, aliquid fugit ad cumque voluptatem
            voluptatum unde, adipisci beatae explicabo dicta sequi earum error
            quod aliquam. Repellendus voluptas vero facere placeat quia nihil
            dolorum ex? Animi rem, nisi beatae dicta saepe consectetur suscipit!
            Adipisci, est praesentium. Consequatur aliquam saepe ut omnis fuga
            facilis, nesciunt, dignissimos a aspernatur dolore culpa
            repellendus. Iusto commodi quos velit dignissimos. Quas ducimus
            doloribus nam? Error in ipsum fugiat eligendi ullam vitae tenetur
            optio dignissimos exercitationem repudiandae, ut deserunt illum
            ipsa. Asperiores consectetur error, atque inventore quis illum
            aliquam laudantium deserunt. Consequuntur ipsa voluptas voluptate,
            dignissimos nesciunt enim earum iste culpa quasi, eligendi eaque
            necessitatibus nisi repellat adipisci accusamus consectetur
            voluptatibus possimus quam blanditiis? Ut temporibus placeat, nisi
            maiores ex molestiae! Consectetur sequi impedit nisi, rem ut
            sapiente enim, obcaecati consequuntur veritatis, perferendis minus
            excepturi. Eum eius animi itaque pariatur soluta illo aut, dolore
            voluptates, ab mollitia odio fugiat, numquam ipsam? Tempore sequi
            iusto, ea quas nemo iure itaque explicabo fugit sunt error minima
            dolore nobis quos distinctio atque dolor, aut ex. At est nulla
            numquam. Suscipit quisquam animi nemo reiciendis? Nulla omnis odio
            pariatur veritatis, magnam illum. Cupiditate maiores accusamus
            tenetur incidunt quasi temporibus nisi veniam earum eveniet fuga
            dignissimos magnam error quae nihil ratione, quam beatae
            perspiciatis ea. Voluptatum. Delectus, in. Quam voluptas alias
            molestiae tempore ipsam atque aliquid corporis fugit perferendis
            beatae, distinctio sequi ut. Ad aut mollitia ipsam eaque laborum
            nostrum ducimus ab, repudiandae unde atque fuga. In dolores nostrum,
            tenetur debitis quam, autem incidunt consequuntur quod mollitia
            numquam optio distinctio recusandae nesciunt, assumenda pariatur
            aliquam illo quia molestiae sapiente error sint porro ducimus.
            Consequatur, eos cumque! Provident praesentium nemo repellendus rem
            magnam ad corporis officiis, dicta illo voluptatem, quo animi
            suscipit amet illum quae fugiat labore inventore, consequatur iure
            quod ullam aliquid? Suscipit rem aliquid sequi?
          </h3>
        ) : null} */
}

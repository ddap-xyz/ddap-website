import { useState, useEffect } from "react";
import Papa from "papaparse";

const featuredEvents = [
  {
    status: "upcoming",
    event: "Eric Li",
    month: "Nov",
    date: "18",
    type: "Guest Speaker",
    subject: "UC L105",
    description:
      "We're excited to welcome back Eric Li, a designer, software engineer, and a professor at Parsons! Eric works as a design engineer at Notion, and was formerly a digital product director at the Eames Institute, as well as a senior product designer and developer at MoMA.<br><br>Join us on Wednesday, Nov 18, in UC L105, 63 5th Ave. Seats are limited and available on a first-come, first-served basis.",
    link1: "https://www.instagram.com/p/DfSirUAK_Nm/",
    link1title: "Instagram",
    link2: "https://eric.young.li",
    link2title: "Website",
  },
];

function Schedule() {
  const sheetURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2HmMzSp-fzXfyhTXkTHZ7p-h9R9osPbOVvV8vR9_PK7flc0sh_s10t5nPg4FaH2CF_W2N06QpYxNt/pub?gid=1482207102&single=true&output=csv";

  const fileParsing = () =>
    new Promise((resolve) => {
      Papa.parse(sheetURL, {
        download: true,
        header: true,
        complete: function (results) {
          resolve(results.data || []);
        },
        error: function () {
          resolve([]);
        },
      });
    });

  const fetchData = async () => {
    const sheetData = await fileParsing();

    return sheetData;
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((response) => {
      const upcoming = response.filter((item) => item.status === "upcoming");
      const existingLinks = new Set(upcoming.map((item) => item.link1));
      const extras = featuredEvents.filter((item) => !existingLinks.has(item.link1));
      setData([...extras, ...upcoming]);
    });
  }, []);

  const handleShowAllEvents = () => {
    const allEvents = document.getElementById("all-events");
    const bodyWrapper = document.getElementById("body-wrapper");
    allEvents.classList.toggle("hidden");
    bodyWrapper.classList.toggle("hidden");
    bodyWrapper.classList.toggle("flex");

    document.querySelector("body").classList.toggle("no-scroll");
  };

  const generateDescriptive = (entry) => {
    const template = `
      <div  class="selected-event">
        <div class="event-details">
          <h1 class="selected-title">${entry["event"]}</h1>

          <h4 class="selected-type">${entry["month"] + " " + entry["date"]}</h4>
          <h4 class="selected-type">Format: ${entry["type"]}</h4>
          <h4 class="selected-subject">Subject: ${entry["subject"]}</h4>

          <div class="selected-description">${entry["description"]}</div>
          <div class="selected-links">
            <a href=${entry["link1"]}>${entry["link1title"]}</a>
            <a href=${entry["link2"]}>${entry["link2title"]}</a>
          </div>
        </div>
      </div>
    `;
    return template;
  };

  const loadArticle = (event) => {
    handleShowAllEvents();
    document.getElementById("all-events").innerHTML = generateDescriptive(
      data[parseInt(event.target.dataset.index)]
    );
  };

  const hide = () => {
    handleShowAllEvents();
    document.querySelector("body").classList.remove("no-scroll");
  };

  const toggleShowChildren = () => {
    document
      .getElementById("filtered-events")
      .classList.toggle("hide-children");

    const hideButton = document.getElementById("show-more");

    if (hideButton.innerHTML === "More") {
      hideButton.innerHTML = "Less";
    } else {
      hideButton.innerHTML = "More";
    }
  };

  return (
    <>
      <h2 className="section-title">Upcoming Events:</h2>
      <div id="filtered-events" className="hide-children">
        {data.map((item, index) => (
          <div
            key={index}
            data-index={index}
            className="event"
            onClick={loadArticle}
          >
            <div data-index={index} className="event-details">
              <h2 data-index={index} className="event-title">
                {item["event"]}
              </h2>
              <div data-index={index} className="event-type">
                {item["type"]} • {item["subject"]}
              </div>

              <div data-index={index} className="event-links">
                <a
                  data-index={index}
                  className="event-link"
                  href={item["link1"]}
                >
                  {item["link1title"]}
                </a>
                <a
                  data-index={index}
                  className="event-link"
                  href={item["link2"]}
                >
                  {item["link2title"]}
                </a>
              </div>
            </div>
            <div data-index={index} className="event-date">
              <div data-index={index} className="event-month">
                {item["month"]}
              </div>
              <div data-index={index} className="event-day">
                {" "}
                {item["date"]}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="button-wrapper">
        <button id="show-more" onClick={toggleShowChildren}>
          More
        </button>
      </div>
      <div id="body-wrapper" onClick={hide} className="hidden">
        <div id="all-events" className="hidden"></div>
      </div>
    </>
  );
}

export default Schedule;

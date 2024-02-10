"use client";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons/faBuildingColumns";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons/faEarthEurope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Cards() {
  const [cards, setCards] = React.useState([
    { icon: faEarthEurope, topic: "ثبت نام ترم اول" },
    { icon: faBook, topic: "درخواست تعیین سطح" },
    { icon: faBuildingColumns, topic: "درخواست مشاوره آموزشی" },
  ]);
  return (
    <div className="container row justify-content-between rounded-5 mt-5">
      {cards.map((e) => (
        <div className="col-md-4 card-single d-flex text-center ">
          <span className="display-6 m-2 p-2">
            <FontAwesomeIcon icon={e.icon} />
          </span>
          <span className="display-6 m-2 p-2">{e.topic}</span>
        </div>
      ))}
    </div>
  );
}

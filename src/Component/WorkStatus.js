import React, { useState, useEffect } from "react";
import style from "../Style/WorkStatus.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const WorkStatus = ({ colClass }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  console.log(id);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:9000/client/StatusWork?id=${id}`,
      headers: { "content-type": "application/json" },
    };

    axios(config)
      .then((res) => {
        let mainRecord = res.data;
        console.log(mainRecord.data);
        // console.log(mainRecord.data); 
        setData(mainRecord.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={`${colClass} mt-5 ${style.workStatus}`}>
      <div className={style.head}>
        <div className={style.statusHead}>
          <h5 className={colClass === "col-10" ? style.no : style.no2}>No</h5>
          <h5 className={colClass === "col-10" ? style.caseNo : style.caseNo2}>
            Case No
          </h5>
          <h5 className={colClass === "col-10" ? style.name : style.name2}>
            Client Name
          </h5>
          <h5 className={colClass === "col-10" ? style.type : style.type2}>
            Case Type
          </h5>
          <h5 className={colClass === "col-10" ? style.court : style.court2}>
            Court
          </h5>
          <h5
            className={colClass === "col-10" ? style.judgment : style.judgment2}
          >
            Judgment Date
          </h5>
          <h5 className={colClass === "col-10" ? style.expire : style.expire2}>
            Expire Date
          </h5>
        </div>
        <div className={style.statusDetails}>
          {data.map((data, index) => (
            <div key={index}>
              <p
                className={
                  colClass === "col-10" ? style.detailsno : style.detailsno2
                }
              >
                {index + 1}
              </p>
              <p
                className={
                  colClass === "col-10"
                    ? style.detailscaseNo
                    : style.detailscaseNo2
                }
              >
                {data.caseNo}
              </p>
              <p
                className={
                  colClass === "col-10" ? style.detailsname : style.detailsname2
                }
              >
                {data.name}
              </p>
              <p
                className={
                  colClass === "col-10" ? style.detailstype : style.detailstype2
                }
              >
                {data.pOption}
              </p>
              <p
                className={
                  colClass === "col-10"
                    ? style.detailscourt
                    : style.detailscourt2
                }
              >
                supreme court
              </p>
              <p
                className={
                  colClass === "col-10"
                    ? style.detailsjudgment
                    : style.detailsjudgment2
                }
              >
                {data.date}
              </p>
              <p
                className={
                  colClass === "col-10"
                    ? style.detailsexpire
                    : style.detailsexpire2
                }
              >
                66/66/6666
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkStatus;

import React, { useState, useEffect } from "react";
import style from "../Style/CloseCase.module.css";

const CloseCase = ({ colClass }) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/clients", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then(async (res) => {
        if (res.ok) {
          const record = await res.json();
          setDataList(record);
        } else {
          console.error("Error fetching data");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("Record not found");
      });
  }, []);
  const handleEditItem = (id) => {
    console.log("Editing item with ID:", id);
  };

  return (
    <>
      <div className={`${colClass} mt-5 ${style.mainClient}`}>
        <div className={style.client}>
          <div className={style.inner}>
            <h5 className={style.no}>CASE NO.</h5>
            <h5 className={style.no}>COURT</h5>
            <h5 className={style.name}>CLIENT NAME</h5>
            <h5 className={style.name}>ADVOCATE</h5>
            <h5 className={style.name}>HEARING DATE</h5>
            <h5 className={style.name}>CASE TYPE</h5>
            <h5 className={style.name}>ACTION</h5>
          </div>
          <div className={style.clientData}>
            {loading ? (
              <p>Loading data...</p>
            ) : (
              dataList.map((item, index) => (
                <div key={index} className={style.dataRow}>
                  <table border="0" className={style.dataRow}>
                    <div key={index} className={style.runcase}>
                      <p className={style.id}>{index + 1}</p>
                    </div>
                    <div className={style.runcase}>
                      <p className={style.id}>{item.id}</p>
                    </div>
                    <div className={style.runcase}>
                      <p className={style.name}>{item.clientFullName}</p>
                    </div>
                    <div className={style.runcase}>
                      <p className={style.name}>{item.oppositePartyFullName}</p>
                    </div>
                    <div className={style.runcase}>
                      <p className={style.name}>{item.loanAgrement}</p>
                    </div>
                    <div className={style.runcase}>
                      <p className={style.name}>{item.caseNo}</p>
                    </div>
                    <div className={style.runcase}>
                      <p className={style.name}>
                        <span
                          className={style.editIcon}
                          onClick={() => handleEditItem(item.id)}
                        >
                          <a href={`/PdfClient/${item.id}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="33"
                              height="34"
                              viewBox="0 0 41 41"
                              fill="none"
                             
                            >
                              <path
                                d="M20.9114 0.736328C9.86624 0.736328 0.912109 9.69113 0.912109 20.7359C0.912109 31.7807 9.86624 40.7363 20.9114 40.7363C31.9566 40.7363 40.9118 31.7813 40.9118 20.7359C40.9118 9.69059 31.9566 0.736328 20.9114 0.736328ZM30.4189 15.129L28.5193 17.0286L24.6525 13.1621L23.1856 14.629L27.0524 18.4958L17.5681 27.9793L13.7016 24.1131L12.2346 25.5801L16.1012 29.4466L15.1561 30.3917L15.1381 30.3737C15.0858 30.4602 15.0165 30.5352 14.9345 30.5942C14.8524 30.6532 14.7592 30.695 14.6605 30.717L11.0548 31.521C10.9316 31.5486 10.8035 31.5445 10.6824 31.5093C10.5612 31.474 10.451 31.4087 10.3618 31.3194C10.2724 31.2302 10.207 31.1198 10.1718 30.9985C10.1365 30.8772 10.1326 30.7489 10.1602 30.6257L10.9638 27.021C10.986 26.9223 11.0279 26.8292 11.087 26.7471C11.146 26.665 11.2211 26.5958 11.3076 26.5434L11.2893 26.5251L26.552 11.2618C26.6597 11.1545 26.8055 11.0942 26.9576 11.0944C27.1096 11.0945 27.2554 11.1549 27.3629 11.2625L30.4192 14.3181C30.5266 14.4257 30.587 14.5715 30.5869 14.7236C30.5869 14.8756 30.5264 15.0215 30.4189 15.129Z"
                                fill="black"
                              />
                            </svg>
                          </a>
                        </span>
                        <span className={`${style.editIcon} ms-4`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="33"
                            height="34"
                            viewBox="0 0 46 45"
                            fill="none"
                           
                          >
                            <path
                              d="M4.43359 0C2.34004 0 0.636719 1.70332 0.636719 3.79688V12.3724C0.636719 14.4659 2.34004 16.1692 4.43359 16.1692H4.5373C4.53643 14.7357 4.53643 13.7619 4.53643 13.5879C4.53643 11.1715 6.46791 9.15908 8.90371 9.15908C11.3066 9.15908 13.2622 11.1182 13.2622 13.5255V16.1692H28.2423V0H4.43359ZM24.2872 6.15234H7.22852C6.50078 6.15234 5.91016 5.56172 5.91016 4.83398C5.91016 4.10625 4.58151 7.79013 5.30924 7.79013H16.1783L25.8918 7.16547C26.6195 7.16547 25.6056 4.10625 25.6056 4.83398C25.6056 5.56172 25.0149 6.15234 24.2872 6.15234ZM41.8398 0H30.879V16.1692H41.8398C43.9334 16.1692 45.6367 14.4659 45.6367 12.3724V3.79688C45.6367 1.70332 43.9334 0 41.8398 0ZM42.7636 6.62695L37.9841 11.4064C37.7266 11.664 37.3891 11.7932 37.0516 11.7932C36.7149 11.7932 36.3774 11.664 36.1199 11.4064L33.7521 9.03867C33.2371 8.52363 33.2371 7.68955 33.7521 7.17451C34.2663 6.65947 35.1013 6.65947 35.6163 7.17451L37.0516 8.60977L40.8994 4.76279C41.4145 4.24775 42.2494 4.24775 42.7636 4.76279C43.2786 5.27695 43.2786 6.11191 42.7636 6.62695Z"
                              fill="black"
                            />
                            <path
                              d="M27.3318 25.6043C26.2921 25.6043 25.4457 26.4532 25.4457 27.4974C25.4457 28.8694 25.4404 28.8966 25.4404 28.9422C25.4404 29.6707 24.8507 30.2605 24.1221 30.2605C23.3943 30.2605 22.8037 29.6707 22.8037 28.9422V24.9251C22.8037 23.9744 22.0361 23.1955 21.0775 23.1955C20.1274 23.1955 19.354 23.9689 19.3522 24.9207V28.9422C19.3522 29.6707 18.7616 30.2605 18.0339 30.2605C17.3053 30.2605 16.7155 29.6707 16.7155 28.9422C16.7155 24.529 16.7146 21.9703 16.7146 21.8772C16.7146 20.9186 15.9396 20.1476 14.9894 20.1476C14.0401 20.1476 13.2676 20.9193 13.2632 21.8693V28.9422C13.2632 29.6707 12.6734 30.2605 11.9448 30.2605C11.2171 30.2605 10.6265 29.6707 10.6265 28.9422V13.5252C10.6265 12.5547 9.82886 11.771 8.85811 11.7965C7.92998 11.8176 7.17412 12.6208 7.17412 13.5876L7.175 33.9006C7.175 34.6241 6.58868 35.2189 5.85576 35.2189C5.12803 35.2189 4.5374 34.6292 4.5374 33.9006V28.5924C4.5374 27.638 3.7673 26.8663 2.81211 26.8663C1.87265 26.8663 1.08594 27.6237 1.08594 28.5906V35.9458C1.08594 40.9386 5.14736 44.9997 10.1404 44.9997H20.16C25.1521 44.9997 29.2145 40.9386 29.2145 35.9458V27.3778C29.1504 26.3784 28.3287 25.6043 27.3318 25.6043Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </p>
                    </div>
                  </table>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CloseCase;

import React, { useState, useEffect } from "react";
import style from "../Style/Client.module.css";

const Client = ({ colClass }) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9000/client/viewClient", {
      method: "GET",
      headers: { "content-type": "application/json" }
    })
      .then(async (res) => {
        if (res.ok) {
          const record = await res.json();
          setDataList(record.data);
        } else {
          console.error("Error fetching data");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("Record not found");
      });
  }, []);


  const handleDeleteItem = (id) => {
  
    fetch(`http://localhost:9000/client/deleteClient?id=${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          const updatedDataList = dataList.filter((item) => item._id !== id);
          setDataList(updatedDataList);
          console.log("Item deleted successfully");
        } else {
          console.error("Error deleting item");
        }
      })
      .catch((err) => {
        console.log("Delete request failed:", err);
      });
  };


  const handleEditItem = (id) => {
    console.log("Editing item with ID:", id);
  };
  

  return (
    <div className={`${colClass} mt-5 ${style.mainClient}`}>
      <div className={`${style.client}`}>
        <div className={style.inner}>
          <h5 className={colClass === "col-10" ? style.id : style.id2}>SR NO.</h5>
          {/* <h5 className={colClass === "col-10" ? style.uniqueId : style.uniqueId2}>Unique Id.</h5> */}
          <h5 className={colClass === "col-10" ? style.partyName : style.partyName2}>Party Name</h5>
          <h5 className={colClass === "col-10" ? style.oppPartyName : style.oppPartyName2}>Opposite Party</h5>
          <h5 className={colClass === "col-10" ? style.loan : style.loan2}>Loan Agreement</h5>
          <h5 className={colClass === "col-10" ? style.caseNo : style.caseNo2}>Case No.</h5>
          <h5 className={colClass === "col-10" ? style.action : style.action2}>Action</h5>
        </div>
        <hr className="m-0" />
          {loading ? (
            <p>Loading data...</p>
          ) :
          dataList.map((item, index) => (
            <div key={index} className={style.clientData}>
                <p className={colClass === "col-10" ? style.clientId : style.clientId2}>{index + 1}</p>
                {/* <p className={colClass === "col-10" ? style.clientUniqueId : style.clientUniqueId2}>{item.id}</p> */}
                <p className={colClass === "col-10" ? style.clientName : style.clientName2}>{item.name}</p>
                {/* <p className={colClass === "col-10" ? style.clientOppName : style.clientOppName2}>{item.oppPartyDetails?.oppname}</p> */}
                <p className={colClass === "col-10" ? style.clientOppName : style.clientOppName2}>{item.oppname}</p>
                <p className={colClass === "col-10" ? style.clientLoan : style.clientLoan2}>{item.loanAgrement}</p>
                <p className={colClass === "col-10" ? style.clientCaseNo : style.clientCaseNo2}>{item.caseNo}</p>
                <p className={colClass === "col-10" ? style.clientAction : style.clientAction2}>
                <span  className={style.editIcon} onClick={() => handleEditItem(item._id)}>
                  <a href={`/ClientEditMain/${item._id}`} className={style.editIcon} >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                    >
                      <path 
                        d="M19.9193 12.5506C19.6232 12.5506 19.3832 12.7747 19.3832 13.0512V17.4962C19.3821 18.3253 18.6627 18.9973 17.7748 18.9981H2.73145C1.84345 18.9973 1.12412 18.3253 1.12305 17.4962V4.4504C1.12412 3.62141 1.8435 2.94952 2.73145 2.94852H7.49177C7.78788 2.94852 8.0279 2.72439 8.0279 2.44789C8.0279 2.17155 7.78788 1.94727 7.49177 1.94727H2.73145C1.25161 1.94882 0.0524433 3.06857 0.0507812 4.4504V17.4964C0.0524433 18.8782 1.25161 19.9979 2.73145 19.9995H17.7748C19.2546 19.9979 20.4538 18.8782 20.4555 17.4964V13.0512C20.4555 12.7747 20.2154 12.5506 19.9193 12.5506Z"
                        fill="black"
                      />
                      <path
                        d="M20.2435 0.65985C19.3013 -0.21995 17.7737 -0.21995 16.8315 0.65985L7.26649 9.59137C7.20102 9.6525 7.15362 9.72843 7.12892 9.81175L5.8711 14.0521C5.84571 14.1374 5.84506 14.2276 5.86919 14.3133C5.89333 14.3989 5.9414 14.4771 6.00848 14.5398C6.07557 14.6024 6.15927 14.6473 6.25103 14.6699C6.34279 14.6925 6.43932 14.6919 6.53076 14.6682L11.0718 13.4935C11.161 13.4704 11.2423 13.4262 11.3078 13.365L20.8725 4.43337C21.8133 3.55292 21.8133 2.12774 20.8725 1.24734L20.2435 0.65985ZM8.43467 9.91678L16.2629 2.60684L18.7876 4.96428L10.9592 12.2742L8.43467 9.91678ZM7.93039 10.8617L9.94732 12.7453L7.15739 13.4671L7.93039 10.8617ZM20.1145 3.72543L19.5459 4.2563L17.021 1.89865L17.5898 1.36774C18.1132 0.879024 18.9618 0.879024 19.4851 1.36774L20.1145 1.95517C20.637 2.44448 20.637 3.23632 20.1145 3.72543Z"
                        fill="black"
                      />
                    </svg>
                  </a>
            </span>
          
              <span
                className={`mx-xl-3 mx-md-2 ${style.deleteIcon}`}
                onClick={() => handleDeleteItem(item._id)}
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
              >
                <path
                  d="M15.6529 7.24609C15.2917 7.24609 14.999 7.45579 14.999 7.71448V16.5669C14.999 16.8255 15.2917 17.0353 15.6529 17.0353C16.0141 17.0353 16.3067 16.8255 16.3067 16.5669V7.71448C16.3067 7.45579 16.0141 7.24609 15.6529 7.24609ZM7.93708 7.24609C7.57594 7.24609 7.2832 7.45579 7.2832 7.71448V16.5669C7.2832 16.8255 7.57594 17.0353 7.93708 17.0353C8.29828 17.0353 8.59096 16.8255 8.59096 16.5669V7.71448C8.59096 7.45579 8.29828 7.24609 7.93708 7.24609Z"
                  fill="black"
                />
                <path
                  d="M2.31414 5.95419V17.4942C2.31414 18.1763 2.66331 18.8168 3.27325 19.2763C3.57358 19.5044 3.93565 19.6861 4.33735 19.8106C4.73904 19.935 5.17192 19.9994 5.60956 20H17.9812C18.4189 19.9995 18.8517 19.935 19.2534 19.8106C19.6551 19.6862 20.0172 19.5044 20.3175 19.2763C20.9275 18.8168 21.2766 18.1763 21.2766 17.4942V5.95419C22.4891 5.72365 23.2748 4.88459 23.1127 3.9934C22.9502 3.10235 21.8904 2.43584 20.6358 2.43565H17.288V1.85017C17.2898 1.60644 17.2241 1.36487 17.0946 1.13949C16.9651 0.914104 16.7743 0.709395 16.5335 0.537249C16.2925 0.365119 16.0062 0.228993 15.6912 0.136776C15.3762 0.0445581 15.0388 -0.00191309 14.6985 6.07143e-05H8.89229C8.552 -0.00191931 8.21456 0.0445488 7.89955 0.136766C7.58455 0.228984 7.29826 0.365113 7.05731 0.537249C6.81643 0.709395 6.62569 0.914104 6.49617 1.13949C6.36665 1.36487 6.30092 1.60644 6.3028 1.85017V2.43565H2.95507C1.70041 2.43584 0.640667 3.10235 0.478178 3.9934C0.316016 4.88459 1.10165 5.72365 2.31414 5.95419ZM17.9812 19.0632H5.60962C4.49162 19.0632 3.6219 18.3753 3.6219 17.4942V5.99536H19.9689V17.4942C19.9689 18.3753 19.0992 19.0632 17.9812 19.0632ZM7.61056 1.85017C7.60842 1.72942 7.64017 1.60958 7.70393 1.49778C7.76768 1.38599 7.86214 1.2845 7.9817 1.19935C8.10122 1.11416 8.2434 1.04702 8.39982 1.00193C8.55624 0.956829 8.7237 0.934692 8.89229 0.936826H14.6985C14.8671 0.934692 15.0346 0.956829 15.191 1.00193C15.3474 1.04702 15.4896 1.11416 15.6091 1.19935C15.7287 1.2845 15.8232 1.38598 15.8869 1.49778C15.9506 1.60958 15.9824 1.72942 15.9802 1.85017V2.43565H7.61056V1.85017ZM2.95507 3.37242H20.6359C21.2859 3.37242 21.8129 3.74989 21.8129 4.21551C21.8129 4.68112 21.2859 5.05859 20.6359 5.05859H2.95501C2.30498 5.05859 1.77802 4.68112 1.77802 4.21551C1.77802 3.74989 2.30505 3.37242 2.95507 3.37242Z"
                  fill="black"
                />
                <path
                  d="M11.7934 7.24609C11.4329 7.24609 11.1406 7.45579 11.1406 7.71448V16.5669C11.1406 16.8255 11.4329 17.0353 11.7934 17.0353C12.154 17.0353 12.4462 16.8255 12.4462 16.5669V7.71448C12.4462 7.45579 12.154 7.24609 11.7934 7.24609Z"
                  fill="black"
                />
              </svg>
              
            </span>
            <span className={style.editIcon} onClick={() => handleEditItem(item._id)} >
            <a href={`/PdfClient/${item._id}`} >
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="20" 
                viewBox="0 0 26 21" 
                fill="none"
                >
                <path d="M13.2627 20.3338C8.1724 20.3338 3.74726 16.5121 1.56326 14.2344C1.1455 13.8006 0.912109 13.2218 0.912109 12.6196C0.912109 12.0173 1.1455 11.4385 1.56326 11.0047C3.74612 8.72699 8.1724 4.90527 13.2627 4.90527C18.353 4.90527 22.7781 8.72699 24.9621 11.0047C25.3799 11.4385 25.6133 12.0173 25.6133 12.6196C25.6133 13.2218 25.3799 13.8006 24.9621 14.2344C22.7793 16.5121 18.353 20.3338 13.2627 20.3338ZM13.2627 6.61956C8.64212 6.61956 4.40669 10.5167 2.79983 12.191C2.68907 12.3062 2.6272 12.4598 2.6272 12.6196C2.6272 12.7794 2.68907 12.933 2.79983 13.0481C4.40555 14.7236 8.64212 18.6196 13.2627 18.6196C17.8833 18.6196 22.1187 14.7224 23.7255 13.0481C23.8363 12.933 23.8982 12.7794 23.8982 12.6196C23.8982 12.4598 23.8363 12.3062 23.7255 12.191C22.1198 10.5156 17.8833 6.61956 13.2627 6.61956Z" fill="black"/>
                <path d="M13.2624 17.4768C12.3017 17.4768 11.3626 17.192 10.5639 16.6583C9.76513 16.1246 9.14258 15.366 8.77496 14.4784C8.40733 13.5909 8.31114 12.6143 8.49856 11.6721C8.68597 10.7299 9.14857 9.86446 9.82785 9.18518C10.5071 8.5059 11.3726 8.0433 12.3148 7.85588C13.257 7.66847 14.2336 7.76466 15.1211 8.13228C16.0086 8.49991 16.7672 9.12246 17.3009 9.92122C17.8346 10.72 18.1195 11.659 18.1195 12.6197C18.118 13.9074 17.6058 15.142 16.6952 16.0525C15.7847 16.9631 14.5501 17.4753 13.2624 17.4768ZM13.2624 9.47684C12.6408 9.47684 12.0331 9.66117 11.5163 10.0065C10.9995 10.3519 10.5966 10.8427 10.3587 11.417C10.1209 11.9913 10.0586 12.6232 10.1799 13.2328C10.3012 13.8425 10.6005 14.4025 11.04 14.842C11.4796 15.2816 12.0396 15.5809 12.6492 15.7022C13.2589 15.8234 13.8908 15.7612 14.4651 15.5233C15.0394 15.2854 15.5302 14.8826 15.8756 14.3658C16.2209 13.8489 16.4052 13.2413 16.4052 12.6197C16.4043 11.7864 16.0729 10.9876 15.4837 10.3984C14.8945 9.80916 14.0956 9.47775 13.2624 9.47684ZM13.2624 4.33398C13.035 4.33398 12.817 4.24368 12.6563 4.08293C12.4955 3.92219 12.4052 3.70417 12.4052 3.47684V1.19113C12.4052 0.963799 12.4955 0.745781 12.6563 0.585036C12.817 0.42429 13.035 0.333984 13.2624 0.333984C13.4897 0.333984 13.7077 0.42429 13.8685 0.585036C14.0292 0.745781 14.1195 0.963799 14.1195 1.19113V3.47684C14.1195 3.70417 14.0292 3.92219 13.8685 4.08293C13.7077 4.24368 13.4897 4.33398 13.2624 4.33398ZM6.40637 5.47684C6.24691 5.47705 6.09055 5.43277 5.95488 5.34898C5.81921 5.2652 5.7096 5.14523 5.63837 5.00256L4.49551 2.71684C4.39606 2.51371 4.38093 2.2795 4.45341 2.06525C4.5259 1.85101 4.68012 1.67409 4.88248 1.57307C5.08483 1.47204 5.31892 1.45509 5.53372 1.5259C5.74852 1.59672 5.92663 1.74956 6.02923 1.95113L7.17208 4.23684C7.23732 4.36752 7.26809 4.5127 7.26146 4.65861C7.25483 4.80452 7.21102 4.94631 7.1342 5.07054C7.05737 5.19476 6.95008 5.29729 6.8225 5.3684C6.69492 5.43951 6.55243 5.47684 6.40637 5.47684ZM20.1184 5.47684C19.9724 5.47664 19.8289 5.43917 19.7015 5.36798C19.5741 5.29679 19.4669 5.19424 19.3902 5.07005C19.3136 4.94586 19.2698 4.80414 19.2633 4.65833C19.2567 4.51251 19.2875 4.36743 19.3527 4.23684L20.4955 1.95113C20.5981 1.74956 20.7762 1.59672 20.991 1.5259C21.2058 1.45509 21.4399 1.47204 21.6423 1.57307C21.8446 1.67409 21.9988 1.85101 22.0713 2.06525C22.1438 2.2795 22.1287 2.51371 22.0292 2.71684L20.8864 5.00256C20.8151 5.14523 20.7055 5.2652 20.5699 5.34898C20.4342 5.43277 20.2778 5.47705 20.1184 5.47684Z" fill="black"/>
                </svg>
            </a>
            </span>
                </p>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Client;

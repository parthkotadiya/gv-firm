import React, { useState, useEffect } from 'react';
import style from "../Style/PdfClient.module.css"
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import img from '../Assent/logo.png'
import dowloadimg from '../Assent/download.png'

const PdfClient = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [Advocate, setAdvocate] = useState([]);
    const [matchingAdvocate, setMatchingAdvocate] = useState('');
    const [selectedAdvocateId, setSelectedAdvocateId] = useState('');

    useEffect(() => {
        axios.get("http://localhost:9000/Team/TeamDataView")
            .then((response) => {
                if (Array.isArray(response.data.Data)) {
                    setAdvocate(response.data.Data);
                } else {
                    console.error("Advocate data is not an array:");
                }
            })
            .catch((error) => {
                console.error("Error fetching advocate data:", error);
            });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:9000/client/viewClientfind?id=${id}`)
            .then((res) => {
                setData(res.data.data);
                if (res.data.data) {
                    let Advocateid = (res.data.data.Advocate)
                    setSelectedAdvocateId(Advocateid)
                } else {
                    console.log("Data Not Find");
                    return false;
                }
            })
            .catch((err) => console.error(err));
    }, []);

    const AdvocateId = selectedAdvocateId;
    const Advocates = Advocate;

    useEffect(() => {
        if (AdvocateId  && Advocates) {
            const Advocatename = Advocates.find((advocate) => advocate._id === AdvocateId);
            setMatchingAdvocate(Advocatename.fullname);
        }
    }, [selectedAdvocateId, Advocates]);

    //PDF Dowloads Code     
    const downloadFile = () => {
        const input = document.getElementById('data');
        if (!input) return;

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('client_data.pdf');
        });
    };

    return (
        <>
            <div id="data" className={style.pdf}>

                <h2 className={style.pdfh2}>GV LAW FIRM Client Details</h2>

                <img src={img} className={style.imgicon} />

                <h5 className={style.party}>Party Details</h5>

                <div id="data">
                    <table style={{ borderCollapse: 'collapse', border: '0px solid black' }} className='justify-content-center d-flex'>
                        <tbody className={style.tbody}>
                            <tr style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <h4 className={`align-items-center ${style.clientname}`}>
                                    Name :
                                </h4>
                                <td style={{ borderCollapse: 'rowapse', border: '1px solid black' }} className={`align-items-center ${style.clientnameP}`}>
                                    {data ? data.name : 'Loading...'}
                                </td>
                            </tr>
                            <tr style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <h4 className={`align-items-center ${style.clientname}`}>
                                    Case No :
                                </h4>
                                <td style={{ borderCollapse: 'rowapse', border: '1px solid black' }} className={`align-items-center ${style.clientnameP}`}>
                                    {data ? data.caseNo : 'Loading...'}
                                </td>
                            </tr>
                            <tr style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <h4 className={`align-items-center ${style.clientname}`}>
                                    Date :
                                </h4>
                                <td style={{ borderCollapse: 'rowapse', border: '1px solid black' }} className={`align-items-center ${style.clientnameP}`}>
                                    {data ? data.date : 'Loading...'}
                                </td>
                            </tr>
                            <tr style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <h4 className={`align-items-center ${style.clientname}`}>
                                    Case Type :
                                </h4>
                                <td style={{ borderCollapse: 'rowapse', border: '1px solid black' }} className={`align-items-center ${style.clientnameP}`}>
                                    {data ? data.pOption : 'Loading...'}
                                </td>
                            </tr>
                            <tr style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <h4 className={`align-items-center ${style.clientname}`}>
                                    Business Name :
                                </h4>
                                <td style={{ borderCollapse: 'rowapse', border: '1px solid black' }} className={`align-items-center ${style.clientnameP}`}>
                                    {data ? data.bName : 'Loading...'}
                                </td>
                            </tr>
                            <tr style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <h4 className={`align-items-center ${style.clientname}`}>
                                    Address :
                                </h4>
                                <td style={{ borderCollapse: 'rowapse', border: '1px solid black' }} className={`align-items-center ${style.clientnameP}`}>
                                    {data ? data.address1 : 'Loading...'}
                                </td>
                            </tr>
                            <tr style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <h4 className={`align-items-center ${style.clientname}`}>
                                    State :
                                </h4>
                                <td style={{ borderCollapse: 'rowapse', border: '1px solid black' }} className={`align-items-center ${style.clientnameP}`}>
                                    {data ? data.state : 'Loading...'}
                                </td>
                            </tr>
                            <tr style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <h4 className={`align-items-center ${style.clientname}`}>
                                    Street Address :
                                </h4>
                                <td style={{ borderCollapse: 'rowapse', border: '1px solid black' }} className={`align-items-center ${style.clientnameP}`}>
                                    {data ? data.address2 : 'Loading...'}
                                </td>
                            </tr>
                            <tr style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <h4 className={`align-items-center ${style.clientname}`}>
                                    Email Address :
                                </h4>
                                <td style={{ borderCollapse: 'rowapse', border: '1px solid black' }} className={`align-items-center ${style.clientnameP}`}>
                                    {data ? data.email : 'Loading...'}
                                </td>
                            </tr>
                            <tr style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <h4 className={`align-items-center ${style.clientname}`}>
                                    Phone :
                                </h4>
                                <td style={{ borderCollapse: 'rowapse', border: '1px solid black' }} className={`align-items-center ${style.clientnameP}`}>
                                    {data ? data.mobileNo : 'Loading...'}
                                </td>
                            </tr>

                            <tr style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <h4 className={`align-items-center ${style.clientname}`}>
                                    Advocate Name :
                                </h4>
                                <td style={{ borderCollapse: 'rowapse', border: '1px solid black' }} className={`align-items-center ${style.clientnameP}`}>
                                    {matchingAdvocate}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h5 className={style.opposite}>Opposite Party Details</h5>

                <div id="data">
                    <table style={{ borderCollapse: 'collapse', border: '0px solid black', width: '100%' }} className='justify-content-center d-flex'>
                        <tbody>
                            <tr style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <h4 className={`align-items-center ${style.clientname}`}>
                                    Contact Person :
                                </h4>
                                <td style={{ borderCollapse: 'rowapse', border: '1px solid black' }} className={`align-items-center ${style.clientnameP}`}>
                                    {data ? data.oppname : 'Loading...'}
                                </td>
                            </tr>
                            <tr style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <h4 className={`align-items-center ${style.clientname}`}>
                                    Business Name :
                                </h4>
                                <td style={{ borderCollapse: 'rowapse', border: '1px solid black' }} className={`align-items-center ${style.clientnameP}`}>
                                    {data ? data.oppbName : 'Loading...'}
                                </td>
                            </tr>
                            <tr style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <h4 className={`align-items-center ${style.clientname}`}>
                                    Address :
                                </h4>
                                <td style={{ borderCollapse: 'rowapse', border: '1px solid black' }} className={`align-items-center ${style.clientnameP}`}>
                                    {data ? data.address : 'Loading...'}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={`${style.dowloadimgwidth} d-flex justify-content-center align-items-center`}>
                <img src={dowloadimg} className={style.dowloadimg} onClick={downloadFile} />
            </div>


        </>
    )
}

export default PdfClient;
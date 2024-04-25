import React from 'react'
import { Link } from 'react-router-dom'
import Style from '../Style/AllCases.module.css'

const Cases = ({colClass}) => {
    return (
        <>
            <div className={Style.CasesPage} >
                <div className='d-flex'>
                    <div className={colClass === "col-10" ? Style.box : Style.box2}>
                        <p className={`${Style.rectangle} ${Style.case} ${Style.caseno}`} >CASE NO.</p>
                    </div>
                    <div className={`${Style.box} ${colClass === "col-10" ? Style.court : Style.court2}`}>
                        <p className={Style.rectangle} >COURT</p>
                    </div>
                    <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                        <p className={Style.rectangle} >CLINT NAME</p>
                    </div>
                    <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                        <p className={Style.rectangle} >ADVOCATE</p>
                    </div>
                    <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                        <p className={`${Style.rectangle} ${Style.case}`} >HEARING DATE</p>
                    </div>
                    <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                        <p className={Style.rectangle} >CASE TYPE</p>
                    </div>
                    <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                        <p className={Style.rectangle} >CASE STATUS</p>
                    </div>
                </div>

                <div className=''>
                    <div className={`${Style.Running} d-flex`}>
                        <div className={colClass === "col-10" ? Style.box : Style.box2}>
                            <p className={`${Style.rectangle} ${Style.case} ${Style.caseno}`} >CASE18AS</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.court : Style.court2}`}>
                            <p className={Style.rectangle} >supreme court</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                            <p className={Style.rectangle} >ARVADIYA KISHAN</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                            <p className={Style.rectangle} >KIKANI CHIRALI</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={`${Style.rectangle} ${Style.case}`} >06/07/2023</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={Style.rectangle} >Other</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={Style.rectangle} >Running</p>
                        </div> 
                    </div>
                    <div className={`${Style.Running} d-flex`}>
                        <div className={colClass === "col-10" ? Style.box : Style.box2}>
                            <p className={`${Style.rectangle} ${Style.case} ${Style.caseno}`}>CASE18AS</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.court : Style.court2}`}>
                            <p className={Style.rectangle} >supreme court</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                            <p className={Style.rectangle} >ARVADIYA KISHAN</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                            <p className={Style.rectangle} >KIKANI CHIRALI</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={`${Style.rectangle} ${Style.case}`} >06/07/2023</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={Style.rectangle} >Other</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={Style.rectangle} >Running</p>
                        </div> 
                    </div>
                    <div className={`${Style.Closed} d-flex`}>
                        <div className={colClass === "col-10" ? Style.box : Style.box2}>
                            <p className={`${Style.rectangle} ${Style.case} ${Style.caseno}`} >CASE18AS</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.court : Style.court2}`}>
                            <p className={Style.rectangle} >supreme court</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                            <p className={Style.rectangle} >ARVADIYA KISHAN</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                            <p className={Style.rectangle} >KIKANI CHIRALI</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={`${Style.rectangle} ${Style.case}`} >06/07/2023</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={Style.rectangle} >Other</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={Style.rectangle} >Closed</p>
                        </div> 
                    </div>
                    <div className={`${Style.Closed} d-flex`}>
                        <div className={colClass === "col-10" ? Style.box : Style.box2}>
                            <p className={`${Style.rectangle} ${Style.case} ${Style.caseno}`} >CASE18AS</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.court : Style.court2}`}>
                            <p className={Style.rectangle} >supreme court</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                            <p className={Style.rectangle} >ARVADIYA KISHAN</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                            <p className={Style.rectangle} >KIKANI CHIRALI</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={`${Style.rectangle} ${Style.case}`} >06/07/2023</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={Style.rectangle} >Other</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={Style.rectangle} >Closed</p>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cases

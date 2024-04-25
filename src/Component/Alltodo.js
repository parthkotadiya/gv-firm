import React from 'react'
import { Link } from 'react-router-dom'
import Style from '../Style/Alltodo.module.css'

const TaskAlltodo = ({ colClass }) => {
    return (
        <>
            <div className={Style.CasesPage} >
                <div className='d-flex'>
                    <div className={colClass === "col-10" ? Style.box : Style.box2}>
                        <p className={`${Style.rectangle} ${Style.text}`}  >CASE NO.</p>
                    </div>
                    <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                        <p className={`${Style.rectangle} ${Style.text}`}  >DATE</p>s
                    </div>
                    <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                        <p className={`${Style.rectangle} ${Style.text}`}  >EXPIRY.DATE</p>
                    </div>
                    <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                        <p className={`${Style.rectangle} ${Style.text}`}  >CLINT NAME</p>
                    </div>
                    <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                        <p className={`${Style.rectangle} ${Style.text}`}  >ADVOCATE</p>
                    </div>
                    <div className={`${Style.box} ${colClass === "col-10" ? Style.court : Style.court2}`}>
                        <p className={`${Style.rectangle} ${Style.text}`} >COURT</p>
                    </div>
                </div>

                <div className=''>
                    <div className={`${Style.Running} d-flex`}>
                        <div className={colClass === "col-10" ? Style.box : Style.box2}>
                            <p className={Style.rectangle} >BDC85AS</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={Style.rectangle} >06/07/2023</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={Style.rectangle} >06/07/2023</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                            <p className={Style.rectangle} >ARVADIYA KISHAN</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                            <p className={Style.rectangle} >KIKANI CHIRALI</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.court : Style.court2}`}>
                            <p className={Style.rectangle} >supreme court</p>
                        </div>
                    </div>
                </div>


                <div className=''>
                    <div className={`${Style.Closed} d-flex`}>
                        <div className={colClass === "col-10" ? Style.box : Style.box2}>
                            <p className={Style.rectangle} >BDC85AS</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={Style.rectangle} >06/07/2023</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={Style.rectangle} >06/07/2023</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                            <p className={Style.rectangle} >ARVADIYA KISHAN</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                            <p className={Style.rectangle} >KIKANI CHIRALI</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.court : Style.court2}`}>
                            <p className={Style.rectangle} >supreme court</p>
                        </div>
                    </div>
                </div>


                <div className=''>
                    <div className={`${Style.old} d-flex`}>
                        <div className={colClass === "col-10" ? Style.box : Style.box2}>
                            <p className={Style.rectangle} >BDC85AS</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={Style.rectangle} >06/07/2023</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.date : Style.date2}`}>
                            <p className={Style.rectangle} >06/07/2023</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                            <p className={Style.rectangle} >ARVADIYA KISHAN</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.name : Style.name2}`}>
                            <p className={Style.rectangle} >KIKANI CHIRALI</p>
                        </div>
                        <div className={`${Style.box} ${colClass === "col-10" ? Style.court : Style.court2}`}>
                            <p className={Style.rectangle} >supreme court</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TaskAlltodo

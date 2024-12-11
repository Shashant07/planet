import React from 'react'

const StatsSection = () => {
    return (
        <section id="stats" className="stats section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item d-flex align-items-center w-100 h-100">
                            <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                            <div>
                                {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                                <span>Endless Potential</span>
                                <p>Ready to deliver impactful experiences for businesses.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item d-flex align-items-center w-100 h-100">
                            <i className="bi bi-journal-richtext color-orange flex-shrink-0" style={{color: "#ee6c20"}}></i>
                            <div>
                                {/* <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                <p>Projects</p> */}
                                 <span>Future Projects</span>
                                 <p>Passionate about creating exceptional results.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item d-flex align-items-center w-100 h-100">
                            <i className="bi bi-headset color-green flex-shrink-0" style={{color: "#15be56"}}></i>
                            <div>
                                {/* <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                                <p>Hours Of Support</p> */}
                                <span>Reliable Support</span>
                                <p>Always here to help your business grow.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item d-flex align-items-center w-100 h-100">
                            <i className="bi bi-people color-pink flex-shrink-0" style={{color: "#bb0852"}}></i>
                            <div>
                                {/* <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                                <p>Hard Workers</p> */}
                                <span>Hard Workers</span>
                                <p>Innovators dedicated to your success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsSection;
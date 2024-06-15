import React from 'react'
import './Services.css'
import { FaAndroid, FaCode } from 'react-icons/fa'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

export default function Services() {
    return (
        <div>
            <section className="services" id="services">

                <h2 className="heading">My <span>Services</span></h2>

                <div className="service-container">

                    <div className="service-box">
                        <FaCode className='service-box-icon'></FaCode>
                        <h3>Web Development</h3>
                        <p>The fsola adlf aldfldf afladf adfldfdf lsdfjdfld adlfjd f sdlfdfdjfla lldf df a flsdjfjd fld f
                            dlfjjdfjlaf ds
                            fs fdsfldsjfjldslfja f agslljflsd fsa falsdf af df d fsdlfjasfjdjfa dflsdfsd f ldfj sdf ajsd f sf
                        </p>
                        <a href="#" class="btn">Read more</a>
                    </div>

                    <div className="service-box">
                        <AiOutlineFundProjectionScreen className="service-box-icon"></AiOutlineFundProjectionScreen>
                        <h3>Quality Assurance</h3>
                        <p>The fsola adlf aldfldf afladf adfldfdf lsdfjdfld adlfjd f sdlfdfdjfla lldf df a flsdjfjd fld f
                            dlfjjdfjlaf ds
                            fs fdsfldsjfjldslfja f agslljflsd fsa falsdf af df d fsdlfjasfjdjfa dflsdfsd f ldfj sdf ajsd f sf
                        </p>
                        <a href="#" className="btn">Read more</a>
                    </div>

                    <div className="service-box">
                        <FaAndroid className="service-box-icon"></FaAndroid>
                        <h3>App Development</h3>
                        <p>The fsola adlf aldfldf afladf adfldfdf lsdfjdfld adlfjd f sdlfdfdjfla lldf df a flsdjfjd fld f
                            dlfjjdfjlaf ds
                            fs fdsfldsjfjldslfja f agslljflsd fsa falsdf af df d fsdlfjasfjdjfa dflsdfsd f ldfj sdf ajsd f sf
                        </p>
                        <a href="#" className="btn">Read more</a>
                    </div>

                </div>

            </section>
        </div>
    )
}

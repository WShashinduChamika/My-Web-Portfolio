import React from 'react'
import './MyServices.css'
import { FaAndroid, FaCode } from 'react-icons/fa'
import { MdHighQuality } from 'react-icons/md'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

export default function MyServices() {
    return (
        <div>
            <section class="services" id="services">

                <h2 class="heading">My <span>Services</span></h2>

                <div class="service-container">

                    <div class="service-box">
                        <FaCode className='service-box-icon'></FaCode>
                        <h3>Web Development</h3>
                        <p>The fsola adlf aldfldf afladf adfldfdf lsdfjdfld adlfjd f sdlfdfdjfla lldf df a flsdjfjd fld f
                            dlfjjdfjlaf ds
                            fs fdsfldsjfjldslfja f agslljflsd fsa falsdf af df d fsdlfjasfjdjfa dflsdfsd f ldfj sdf ajsd f sf
                        </p>
                        <a href="#" class="btn">Read more</a>
                    </div>

                    <div class="service-box">
                        <AiOutlineFundProjectionScreen className='service-box-icon'></AiOutlineFundProjectionScreen>
                        <h3>Quality Assurance</h3>
                        <p>The fsola adlf aldfldf afladf adfldfdf lsdfjdfld adlfjd f sdlfdfdjfla lldf df a flsdjfjd fld f
                            dlfjjdfjlaf ds
                            fs fdsfldsjfjldslfja f agslljflsd fsa falsdf af df d fsdlfjasfjdjfa dflsdfsd f ldfj sdf ajsd f sf
                        </p>
                        <a href="#" class="btn">Read more</a>
                    </div>

                    <div class="service-box">
                        <FaAndroid className='service-box-icon'></FaAndroid>
                        <h3>App Development</h3>
                        <p>The fsola adlf aldfldf afladf adfldfdf lsdfjdfld adlfjd f sdlfdfdjfla lldf df a flsdjfjd fld f
                            dlfjjdfjlaf ds
                            fs fdsfldsjfjldslfja f agslljflsd fsa falsdf af df d fsdlfjasfjdjfa dflsdfsd f ldfj sdf ajsd f sf
                        </p>
                        <a href="#" class="btn">Read more</a>
                    </div>

                </div>

            </section>
        </div>
    )
}

import Carousel from 'react-material-ui-carousel'
import Footer from '../footer/Footer'
import AdminTopbar from '../topbar1/AdminTopbar'

import './homeloan.css'

export default function AdminHomeLoan() {
    const img1="https://th.bing.com/th/id/R.3aa0ae04e3a9a1b6de0bea6e736c4d37?rik=%2bFNl7SolvRXPgQ&riu=http%3a%2f%2fwww.twinbrains.in%2fimages%2fwork%2fFBD-Hourglass.jpg&ehk=6ZDxSPqAG5kTORfTLG2nAOdv%2fYOQgO3Q0R72YrNPqpQ%3d&risl=&pid=ImgRaw&r=0"
    const img2="https://yourneighbourhood.co.za/wp-content/uploads/2015/08/iStock_000043941934_Medium-1080x675.jpg"
    
  return (
    <div className='homeloan'>
        <AdminTopbar/>
        <div className="homeloanCOntainer">
            <Carousel>
                <Imag1/>
                <Img2/>
            </Carousel>
            <div className="homeloanSteps">
                <div className="step1">
                    <div className="iconImg">
                        <img src="https://www.rhinebeckbank.com/portals/rhinebeckbank/Images/cl_icon.png" alt="" className="iconImg1" />
                        {/* <img src="https://blog.smart-builder.com/hubfs/Blog%20images/processing-fees.png" alt="" className="iconImg1" /> */}
                    </div>
                    <div className="iconImgdesc">
                        <h6 className="homeheading">Special<br/>Processing fee</h6>
                    </div>
                </div>
                <div className="step1">
                    <div className="iconImg">
                        <img src="https://www.virtusa.com/content/dam/virtusa/images/icons/shared/Icon__Digitization-Mobile-Banking-KYC.png" alt="" className="iconImg1" />
                        {/* <img src="https://blog.smart-builder.com/hubfs/Blog%20images/processing-fees.png" alt="" className="iconImg1" /> */}
                    </div>
                    <div className="iconImgdesc">
                        <h6 className="homeheading">Digital Sanction<br/>in few Steps</h6>
                    </div>
                </div>
                <div className="step1">
                    <div className="iconImg">
                        <img src="https://www.slcc.edu/concurrentenrollment/images/Icons500px/MoneyIcon.jpg" alt="" className="iconImg1" />
                        {/* <img src="https://blog.smart-builder.com/hubfs/Blog%20images/processing-fees.png" alt="" className="iconImg1" /> */}
                    </div>
                    <div className="iconImgdesc">
                        <h6 className="homeheading">Enjoy Lower EMI</h6>
                    </div>
                </div>
                
            </div>
            <div className="step2">
                <div className="imgPassage">
                    <h2 className="headinghomeloan">Home Loan</h2>
                    <div className="headingtext">
                        <p className="texthome">
                            Buying a house is a dream for many and involves a lot of
                            financial planning. YOUR Bank Home Loans makes it
                            simpler for those who want to realise this dream.
                        </p>
                        <p className="texthome">
                            With our Express Home Loans platform you can now get
                            digital sanction of your Home Loan at attractive rate of
                            interest in just few simple steps.
                        </p>
                    </div>
                </div>
                    <div className="imgDesc1">
                        <img src="https://www.thanmerrill.com/wp-content/uploads/2017/04/building-wealth-real-estate.jpg" alt="" className="img2home" />
                    </div>
            </div>
        </div>
      {/* <Footer/> */}
    </div>
  )
}
function Imag1(){
    
    const img5="https://thumbs.dreamstime.com/b/little-daughters-sit-parents-laps-talking-resting-couch-little-daughters-sit-parents-laps-talking-together-resting-202715546.jpg"
    return(
        <div className="img1divhome" style={{backgroundImage:`url(${img5})`}}>
            <div className="deschome1">
                <p className='bankname'><b>Your Bank <br/>Home Loans</b></p>
            </div>
        </div>
    )
}
function Img2(){
    const img2="https://cosmic-s3.imgix.net/86df89d0-cb5b-11e9-a681-69df9500152a-selling_your_house_to_an_investor_6_things_to_consider-ogid-144722.jpg?auto=format&w=1920&q=20"
    return(
        <div className="img1divhome" style={{backgroundImage:`url(${img2})`}}>
            <div className="deschome2">
                <p className='wantloan'><b>Want to build own house????</b></p>
            </div>
        </div>
    )
}

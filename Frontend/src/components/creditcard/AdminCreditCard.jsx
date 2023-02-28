import './creditcard.css'
import Carousel from 'react-material-ui-carousel';
import AdminTopbar from '../topbar1/AdminTopbar';
export default function AdminCreditcard() {
    
    const img1="https://i.pinimg.com/originals/8e/cb/c5/8ecbc5e59710cab820500abd3f3f86a8.jpg"
    const img2="https://i.pinimg.com/originals/75/1f/6c/751f6cbef680226d51bc1afc94316779.jpg"
    const img4="https://th.bing.com/th/id/OIP.u4eE-umm43NviPEYpfJXogHaE8?pid=ImgDet&rs=1"
    const img6="https://th.bing.com/th/id/OIP.CHx91e-M3jom0_cSVzMjYgHaEK?pid=ImgDet&w=980&h=551&rs=1"
    
  return (
    <div className='credit1' >
        <AdminTopbar/>
        
        <div className='caurosel' style={{padding:"40px"}}>
            <Carousel >
            <img src={img1} className="img" style={{width:"1400px",height:"300px"}} alt="" />
                <img src={img2} className="img" style={{width:"1400px",height:"300px"}} alt="" />
                <img src={img6} className="img" style={{width:"1400px",height:"300px"}} alt=""/>
                <img src={img4} className="img" style={{width:"1400px",height:"300px"}} alt="" />
            </Carousel>
            <div className='credit2div'>
                <div className='creditReg'>
                    <Carousel className='carouselcredit'>
                        <Step1/>
                        <Step2/>
                        <Step3/>
                        <Step4/>
                    </Carousel>
                </div>
                <div className="creditText">
                    <p className='heading21'><b>Credit Card</b>-Your Bank</p>
                    <p className='creditcardImp'>
                    Your Bank of India Credit Cards offer benefits that match your 
                    preferences, suit your lifestyle and are accepted globally. The Credit Cards 
                    issued are EMV Chip and PIN enabled and equipped with highly secured integrated 
                    chip technology which was thoughtfully designed to provide enhanced security. 
                    This Chip Card processes data with unparalleled security in a highly secured environment 
                    to protect you against 
                    counterfeiting and skimming so that you can use it freely without any concerns.
                    </p>
                </div>
            </div>
            <div className="credit3div">
                <div className='salient'>
                    <p className="salientfeatures"><b>SALIENT  FEATURES OF OUR CREDIT CARD</b></p>
                </div>
                <div className='passage'>
                    <div  className='features1'>
                    <p className='salien'><b>1.Wide Acceptance at all VISA and Master Card and Rupay affiliations</b></p>
                    <p className='salien'><b>2.Cards are issued against a minimum Annual Proven Income of Rs 1.80 lacs</b></p>
                    <p className='salien'><b>3.Credit Cards are also issued against lien on Deposits, without Income proof</b></p>
                    <p className='salien'><b>4.Sanctioning of Credit Cards and Card Limit is at the discretion of the Bank</b></p>
                    <p className='salien'><b>5. Add-on cards to Spouse / Parents / Major Children are available</b></p>
                    <p className='salien'><b>6.Cash advance facility at 20% to 40% as per the card variant on the Card Limit subject
                     to ATM daily cash withdrawal Limit of maximum Two transactions or Rs 20,000/- per day</b></p>
                    < p className='salien'><b>7.Global acceptance for all variants</b></p>
                    
                    </div>
                
               <div  className='features2'>
               < p className='salien'><b>8.Minimum Payment Due (MPD) is 5% of the bill amount</b></p>
                < p className='salien'><b>9.No finance charges (i.e free credit period allowed on all fresh purchases)</b></p>
                < p className='salien'><b>10.Low annual subscription from second year onwards.</b></p>
                <p className='salien'><b>11.Free Credit Period of 21 to 50 days even under rollover Option</b></p>
                <p className='salien'><b>12.Free Lost Card Insurance Cover</b></p>
                <p className='salien'><b>13.SMS alerts are sent to the Registered Mobile on all purchases,
                     billing amount, credits received, cards blocked, Renewal Cards sent etc.,</b></p>
                <p className='salien'><b>14.Soft copy of Monthly Bill is sent to the registered E-mail ID</b></p>
                </div>
                </div>
            </div>
      </div>
      {/* <CreditSteps/> */}
      
    </div>
  )
}
function CreditSteps(){
    
    return(
        <div>
            <Carousel>
                {/* <img src={img1} className="img" style={{width:"1300px",height:"300px"}} alt="" />
                <img src={img2} className="img" style={{width:"1300px",height:"300px"}} alt="" />
                <img src={img6} className="img" style={{width:"1300px",height:"300px"}} alt=""/>
                <img src={img4} className="img" style={{width:"1300px",height:"300px"}} alt="" /> */}
            </Carousel>
        </div>
    )
}
function Step1(){
    const img1="https://th.bing.com/th/id/OIP.vytgbirCqZE6a57sBb4MkwHaE7?pid=ImgDet&w=1024&h=682&rs=1"
    return (
        <div className='step1'>
            <div  className="step1div1">
                <p className='heading11'>Step1</p>
                <p className="info" >Quik Processing with basic Details</p>
                <div className='step1img' style={{backgroundImage:`url(${img1})`,backgroundRepeat:"no-repeat",backgroundSize:"288px",height:"200px"}}>
                </div>
            </div>
            
        </div>
    )
}
function Step2(){
    const img2="https://www.sbicard.com/sprint/static/media/Group%201692.9608d266.png"
    const img1="https://uploads-ssl.webflow.com/5f3acb2672fdcd05b7611500/5f99b8c6709c282d0201e33d_Admios%20Oct_Ad_How%20to%20tell%20if%20a%20developer%20is%20%E2%80%9Cgood%E2%80%9D%20if%20you%E2%80%99re%20not%20technical%20.jpg"
    return (
        <div className='step1'>
            <div  className="step1div1">
                <p className='heading11'>Step2</p>
                <p className="info" >Professsional Details to know more about you</p>
                <div className='step1img' style={{backgroundImage:`url(${img1})`,backgroundRepeat:"no-repeat",backgroundSize:"288px",height:"200px"}}>
                </div>
            </div>
            
        </div>
    )
}
function Step3(){
    const img1="https://www.sbicard.com/sprint/static/media/Group%201692.9608d266.png"
    return (
        <div className='step1'>
            <div  className="step1div1">
                <p className='heading11'>Step3</p>
                <p className="info" >Secured KYC and bank verification to complete your application</p>
                <div className='step1img' style={{backgroundImage:`url(${img1})`,backgroundRepeat:"no-repeat",backgroundSize:"288px",height:"200px"}}>
                </div>
            </div>
            
        </div>
    )
}
function Step4(){
    const img1="https://www.pollenmidwest.org/wp-content/uploads/2017/04/banking2.gif"
    return (
        <div className='step1'>
            <div  className="step1div21">
                <p className='heading11'></p>
                <p className="info" >Happily you can use Your Credit Card</p>
                <div className='step1img' style={{backgroundImage:`url(${img1})`,backgroundRepeat:"no-repeat",backgroundSize:"288px",height:"200px"}}>
                </div>
            </div>
        </div>
    )
}

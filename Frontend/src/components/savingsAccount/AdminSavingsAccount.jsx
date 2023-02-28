import './savingsAccount.css'
import Carousel from 'react-material-ui-carousel';
import AdminTopbar from '../topbar1/AdminTopbar';

export default function AdminSavingsAccount() {
    const img1="https://res.cloudinary.com/djrpgm5d4/image/upload/v1/blog_images/o7cfolqs8sx64z1ebssu.png"
    const img2="https://moneyclubber.com/wp-content/uploads/2021/03/How-To-Save-Money-From-Salary01.png"
    const img3="https://www.centier.com/images/banners/commercial-tiered-savings-mobile.jpg?v=1.1.1"
    const img4="https://th.bing.com/th/id/OIP.wvXzZbVgowaxjn1TPyuFCwHaE8?pid=ImgDet&rs=1"
  return (
    <div className="savingsContainer">
      <AdminTopbar/>
      <div className="cauroseldivS1">
        <Carousel className='savingsCaurosel'>
                <img src={img1} className="imgs" style={{width:"1400px",height:"400px"}} alt="" />
                <img src={img2} className="imgs" style={{width:"1400px",height:"400px"}} alt="" />
                <img src={img4} className="imgs" style={{width:"1400px",height:"400px"}} alt=""/>
                <img src={img3} className="imgs" style={{width:"1400px",height:"400px"}} alt="" />
        </Carousel>
        <div className='saving2div'>
          <div className='savingReg'>
            <Carousel className='carouselsaving'>
              <Step1/>
              <Step2/>
              <Step3/>
              <Step4/>
              <Step5/>
            </Carousel>
          </div>
          <div className="savingText">
            <p className='heading21s'><b>Digital Savings Account</b>-Your Bank</p>
            <p className='savingImp'>
            A Savings Account is a deposit account opted for by many who wish to save a certain part 
            of their earnings. It is a type of bank account wherein you can park your funds,
             earn interest on the same and also withdraw money at any time. It provides the convenience of liquid funds.
            </p>
            <p className="savingImp2">There are different types of Savings Account one can opt for at Your Bank- 
            , Regular Savings Account, DigiSave Youth Account, Women's Savings Account and Senior Citizens Savings Account, to
             name a few. The saving bank account variants are designed keeping in mind the needs of our varying 
             customer groups</p>
          </div>
        </div>
        <div className="saving3div">
          <div className='savingfeatures'>
            <p className="savingsalient"><b>FEATURES OF  DIGITAL SAVINGS ACCOUNT</b></p>
          </div>
          <div className='savingpassage'>
            <div  className='savingfeatures1'>
              < p className='saliensaving'><b>First 50 cheque leaves will be free</b></p>
              <p className="saliensaving"><b>Mobile banking</b></p>
              <p className="saliensaving"><b>Internet Banking</b></p>
              <p className="saliensaving"><b>Free ATM card during first year.</b></p>
              <p className="saliensaving"><b>Free cash deposit upto Rs. 25000/ -per day.</b></p>
              <p className="saliensaving"><b>Personal accident insurance available (Optional)</b></p>
              <p className="saliensaving"><b>Maximum Balance : No Limit</b></p>
            </div>
            <div className="savingfeatures2">
              <p className="saliensaving"><b>Free Transfer of account from one branch to another.</b></p>
              <p className="saliensaving"><b>Statement of account is issued as per requirement
                 at monthly/quarterly/half yearly/annual intervals.</b></p>
              <p className="saliensaving"><b>Facility of getting statement by e mail.</b></p>
              <p className="saliensaving"><b>Average monthly balance (AMB) requirement  from Feb 2021 : Rs.5000/-</b></p>
              <p className="saliensaving"><b>Rate of Interest :  NIL</b></p>
              <p className="saliensaving"><b>Nomination facility Available</b></p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
function Step1(){
  const img1="https://d187qskirji7ti.cloudfront.net/news/wp-content/uploads/2019/01/savings-basics.jpg"
  return (
      <div className='step1s'>
          <div  className="step1div21s">
              <p className='heading11s'></p>
              <p className="infos" >Open your account in 4 easy steps </p>
              <div className='step1imgs' style={{backgroundImage:`url(${img1})`,backgroundRepeat:"no-repeat",backgroundSize:"288px",height:"200px"}}>
              </div>
          </div>
      </div>
  )
}
function Step2(){
  
  const img1="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/08/01/988258-887317-aadhaar-pan-dna.jpg"
  return (
      <div className='step1s'>
          <div  className="step1div1s">
              <p className='heading11s'>Step1</p>
              <p className="infos" >Verification via PAN and Adhhar</p>
              <div className='step1imgs' style={{backgroundImage:`url(${img1})`,backgroundRepeat:"no-repeat",backgroundSize:"288px",height:"200px"}}>
              </div>
          </div>
          
      </div>
  )
}
function Step3(){
  
  const img1="https://static.vecteezy.com/system/resources/previews/001/177/240/original/man-filling-out-paper-form-vector.jpg"
  return (
      <div className='step1s'>
          <div  className="step1div1s">
              <p className='heading11s'>Step2</p>
              <p className="infos" >Fill your Details</p>
              <div className='step1imgs' style={{backgroundImage:`url(${img1})`,backgroundRepeat:"no-repeat",backgroundSize:"288px",height:"200px"}}>
              </div>
          </div>
          
      </div>
  )
}
function Step4(){
  
  const img1="https://www.gizbot.com/img/600x90/img/2020/01/video-kyc-explained-everything-you-need-to-know1-1579681689.jpg"
  return (
      <div className='step1s'>
          <div  className="step1div1s">
              <p className='heading11s'>Step3</p>
              <p className="infos" >Complete your KYC via video call</p>
              <div className='step1imgs' style={{backgroundImage:`url(${img1})`,backgroundRepeat:"no-repeat",backgroundSize:"288px",height:"200px"}}>
              </div>
          </div>
          
      </div>
  )
}
function Step5(){
  
  const img1="https://www.lynk.network/wp-content/uploads/2019/09/your-international-bank-account.gif"
  return (
      <div className='step1s'>
          <div  className="step1div1s">
              <p className='heading11s'>Step4</p>
              <p className="infos" >Fund your Account</p>
              <div className='step1imgs' style={{backgroundImage:`url(${img1})`,backgroundRepeat:"no-repeat",backgroundSize:"288px",height:"200px"}}>
              </div>
          </div>
          
      </div>
  )
}

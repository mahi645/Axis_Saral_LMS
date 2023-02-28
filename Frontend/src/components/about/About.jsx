import './about.css'
import Carousel from 'react-material-ui-carousel'
import Footer from '../footer/Footer'
import Topbar1 from '../topbar1/Topbar1'
import UserTopBar from '../topbar1/UserTopBar'
export default function About() {
  return (
    <div className='aboutContainer'>
      {/* <Topbar1/> */}
      <UserTopBar/>
      <div className="aboutLeftContainer">
        <Carousel>
        <img src="https://th.bing.com/th/id/R.0bf2ef253e944cc17f4a2317adb88126?rik=UQ%2bTbrIgX%2fSEng&riu=http%3a%2f%2fglobalitassociates.org%2fwp-content%2fuploads%2f2016%2f08%2fabout-us-banner.jpg&ehk=ZbKSB3oX3BQvqvcIecIYeynfPlUA2ivzeeqq%2f%2bp%2bGj8%3d&risl=&pid=ImgRaw&r=0" alt="" className="image" />
        {/* <img className="image"  src="https://www.coach2reach.com/wp-content/uploads/2021/04/About-us-banner.jpg" alt=""/> */}
        <img className='image' src="https://media.glassdoor.com/l/d7/e7/3d/2a/working-environment.jpg" alt=""/>
        <img src="https://www.axisbank.com/images/default-source/revamp_new/about-us/banner_aboutus.jpg?sfvrsn=6a528c55_2" alt="" className="image" />
        </Carousel>
      </div>
      <div className="aboutRightContainer">
        <div className='right'>
            <h2 className='aboutus'>About us</h2>
            <p className='aboutInfo'> <b>Your Bank </b>is an Indian public sector bank under the control 
                    and ownership of Ministry of Finance, Government of India.
                 Established in 1906 at <b>Mangalore by Ammembal Subba Rao Pai</b>, the bank also has offices in
                  London, Dubai and New York.
            </p>
            <p className='aboutInfo'>On 30 August 2019, Finance Minister Nirmala Sitharaman announced that Syndicate Bank would
                 be merged with Your Bank. The proposed merger would create the fourth largest public 
                 sector bank in the country with total business of ₹15.20 lakh crore (US$190 billion)
                  and 10,324 branches.[7][8] The Board of Directors of Your Bank approved the merger 
                  on 13 September.[9][10] The Union Cabinet approved the merger on 4 March 2020. The merger was completed on 1 April
                 2020 with Syndicate Bank shareholders receiving 158 equity shares in the former for every 1,000 shares they hold</p>
        </div>
        <div className='left'>
            <img src="https://www.aimstyle.com/images/blogs/team.jpg" alt="" className="image1" />
        </div>
      </div>
      <div className="sub">
        
        <h2 className="susidires">Board of Directors</h2>
        <div className='dirList'>
        <div className='directors'>
            <div className='director'>
                
                <img src="https://images.wisegeek.com/confident-business-woman.jpg" alt="" className="dirName" />
                <center><h4>Angelina</h4></center>
                <small className='dirDesignation'>Independent Director</small>
            </div>
        </div>
        <div className='directors'>
            <div className='director'>
                <img src="https://th.bing.com/th/id/OIP.xg5mHE9kvXMz_Z5RfUELjgHaJQ?pid=ImgDet&w=900&h=1125&rs=1" alt="" className="dirName" />
                <center><h4>Raghavendra Kumar</h4></center>
                <small className='dirDesignation'>Managing Director</small>
            </div>
        </div>
        <div className='directors'>
            <div className='director'>
                <img src="https://th.bing.com/th/id/R.971f840fdebfcea80b8b4ff76470f24f?rik=ZuEktQLDsMIWOw&riu=http%3a%2f%2fwww.trbimg.com%2fimg-55f05959%2fturbine%2fcgnews-new-executive-director-announced-for-bwi-business-partnership-20150908&ehk=gW%2fwWeR2F13qqBkZRtTfv3Vt8%2fPXIdF3I1vZDfsCxm8%3d&risl=&pid=ImgRaw&r=0" alt="" className="dirName" />
                <center><h4>Antony</h4></center>
                <small className='dirDesignation'>Deputy Managing Director</small>
            </div>
        </div>
        <div className='directors'>
            <div className='director'>
                <img src="https://th.bing.com/th/id/OIP.P142zH6V4KCHtO6dtmtVfgHaJ5?pid=ImgDet&w=532&h=711&rs=1" alt="" className="dirName" />
                <center><h4>Amithab Sha</h4></center>
                <small className='dirDesignation'>Group Executive</small>
            </div>
        </div>
        <div className='achievements'>

        </div>
        
        </div>
      </div>
      <Footer/>
    </div>
  )
}

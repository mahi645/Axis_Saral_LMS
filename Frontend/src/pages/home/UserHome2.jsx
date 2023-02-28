import './userhome2.css';
import UserTopBar from '../../components/topbar1/UserTopBar'
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';

export default function UserHome2() {
    const home1="https://blog.pzu.pl/_fileserver/time20191001170042/item/1514052"
    
    const savings="https://dwkujuq9vpuly.cloudfront.net/news/wp-content/uploads/2020/03/shutterstock_1532079629-1.jpg"
    const fastag="https://zeeclassified.com/img/ads/large/1950_fastag_better.jpg"
   
    const credit="https://image.shutterstock.com/image-illustration/credit-card-that-provides-air-600w-551251402.jpg"
  return (
    <div className='home-container1'>
        <UserTopBar/>
        <div className="home-user2">
            <div className="homeWrapper12">
                <Carousel className="home-caurosel2">
                    <Wallpaper1/>
                    <Wallpaper2/>
                    <Wallpaper3/>
                </Carousel>
                
            </div>
            <div className="products-user-title">
                <h2>Products</h2>
            </div>
            <div className='user-products1'>
            <Link to="/homeloan" className='home-loan-user1'>
            <div className="product-homeLoan1" style={{backgroundImage:`url(${home1})`,border:"2px solid grey"}}>
              <div className="homeLoanheading-11">
                <p className="productText-user1">Turn your dream of refurbishing home into reality</p>
              </div>
            </div>
            </Link>
            <Link to="/savings" className='home-loan-user1'>
            <div className="product-homeLoan1" style={{backgroundImage:`url(${savings})`,backgroundRepeat:"no-repeat",backgroundSize:"400px 300px",border:"2px solid grey"}}>
              <div className="homeLoanheading-11">
              <p className="productText-user1">Store your savings the easy way</p>
              </div>
            </div>
            </Link>
            <Link to="/fastag" className='home-loan-user1'>
            <div className="product-homeLoan1" style={{backgroundImage:`url(${fastag})`,backgroundRepeat:"no-repeat",backgroundSize:"350px 350px",border:"2px solid grey"}}>
              <div className="homeLoanheading-11"></div>
            </div>
            </Link>
            <Link to="/credit" className='home-loan-user1'>
            <div className="product-homeLoan1" style={{backgroundImage:`url(${credit})`,backgroundRepeat:"no-repeat",backgroundSize:"300px 320px",border:"2px solid grey"}}>
              <div className="homeLoanheading-11">
              <p className="productText-user1">From touchdown to takeoff </p>
              </div>
            </div>
            </Link>
            
          </div>
        </div>
      
    </div>
  )
}

function Wallpaper1() {
    const img1="https://i.pinimg.com/originals/ef/83/f1/ef83f1c654d4ee2b24f5a6e9bbe41176.png"
    const img2="https://uicookies.com/wp-content/uploads/2020/03/Loans2go.jpg"
    const img3="https://th.bing.com/th/id/OIP.yO6u9akujA2pKFegP2RG6AHaHa?pid=ImgDet&rs=1"
    const img4="https://cdn.dribbble.com/users/6061337/screenshots/15947672/shot-22.png"
    const imgg5="https://i.ytimg.com/vi/1oRO9zEoRlU/maxresdefault.jpg"
    const img6="https://www.educowebdesign.com/sites/default/files/webster_bank_drupal_banking_example_website.jpg"
    const img7="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a8c50f19712587.562df04413539.jpg"
    const img8="https://cdn.designbump.com/wp-content/uploads/2011/08/creative-advertisements-013.jpg"
    const img9="https://i.pinimg.com/originals/0e/dd/d7/0eddd7a0f753e783b953e0920af0b517.jpg"
    const img10="https://i.pinimg.com/originals/8a/5d/ce/8a5dce68cb238c74afb24a2f142b7aef.jpg"
     return (
      <div className='wallpaper2'>
        <div className="wallpaper-wrapper2" 
        style={{backgroundImage:`url(${img10})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"1400px 500px",width:"1300px",height:"600px",paddingLeft:"40px",}}>
          <div className="imagDesc-user"><h5 className='imgtitle-home2-user'>Always take your card to make life simple</h5></div>
  
        </div>
      </div>
    )
  }
   function Wallpaper2() {
    const img2="https://larlegal.com/wp-content/uploads/2014/09/bigstock-Close-up-of-business-people-we-47775100-copy-620x413.jpeg"
    const img1="https://www.bdo.com.ph/sites/default/files/images/Cross%20Sell%20Banner%20for%20Retail%20Products.jpg"
    return (
      <div className='wallpaper2'>
        <div className="wallpaper-wrapper2" 
        style={{backgroundImage:`url(${img2})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"1400px 500px",width:"1300px",height:"600px",paddingLeft:"40px",}}>
          <div className="imagDesc2-user">
            <h5 className='imgtitle-home2-user'>You can also protect your business with us</h5>
          </div>
        </div>
      </div>
    )
  }
  function Wallpaper3() {
    const p1="turn your dream of refurbishing home into reality"
    const img1="https://th.bing.com/th/id/R.298d56c1fdbc33b835d71a9dfc6da09e?rik=iX7LKzONf95MPg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-7XP2Nc-Lttw%2fUPgHkmFDI9I%2fAAAAAAAACnw%2f4e2jzlxr_6g%2fs1600%2fGold-Coins.jpg&ehk=aFSCkXcLM%2bKrC09jlnC3sqsvZj4kBLWmDGck8AUMHU4%3d&risl=&pid=ImgRaw&r=0"
    return (
      <div className='wallpaper2'>
        <div className="wallpaper-wrapper2" 
        style={{backgroundImage:`url(${img1})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"1400px 500px",width:"1300px",height:"600px",paddingLeft:"40px",}}>
          <div className="imagDesc-user"><h5 className='imgtitle-home2-user'>Your Bank is the perfect bank to save your Money</h5></div>
  
        </div>
      </div>
    )
  }
  
  
  
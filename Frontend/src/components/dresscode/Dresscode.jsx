import './dresscode.css'
import TopBar from '../topBar/Topbar'
import Topbar1 from '../topbar1/Topbar1'
import Footer from '../footer/Footer'
import UserTopBar from '../topbar1/UserTopBar'
export default function Dresscode() {
    const img="https://impactpartner.com/wp-content/uploads/2019/10/About.jpg"
  return (
    <div className='dressCode'>
       <UserTopBar/>
        <div className="dressImg" style={{backgroundImage:`url(${img})`}}>
           <div className="title1"><p>YB DressCode Policy</p></div>
        </div>
        <div className="codeDesc">
          <p className='allowed'>Monday To Friday-Business Formals</p>
        </div>
        
        <div className="codeFemale">
          <div>
          <p className='allowed2'>Female</p>
          </div>
          <div className='femaleAllowed'>
            <p className='allow'>Allowed</p>
            
              <p className="allowpst">Business suits</p>
              <p className='allowpst'>Formal Skirts</p>
              <p className='allowpst'>Full sleeved or half sleeved shirts</p>
              <p className='allowpst'>Formal Trousers</p>
              <p className='allowpst'>Salwar Kameez</p>
              <p className='allowpst'>Saree or local Attire which is at </p>
              <p className='allowed3'>Footwear</p>
              <p className="allowpst">Formal Leather shoes,dress sandals</p>
              <p className="allowpst">socks</p>
              
             
            
          </div>
          <div className="femalenot">
            <p className='allow'>Not Allowed</p>
            <p className="allowpst">Mini Skirts,Shorts</p>
            <p className="allowpst">Hackless Tops,Backless Tops</p>
            <p className="allowpst">Bare Midriffs</p>
            <p className="allowpst">Sweatpants</p>
            <p className="allowpst">Fleece Outfits</p>
            <p className="allowpst">Stirrup Pants</p>
            <p className="allowed3">Footwear</p>
            <p className='allowpst'>Sport shoes,Sneakers</p>
            <p className='allowpst'>Floaters,Slippers</p>
            
          </div>

        </div>
          <div className='Male'>
            <div>
              <p className='allowed2'>Male</p>
            </div>
            <div className='femaleAllowed'>
              <p className='allow'>Allowed</p>
              <p className="allowpst">Business suits</p>
              <p className='allowpst'>sweaters</p>
              <p className='allowpst'>Full sleeved</p>
              <p className='allowpst'>Formal Trousers</p>
              <p className="allowed3">Footwear</p>
              <p className="allowpst">Formal Leather shoes and socks</p>
              
            </div>
            <div className="femalenot">
              <p className='allow'>Not Allowed</p>
              <p className='allowpst'>Kurtha Pyjama</p>
              <p className='allowpst'>T-Shirts  or half sleeved shirts</p>
              <p className="allowpst">Cargo Pants</p>
              <p className="allowpst">Shirts With Floral Prints</p>
              <p className="allowed3">Footwear</p>
              <p className='allowpst'>Sport shoes,Sneakers</p>
            </div>
          </div>
          
          <Footer/>
    </div>
  )
}

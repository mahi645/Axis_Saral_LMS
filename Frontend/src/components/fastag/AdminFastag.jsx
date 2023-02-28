
import AdminTopbar from '../topbar1/AdminTopbar'
import './fastag.css'

export default function AdminFastag() {
    const img1=""
  return (
    <div className='Fastag'>
        <AdminTopbar/>
      <div className="fastagImg">
        <img src="https://cyrusrecharge.com/fastag/img/Fastag-mobile-banner.jpg" alt="" className="fastag" />
        {/* <img src="https://i.ytimg.com/vi/L3ad2CLOAjI/hqdefault.jpg" alt="" className="fastag" /> */}
      </div>
      <div className="fastagInfo">
        <div className="fastag1">
            <h3 className="headingfastag">FASTag</h3>
            <p className="passageFast">FASTag from YOUR Bank is 
            a rechargeable tag that makes your road trips more enjoyable.
             With this tag affixed securely on your vehicle, you can bid 
             goodbye to long queues at toll plazas. FASTag helps you to 
             pay toll charges electronically, in an instant. You can
             bypass the hassle of physically paying fees at toll plaza.</p>
        </div>
        <div className="featuresfastag">
            <h3 className="headingfastag">FASTag Benefits</h3>
            <div className="fastagSms">
                <img src="https://th.bing.com/th/id/OIP.ClqJTaVZqQvVQRVS0Fpb3wAAAA?pid=ImgDet&rs=1" alt="" className="fastagicon" />
                <p className="iconfastagInfo">ONLINE RECHARGE</p>
            </div>
            <div className="fastagSms">
                <img src="https://icon-library.com/images/cash-on-delivery-icon/cash-on-delivery-icon-10.jpg" alt="" className="fastagicon" />
                <p className="iconfastagInfo">NO NEED TO CARRY CASH</p>
            </div>
            <div className="fastagSms">
                <img src="https://th.bing.com/th/id/OIP.-vlKn-7Z3y_2-hrSO4tKdgHaJQ?w=157&h=197&c=7&r=0&o=5&pid=1.7" alt="" className="fastagicon" />
                <p className="iconfastagInfo">SMS ALERTS FOR TRANSACTIONS</p>
            </div>
            <div className="fastagSms">
                <img src="https://th.bing.com/th/id/OIP.WghiW8jmAO8vFEIM_E4wPwHaHa?pid=ImgDet&rs=1" alt="" className="fastagicon" />
                <p className="iconfastagInfo">WEB PORTALS FOR CUSTOMERS</p>
            </div>
            <div className="fastagSms">
                <img src="https://cdn.pixabay.com/photo/2016/08/19/20/37/time-1606153_960_720.png" alt="" className="fastagicon" />
                <p className="iconfastagInfo">SAVE FUEL AND TIME</p>
            </div>
            <div className="fastagSms">
                <img src="https://cdn3.iconfinder.com/data/icons/office-vol-1/256/09-512.png" alt="" className="fastagicon" />
                <p className="iconfastagInfo">AVAIL MONTHLY PASS ONLINE</p>
            </div>
            
        </div>
      </div>
    </div>
  )
}

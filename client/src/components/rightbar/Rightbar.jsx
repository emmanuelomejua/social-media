import './rightbar.css'
import gift from '../../assets/gift.png'
import ads from '../../assets/HP-Spectre-x360-16-9-768x512.jpg'

const Rightbar = () => {
  return (
    <div className='rightbar'>
        <div className="rightbarWrap">
          <div className="birthdayCont">
          <img src={gift} alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Goodness Jane</b> and 3 <b>others</b> have birthday today</span>
          </div>
        <img src={ads} alt="" className="rightAd" />
        </div>
    </div>
  )
}

export default Rightbar

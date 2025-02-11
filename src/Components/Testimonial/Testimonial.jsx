import React, { useRef } from 'react'
import './Testimonial.css'
import nextimg from '../../assets/next-icon.png'
import backimg from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonial = () => {
  const slider=useRef();
  let tx=0;


const slideForward= ()=>{
  if(tx>-50){
    tx-=25;
  }
  slider.current.style.transform=`translate(${tx}%)`




}
const slideBackWard= ()=>{
  if(tx<0){
    tx+=25;
  }
  slider.current.style.transform=`translate(${tx}%)`
  
}






  return (
    <div className='Testimonials' id='Testimonial'>

        <img src={nextimg} alt="back" className='
        next-btn' onClick={slideForward} />
        <img src={backimg} alt="back" className='
        back-btn' onClick={slideBackWard} />
        <div className='slider'>
          <ul ref={slider}>
            <li>
              <div className='slide'>
                  <div className='user-info'>
                      <img  src={user1} />
                      <div>
                        <h3>William Jackson</h3>
                        <span>Edusity,Usa</span>
                      </div>
                     
                  </div>
                  <div>
                          Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                      </div>
              </div>
            </li>

            <li>
              <div className='slide'>
                  <div className='user-info'>
                      <img  src={user2} />
                      <div>
                        <h3>Bruce Banner</h3>
                        <span>Edusity,Usa</span>
                      </div>
                     
                  </div>
                  <div>
                  Enrolling at Edusity was one of the best choices I’ve ever made. The welcoming community, modern facilities, and dedication to academic excellence have surpassed all my expectation
                      </div>
              </div>
            </li>
            <li>
              <div className='slide'>
                  <div className='user-info'>
                      <img  src={user3} />
                      <div>
                        <h3>Tony Stark</h3>
                        <span>Edusity,Usa</span>
                      </div>
                     
                  </div>
                  <div>
                  Choosing to pursue my degree at Edusity has been a life-changing decision. The supportive faculty, innovative curriculum, and state-of-the-art facilities have provided me with an exceptional learning experience. I feel truly empowered and well-prepared for my future career.
              </div>
              </div>
            </li>
            <li>
              <div className='slide'>
                  <div className='user-info'>
                      <img  src={user4} />
                      <div>
                        <h3>Loki Hamilton</h3>
                        <span>Edusity,Usa</span>
                      </div>
                     
                  </div>
                  <div>
                  Studying at Edusity has exceeded all my expectations. The welcoming community, hands-on learning opportunities, and strong focus on academic excellence have made my journey incredibly fulfilling. I am grateful for the skills and knowledge I have gained here.
                      </div>
              </div>
            </li>
          </ul>

        </div>

    </div>
  )
}

export default Testimonial

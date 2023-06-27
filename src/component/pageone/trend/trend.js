import React, { useEffect, useState , useRef } from 'react'
import styles from './trend.module.css'
import { trending } from '../../data'
import { street } from '../../data'
import ratting from '../../../images/ratting.svg'
import invinsibleline from '../../../images/invinsibleline.svg' 
import yellowline from '../../../images/yellowline.svg'
import axios from 'axios'
import Lottie from 'lottie-web'

const options = {
  method: 'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/hotels/reviews-filter-metadata',
  params: {
    locale: 'en-gb',
    hotel_id: '1676161'
  },
  headers: {
    'X-RapidAPI-Key': '1c9c7952afmshe51822e3292d43fp1e0773jsncae69c859c83',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};

function Trend() {

  const [rapidHotels, setRapidHotels] = useState()

  const container = useRef(null)

  useEffect(() => {
    myfunc()
  }, [])


  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../images/phoneAnimation.json')
    })
  }, [])

  const myfunc = async () => {
    try {
      const response = await axios.request(options);
      const { data } = response
      setRapidHotels(data)
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  }

  if(rapidHotels){
    return (
      <>
      <div className={styles.containerss}>
        <div className={styles.containerchild}>
          <div  className={styles.listing}>
            <p className={styles.seen}>SEE WHAT IS HOT </p>
            <p className={styles.whatis}>TRENDING</p>
          </div>
          <div className={styles.general}>
            {trending.map((tra) => (
                <div className={styles.everything} key={tra.id}>
                  <img src={tra.image} alt="" className={styles.resizing} />
                  <div className={styles.bottom}>
                    <div className={styles.lefty}>
                      <div className={styles.leftyone}>{tra.hotelNames}</div>
                      <div className={styles.leftytwo}>{tra.location}</div>
                      <div className={styles.leftythree}>&#8358;{tra.price}</div>
                    </div>
                    <div className={styles.righty}> <img src={ratting} alt="" /> {tra.rating}</div>
                  </div>
                </div>
            ))}
          </div>
        </div>
  
        <div className={styles.containerchild}>
          <div  className={styles.listing}>
            <p className={styles.seen}>SEE WHAT IS HOT </p>
            <p className={styles.whatis}>TRENDING</p>
          </div>
          <div className={styles.general}>
            {trending.map((tra) => (
                <div className={styles.everything} key={tra.id}>
                  <img src={tra.image} alt="" className={styles.resizing} />
                  <div className={styles.bottom}>
                    <div className={styles.lefty}>
                      <div className={styles.leftyone}>{tra.hotelNames}</div>
                      <div className={styles.leftytwo}>{tra.location}</div>
                      <div className={styles.leftythree}>&#8358;{tra.price}</div>
                    </div>
                    <div className={styles.righty}> <img src={ratting} alt="" /> {tra.rating}</div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  
      <div className={styles.carnival}>
        <div className={styles.carnivalone}>
          <p className={styles.carnivalheading}>INSPIRE YOUR NEXT TRAVEL</p>
          <div className={styles.shorterline}></div>
        </div>
        <div className={styles.carnivaltwo}>
          <div className={styles.carnivalmiddle}>
            <p className={styles.headder}>2023 Carnival Calabar</p>
            <p className={styles.paarr}>
              Lorem ipsum dolor sit amet consectetur. Tristique nisi eget et eu pellentesque. Accumsan turpis potenti turpis ut nibh a rhoncus. Semper nisi 
              pretium neque pellentesque bibendum turpis ipsum cras. Et elit turpis sociis sed suspendisse. 
              In nisl urna pellentesque ut habitant nec. Turpis amet.
            </p>
            <div className={styles.containingtwo}>
              <div className={styles.bookearly}>BOOK EARLY</div>
              <div className={styles.learnmore}>LEARN MORE</div>
            </div>
          </div>
        </div>
        <div className={styles.carnivalthree}></div>
      </div>
  
      <div className={styles.citigars}>
        {street.map((area) =>         
          (
            <div className={styles[`${area.styling}`]} key={area.id}>
              <div className={styles.lastend}>
                <div className={styles.simpleone}>
                  <div className={styles.firstlymapped}>{area.city}</div>
                  <img src={invinsibleline} alt=""  className={styles.letsdoit}/>
                  <div className={styles.properties}><p>100+</p> <p> properties</p></div>
                </div>
                <div className={styles.simpletwo}>
                  {area.lorem}
                </div>
                <div className={styles.simplethree}><img src={yellowline} alt="" /></div>
              </div>
            </div>
        ))}
      </div>
      
      <div className={styles.containerchild}>
        <div  className={styles.listing}>
          <p className={styles.seen}>SEE WHAT IS HOT </p>
          <p className={styles.whatis}>TRENDING</p>
        </div>
        <div className={styles.general}>
          {trending.map((tra) => (
            <>
              <div className={styles.everything} key={tra.id}>
                <img src={tra.image} alt="" className={styles.resizing} />
                <div className={styles.bottom}>
                  <div className={styles.lefty}>
                    <div className={styles.leftyone}>{tra.hotelNames}</div>
                    <div className={styles.leftytwo}>{tra.location}</div>
                    <div className={styles.leftythree}>&#8358;{tra.price}</div>
                  </div>
                  <div className={styles.righty}> <img src={ratting} alt="" /> {tra.rating}</div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      </>
    )
  } else{
    return  <p>
              {/* <lottie animationData={phoneAnimation} /> */}
              <div className={styles.container} ref={container}></div>
              <p className={styles.loading}>Loading hotels...</p>
            </p>
    // return <p className={styles.loading}>Loading hotels...</p>
  }
}

export default Trend
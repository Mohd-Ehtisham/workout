import React, { useEffect } from 'react'
import Aos from 'aos';

const Membership = () => {

    useEffect(() => {
        Aos.init({
            offset: 190,
            duration: 600,
            easing: 'ease-in-sine',
          });
    }, [])
    

    const liData = [
        {
            id:1,
            list:"~600 Full-Length Workout Videos"
        },
        {
            id:2,
            list:"Customizable Calendar"
        },
        {
            id:3,
            list:"Healthy Recipes"
        },
        {
            id:4,
            list:"Health and Fitness Articles"
        },
        {
            id:5,
            list:"Positive and Supportive Online Community"
        },
        {
            id:6,
            list:"No Credit Card Needed"
        },    
    ]

    const liData2 = [
        {
            id:1,
            list:"Ads-Free Website and Videos"
        },
        {
            id:2,
            list:"Surprise Me Workout Selection Tool"
        },
        {
            id:3,
            list:"Statistics for Your Activities"
        },
        {
            id:4,
            list:"Enter and Track Custom Workouts"
        },
        {
            id:5,
            list:"FB Plus Exclusive Workouts"
        },
        {
            id:6,
            list:"FB Plus Content and Challenges"
        },    
        {
            id:7,
            list:"Video Tags"
        },
        {
            id:8,
            list:"FB Plus Routines"
        },
        {
            id:9,
            list:"Rest Day Complete"
        },
    ] 
    return (
        <div className="membership-con pb-4">
            <h2>Membership</h2>
            <hr />
            <div className="pricing">
                <div className="membercard" data-aos="fade-right">
                    <h3 className="text-center">Join for free</h3>
                    <p className="bg-color-grey">Reach your fitness goals or maintain your healthy lifestyle with professional training and support from a positive and active online community.</p>
                    <ul className="bg-color-grey">
                        {
                            liData.map((val)=>{
                                return<li>
                                    {val.list}
                                    </li>
                            })
                        }
                    </ul>
                </div>
                <div className="membercard mem" data-aos="fade-left">
                    <h3 className="text-center">WO Plus</h3>
                    <p className="bg-color-grey">WO Plus includes everything you get with a free membership and adds brand new convenience features, fitness tools, and unique content.</p>
                    <ul className="bg-color-grey">
                        {
                            liData2.map((val)=>{
                                return<li>
                                    {val.list}
                                    </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Membership

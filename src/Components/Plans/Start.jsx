import React,{useEffect} from 'react'
import Aos from 'aos';

const Start = () => {

    useEffect(() => {
        Aos.init({
            offset: 10,
            duration: 600,
            easing: 'ease-in',
          });
    }, [])

    const Card = (props) =>{
        return(
            <div className={props.className} data-aos="zoom-in">
                <h5>{props.title}</h5>
                <p className="bg-color-grey m-0">{props.desc}</p>
            </div>
        )
    }

    return (
        <div>
            <h4>Not sure where to start?</h4>
            <p className="bg-color-grey mb-5">Programs offer day-to-day guidance on an interactive calendar to keep you on track.
            </p>
            <div className="row justify-content-between ">
                <Card 
                    className="col-3 card Card1"
                    title="Workout Videos"
                    desc="Access to hundreds of free, full-length workout videos."    
                />
                <Card 
                    className="col-3 card Card2"
                    title="Workout Programs"
                    desc="Affordable and effective workout programs."    
                />
                <Card 
                    className="col-3 card Card1"
                    title="Meal Plans"
                    desc="Plans build with registered dietitians and nutritionists"    
                />
            </div>
        </div>
    )
}

export default Start

import React,{useEffect} from 'react'
import Aos from 'aos';

const Plans = () => {

    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 600,
            easing: 'ease-in-sine',
          });
    }, [])

    const Card = (props) =>{
        return(
            <div className={props.className}>
                <div data-aos="fade-left">
                    <img src={props.imgsrc} alt="img" className="img-fluid" />
                </div>
                <div className={props.classNamedesc}>
                    <h4 className="mb-4">{props.title}</h4>
                    <p className="bg-color-grey mt-5">{props.desc}</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Card
                className="PLANS PLANS1"
                classNamedesc="plans-desc my-auto card-pad1"
                imgsrc="../images/online.jpg"
                title="Work out at home for free"
                desc="We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!"
            />
            <Card
                className="PLANS PLANS2"
                classNamedesc="plans-desc my-auto card-pad2"
                imgsrc="../images/train.jpg"
                title="Get more with low-cost training programs and advanced features."
                desc="We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!"
            />
        </div>
    )
}

export default Plans

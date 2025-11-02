import CalendarHero from "./Calender";
import Hero from "./Hero";
import bgchair from '../../assets/appointment/landing-bg.png'


const Appointment = () => {
    return (
        <div>
            <div className="bg-teal-950">
                <Hero></Hero>
            </div>
            <div className="bg-white flex flex-col bg-repeat-space" style={{
                backgroundImage:
                    `url(${bgchair})`,
            }}>
                <CalendarHero></CalendarHero>
            </div>
           
        </div>
    );
};

export default Appointment;
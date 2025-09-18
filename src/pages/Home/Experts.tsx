import Heading from "@/components/sharedComponents/Heading";
import doctor1 from '../../assets/doctor1.png'
import doctor2 from '../../assets/doctor2.png'
import doctor3 from '../../assets/doctor3.png'
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Experts = () => {

     const expertDoctors = [
        {
            id: 1,
            name: "Dr. John Andersson",
            country: "Italy",
            specialty: "General Practitioner",
            hospital: "Global Health Center",
            experience_years: 13,
            avialable: "Friday, 7:00PM - 10:00PM",
            visit: 35,
            rating: 3.7,
            image: doctor1,
            email: "john.andersson@example.com",
            phone: "+17-1238277664"
        },
        {
            id: 2,
            name: "Dr. Maria Andersson",
            country: "Spain",
            specialty: "Endocrinologist",
            hospital: "International Care Clinic",
            experience_years: 23,
            avialable: "Friday, 7:00PM - 10:00PM",
            visit: 35,
            rating: 4.2,
            image: doctor2,
            email: "maria.andersson@example.com",
            phone: "+34-2895996076"
        },
        {
            id: 3,
            name: "Dr. Emily Muller",
            country: "Netherlands",
            specialty: "Psychiatrist",
            hospital: "Sunrise Medical Center",
            experience_years: 32,
            avialable: "Friday, 7:00PM - 10:00PM",
            visit: 35,
            rating: 3.8,
            image: doctor3,
            email: "emily.muller@example.com",
            phone: "+35-9018703036"
        },
    ]

    return (
        <div className=" max-w-[1600px] mx-auto text-black bg-white">
            <Heading
                title={"Our Expert Doctors"}
                subTitle={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}
            ></Heading>
            <div className="hero">
                <div className="hero-content gap-16 flex-col md:flex-row lg:flex justify-center">
                    {
                        expertDoctors.map(experts => <div className="card shadow-sm w-96 mx-auto ">
                            <figure>
                                <img
                                    src={experts.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{experts.name}</h2>
                                <p>{experts.specialty}</p>
                                <div className="rating rating-xs">
                                    <input type="radio" name="rating-5" className="mask mask-star bg-orange-400" aria-label="1 star" />
                                    <input type="radio" name="rating-5" className="mask mask-star bg-orange-400" aria-label="2 star" />
                                    <input type="radio" name="rating-5" className="mask mask-star bg-orange-400" aria-label="3 star" />
                                    <input type="radio" name="rating-5" className="mask mask-star bg-orange-400" aria-label="4 star" />
                                    <input type="radio" name="rating-5" className="mask mask-star bg-orange-400" aria-label="5 star" defaultChecked />
                                </div>
                                <div className="divider-horizontal"></div>
                                <div className="flex gap-3 items-center">
                                    <CiLocationOn></CiLocationOn>
                                    <p>{experts.country}</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <CiCalendar></CiCalendar>
                                    <p>{experts.avialable}</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <CiDollar></CiDollar>
                                    <p>{experts.visit}</p>
                                </div>
                                <div className="card-actions">
                                    <Link to='/doctorprofile'>
                                        <button className="w-full btn btn-xl bg-white border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white">View Profile</button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Experts;
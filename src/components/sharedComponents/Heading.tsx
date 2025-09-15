
const Heading = ({title, subTitle}) => {
    return (
        <div className="w-2/3 mx-auto">
            <h2 className="text-[40px] font-bold text-center py-10">{title}</h2>
            <p className="pb-10 text-center">{subTitle}</p>
        </div>
    );
};

export default Heading;
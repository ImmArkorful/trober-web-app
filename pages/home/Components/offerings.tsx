import Heading from '../../Components/Common/heading';
import IndividualOffering from '../../Components/Common/individualOffering';

const Offerings = () => {
  return (
    <div className="flex flex-col mt-24 lg:px-20">
      <div className="flex justify-center mb-2 md:mb-16 lg:mb-24">
        <Heading text="Our Offerings" />
      </div>
      <div className="flex flex-col justify-around md:flex-row">
        <IndividualOffering
          heading="Businesses"
          text="Make commuting less of a concern for your employees."
          color="#462AD3"
          route="/services"
          src="https://res.cloudinary.com/troberapp-com/image/upload/v1665779437/Web%20app%20assets/new%20assets/Trober_business_icon_shpwgj.png"
        />
        <IndividualOffering
          heading="Schools"
          text="Get a  safe bus service to transport your students with ease."
          color="#FF5000"
          route="/services/school"
          src="https://res.cloudinary.com/troberapp-com/image/upload/v1665778999/Web%20app%20assets/new%20assets/Trober_school_icon_c9wbeq.png"
        />
      </div>
      <div className="flex flex-col justify-around pt-10 md:flex-row">
        <IndividualOffering
          heading="Events"
          text="Have zero stress arranging transportation for special occasions."
          color="#020348"
          route="/services/events"
          src="https://res.cloudinary.com/troberapp-com/image/upload/v1666168554/Web%20app%20assets/new/Trober_Icons_event_new_vcfycv.svg"
        />
        <IndividualOffering
          heading="Churches"
          text="Provide your  church members with a timely and reliable transportation."
          color="#8CCE10"
          route="/services/churches"
          src="https://res.cloudinary.com/troberapp-com/image/upload/v1665779437/Web%20app%20assets/new%20assets/Trober_church_icon_a4cuuh.png"
        />
      </div>
    </div>
  );
};

export default Offerings;

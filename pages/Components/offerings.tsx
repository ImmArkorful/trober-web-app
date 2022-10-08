import Heading from './Common/heading';
import IndividualOffering from './Common/individualOffering';

const Offerings = () => {
  return (
    <div className="flex flex-col mt-24 lg:px-20">
      <div className="flex justify-center mb-10">
        <Heading text="Our Offerings" />
      </div>
      <div className="flex flex-col justify-around md:flex-row">
        <IndividualOffering
          heading="Businesses"
          text="Make commuting less of a concern for your employees."
          color="#462AD3"
          src="https://res.cloudinary.com/troberapp-com/image/upload/v1665236009/Web%20app%20assets/Web/Trober_business_icon_laptop_dykmpf.svg"
          // illustration={<BusinessesIllustration />}
        />
        <IndividualOffering
          heading="Schools"
          text="Get a  safe bus service to transport your students with ease."
          color="#FF5000"
          src="https://res.cloudinary.com/troberapp-com/image/upload/v1665236009/Web%20app%20assets/Web/Trober_school_icon_laptop_zr5gjk.svg"
          // illustration={<Schools />}
        />
      </div>
      <div className="flex flex-col justify-around pt-10 md:flex-row">
        <IndividualOffering
          heading="Events"
          text="Have zero stress arranging transportation for special occasions."
          color="#020348"
          src="https://res.cloudinary.com/troberapp-com/image/upload/v1665236011/Web%20app%20assets/Web/Trober_event_icon_laptop_tizd3d.svg"
          // illustration={<Events />}
        />
        <IndividualOffering
          heading="Churches"
          text="Provide your  church members with a timely and reliable transportation."
          color="#8CCE10"
          src="https://res.cloudinary.com/troberapp-com/image/upload/v1665236011/Web%20app%20assets/Web/Trober_church_icon_laptop_qzlhi4.svg"
          // illustration={<Churches />}
        />
      </div>
    </div>
  );
};

export default Offerings;

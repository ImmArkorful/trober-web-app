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
        />
        <IndividualOffering
          heading="Schools"
          text="Get a  safe bus service to transport your students with ease."
          color="#FF5000"
        />
      </div>
      <div className="flex flex-col justify-around pt-10 md:flex-row">
        <IndividualOffering
          heading="Events"
          text="Have zero stress arranging transportation for special occasions."
          color="#020348"
        />
        <IndividualOffering
          heading="Churches"
          text="Provide your  church members with a timely and reliable transportation."
          color="#8CCE10"
        />
      </div>
    </div>
  );
};

export default Offerings;

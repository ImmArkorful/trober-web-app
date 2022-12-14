import Arrow from '../Svgs/Arrow';

interface HeaderTextAndColouredArrowProps {
  heading: string;
  color: string;
}

const HeaderTextAndColouredArrow = ({
  heading,
  color,
}: HeaderTextAndColouredArrowProps) => {
  return (
    <div className="flex flex-row items-center ">
      <p className="mr-4 text-2xl font-medium tracking-wide md:text-4xl">
        {heading}
      </p>
      <Arrow color={color} />
    </div>
  );
};

export default HeaderTextAndColouredArrow;

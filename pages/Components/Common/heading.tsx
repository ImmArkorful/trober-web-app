interface HeadingProps {
  text: string;
  // eslint-disable-next-line react/require-default-props
  color?: string;
}
const Heading = ({ text, color = 'black' }: HeadingProps) => {
  return (
    <p
      className={`text-${color} text-center md:text-left text-xl lg:text-4xl font-semibold underline underline-offset-4 decoration-underlinecolor`}
    >
      {text}
    </p>
  );
};

export default Heading;

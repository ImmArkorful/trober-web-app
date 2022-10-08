interface HeadingProps {
  text: string;
}
const Heading = ({ text }: HeadingProps) => {
  return (
    <p className="text-4xl font-semibold underline underline-offset-4 decoration-underlinecolor">
      {text}
    </p>
  );
};

export default Heading;

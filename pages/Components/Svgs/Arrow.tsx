interface ArrowProps {
  color: string;
}

const Arrow = ({ color }: ArrowProps) => {
  return (
    <svg
      width="12"
      height="23"
      viewBox="0 0 12 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.977539 22.125L11.6025 11.5L0.977539 0.875L0.977539 22.125Z"
        fill={color}
      />
    </svg>
  );
};

export default Arrow;

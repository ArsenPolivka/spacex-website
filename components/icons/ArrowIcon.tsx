type ArrowIconProps = {
  color?: "white" | "black";
  isForSlider?: boolean;
  isLeft?: boolean;
}

const ArrowIcon = ({
  color,
  isForSlider,
  isLeft,
}: ArrowIconProps) => {
  if (isForSlider) {
    if (isLeft) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Iconly/Light/Arrow - Right 2">
            <g id="Arrow - Right 2">
              <path id="Stroke 1" d="M15.5 5L8.5 12L15.5 19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </g>
        </svg>
      )
    } else {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Iconly/Light/Arrow - Right 2">
            <g id="Arrow - Right 2">
              <path id="Stroke 1" d="M8.5 5L15.5 12L8.5 19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </g>
        </svg>
      )
    }
  }

  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Iconly/Light/Arrow - Down">
        <g id="Arrow - Down">
          <path id="Stroke 1" d="M20.4572 32.9167V7.91667" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path id="Stroke 3" d="M30.4978 22.8337L20.4578 32.917L10.4162 22.8337" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </g>
    </svg>
  )
}

export default ArrowIcon;

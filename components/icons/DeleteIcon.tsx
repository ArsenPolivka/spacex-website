type DeleteIconProps = {
  color: "white" | "black";
}

const DeleteIcon = ({ color }: DeleteIconProps) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Iconly/Light/Delete">
        <g id="Delete">
          <path id="Stroke 1" d="M19.8249 9.9682C19.8249 9.9682 19.2819 16.7032 18.9669 19.5402C18.8169 20.8952 17.9799 21.6892 16.6089 21.7142C13.9999 21.7612 11.3879 21.7642 8.77991 21.7092C7.46091 21.6822 6.63791 20.8782 6.49091 19.5472C6.17391 16.6852 5.63391 9.9682 5.63391 9.9682" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path id="Stroke 3" d="M21.2082 6.73969H4.25024" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path id="Stroke 5" d="M17.9407 6.73967C17.1557 6.73967 16.4797 6.18467 16.3257 5.41567L16.0827 4.19967C15.9327 3.63867 15.4247 3.25067 14.8457 3.25067H10.6127C10.0337 3.25067 9.5257 3.63867 9.3757 4.19967L9.1327 5.41567C8.9787 6.18467 8.3027 6.73967 7.5177 6.73967" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </g>
    </svg>
  )
}

export default DeleteIcon;

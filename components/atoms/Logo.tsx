import Image from 'next/image';
import Link from "next/link";
import styled from "styled-components";

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = () => {
  return (
    <StyledLogo href="/">
      <Image
        src='/images/logo.png'
        alt='SpaceX logo'
        width={229}
        height={42}
        priority
      />
    </StyledLogo>
  )
}

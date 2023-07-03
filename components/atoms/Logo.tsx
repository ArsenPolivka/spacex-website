import Image from 'next/image';
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src='/images/logo.png'
        alt='SpaceX logo'
        width={229}
        height={42}
        priority
      />
    </Link>
  )
}

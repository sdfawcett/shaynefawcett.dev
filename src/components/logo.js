/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import Link from 'next/link';

export default function Logo({ image }) {
  return (
    <Link
      href="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
      }}
      passHref
    >
      <Image src={image} alt="shaynefawcett.dev logo" />
    </Link>
  );
}

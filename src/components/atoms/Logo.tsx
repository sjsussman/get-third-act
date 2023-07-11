import * as thirdActLogo from '~/assets/images/third-act/logos/logo-black.svg';
import Image from 'next/image';

const Logo = () => <Image src={thirdActLogo} alt={'logo image'} className="md:w-86 w-52 " />;

export default Logo;

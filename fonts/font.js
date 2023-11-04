

import localFont from 'next/font/local';
import {Montserrat} from 'next/font/google';

export const gilroyFont = localFont({src: '../fonts/Gilroy-Light.otf'});
export const montserratFont = Montserrat({ subsets: ['latin'], display: 'swap' });

import localFont from 'next/font/local'
import {JetBrains_Mono} from "next/font/google";
import {Lato} from 'next/font/google'


export const jetBrainsMono = JetBrains_Mono({weight: ['400', '700'], subsets: ['latin']});
export const latoSerif = Lato({weight: ['400', '700'], subsets: ['latin']});
export const kurewaSerif = localFont({
    src: [
        {
            path: '../../assets/localfonts/KurewaGothicCjkTc-SemiBold.ttf',
            weight: '400',
            style: 'normal',
        }
    ],
})
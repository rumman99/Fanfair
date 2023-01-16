import { BsCode, BsEmojiSunglasses } from 'react-icons/bs';
import { GiCakeSlice, GiGalaxy, GiLipstick, GiLoveSong } from 'react-icons/gi';
import { FaPaw, FaMedal, FaGamepad } from 'react-icons/fa';
import { BiMusic } from 'react-icons/bi';

export const topics = [
  {
    name: 'tech',
    icon: <BsCode />,
  },
  {
    name: 'gaming',
    icon: <FaGamepad />,
  }, 
  {
    name: 'sports',
    icon: <FaMedal />,
  }, 
  {
    name: 'songs',
    icon: <GiLoveSong />,
  },
  {
    name: 'music',
    icon: <BiMusic />,
  },

  {
    name: 'food',
    icon: <GiCakeSlice />,
  },
  {
    name: 'dance',
    icon: <GiGalaxy />,
  },
  {
    name: 'beauty',
    icon: <GiLipstick />,
  },


];

export const footerList1 = ['About', 'Newsroom', 'Store', 'Contact', 'Carrers', 'Verve Software', 'Creator Directory']
export const footerList2 = [ 'Adda for Good','Advertise','Developers','Transparency','Adda Rewards' ]
export const footerList3 = [ 'Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community Guidelines' ]
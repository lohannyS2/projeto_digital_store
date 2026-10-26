/*Import das Logos e dos Icons*/
import Logo_header from '../assets/logo-header.svg'
import Logo_footer from '../assets/logo-footer.svg'
import Logo_facebook from '../assets/facebook.svg'
import Logo_instagram from '../assets/instagram.svg'
import Logo_twitter from '../assets/twitter.svg'


import Icon_arrow_left from '../assets/arrow-left.svg'
import Icon_arrow_right from '../assets/arrow-right.svg'
import Icon_mini_cart from '../assets/mini-cart.svg'
import Icon_star from '../assets/star-icon.svg'



/*Conponentes logos */
const LogoHeader = () => {
    return (
        <img
            src={Logo_header}
            alt="Logo_digitalStore"
            style={{ width: '253px', height: '44px' }}
        />
    )
}

const LogoFooter = () => {
    return (
        <img
            src={Logo_footer}
            alt="Logo_digitalStore"
            style={{ width: '253px', height: '44px' }} 
        />
    )
}

const LogoFacebook = () => {
    return (
        <img 
            src={Logo_facebook}
            alt="Logo do Facebook" />
    )
}

const LogoInstagram = () => {
    return (
        <img 
            src={Logo_instagram}
            alt="Logo do instagram" />
    )
}

const LogoTwitter = () => {
    return (
        <img 
            src={Logo_twitter}
            alt="Logo do Twitter" />
    )
}


/*Componentes icons*/
const ArrowLeft = () => {
    return (
        <img 
            src={Icon_arrow_left}
            alt="Arrow_Left" />
    )
}

const ArrowRight = () => {
    return (
        <img 
            src={Icon_arrow_right}
            alt="Arrow_right" />
    )
}

const MiniCart = () => {
    return (
        <img 
            src={Icon_mini_cart}
            alt="Mini carinho" />
    )
}

const StarIcon = () => {
    return (
        <img 
            src={Icon_star}
            alt="icone de estrela" />
    )
}



export { LogoHeader, LogoFooter, LogoFacebook, LogoInstagram, LogoTwitter, ArrowLeft, ArrowRight, MiniCart, StarIcon }
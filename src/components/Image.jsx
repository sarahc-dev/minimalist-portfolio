import HeroMobile from "../images/homepage/mobile/image-homepage-hero.jpg";
import HeroMobile2x from "../images/homepage/mobile/image-homepage-hero@2x.jpg";
import HeroTablet from "../images/homepage/tablet/image-homepage-hero.jpg";
import HeroTablet2x from "../images/homepage/tablet/image-homepage-hero@2x.jpg";
import HeroDesktop from "../images/homepage/desktop/image-homepage-hero.jpg";
import HeroDesktop2x from "../images/homepage/desktop/image-homepage-hero@2x.jpg";
import ProfileMobile from "../images/homepage/mobile/image-homepage-profile.jpg";
import ProfileMobile2x from "../images/homepage/mobile/image-homepage-profile@2x.jpg";
import ProfileTablet from "../images/homepage/tablet/image-homepage-profile.jpg";
import ProfileTablet2x from "../images/homepage/tablet/image-homepage-profile@2x.jpg";
import ProfileDesktop from "../images/homepage/desktop/image-homepage-profile.jpg";
import ProfileDesktop2x from "../images/homepage/desktop/image-homepage-profile@2x.jpg";

export const HeroImg = () => {
  return (
    <picture>
      <source media="(min-width: 1200px)" srcSet={`${HeroDesktop} 1110w, ${HeroDesktop2x} 2220w`} />
      <source media="(min-width: 700px)" srcSet={`${HeroTablet} 688w, ${HeroTablet2x} 1376w`} />
      <source srcSet={`${HeroMobile} 311w, ${HeroMobile2x} 622w`} />
      <img src={HeroMobile} alt="Computer screen showing pie charts on a desk" />
    </picture>
  );
};

export const ProfileImg = () => {
  return (
    <picture>
      <source media="(min-width: 1200px)" srcSet={`${ProfileDesktop} 540w, ${ProfileDesktop2x} 1080w`} />
      <source media="(min-width: 700px)" srcSet={`${ProfileTablet} 281w, ${ProfileTablet2x} 562w`} />
      <source srcSet={`${ProfileMobile} 311w, ${ProfileMobile2x} 622w`} />
      <img src={ProfileMobile} alt="Side profile of Alex" />
    </picture>
  );
};

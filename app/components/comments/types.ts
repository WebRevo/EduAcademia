export interface NavItemProps {
    text: string;
    isBold?: boolean;
    isSpecial?: boolean;
  }
  
  export interface IconProps {
    src: string;
    alt: string;
  }
  
  export interface CTAButtonProps {
    text: string;
    iconSrc: string;
    variant: 'outline' | 'solid';
  }
  
  export interface UserStatProps {
    count: string;
    label: string;
    imageSrc: string;
  }
  
  export interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
  }
  
  export interface AddOnProps {
    text: string;
    backgroundColor: string;
  }
  
  export interface ReviewCardProps {
    avatarSrc: string;
    name: string;
    grade: string;
    ratingImageSrc: string;
    description: string;
    tags?: string[];
  }
  
  export interface ReviewSetProps {
    reviews: ReviewCardProps[];
  }
  
  export interface SocialIconProps {
    src: string;
    alt: string;
  }
  
  export interface FooterLinkProps {
    text: string;
  }
  
  export interface FooterSectionProps {
    title: string;
    links: string[];
  }
  export interface AddOnButtonProps {
    text: string;
    backgroundColor: string;
  }
  
  export interface SearchButtonProps {
    icon: string;
    altText: string;
  }
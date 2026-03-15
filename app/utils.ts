interface ServiceInfo {
    label: string,
    borderClass: string,
    logoSrc: string,
    logoAlt: string,
}

export function formatNumbers(number: number) {
  if (number < 1_000) {
    return number.toString();
  } else if (number < 1_000_000) {
    return parseFloat((number / 1000).toFixed(1)) + 'k';
  } else {
    return parseFloat((number / 1_000_000).toFixed(1)) + 'M';
  }
}

export function getServiceInfo(service: string): ServiceInfo|undefined {
    switch (service) {
    case 'facebook':
      return {
        label: 'Page Views',
        borderClass: 'border-facebook',
        logoSrc: '/brand-icons/icon-facebook.svg',
        logoAlt: 'Facebook',
      };
    case 'twitter':
      return {
        label: 'Retweents',
        borderClass: 'border-twitter',
        logoSrc: '/brand-icons/icon-twitter.svg',
        logoAlt: 'Twitter',
      };
    case 'instagram':
      return {
        label: 'Profile Views',
        borderClass: 'border-instagram',
        logoSrc: '/brand-icons/icon-instagram.svg',
        logoAlt: 'Instagram',
      };
    case 'youtube':
      return {
        label: 'Total Views',
        borderClass: 'border-youtube',
        logoSrc: '/brand-icons/icon-youtube.svg',
        logoAlt: 'Youtube',
      };
  }
}

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

export function getServiceLogo(service: string) {
  switch (service) {
    case 'facebook':
      return '/brand-icons/icon-facebook.svg';
    case 'twitter':
      return '/brand-icons/icon-twitter.svg';
    case 'instagram':
      return '/brand-icons/icon-instagram.svg';
    case 'youtube':
      return '/brand-icons/icon-youtube.svg';
    default:
      return '';
  }
}

export function getBorderColor(service: string) {
  switch (service) {
    case 'facebook':
      return 'border-facebook';
    case 'twitter':
      return 'border-twitter';
    case 'instagram':
      return 'border-instagram';
    case 'youtube':
      return 'border-youtube';
    default:
      return '';
  }
}

export function isNegative(change: number) {
  return change < 0;
}
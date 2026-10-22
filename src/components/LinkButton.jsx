import Icon from './Icon.jsx';

export default function LinkButton({ label, href, icon }) {
  const external = href.startsWith('http');
  return (
    <a
      className="btn"
      href={href}
      {...(external && { target: '_blank', rel: 'noopener' })}
    >
      <Icon name={icon} />
      {label}
    </a>
  );
}

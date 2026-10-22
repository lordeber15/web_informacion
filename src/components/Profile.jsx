import LinkButton from './LinkButton.jsx';

export default function Profile({ profile, links }) {
  return (
    <main className="container">
      <img className="avatar" src={profile.logo} alt={profile.logoAlt} />

      <h1>{profile.name}</h1>
      <p className="bio">{profile.role}</p>

      <nav className="links">
        {links.map((link) => (
          <LinkButton key={link.href} {...link} />
        ))}
      </nav>

      <footer>{profile.footer}</footer>
    </main>
  );
}

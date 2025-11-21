import { useForm } from "../../../FormProvider.tsx"; // adjust the path if needed

const Footer = () => {
  const { setShowForm } = useForm();

  // Configurable footer content
  const footerLinks = [
    { label: "Site Design", href: "https://portfoleoz.vercel.app/" },
    { label: "Contact", href: "#", onClick: () => setShowForm(true) },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ];

  const copyright = "© 2025 InkyRepertoire.";

  return (
    <footer className="w-full bg-[#CDB4DB] py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-3 body-text px-4">
        {/* Left side - copyright */}
        <p className="order-2 md:order-1 text-center md:text-left">
          {copyright}
        </p>

        {/* Right side - dynamic links */}
        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 order-1 md:order-2"
        >
          {footerLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => {
                if (link.onClick) {
                  e.preventDefault(); // Prevent page reload for Contact
                  link.onClick();
                }
              }}
              className="hover:underline transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const SocialIcons = () => {
  const icons = [FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube];
  return (
    <div className="flex items-center gap-3">
      {icons.map((Icon, i) => (
        <a
          key={i}
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-md border border-gold/60 text-gold hover:bg-gold hover:text-white transition"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
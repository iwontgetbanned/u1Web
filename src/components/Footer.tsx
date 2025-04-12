import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-dark">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Company Info */}
          <div className="space-y-4">
            <Logo variant="simple" />
            <p className="text-accent-silver text-sm leading-relaxed">
              Professional security camera installation and advanced AI-powered cloud video surveillance solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-accent-silver hover:text-primary transition-colors" aria-label="LinkedIn">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-accent-silver hover:text-primary transition-colors" aria-label="Twitter">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-accent-silver hover:text-primary transition-colors" aria-label="Facebook">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-accent-silver hover:text-primary transition-colors" aria-label="YouTube">
                <FiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-accent-silver hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-accent-silver hover:text-primary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-accent-silver hover:text-primary transition-colors text-sm">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-accent-silver hover:text-primary transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-accent-silver hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-accent-silver text-sm">
                  3399 Fashion Square Blvd<br />
                  Saginaw, MI 48603
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-primary" />
                <a href="tel:+19899062334" className="text-accent-silver hover:text-primary transition-colors text-sm">
                  (989) 906-2334
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-primary" />
                <a href="mailto:info@artificialsurveillance.com" className="text-accent-silver hover:text-primary transition-colors text-sm">
                  info@artificialsurveillance.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-accent-silver text-sm mb-4">
              Subscribe to our newsletter for the latest security technology updates.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-background border border-accent-silver/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white text-sm"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-accent-silver/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-accent-silver text-xs mb-4 md:mb-0">
            &copy; {currentYear} Artificial Surveillance. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-accent-silver hover:text-primary transition-colors text-xs">
              Privacy Policy
            </a>
            <a href="#" className="text-accent-silver hover:text-primary transition-colors text-xs">
              Terms of Service
            </a>
            <a href="#" className="text-accent-silver hover:text-primary transition-colors text-xs">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

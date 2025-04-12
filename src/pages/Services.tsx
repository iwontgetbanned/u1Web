import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCamera, FiCloud, FiAlertCircle, FiMonitor, FiSettings, FiUser, FiPlusCircle, FiArrowRight } from 'react-icons/fi';
import caminstall from '../assets/icons/caminstall.jpg';


const Services = () => {
  return (
    <div className="pt-28">
      {/* Page Header */}
      <section className="bg-background-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" style={{ mixBlendMode: 'overlay' }}></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.2,
              mixBlendMode: 'luminosity'
            }}
          ></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-lg mb-6 text-white">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              We deliver comprehensive surveillance solutions combining professional camera installation with our proprietary AI-powered video analytics platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-4">
                Professional <span className="gradient-text">Camera Installation</span>
              </h2>
              <p className="text-accent-silver mb-6">
                Our expert technicians install high-quality security cameras tailored to your specific needs. We handle everything from system design to final setup and configuration.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Comprehensive site assessment and security audit",
                  "Strategic camera placement for optimal coverage",
                  "Professional wiring and mounting of equipment",
                  "Integration with existing network infrastructure",
                  "Testing and quality assurance",
                  "Staff training on system operation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2 text-accent-silver">
                    <span className="text-primary mt-1.5">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                <span>Schedule an Installation</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-background-dark rounded-lg overflow-hidden shadow-xl p-2 border border-primary/10">
                <img
                  src={caminstall}
                  alt="Professional Camera Installation"
                  className="w-full h-auto rounded object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl -z-10"></div>
              <div className="absolute -top-8 -left-8 w-36 h-36 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-xl -z-10"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="bg-background-dark rounded-lg overflow-hidden shadow-xl p-2 border border-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                  alt="Cloud Video Analytics Platform"
                  className="w-full h-auto rounded object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl -z-10"></div>
              <div className="absolute -top-8 -right-8 w-36 h-36 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="heading-md mb-4">
                AI-Powered <span className="gradient-text">Cloud Platform</span>
              </h2>
              <p className="text-accent-silver mb-6">
                Our proprietary cloud-based video analytics platform transforms standard security cameras into intelligent monitoring systems with advanced AI capabilities.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time object detection and classification",
                  "Facial recognition and license plate reading",
                  "Behavior analysis and anomaly detection",
                  "Secure cloud storage with customizable retention",
                  "Instant alerts and notifications",
                  "Searchable video archives with AI filtering"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2 text-accent-silver">
                    <span className="text-primary mt-1.5">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/pricing" className="btn-primary inline-flex items-center">
                <span>View Platform Plans</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">
              Complete <span className="gradient-text">Surveillance Solutions</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              From physical camera installation to advanced AI analytics, we provide end-to-end surveillance services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiCamera className="w-6 h-6" />,
                title: "Camera System Design",
                description: "Custom security camera system design based on your property layout, security requirements, and budget constraints."
              },
              {
                icon: <FiCloud className="w-6 h-6" />,
                title: "Cloud Video Storage",
                description: "Secure, encrypted cloud storage for your surveillance footage with customizable retention policies and instant access."
              },
              {
                icon: <FiAlertCircle className="w-6 h-6" />,
                title: "Custom Alert Rules",
                description: "Create personalized alert rules for specific events, objects, or behaviors with real-time notifications."
              },
              {
                icon: <FiMonitor className="w-6 h-6" />,
                title: "Remote Monitoring",
                description: "Access your camera feeds and AI analytics from anywhere, anytime using our intuitive web dashboard and mobile app."
              },
              {
                icon: <FiSettings className="w-6 h-6" />,
                title: "System Maintenance",
                description: "Ongoing system health monitoring, automatic software updates, and technical support to ensure optimal performance."
              },
              {
                icon: <FiUser className="w-6 h-6" />,
                title: "Training & Support",
                description: "Comprehensive user training and 24/7 customer support to help you maximize the value of your surveillance system."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-accent-silver mb-6">{service.description}</p>
                <Link to="/contact" className="text-primary hover:text-primary-light flex items-center text-sm font-medium">
                  <span>Learn more</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom AI Solutions */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path fill="url(#gradientService)" d="M0,0 C25,0 50,100 75,100 L0,100 Z" />
            <defs>
              <linearGradient id="gradientService" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0078FF" />
                <stop offset="100%" stopColor="#00D1FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-4">
                Custom <span className="gradient-text">AI Solutions</span>
              </h2>
              <p className="text-accent-silver mb-6">
                Beyond our standard offerings, we develop custom AI surveillance solutions tailored to your unique security challenges. Our AI engineers can create specialized detection models for your specific needs.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Popular Custom Solutions:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Product tampering detection",
                    "Equipment operation monitoring",
                    "Construction safety compliance",
                    "Retail customer analytics",
                    "Manufacturing quality control",
                    "Healthcare safety monitoring",
                    "Agriculture equipment tracking",
                    "Warehouse inventory monitoring"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <FiPlusCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-accent-silver text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-primary inline-flex items-center">
                <span>Discuss Custom Solutions</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-background-dark rounded-lg overflow-hidden shadow-xl p-3 border border-primary/10">
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-lg font-semibold text-white">Custom AI Tool Creation</h4>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Active</span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-accent-silver text-sm mb-2">Define Object Type</label>
                      <div className="flex space-x-2">
                        <div className="bg-primary/10 border border-primary/30 rounded-md px-3 py-1 text-sm text-primary">Forklift</div>
                        <div className="bg-primary/10 border border-primary/30 rounded-md px-3 py-1 text-sm text-primary">Safety Vest</div>
                        <div className="bg-background-dark border border-primary/10 rounded-md px-3 py-1 text-sm text-accent-silver">+ Add</div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-accent-silver text-sm mb-2">Define Zone</label>
                      <div className="bg-background-dark rounded-md overflow-hidden relative">
                        <img
                          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                          alt="Warehouse"
                          className="w-full h-40 object-cover opacity-70"
                        />
                        <div className="absolute inset-0">
                          <div className="border-2 border-dashed border-green-400 absolute top-10 left-10 w-32 h-24 rounded-md"></div>
                          <div className="border-2 border-dashed border-red-400 absolute bottom-10 right-10 w-32 h-16 rounded-md"></div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-accent-silver text-sm mb-2">Define Rule</label>
                      <div className="bg-background-dark border border-primary/10 rounded-md p-3 text-sm">
                        <div className="flex items-center text-accent-silver">
                          <span className="mr-2">IF</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded mr-2">Forklift</span>
                          <span className="mr-2">enters</span>
                          <span className="px-2 py-1 bg-red-400/20 text-red-400 rounded mr-2">Red Zone</span>
                          <span className="mr-2">without</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded">Safety Vest</span>
                        </div>
                        <div className="flex items-center mt-2 text-accent-silver">
                          <span className="mr-2">THEN</span>
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded mr-2">Send Alert</span>
                          <span className="mr-2">to</span>
                          <span className="px-2 py-1 bg-background-dark text-accent-silver rounded">Safety Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background-dark">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="heading-md mb-4 text-white">Ready to enhance your security?</h2>
                <p className="text-accent-silver text-lg">
                  Contact us for a free consultation and custom solution recommendation.
                </p>
              </div>
              <Link to="/contact" className="btn-primary whitespace-nowrap">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

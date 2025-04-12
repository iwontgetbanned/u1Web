import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShield, FiCloud, FiCpu, FiVideo, FiMonitor, FiServer, FiArrowRight } from 'react-icons/fi';
import obj from '../assets/icons/object.png'; // Update the path and extension if the file exists with a different name or extension
import ppe from '../assets/icons/ppe.png'; // Removed or commented out as the module is missing
import crowd from '../assets/icons/crowd.png'; 
import aiFootage from '../assets/videos/aivideo.mp4';



const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-background z-0">
          <div
            className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40 z-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.4,
              mixBlendMode: 'overlay'
            }}
          ></div>
        </div>

        <div className="container-custom relative z-20 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="heading-lg mb-6">
                  <span className="block">Next-Generation</span>
                  <span className="gradient-text">AI-Powered Surveillance</span>
                </h1>
                <p className="text-accent-silver text-lg leading-relaxed mb-8">
                  Professional camera installation paired with our exclusive cloud-based AI video analytics platform for unmatched security intelligence.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/services" className="btn-primary">
                    Explore Services
                  </Link>
                  <Link to="/contact" className="btn-secondary">
                    Get a Free Assessment
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                <div className="flex flex-col items-center text-center p-3 bg-background-dark/50 backdrop-blur rounded-lg">
                  <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-6.png" alt="Facial Recognition" className="w-10 h-10 mb-2" />
                  <span className="text-xs text-accent-silver">Facial Recognition</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-background-dark/50 backdrop-blur rounded-lg">
                  <img src="https://img.icons8.com/fluency/48/000000/car.png" alt="License Plate Scanning" className="w-10 h-10 mb-2" />
                  <span className="text-xs text-accent-silver">License Plate Scanning</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-background-dark/50 backdrop-blur rounded-lg">
                  <img src="https://img.icons8.com/color/48/000000/walking.png" alt="People Detection" className="w-10 h-10 mb-2" />
                  <span className="text-xs text-accent-silver">People Detection</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-background-dark/50 backdrop-blur rounded-lg">
                  <img src="https://img.icons8.com/color/48/000000/safety-hat.png" alt="PPE Detection" className="w-10 h-10 mb-2" />
                  <span className="text-xs text-accent-silver">PPE Detection</span>
                </div>
                </div>
            </motion.div>

            <div className="relative hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-30"
              >
                <div className="rounded-lg overflow-hidden shadow-xl bg-background-dark p-2 border border-primary/20">
                  <div className="relative aspect-[16/9]">
                    <video
                      src={aiFootage}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-md"
                    />
                    {/* Removed: overlays and LIVE badge */}
                    <div className="absolute inset-0 p-4">
                      {/* You can optionally leave this part blank or add subtle info */}
                    </div>
                  </div>
                  <div className="p-3 flex justify-between items-center border-t border-primary/10 mt-2">
                    <div className="flex space-x-3">
                      <button className="text-primary hover:text-primary-light">
                        <FiVideo className="w-5 h-5" />
                      </button>
                      <button className="text-primary hover:text-primary-light">
                        <FiMonitor className="w-5 h-5" />
                      </button>
                      <button className="text-primary hover:text-primary-light">
                        <FiCpu className="w-5 h-5" />
                      </button>
                    </div>
                    <div>
                      <span className="text-xs text-accent-silver">AI Analytics Active</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%] -z-10"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">
              <span className="gradient-text">Advanced Features</span> for Modern Security
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Our proprietary AI surveillance platform combines cutting-edge computer vision with cloud technology for next-level security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-background rounded-xl border border-primary/10 hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <FiCpu className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Advanced AI Detection</h3>
              <p className="text-accent-silver">
                Real-time object detection with precise classification for people, vehicles, faces, license plates, and more.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-background rounded-xl border border-primary/10 hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <FiCloud className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Cloud-Based Architecture</h3>
              <p className="text-accent-silver">
                No local server required. Access your video feed and analytics from anywhere with secure cloud storage.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-background rounded-xl border border-primary/10 hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <FiShield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Enterprise-Grade Security</h3>
              <p className="text-accent-silver">
                End-to-end encryption with secure tunneling technology. No public IP addresses required.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-background rounded-xl border border-primary/10 hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <FiServer className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Flexible Compatibility</h3>
              <p className="text-accent-silver">
                Works with any standard IP camera using ONVIF or RTSP protocols. Easy integration with existing systems.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-background rounded-xl border border-primary/10 hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <FiVideo className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Smart Video Search</h3>
              <p className="text-accent-silver">
                Find specific events in seconds with our AI-powered video search. Filter by object type, time, or custom parameters.
              </p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 bg-background rounded-xl border border-primary/10 hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <FiMonitor className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Custom Alert Rules</h3>
              <p className="text-accent-silver">
                Set up customized alerts for specific events. Receive real-time notifications via email, SMS, or push notifications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Detection Capabilities */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path fill="url(#gradient)" d="M0,50 Q25,25 50,50 T100,50 T150,50 T200,50 V100 H0 Z" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0078FF" />
                <stop offset="100%" stopColor="#00D1FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">
              AI Detection <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Our intelligent system can identify and track multiple objects and behaviors simultaneously.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: "https://img.icons8.com/color/96/000000/circled-user-male-skin-type-6.png",
                title: "Facial Recognition",
                desc: "Identify and verify individuals with high accuracy facial recognition technology."
              },
              {
                icon: "https://img.icons8.com/fluency/96/000000/car.png",
                title: "License Plate Recognition",
                desc: "Automatically read and log vehicle license plates in any lighting condition."
              },
              {
                icon: "https://img.icons8.com/color/96/000000/walking.png",
                title: "People Detection",
                desc: "Track individuals and count occupancy in designated areas."
              },
              {
                icon: "https://img.icons8.com/fluency/96/fork-lift.png",
                title: "Vehicle Detection",
                desc: "Identify and classify different types of vehicles on your property."
              },
              {
                icon: "https://img.icons8.com/color/96/stopwatch.png",
                title: "Loitering Detection",
                desc: "Alert when individuals remain in an area beyond a specific time threshold."
              },
              {
                icon: obj,
                title: "Object Classification",
                desc: "Distinguish between different types of objects with precise labeling."
              },
              {
                icon: ppe,
                title: "PPE Detection",
                desc: "Ensure safety compliance by detecting hard hats, vests, and other PPE."
              },
              {
                icon: crowd,
                title: "Crowd Monitoring",
                desc: "Monitor crowd density and get alerts when occupancy exceeds thresholds."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-dark/50 backdrop-blur-sm p-6 rounded-xl border border-primary/5 hover:border-primary/20 transition-all"
              >
                <div className="flex items-center mb-4">
                  <img src={item.icon} alt={item.title} className="w-10 h-10 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-accent-silver text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-background-dark relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="container-custom relative z-10">
          <div className="bg-gradient-to-r from-background to-background-dark p-8 md:p-12 rounded-2xl border border-primary/10 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="md:w-3/4">
                <h2 className="heading-md mb-4">Ready to upgrade your surveillance?</h2>
                <p className="text-accent-silver text-lg">
                  Get a custom quote for professional installation and our cloud AI platform.
                </p>
              </div>
              <div className="md:w-1/4 flex justify-center md:justify-end">
                <Link to="/contact" className="btn-primary flex items-center">
                  <span>Get Started</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

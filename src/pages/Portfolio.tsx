import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiEye, FiArrowRight, FiPlay, FiGrid, FiList } from 'react-icons/fi';

const Portfolio = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter categories
  const filterCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'retail', name: 'Retail' },
    { id: 'educational', name: 'Educational' },
    { id: 'residential', name: 'Residential' }
  ];

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Manufacturing Facility Safety Monitoring',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Comprehensive safety monitoring system for a large manufacturing facility, featuring PPE detection, restricted zone alerts, and equipment operation monitoring.',
      features: ['32 IP Cameras', 'PPE Detection', 'Restricted Zone Alerts', 'Equipment Safety Monitoring', 'Real-time Alerts'],
      client: 'ABX Manufacturing Inc.',
      location: 'Detroit, MI'
    },
    {
      id: 2,
      title: 'Urban Retail Complex Security',
      category: 'retail',
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Multi-floor retail complex with integrated AI surveillance for customer analytics, theft prevention, and license plate recognition in parking areas.',
      features: ['60+ Camera System', 'Facial Recognition', 'License Plate Recognition', 'Customer Analytics', 'Integration with Access Control'],
      client: 'Elevate Shopping Centers',
      location: 'Miami, FL'
    },
    {
      id: 3,
      title: 'Corporate Headquarters Security Upgrade',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1577619700633-7e957a22e2ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Complete security overhaul for a 12-story corporate headquarters, featuring our cloud platform for employee verification and visitor management.',
      features: ['120 Camera System', 'Employee Recognition', 'Visitor Tracking', 'Access Control Integration', 'Secure Cloud Storage'],
      client: 'Global Finance Group',
      location: 'New York, NY'
    },
    {
      id: 4,
      title: 'University Campus Security Network',
      category: 'educational',
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Campus-wide security system with emergency alert capabilities, crowd monitoring for events, and AI-powered anomaly detection for increased student safety.',
      features: ['200+ Camera Network', 'Emergency Alert System', 'Crowd Size Monitoring', 'Behavior Analysis', 'Mobile Security Alerts'],
      client: 'State University',
      location: 'Austin, TX'
    },
    {
      id: 5,
      title: 'Luxury Residential Tower',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80',
      description: 'High-end residential tower with AI-powered access control, license plate recognition for garage access, and tenant facial recognition throughout common areas.',
      features: ['85 Camera System', 'Facial Recognition', 'License Plate Access', 'Package Delivery Monitoring', 'Resident Mobile App'],
      client: 'Skyline Residences',
      location: 'San Francisco, CA'
    },
    {
      id: 6,
      title: 'Warehouse Distribution Center',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Extensive surveillance system for a 500,000 sq ft distribution center with AI-powered inventory tracking and forklift safety monitoring.',
      features: ['110 Camera System', 'Vehicle Detection', 'PPE Compliance', 'Inventory Verification', 'Operations Analytics'],
      client: 'Global Logistics Co.',
      location: 'Nashville, TN'
    },
    {
      id: 7,
      title: 'City Center Shopping Mall',
      category: 'retail',
      image: 'https://images.unsplash.com/photo-1580440282860-8555b1ae102c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2079&q=80',
      description: 'Multi-level shopping mall surveillance with foot traffic analysis, targeted marketing integration, and coordinated security response capabilities.',
      features: ['150+ Camera System', 'Occupancy Monitoring', 'Retail Analytics', 'Heat Maps', 'Emergency Response System'],
      client: 'MetroCore Properties',
      location: 'Chicago, IL'
    },
    {
      id: 8,
      title: 'Luxury Private Estate',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Comprehensive security for a 15-acre private estate with perimeter detection, license plate recognition, and integrated home automation controls.',
      features: ['42 Camera System', 'Perimeter Detection', 'License Plate Recognition', 'Smart Home Integration', 'Mobile Access'],
      client: 'Private Client',
      location: 'Beverly Hills, CA'
    }
  ];

  // Filter projects based on current filter
  const filteredProjects = currentFilter === 'all'
    ? projects
    : projects.filter(project => project.category === currentFilter);

  return (
    <div className="pt-28">
      {/* Page Header */}
      <section className="bg-background-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" style={{ mixBlendMode: 'overlay' }}></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1551651639-927b595f815c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              Explore our portfolio of successful AI surveillance implementations across various industries and environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Projects */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
              {filterCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setCurrentFilter(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    currentFilter === category.id
                      ? 'bg-primary text-white'
                      : 'bg-background-dark text-accent-silver hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'grid'
                    ? 'bg-primary text-white'
                    : 'bg-background-dark text-accent-silver hover:bg-primary/10 hover:text-primary'
                }`}
                aria-label="Grid view"
              >
                <FiGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'list'
                    ? 'bg-primary text-white'
                    : 'bg-background-dark text-accent-silver hover:bg-primary/10 hover:text-primary'
                }`}
                aria-label="List view"
              >
                <FiList className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background-dark rounded-xl overflow-hidden group"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <div className="inline-block bg-primary/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm mb-3">
                        {filterCategories.find(cat => cat.id === project.category)?.name}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-accent text-sm line-clamp-2">{project.description}</p>
                    </div>
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary/90 text-white text-sm p-2 rounded-full backdrop-blur-sm">
                        <FiEye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-background text-accent-silver px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="text-xs bg-background text-accent-silver px-3 py-1 rounded-full">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-accent-silver">Client: <span className="text-white">{project.client}</span></p>
                        <p className="text-xs text-accent-silver">Location: <span className="text-white">{project.location}</span></p>
                      </div>
                      <button className="text-primary hover:text-primary-light transition-colors">
                        <FiPlay className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Projects List */}
          {viewMode === 'list' && (
            <div className="space-y-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background-dark rounded-xl overflow-hidden group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-1/3 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-background-dark/70 to-transparent md:bg-gradient-to-t opacity-60"></div>
                      <div className="absolute top-4 left-4">
                        <div className="inline-block bg-primary/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                          {filterCategories.find(cat => cat.id === project.category)?.name}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-accent-silver text-sm mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-background text-accent-silver px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-accent-silver">Client: <span className="text-white">{project.client}</span></p>
                          <p className="text-xs text-accent-silver">Location: <span className="text-white">{project.location}</span></p>
                        </div>
                        <button className="text-primary hover:text-primary-light transition-colors flex items-center space-x-1">
                          <span className="text-sm">View Details</span>
                          <FiArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" style={{ mixBlendMode: 'overlay' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our AI surveillance solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The AI analytics capabilities have transformed our security operations. We've seen a 40% reduction in security incidents since implementation.",
                author: "Michael Chen",
                position: "Security Director",
                company: "Global Finance Group"
              },
              {
                quote: "Not only did they deliver a top-tier surveillance system, but the ongoing support has been exceptional. Their team responds quickly to any questions we have.",
                author: "Sarah Johnson",
                position: "Operations Manager",
                company: "Elevate Shopping Centers"
              },
              {
                quote: "The custom AI detection models they created for our manufacturing floor have significantly improved worker safety and compliance.",
                author: "Robert Martinez",
                position: "Safety Coordinator",
                company: "ABX Manufacturing Inc."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 rounded-xl border border-primary/10"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6 text-primary">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.13456 9.09C9.77456 8.91 10.1546 8.31 10.1546 7.64C10.1546 6.44 9.31456 5.59 8.10456 5.59C7.00456 5.59 6.10456 6.50 6.10456 7.59C6.10456 10.08 8.32456 12.13 10.8146 12.13C13.0146 12.13 14.7946 10.35 14.7946 8.15C14.7946 5.38 12.5446 3.13 9.76456 3.13C6.38456 3.13 3.64456 5.87 3.64456 9.25C3.64456 13.35 7.05456 16.75 11.1446 16.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.3946 16.75C19.4946 16.75 22.9046 13.34 22.9046 9.25C22.9046 5.88 20.1646 3.13 16.7846 3.13C13.9946 3.13 11.7446 5.38 11.7446 8.15C11.7446 10.35 13.5346 12.13 15.7346 12.13C18.2246 12.13 20.4346 10.08 20.4346 7.59C20.4346 6.5 19.5346 5.59 18.4346 5.59C17.2346 5.59 16.3946 6.44 16.3946 7.64C16.3946 8.31 16.7646 8.91 17.4146 9.09" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-accent-silver mb-6 flex-grow">{testimonial.quote}</p>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.author}</h4>
                    <p className="text-accent-silver text-sm">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="heading-md mb-4 text-white">Ready for a custom solution?</h2>
                <p className="text-accent-silver text-lg">
                  Let us design an AI surveillance system tailored to your specific needs.
                </p>
              </div>
              <Link to="/contact" className="btn-primary whitespace-nowrap flex items-center">
                <span>Get Started</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

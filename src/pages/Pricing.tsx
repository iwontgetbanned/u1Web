import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheck, FiX, FiArrowRight, FiHelpCircle } from 'react-icons/fi';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [cameraRange, setCameraRange] = useState<'1-8' | '9-24' | '25+'>(
    '1-8'
  );

  interface Feature {
    name: string;
    basic: boolean | string;
    professional: boolean | string;
    enterprise: boolean | string;
    tooltip?: string;
  }

  const features: Feature[] = [
    {
      name: 'Live Video Streaming',
      basic: true,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Mobile & Desktop Apps',
      basic: true,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Cloud Storage',
      basic: '7 days',
      professional: '30 days',
      enterprise: '90 days',
      tooltip: 'Retention period for recorded video'
    },
    {
      name: 'Basic Motion Detection',
      basic: true,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Smart Object Detection',
      basic: false,
      professional: true,
      enterprise: true,
      tooltip: 'AI-powered detection of people, vehicles, animals, and more'
    },
    {
      name: 'Face Recognition',
      basic: false,
      professional: 'Limited',
      enterprise: true,
      tooltip: 'Identify and verify individuals using facial recognition'
    },
    {
      name: 'License Plate Recognition',
      basic: false,
      professional: 'Add-on',
      enterprise: true,
    },
    {
      name: 'Custom Detection Zones',
      basic: '2 per camera',
      professional: '10 per camera',
      enterprise: 'Unlimited',
    },
    {
      name: 'Custom AI Detection Models',
      basic: false,
      professional: false,
      enterprise: true,
      tooltip: 'Create specialized detection models for unique use cases'
    },
    {
      name: 'API Access',
      basic: false,
      professional: 'Limited',
      enterprise: true,
    },
    {
      name: 'Third-Party Integrations',
      basic: false,
      professional: '5 included',
      enterprise: 'Unlimited',
    },
    {
      name: 'Advanced Analytics Dashboard',
      basic: false,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Priority Support',
      basic: false,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Dedicated Account Manager',
      basic: false,
      professional: false,
      enterprise: true,
    },
  ];

  // Pricing calculation based on billing cycle and camera range
  const getPricing = (plan: 'basic' | 'professional' | 'enterprise') => {
    // Base prices per camera per month
    const baseMonthlyPrices = {
      basic: { '1-8': 9.99, '9-24': 7.99, '25+': 5.99 },
      professional: { '1-8': 19.99, '9-24': 16.99, '25+': 13.99 },
      enterprise: { '1-8': 29.99, '9-24': 24.99, '25+': 19.99 },
    };

    // Apply 20% discount for annual billing
    const price = baseMonthlyPrices[plan][cameraRange];
    return billingCycle === 'annual' ? (price * 0.8).toFixed(2) : price.toFixed(2);
  };

  return (
    <div className="pt-28">
      {/* Page Header */}
      <section className="bg-background-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" style={{ mixBlendMode: 'overlay' }}></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              Choose the plan that best fits your surveillance needs and scale as your business grows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Controls */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Billing Cycle Selector */}
            <div className="mb-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <span className="text-white text-lg">Billing Cycle:</span>
              <div className="bg-background-dark rounded-lg flex p-1">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                    billingCycle === 'monthly'
                      ? 'bg-primary text-white'
                      : 'text-accent-silver hover:text-primary'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                    billingCycle === 'annual'
                      ? 'bg-primary text-white'
                      : 'text-accent-silver hover:text-primary'
                  }`}
                >
                  Annual <span className="text-xs font-normal opacity-80">(Save 20%)</span>
                </button>
              </div>
            </div>

            {/* Camera Range Selector */}
            <div className="mb-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <span className="text-white text-lg">Number of Cameras:</span>
              <div className="bg-background-dark rounded-lg flex p-1">
                <button
                  onClick={() => setCameraRange('1-8')}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                    cameraRange === '1-8'
                      ? 'bg-primary text-white'
                      : 'text-accent-silver hover:text-primary'
                  }`}
                >
                  1-8
                </button>
                <button
                  onClick={() => setCameraRange('9-24')}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                    cameraRange === '9-24'
                      ? 'bg-primary text-white'
                      : 'text-accent-silver hover:text-primary'
                  }`}
                >
                  9-24
                </button>
                <button
                  onClick={() => setCameraRange('25+')}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                    cameraRange === '25+'
                      ? 'bg-primary text-white'
                      : 'text-accent-silver hover:text-primary'
                  }`}
                >
                  25+
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          {/* Plans Cards - Desktop */}
          <div className="hidden lg:grid grid-cols-4 gap-8 mb-16">
            {/* Features Column */}
            <div className="pt-[118px]">
              <div className="mb-8">
                <h3 className="text-white text-lg font-semibold mb-2">Features</h3>
                <p className="text-accent-silver text-sm">Compare plan features</p>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="h-14 flex items-center">
                    <div className="flex items-center group">
                      <span className="text-white text-sm">{feature.name}</span>
                      {feature.tooltip && (
                        <div className="relative ml-2">
                          <FiHelpCircle className="w-4 h-4 text-accent-silver" />
                          <div className="absolute left-full ml-2 w-56 bg-background-dark border border-primary/20 rounded-md p-3 text-xs text-accent-silver opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                            {feature.tooltip}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-background-dark rounded-xl overflow-hidden border border-primary/10"
            >
              <div className="p-8 text-center">
                <h3 className="text-white text-xl font-semibold mb-2">Basic</h3>
                <p className="text-accent-silver text-sm mb-6">Essential video surveillance</p>
                <div className="mb-6">
                  <span className="text-white text-4xl font-bold">${getPricing('basic')}</span>
                  <span className="text-accent-silver text-sm ml-1">per camera / month</span>
                </div>
                <Link
                  to="/contact"
                  className="btn-primary w-full"
                >
                  Get Started
                </Link>
              </div>

              <div className="border-t border-primary/10 p-8 space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="h-14 flex items-center justify-center">
                    {typeof feature.basic === 'boolean' ? (
                      feature.basic ? (
                        <FiCheck className="text-green-400" />
                      ) : (
                        <FiX className="text-accent-silver/50" />
                      )
                    ) : (
                      <span className="text-white text-sm">{feature.basic}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background-dark rounded-xl overflow-hidden border-2 border-primary relative transform scale-105 z-10 shadow-lg"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-white text-xl font-semibold mb-2">Professional</h3>
                <p className="text-accent-silver text-sm mb-6">Advanced AI-powered surveillance</p>
                <div className="mb-6">
                  <span className="text-white text-4xl font-bold">${getPricing('professional')}</span>
                  <span className="text-accent-silver text-sm ml-1">per camera / month</span>
                </div>
                <Link
                  to="/contact"
                  className="btn-primary w-full"
                >
                  Get Started
                </Link>
              </div>

              <div className="border-t border-primary/10 p-8 space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="h-14 flex items-center justify-center">
                    {typeof feature.professional === 'boolean' ? (
                      feature.professional ? (
                        <FiCheck className="text-green-400" />
                      ) : (
                        <FiX className="text-accent-silver/50" />
                      )
                    ) : (
                      <span className="text-white text-sm">{feature.professional}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background-dark rounded-xl overflow-hidden border border-primary/10"
            >
              <div className="p-8 text-center">
                <h3 className="text-white text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-accent-silver text-sm mb-6">Complete surveillance solution</p>
                <div className="mb-6">
                  <span className="text-white text-4xl font-bold">${getPricing('enterprise')}</span>
                  <span className="text-accent-silver text-sm ml-1">per camera / month</span>
                </div>
                <Link
                  to="/contact"
                  className="btn-primary w-full"
                >
                  Get Started
                </Link>
              </div>

              <div className="border-t border-primary/10 p-8 space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="h-14 flex items-center justify-center">
                    {typeof feature.enterprise === 'boolean' ? (
                      feature.enterprise ? (
                        <FiCheck className="text-green-400" />
                      ) : (
                        <FiX className="text-accent-silver/50" />
                      )
                    ) : (
                      <span className="text-white text-sm">{feature.enterprise}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Plans Cards - Mobile */}
          <div className="lg:hidden space-y-8">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-background-dark rounded-xl overflow-hidden border border-primary/10"
            >
              <div className="p-6 text-center">
                <h3 className="text-white text-xl font-semibold mb-2">Basic</h3>
                <p className="text-accent-silver text-sm mb-4">Essential video surveillance</p>
                <div className="mb-6">
                  <span className="text-white text-3xl font-bold">${getPricing('basic')}</span>
                  <span className="text-accent-silver text-sm ml-1">per camera / month</span>
                </div>
                <Link
                  to="/contact"
                  className="btn-primary w-full"
                >
                  Get Started
                </Link>
              </div>

              <div className="border-t border-primary/10 p-6">
                <h4 className="text-white font-medium mb-4">Features:</h4>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    typeof feature.basic !== 'boolean' || feature.basic ? (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">
                          <FiCheck className="w-4 h-4" />
                        </span>
                        <span className="text-accent-silver text-sm">
                          {feature.name}
                          {typeof feature.basic !== 'boolean' && feature.basic !== true && (
                            <span className="text-primary ml-2">({feature.basic})</span>
                          )}
                        </span>
                      </li>
                    ) : null
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background-dark rounded-xl overflow-hidden border-2 border-primary relative shadow-lg"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-white text-xl font-semibold mb-2">Professional</h3>
                <p className="text-accent-silver text-sm mb-4">Advanced AI-powered surveillance</p>
                <div className="mb-6">
                  <span className="text-white text-3xl font-bold">${getPricing('professional')}</span>
                  <span className="text-accent-silver text-sm ml-1">per camera / month</span>
                </div>
                <Link
                  to="/contact"
                  className="btn-primary w-full"
                >
                  Get Started
                </Link>
              </div>

              <div className="border-t border-primary/10 p-6">
                <h4 className="text-white font-medium mb-4">Features:</h4>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    typeof feature.professional !== 'boolean' || feature.professional ? (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">
                          <FiCheck className="w-4 h-4" />
                        </span>
                        <span className="text-accent-silver text-sm">
                          {feature.name}
                          {typeof feature.professional !== 'boolean' && feature.professional !== true && (
                            <span className="text-primary ml-2">({feature.professional})</span>
                          )}
                        </span>
                      </li>
                    ) : null
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background-dark rounded-xl overflow-hidden border border-primary/10"
            >
              <div className="p-6 text-center">
                <h3 className="text-white text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-accent-silver text-sm mb-4">Complete surveillance solution</p>
                <div className="mb-6">
                  <span className="text-white text-3xl font-bold">${getPricing('enterprise')}</span>
                  <span className="text-accent-silver text-sm ml-1">per camera / month</span>
                </div>
                <Link
                  to="/contact"
                  className="btn-primary w-full"
                >
                  Get Started
                </Link>
              </div>

              <div className="border-t border-primary/10 p-6">
                <h4 className="text-white font-medium mb-4">Features:</h4>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    typeof feature.enterprise !== 'boolean' || feature.enterprise ? (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">
                          <FiCheck className="w-4 h-4" />
                        </span>
                        <span className="text-accent-silver text-sm">
                          {feature.name}
                          {typeof feature.enterprise !== 'boolean' && feature.enterprise !== true && (
                            <span className="text-primary ml-2">({feature.enterprise})</span>
                          )}
                        </span>
                      </li>
                    ) : null
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Additional <span className="gradient-text">Services</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Enhance your surveillance system with our professional services and hardware options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Professional Installation',
                description: 'Expert camera installation by our certified technicians, including wiring, mounting, and system configuration.',
                price: 'Starting at $149 per camera'
              },
              {
                title: 'System Design Consultation',
                description: 'Comprehensive security analysis and custom surveillance system design for your property or business.',
                price: 'Starting at $299'
              },
              {
                title: 'Camera Hardware',
                description: 'High-quality IP cameras that are fully compatible with our AI surveillance platform.',
                price: 'Starting at $129 per camera'
              },
              {
                title: 'Custom AI Model Development',
                description: 'Development of specialized AI detection models tailored to your specific business requirements.',
                price: 'Custom Quote'
              },
              {
                title: 'Staff Training',
                description: 'Comprehensive training for your team on using our surveillance platform and maximizing its capabilities.',
                price: '$99 per hour'
              },
              {
                title: 'Enterprise Integration',
                description: 'Custom integration with your existing security systems, access control, or business applications.',
                price: 'Custom Quote'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 border border-primary/10"
              >
                <h3 className="text-white text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-accent-silver text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium">{service.price}</span>
                  <Link to="/contact" className="text-accent-silver hover:text-primary text-sm flex items-center">
                    <span>Inquire</span>
                    <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Find answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: 'Are there any setup or activation fees?',
                  answer: 'No, our software plans have no hidden fees. You pay only for the subscription based on your camera count and chosen plan. Hardware installation services are priced separately if needed.'
                },
                {
                  question: 'Can I change plans or scale my camera count later?',
                  answer: 'Yes, you can upgrade, downgrade, or adjust your camera count at any time. Upgrades take effect immediately, while downgrades apply at the next billing cycle.'
                },
                {
                  question: 'What types of cameras work with your platform?',
                  answer: 'Our platform works with any IP camera that supports ONVIF or RTSP protocols. This includes most major camera brands and models available on the market today.'
                },
                {
                  question: 'Do I need special hardware to run the AI analytics?',
                  answer: 'No, all AI processing happens in our secure cloud environment. Your cameras simply stream to our platform, which handles all the computational work.'
                },
                {
                  question: 'Is my surveillance data secure?',
                  answer: 'Yes, we use end-to-end encryption and secure tunneling technology. Your data is stored in SOC 2 compliant data centers with strict access controls and security protocols.'
                },
                {
                  question: 'Can I try the platform before committing?',
                  answer: 'Yes, we offer a 14-day free trial for new customers. Contact our sales team to set up your trial account with full access to the features of our Professional plan.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background-dark rounded-xl p-6"
                >
                  <h3 className="text-white text-lg font-medium mb-3">{faq.question}</h3>
                  <p className="text-accent-silver">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="heading-md mb-6 text-white">Need a custom solution?</h2>
            <p className="text-accent-silver text-lg max-w-2xl mx-auto mb-8">
              Our team can create a tailored package specifically for your business requirements and budget.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              <span>Contact Us for Custom Pricing</span>
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

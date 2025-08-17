import Head from 'next/head'
import Script from 'next/script'

const SynthoframePage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Synthoframe - AI-powered Prototyping Tool</title>
      </Head>
      
      <Script 
        src="https://res.gemcoder.com/js/reload.js" 
        strategy="afterInteractive"
      />
      {/* Tailwind CSS is already configured in tailwind.config.js */}
      {/* Font Awesome Icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <style type="text/tailwindcss">
        {`
          @layer utilities {
            .content-auto {
              content-visibility: auto;
            }
            .text-balance {
              text-wrap: balance;
            }
            .gradient-text {
              @apply bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary;
            }
            .card-hover {
              @apply transition-all duration-300 hover:shadow-lg hover:-translate-y-1;
            }
          }
        `}
      </style>
      
      <body className="bg-light text-dark font-sans antialiased">
        {/* Navigation */}
        <nav
          className="fixed w-full bg-white/80 backdrop-blur-sm z-50 transition-all duration-300 shadow-sm"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="javascript:void(0);" className="flex items-center">
                  <span className="text-primary text-2xl font-bold"> Synthoframe </span>
                </a>
              </div>
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#features"
                  className="text-dark hover:text-primary transition-colors"
                >
                  Features
                </a>
                <a
                  href="#documentation"
                  className="text-dark hover:text-primary transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#pricing"
                  className="text-dark hover:text-primary transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#contact"
                  className="text-dark hover:text-primary transition-colors"
                >
                  Contact
                </a>
                <a
                  href="javascript:void(0);"
                  className="bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Get Started
                </a>
              </div>
              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  id="mobile-menu-button"
                  className="text-dark hover:text-primary"
                >
                  <i className="fas fa-bars text-xl"> </i>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Navigation */}
          <div id="mobile-menu" className="hidden md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-3 space-y-3">
              <a
                href="#features"
                className="block py-2 text-dark hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#documentation"
                className="block py-2 text-dark hover:text-primary transition-colors"
              >
                Documentation
              </a>
              <a
                href="#pricing"
                className="block py-2 text-dark hover:text-primary transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="block py-2 text-dark hover:text-primary transition-colors"
              >
                Contact
              </a>
              <a
                href="javascript:void(0);"
                className="block bg-primary text-white px-5 py-2 rounded-md text-center hover:bg-primary/90 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </nav>
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mb-6"
              >
                Welcome to
                <span className="gradient-text"> Synthoframe! </span>
              </h1>
              <p
                className="text-[clamp(1.1rem,2vw,1.3rem)] text-muted mb-10 max-w-2xl mx-auto"
              >
                An innovative AI-powered prototyping tool for the AI era
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <a
                  href="javascript:void(0);"
                  className="bg-primary text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                >
                  Try for Free
                </a>
                <a
                  href="javascript:void(0);"
                  className="bg-white text-dark border border-gray-200 px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow"
                >
                  Watch Demo
                  <i className="fas fa-play-circle ml-2"> </i>
                </a>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/images/1.png"
                  alt="Synthoframe AI prototyping tool interface"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Features */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold mb-4">
                Powerful AI-Powered Features
              </h2>
              <p className="text-muted max-w-2xl mx-auto text-lg">
                Transform your design process with cutting-edge AI technology that
                brings your ideas to life in minutes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-light rounded-xl p-8 card-hover">
                <div
                  className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6"
                >
                  <i className="fas fa-file-alt text-primary text-2xl"> </i>
                </div>
                <h3 className="text-xl font-bold mb-3">Text-to-Interface</h3>
                <p className="text-muted">
                  Describe your ideas in words and let Synthoframe generate
                  beautiful interfaces in minutes
                </p>
              </div>
              {/* Feature 2 */}
              <div className="bg-light rounded-xl p-8 card-hover">
                <div
                  className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6"
                >
                  <i className="fas fa-image text-primary text-2xl"> </i>
                </div>
                <h3 className="text-xl font-bold mb-3">Image-to-Interface</h3>
                <p className="text-muted">
                  Upload your sketches or reference images and transform them into
                  professional designs
                </p>
              </div>
              {/* Feature 3 */}
              <div className="bg-light rounded-xl p-8 card-hover">
                <div
                  className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6"
                >
                  <i className="fas fa-mouse-pointer text-primary text-2xl"> </i>
                </div>
                <h3 className="text-xl font-bold mb-3">Interactive Prototypes</h3>
                <p className="text-muted">
                  Create clickable, high-fidelity prototypes that bring your designs
                  to life
                </p>
              </div>
              {/* Feature 4 */}
              <div className="bg-light rounded-xl p-8 card-hover">
                <div
                  className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6"
                >
                  <i className="fas fa-sliders-h text-primary text-2xl"> </i>
                </div>
                <h3 className="text-xl font-bold mb-3">Flexible Editing</h3>
                <p className="text-muted">
                  Fine-tune every detail with our powerful editing tools or let AI
                  optimize your designs
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold mb-4">
                How Synthoframe Works
              </h2>
              <p className="text-muted max-w-2xl mx-auto text-lg">
                Three simple steps to transform your ideas into stunning prototypes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="text-center">
                <div
                  className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6"
                >
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Describe Your Vision</h3>
                <p className="text-muted">
                  Tell us what you want to create using text descriptions or upload
                  reference images
                </p>
              </div>
              {/* Step 2 */}
              <div className="text-center">
                <div
                  className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6"
                >
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">AI Generates Design</h3>
                <p className="text-muted">
                  Our advanced AI processes your input and creates a professional
                  interface design
                </p>
              </div>
              {/* Step 3 */}
              <div className="text-center">
                <div
                  className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6"
                >
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Refine & Prototype</h3>
                <p className="text-muted">
                  Edit, customize, and turn your design into an interactive
                  prototype ready for testing
                </p>
              </div>
            </div>
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/2.png"
                  alt="Synthoframe workflow process"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Documentation */}
        <section id="documentation" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold mb-4">
                  Comprehensive Documentation
                </h2>
                <p className="text-muted text-lg">
                  Check our detailed documentation to get started with Synthoframe
                </p>
              </div>
              <div className="bg-light rounded-xl p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-6">Get Started Today</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-primary mt-1 mr-3"> </i>
                        <span> Step-by-step tutorials for beginners </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-primary mt-1 mr-3"> </i>
                        <span> Advanced techniques for experienced designers </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-primary mt-1 mr-3"> </i>
                        <span> API documentation for developers </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-primary mt-1 mr-3"> </i>
                        <span>
                          Frequently asked questions and troubleshooting
                        </span>
                      </li>
                    </ul>
                    <div className="mt-8">
                      <a
                        href="javascript:void(0);"
                        className="inline-flex items-center text-primary font-medium hover:underline"
                      >
                        Browse Documentation
                        <i className="fas fa-arrow-right ml-2"> </i>
                      </a>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img
                      src="https://design.gemcoder.com/staticResource/echoAiSystemImages/c45e1c671500807817bb022c8f0c12de.png"
                      alt="Synthoframe documentation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-muted max-w-2xl mx-auto text-lg">
                Choose the plan that works best for you and your team
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">Free</h3>
                  <p className="text-muted mb-6">Perfect for getting started</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold"> $0 </span>
                    <span className="text-muted"> /month </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3"> </i>
                      <span> Basic Text-to-Interface features </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3"> </i>
                      <span> Up to 5 designs per month </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3"> </i>
                      <span> Standard resolution exports </span>
                    </li>
                    <li className="flex items-start text-muted">
                      <i className="fas fa-times text-red-400 mt-1 mr-3"> </i>
                      <span> Image-to-Interface </span>
                    </li>
                    <li className="flex items-start text-muted">
                      <i className="fas fa-times text-red-400 mt-1 mr-3"> </i>
                      <span> Interactive prototypes </span>
                    </li>
                  </ul>
                  <a
                    href="javascript:void(0);"
                    className="block w-full py-3 text-center border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              {/* Pro Plan */}
              <div
                className="bg-white rounded-xl overflow-hidden shadow-xl transform scale-105 relative card-hover z-10"
              >
                <div
                  className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1"
                >
                  POPULAR
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">Pro</h3>
                  <p className="text-muted mb-6">For professional designers</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold"> $19 </span>
                    <span className="text-muted"> /month </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3"> </i>
                      <span> All Free features </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3"> </i>
                      <span> Image-to-Interface </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3"> </i>
                      <span> Interactive prototypes </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3"> </i>
                      <span> Up to 50 designs per month </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3"> </i>
                      <span> High-resolution exports </span>
                    </li>
                  </ul>
                  <a
                    href="javascript:void(0);"
                    className="block w-full py-3 text-center bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              {/* Team Plan */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">Team</h3>
                  <p className="text-muted mb-6">For design teams</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold"> $49 </span>
                    <span className="text-muted"> /month </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3"> </i>
                      <span> All Pro features </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3"> </i>
                      <span> Team collaboration tools </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3"> </i>
                      <span> Unlimited designs </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3"> </i>
                      <span> Advanced editing tools </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3"> </i>
                      <span> Priority support </span>
                    </li>
                  </ul>
                  <a
                    href="javascript:void(0);"
                    className="block w-full py-3 text-center border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold mb-4">
                  Contact Us
                </h2>
                <p className="text-muted text-lg">
                  Have questions? Our team is here to help
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-dark mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-dark mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-dark mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Your message"
                      >
                      </textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                    <p className="text-muted mb-8">
                      Our team is ready to answer your questions and help you get
                      started with Synthoframe
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div
                          className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                        >
                          <i className="fas fa-envelope text-primary"> </i>
                        </div>
                        <div>
                          <h4 className="font-medium">Email Us</h4>
                          <p className="text-muted">support@synthoframe.com</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div
                          className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                        >
                          <i className="fas fa-comment text-primary"> </i>
                        </div>
                        <div>
                          <h4 className="font-medium">Live Chat</h4>
                          <p className="text-muted">Available Monday-Friday, 9AM-6PM</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div
                          className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                        >
                          <i className="fas fa-users text-primary"> </i>
                        </div>
                        <div>
                          <h4 className="font-medium">Community</h4>
                          <p className="text-muted">
                            Join our Discord community of designers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-medium mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a
                        href="javascript:void(0);"
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-colors"
                      >
                        <i className="fab fa-twitter"> </i>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-colors"
                      >
                        <i className="fab fa-instagram"> </i>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-colors"
                      >
                        <i className="fab fa-linkedin"> </i>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-colors"
                      >
                        <i className="fab fa-youtube"> </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold mb-6">
                Ready to Transform Your Design Process?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                Join thousands of designers who are creating amazing interfaces with
                Synthoframe's AI-powered tools
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="javascript:void(0);"
                  className="bg-white text-primary px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Start Free Trial
                </a>
                <a
                  href="javascript:void(0);"
                  className="bg-transparent border border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white/10 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-dark text-white pt-16 pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              <div className="lg:col-span-2">
                <a href="javascript:void(0);" className="text-2xl font-bold mb-4 block">
                  Synthoframe
                </a>
                <p className="text-gray-400 mb-6 max-w-md">
                  An innovative AI-powered prototyping tool that transforms your
                  ideas into beautiful interfaces in minutes.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="javascript:void(0);"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fab fa-twitter"> </i>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fab fa-instagram"> </i>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fab fa-linkedin"> </i>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fab fa-youtube"> </i>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Updates
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm mb-4 md:mb-0">
                  © 2023 Synthoframe. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <a
                    href="javascript:void(0);"
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                  >
                    Cookies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        
        <Script strategy="afterInteractive">
          {
            `
              // Mobile menu toggle
              document.addEventListener('DOMContentLoaded', () => {
                const mobileMenuButton = document.getElementById('mobile-menu-button');
                const mobileMenu = document.getElementById('mobile-menu');

                mobileMenuButton.addEventListener('click', () => {
                  mobileMenu.classList.toggle('hidden');
                });

                // Close mobile menu when clicking on a link
                const mobileLinks = mobileMenu.querySelectorAll('a');
                mobileLinks.forEach(link => {
                  link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                  });
                });

                // Navbar scroll effect
                const navbar = document.querySelector('nav');
                window.addEventListener('scroll', () => {
                  if (window.scrollY > 50) {
                    navbar.classList.add('shadow-md');
                    navbar.classList.remove('shadow-sm');
                  } else {
                    navbar.classList.remove('shadow-md');
                    navbar.classList.add('shadow-sm');
                  }
                });

                // Smooth scrolling for anchor links
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                  anchor.addEventListener('click', function(e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;

                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                      window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  });
                });

                // Form submission handling
                const contactForm = document.querySelector('#contact form');
                if (contactForm) {
                  contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();

                    // Simple form validation
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const message = document.getElementById('message').value;

                    if (!name || !email || !message) {
                      alert('Please fill in all fields');
                      return;
                    }

                    // In a real application, you would send the form data to a server here
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                  });
                }
              });
            `
          }
        </Script>
      </body>
    </>
  );
};

export default SynthoframePage;
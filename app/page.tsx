"use client"
import { Typewriter } from 'react-simple-typewriter'
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Banner from '../app/images/imageBanner2.gif'
import Image2 from '../app/images/image2.png'
console.log(Image2.src)
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  User,
  Code,
  Briefcase,
  GraduationCap,
  Star,
  ChevronLeft,
  ChevronRight,
  Eye,
  MapPin,
  Phone,
  Send,
  Download,
  ArrowUp,
  Heart,
  Coffee,
  Zap,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [portfolioFilter, setPortfolioFilter] = useState("all")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [nameAnimationComplete, setNameAnimationComplete] = useState(false)
  const { scrollYProgress } = useScroll()
  const name = "Rahul Yadav"
  const [revert, setRevert] = useState(false)
  const [counter, setCounter] = useState(0)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  // Handle scroll to top button visibility
  // useEffect(()=>{
  //   let timer

  //   timer = setTimeout(()=>{
  //       if(counter < name.length  && !revert){

  //          setCounter(counter+1)
  //          if(counter == name.length-1) {
  //           console.log('comming')
  //           setRevert(true)
  //         }

  //       }
  //       else if(counter <=  name.length && revert){
  //         console.log('comming')
  //          setCounter(counter - 1)
  //          if(counter==0) setRevert(false)
  //       }



  //   } , 50)

  //   return ()=>clearTimeout(timer)
  // } , [counter , revert])
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const projects = [
    {
      title: "KingJoinery – Interior Design Site",
      description:
        "A custom-built website for an Australian interior design company to showcase services and past projects. The platform includes a dynamic portfolio, contact integration, and SEO optimization.",
      link: "https://kingjoinery.com.au/",
      tech: ["Laravel", "Blade", "MySQL", "Bootstrap"],
      image: "/kingjoinery.png",
      category: "web",
    },
    {
      title: "SuperKings Cricket Academy",
      description:
        "A role-based web application with 4 user panels (SuperAdmin, Admin, Coach, Student). Features include class scheduling, attendance, progress tracking, and secure login with role-based permissions.",
      link: "https://www.superkingsacademy.com/myprofile",
      tech: ["Laravel", "AJAX", "jQuery", "MySQL", "Firebase", "Razorpay"],
      image: "/cricket.png",
      category: "fullstack",
    },
    {
      title: "Navy Ship Machinery Management",
      description:
        "A hybrid system built with PHP Desktop and Laravel for managing machinery onboard Navy ships. It allows real-time status tracking, maintenance logging, service history reports, and role-based access — even in offline environments. The Laravel backend ensures data centralization, while the PHP desktop app provides local operability.",
      link: "#", // Replace with actual GitHub URL if needed
      tech: ["Laravel", "PHP Desktop", "MySQL", "AJAX", "Blade", "Bootstrap"],
      image: "/navy.jpg",
      category: "enterprise",
    },
    {
      title: "JoyTap Gaming Admin + API",
      description:
        "Created admin panel and RESTful API backend for a gaming app. Supports user management, game logic, leaderboard management, wallet features, and integrated payment gateway.",
      link: "#", // Add GitHub or live preview if available
      tech: ["Laravel", "REST API", "JWT", "Razorpay", "MySQL"],
      image: "/joytap.png",
      category: "backend",
    },
    {
      title: "Addex Advertiser Platform",
      description:
        "A 3-panel advertising platform with modules for advertisers, admins, and API consumers (mobile apps). Features include ad campaign creation, budget tracking, analytics, and secure APIs.",
      link: "https://backend.addex.co.za/",
      tech: ["Laravel", "JWT", "REST API", "MySQL", "Cloudinary"],
      image: "/addex.png",
      category: "fullstack",
    },
    {
      title: "PixelGenix – IT Company Portfolio",
      description:
        "A Node.js and Express.js-based dynamic portfolio site for an IT company showcasing their services, tech stack, and completed projects. Includes admin panel and dynamic CMS.",
      link: "https://pixelgenixitsolution.com/",
      tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary"],
      image: "/pixelgenix.png",
      category: "fullstack",
    },
    {
      title: "EduTech Platform",
      description:
        "A full-featured educational web platform built with React and Node. Features include course listing, user enrollment, payment integration, and student dashboards.",
      link: "#", // Add live or GitHub link if available
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      image: "/edutech.jpg",
      category: "fullstack",
    },
    {
      title: "CRM System – Laravel",
      description:
        "A Laravel-based Customer Relationship Management (CRM) system with task tracking, user roles, project status monitoring, and email notifications.",
      link: "#", // Add GitHub or live URL if available
      tech: ["Laravel", "MySQL", "AJAX", "jQuery", "Blade"],
      image: "/crm.png",
      category: "enterprise",
    },
  ];


  const services = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using React.js and modern web technologies",
      icon: <Code className="w-8 h-8 md:w-12 md:h-12" />,
      delay: 0,
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js & PHP(Laravel)",
      icon: <Briefcase className="w-8 h-8 md:w-12 md:h-12" />,
      delay: 0.2,
    },
    {
      title: "Full Stack Solutions",
      description: "End-to-end web application development with modern tech stack",
      icon: <User className="w-8 h-8 md:w-12 md:h-12" />,
      delay: 0.4,
    },
    {
      title: "Database Management",
      description: "Designing and managing databases with MongoDB and MySQL",
      icon: <GraduationCap className="w-8 h-8 md:w-12 md:h-12" />,
      delay: 0.6,
    },
  ]

  const learningPath = [
    {
      title: "HTML/CSS",
      description: "Building blocks of web development",
      side: "left",
      delay: 0,
    },
    {
      title: "JavaScript",
      description: "Dynamic web functionality",
      side: "right",
      delay: 0.2,
    },
    {
      title: "Jquery-AJAX",
      description: "Simplifying frontend interactions with the server",
      side: "left",
      delay: 0.4,
    },
    {
      title: "Bootstrap",
      description: "Crafting responsive and stylish UIs",
      side: "right",
      delay: 0.6,
    },
    {
      title: "PHP",
      description: "Backend scripting for server-side logic",
      side: "left",
      delay: 0.8,
    },
    {
      title: "Node.js",
      description: "JavaScript runtime for scalable backend services",
      side: "right",
      delay: 1.0,
    },
    {
      title: "Express.js",
      description: "Minimal and flexible Node.js web framework",
      side: "left",
      delay: 1.2,
    },
    {
      title: "MongoDB",
      description: "Document-based NoSQL database for modern apps",
      side: "right",
      delay: 1.4,
    },
    {
      title: "MySQL",
      description: "Relational database management with SQL mastery",
      side: "left",
      delay: 1.6,
    },
    {
      title: "C Programming",
      description: "The foundation of system-level programming and logic building",
      side: "right",
      delay: 1.8,
    },
    {
      title: "DSA",
      description: "Data structures and algorithms for problem-solving excellence",
      side: "left",
      delay: 2.0,
    }
  ];


  const testimonials = [
    {
      name: "B.sc IT",
      role: "Bachelor of Science - IT",
      company: "Rajasthan University, Jaipur",
      content:
        "I completed my B.sc - IT Rajasthan University with a score of 67.2% in 2021. During my College, I developed a strong foundation in computer science and mathematics.",
      rating: 5,
      year: "2021",
    },
    {
      name: "12th Grade Achievement",
      role: "Higher Secondary Education",
      company: "Marudhar sr. sec. School Bansur(Alwar)",
      content:
        "I completed my 12th grade from Marudhar Sr. sec. School with a score of 70.0% in 2018. During my school years, I developed a strong foundation in mathematics.",
      rating: 5,
      year: "2018",
    },
    {
      name: "10th Grade Foundation",
      role: "Secondary Education",
      company: "Gandhi Sr. Sec. School, Bansur(Alwar)",
      content:
        "I also completed my 10th grade from Gandhi Sr. Sec. School with a score of 63% in 2015. My interest in technology and programming started during my high school years, and I have been passionate about it ever since.",
      rating: 5,
      year: "2015",
    },
  ]

  const filteredProjects =
    portfolioFilter === "all" ? projects : projects.filter((project) => project.category === portfolioFilter)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="heading-sm font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-poppins"
          >
            RY
          </motion.div>
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {["Home", "About", "Services", "Portfolio", "Projects", "Testimonials", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:text-blue-400 transition-colors duration-300 relative group body-md font-medium text-secondary hover:text-primary"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>
          <button
            className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }} transition={{ duration: 0.3 }}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </nav>

        {/* Mobile Drawer Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Right-Side Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900 border-l border-gray-700 z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-gray-800/50">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">RY</span>
                    </div>
                    <div>
                      <div
                        className="relative overflow-hidden w-full"
                        style={{ height: "2rem" /* adjust to your font-size/line-height */ }}
                      >
                        <motion.h3
                          className="absolute whitespace-nowrap font-bold 
                   bg-gradient-to-r from-blue-400 to-purple-500 
                   bg-clip-text text-transparent font-poppins"
                          initial={{ x: "100%" }}
                          animate={{ x: "-100%" }}
                          transition={{
                            duration: 6,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop",   // go 100% → -100%, then snap back to 100% and repeat
                          }}
                        >
                          Rahul Yadav
                        </motion.h3>
                      </div>
                      <p className="text-xs text-gray-400">Backend Developer</p>
                    </div>
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-6 py-8 bg-gray-900">
                  <nav className="space-y-2">
                    {["Home", "About", "Services", "Portfolio", "Projects", "Testimonials", "Contact"].map(
                      (item, index) => (
                        <motion.a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index, type: "spring", stiffness: 100 }}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-800/70 transition-all duration-300 group border border-transparent hover:border-gray-700"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="w-2 h-2 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors"
                          />
                          <span className="body-md font-medium text-secondary group-hover:text-primary transition-colors">
                            {item}
                          </span>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            className="ml-auto"
                          >
                            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                          </motion.div>
                        </motion.a>
                      ),
                    )}
                  </nav>
                </div>

                {/* Drawer Footer */}
                <div className="p-6 border-t border-gray-700 bg-gray-800/50">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-6"
                  >
                    {/* Contact Info */}
                    <div className="space-y-3">
                      <h4 className="heading-sm font-semibold text-primary mb-4">Get In Touch</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3 text-sm">
                          <div className="p-1.5 bg-blue-500/20 rounded-full">
                            <Mail className="w-3 h-3 text-blue-400" />
                          </div>
                          <span className="text-secondary text-xs">raybalawas@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                          <div className="p-1.5 bg-blue-500/20 rounded-full">
                            <Phone className="w-3 h-3 text-blue-400" />
                          </div>
                          <span className="text-secondary text-xs">+91 8949540232</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                          <div className="p-1.5 bg-blue-500/20 rounded-full">
                            <MapPin className="w-3 h-3 text-blue-400" />
                          </div>
                          <span className="text-secondary text-xs">Jaipur, India</span>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-3">
                      <h4 className="heading-sm font-semibold text-primary mb-4">Connect</h4>
                      <div className="flex space-x-3">
                        {[
                          { icon: Github, href: "https://github.com/raybalawas", label: "GitHub" },
                          { icon: Mail, href: "mailto:raybalawas@gmail.com", label: "Email" },
                          { icon: Linkedin, href: "https://www.linkedin.com/in/rahul-yadav-8b0158284/", label: "LinkedIn" },
                        ].map(({ icon: Icon, href, label }) => (
                          <motion.a
                            key={label}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            whileHover={{ scale: 1.2, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2.5 bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-300 group border border-gray-600 hover:border-blue-500/50"
                            aria-label={label}
                          >
                            <Icon className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                          </motion.a>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 body-md font-semibold"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download CV1</span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            style={{ y }}
            className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full blur-3xl"
          />
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
            className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30"
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-blue-400 rounded-full"
              animate={{
                x: [0, 50 + i * 10, 0],
                y: [0, -50 - i * 10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2 text-center lg:text-left mobile-animate">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="font-bold mb-8 leading-tight text-primary font-poppins text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left"
              >
                Hi, I'm{" "}
                <span className="text-2xl sm:text-3xl lg:text-5xl font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent ml-2">
                  <Typewriter
                    words={[name]}
                    loop={Infinity} // Infinite loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={150} // Typing speed
                    deleteSpeed={100} // Same speed for deleting
                    delaySpeed={1000} // Pause before deleting (2 seconds)
                  />

                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="text-secondary mb-10 leading-relaxed font-medium text-base sm:text-[17px]"
              >
                Backend Developer
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mb-8"
              >
                {[
                  { icon: Github, href: "https://github.com/raybalawas", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/rahul-yadav-8b0158284/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:raybalawas@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-blue-400 transition-colors" />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download CV2
                </motion.button>
              </motion.div>
            </div>


            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full lg:w-1/2 max-w-md lg:max-w-lg"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-20"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src={Banner.src}
                  alt="Developer workspace"
                  className="rounded-2xl shadow-2xl relative z-10 w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center text-primary font-poppins mb-14"
          >
            <User className="inline-block w-8 h-8 sm:w-10 sm:h-10 mr-3 text-blue-400" />
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl group max-w-[400px] mx-auto"
              >
                <img
                  src={Image2.src}
                  alt="Rahul Yadav"
                  width={400}
                  height={500}
                  className="rounded-2xl object-cover w-full h-[600px] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-2xl" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-blue-500/10 backdrop-blur-sm"
                >
                  <div className="text-center">
                    <User className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                    <p className="text-white font-semibold">Backend Developer</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-5"
            >
              {[
                "I'm a passionate Backend Developer with expertise in NODE JS & PHP(Laravel) and modern web technologies. I love building user-friendly applications and solving complex problems through clean, efficient code.",
                "My journey in web development has led me to work on various exciting projects, from responsive web applications to complex full-stack solutions.",
                "I have a strong foundation in HTML, CSS, and JavaScript, and I am proficient in using frameworks and libraries such as Laravel, Node.js, and Express.js. I am also experienced in working with databases like MongoDB & MySQL.",
                "In addition to my technical skills, I am a strong communicator and team player. I enjoy collaborating with others to bring ideas to life and create impactful solutions.",
                "Outside of work, I am constantly learning and exploring new technologies to stay up-to-date with industry trends. I am passionate about continuous improvement and always strive to enhance my skills and knowledge.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-secondary leading-relaxed text-base sm:text-[17px]"
                >
                  {text}
                </motion.p>
              ))}

              {/* Optional: Skill highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6"
              >
                {["PHP", "Laravel", "Node.js", "Express.js", "MySql", "MongoDB", "Java Script", "C-Language", "DSA", "HTML", "CSS", "Jquery", "Ajax", "&More"].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-gray-700/50 p-2 rounded-lg text-center border border-gray-600 hover:border-blue-500 transition-all duration-300"
                  >
                    <span className="text-blue-400 font-semibold text-sm sm:text-base">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-lg font-bold mb-16 text-center text-primary font-poppins"
          >
            Services
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="text-blue-400 mb-4 sm:mb-6 flex justify-center group-hover:text-blue-300"
                >
                  {service.icon}
                </motion.div>
                <h3 className="heading-sm font-semibold text-primary mb-4">{service.title}</h3>
                <p className="text-secondary leading-relaxed" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                  {service.description}
                </p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: service.delay + 0.5 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 sm:mt-6"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-16 sm:py-20 bg-gray-800/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-lg font-bold mb-16 text-center text-primary font-poppins"
          >
            My Learning Path
          </motion.h2>

          <div className="max-w-4xl mx-auto relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-16">
              {learningPath.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: item.side === "left" ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: item.delay }}
                  viewport={{ once: true }}
                  className={`flex items-center ${item.side === "left" ? "justify-start" : "justify-end"} relative`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: item.delay + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"
                  />

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`w-full sm:w-80 bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 ${item.side === "left" ? "mr-auto sm:mr-8 text-left" : "ml-auto sm:ml-8 text-right"
                      }`}
                  >
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: item.delay + 0.5 }}
                      viewport={{ once: true }}
                      className="heading-sm font-semibold text-primary mb-3 font-poppins"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: item.delay + 0.7 }}
                      viewport={{ once: true }}
                      className="text-secondary leading-relaxed"
                      style={{ fontSize: "16px", lineHeight: "1.7" }}
                    >
                      {item.description}
                    </motion.p>

                    {/* Decorative Element */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: item.delay + 0.9 }}
                      viewport={{ once: true }}
                      className={`h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 ${item.side === "right" ? "ml-auto" : ""
                        }`}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.5,
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 15}%`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-lg font-bold mb-16 text-center text-primary font-poppins"
          >
            Skills
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            {/* MERN Stack */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="heading-sm font-semibold text-primary mb-6">MERN Stack</h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { name: "HTML", level: 95, icon: "🌐" },
                  { name: "CSS", level: 90, icon: "🎨" },
                  { name: "JavaScript", level: 93, icon: "⚡" },
                  { name: "Bootstrap", level: 85, icon: "📱" },
                  { name: "React.js", level: 92, icon: "⚛️" },
                  { name: "Node.js", level: 91, icon: "🟢" },
                  { name: "Express.js", level: 90, icon: "🚀" },
                  { name: "MongoDB", level: 85, icon: "🍃" },
                  { name: "Chakra-UI", level: 80, icon: "💎" },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 sm:space-x-4"
                  >
                    <span className="text-lg sm:text-2xl">{skill.icon}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="body-md font-medium text-primary">{skill.name}</span>
                        <span className="caption text-accent font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse opacity-75"></div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* MS-Office */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="heading-sm font-semibold text-primary mb-6">MS-Office</h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { name: "MS-Word", level: 90, icon: "📄" },
                  { name: "MS-Excel", level: 85, icon: "📊" },
                  { name: "MS-PowerPoint", level: 88, icon: "📈" },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 sm:space-x-4"
                  >
                    <span className="text-lg sm:text-2xl">{skill.icon}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="body-md font-medium text-primary">{skill.name}</span>
                        <span className="caption text-accent font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse opacity-75"></div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Others */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="heading-sm font-semibold text-primary mb-6">Others</h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { name: "Python", level: 82, icon: "🐍" },
                  { name: "MySQL", level: 78, icon: "🗄️" },
                  { name: "pandas", level: 75, icon: "🐼" },
                  { name: "matplotlib", level: 73, icon: "📊" },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 sm:space-x-4"
                  >
                    <span className="text-lg sm:text-2xl">{skill.icon}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="body-md font-medium text-primary">{skill.name}</span>
                        <span className="caption text-accent font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse opacity-75"></div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio/Experience Section */}
      <section id="portfolio" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-lg font-bold mb-16 text-center text-primary font-poppins"
          >
            <Briefcase className="inline-block w-8 h-8 sm:w-10 sm:h-10 mr-4 text-blue-400" />
            Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-10 shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="text-blue-400 sm:mr-6 p-3 sm:p-4 bg-blue-500/10 rounded-full"
                >
                  <Briefcase className="w-8 h-8 sm:w-12 sm:h-12" />
                </motion.div>
                <div>
                  <h3 className="heading-sm font-semibold text-primary mb-4">Experience</h3>
                  <p className="text-blue-400 text-base sm:text-lg"> Backend Developer</p>
                </div>
              </div>
              <div className="space-y-4 mb-6 sm:mb-8">
                <p className="text-secondary leading-relaxed" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                  I worked as an intern for 3 months to build an e-commerce application using React.js.
                </p>
                <p className="text-secondary leading-relaxed" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                  During this internship, I gained valuable experience in developing user-friendly interfaces, managing
                  state with Redux, and integrating APIs to fetch and handle accourding to the  need of The Users.
                </p>
              </div>
              <motion.a
                href={"https://kurtaghar.store"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 body-md font-semibold"
              >
                Visit Website <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-3" />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-4 "
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-10 shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="text-blue-400 sm:mr-6 p-3 sm:p-4 bg-blue-500/10 rounded-full"
                >
                  <Briefcase className="w-8 h-8 sm:w-12 sm:h-12" />
                </motion.div>
                <div>
                  <h3 className="heading-sm font-semibold text-primary mb-4">Job Experience</h3>
                  <p className="text-blue-400 text-base sm:text-lg">Currently Bankend developer</p>
                </div>
              </div>
              <div className="space-y-4 mb-6 sm:mb-8">
                <p className="text-secondary leading-relaxed" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                  currently I am working in NBT as a Backend Developer in Node js
                </p>
                <p className="text-secondary leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  My role involves developing scalable APIs, managing databases, and ensuring smooth backend operations for various web applications. Alongside my job, I am consistently upskilling by learning advanced backend concepts, system architecture, and contributing to full-stack projects to enhance my expertise.
                </p>
              </div>
              {/* <motion.a
                href={"https://kurtaghar.store"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 body-md font-semibold"
              >
                Visit Website <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-3" />
              </motion.a> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-lg font-bold mb-16 text-center text-primary font-poppins"
          >
            Projects
          </motion.h2>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8 sm:mb-12"
          >
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-gray-800 p-2 rounded-full">
              {[/*"all", "web", "fullstack"*/].map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setPortfolioFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${portfolioFilter === filter ? "bg-blue-500 text-white" : "text-gray-400 hover:text-white"
                    } body-md font-semibold`}
                >
                  {/*filter.charAt(0).toUpperCase() + filter.slice(1)*/}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${portfolioFilter}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500/50 group"
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="heading-sm font-semibold text-primary mb-4">{project.title}</h3>
                    <p className="text-secondary leading-relaxed" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-500/20 text-blue-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold text-sm sm:text-base"
                    >
                      View Project <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Testimonials/Education Section */}
      <section id="testimonials" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-lg font-bold mb-16 text-center text-primary font-poppins"
          >
            <GraduationCap className="inline-block w-8 h-8 sm:w-10 sm:h-10 mr-4 text-blue-400" />
            Education
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-10 shadow-2xl border border-gray-700"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="text-blue-400 sm:mr-6 p-3 sm:p-4 bg-blue-500/10 rounded-full"
                    >
                      <GraduationCap className="w-8 h-8 sm:w-12 sm:h-12" />
                    </motion.div>
                    <div>
                      <h3 className="heading-sm font-semibold text-primary">{testimonials[currentTestimonial].name}</h3>
                      <p className="text-blue-400 text-base sm:text-lg font-semibold">
                        {testimonials[currentTestimonial].role}
                      </p>
                      <p className="body-md text-secondary leading-relaxed">
                        {testimonials[currentTestimonial].company}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">{testimonials[currentTestimonial].year}</p>
                    </div>
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-secondary leading-relaxed"
                    style={{ fontSize: "16px", lineHeight: "1.7" }}
                  >
                    {testimonials[currentTestimonial].content}
                  </motion.p>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <motion.button
                        onClick={prevTestimonial}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 sm:p-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors shadow-lg body-md font-semibold"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.button>
                      <motion.button
                        onClick={nextTestimonial}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 sm:p-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors shadow-lg body-md font-semibold"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex justify-center mt-6 sm:mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? "bg-blue-500 w-6 sm:w-8" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-lg font-bold mb-16 text-center text-primary font-poppins"
          >
            Get In Touch
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto"
          >
            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group order-2 lg:order-1"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7267!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6c8f4c3c7c7%3A0x6c8f4c3c7c7c7c7!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1635959542842!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm rounded-lg p-2 sm:p-3"
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <span className="text-white text-xs sm:text-sm">Jaipur, India</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-700 order-1 lg:order-2"
            >
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="fullName" className="caption font-medium text-secondary mb-3">
                    Full Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="caption font-medium text-secondary mb-3">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="caption font-medium text-secondary mb-3">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Enter your query or message"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group text-sm sm:text-base body-md font-semibold"
                >
                  <span>Submit</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </motion.button>
              </form>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-secondary leading-relaxed" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                      raybalawas@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-secondary leading-relaxed" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                      +91 8949540232
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-secondary leading-relaxed" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                      Jaipur, India
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 py-12 sm:py-20 border-t border-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">RY</span>
                </div>
                <div>
                  <motion.h3 whileHover={{ scale: 1.05 }} className="heading-sm font-semibold text-primary mb-4">
                    Rahul Yadav
                  </motion.h3>
                  <p className="body-sm text-secondary leading-relaxed">Full Stack Developer | Backend Specialist</p>
                </div>
              </div>

              <p className="text-secondary leading-relaxed" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                Passionate about creating innovative web solutions and bringing ideas to life through clean, efficient
                code. Always learning and exploring new technologies to deliver exceptional user experiences.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-800">
                <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                  <div className="text-2xl font-bold text-blue-400">15+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                  <div className="text-2xl font-bold text-purple-400">3+</div>
                  <div className="text-xs text-gray-400">Months Exp</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">24/7</div>
                  <div className="text-xs text-gray-400">Available</div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/raybalawas",
                    label: "GitHub",
                    color: "hover:bg-gray-700",
                  },
                  { icon: Mail, href: "mailto:raybalawas@gmail.com", label: "Email", color: "hover:bg-red-600" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/rahul-yadav-8b0158284/", label: "LinkedIn", color: "hover:bg-blue-600" },
                ].map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.2, y: -2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-gray-800 rounded-full ${color} transition-all duration-300 group border border-gray-700 hover:border-blue-500/50`}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="heading-sm font-semibold text-primary mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-blue-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["Home", "About", "Services", "Portfolio", "Projects", "Contact"].map((link) => (
                  <li key={link}>
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="heading-sm font-semibold text-primary mb-6 flex items-center">
                <Code className="w-5 h-5 mr-2 text-purple-400" />
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Frontend Development",
                  "Backend Development",
                  "Full Stack Solutions",
                  "Database Management",
                  "API Integration",
                  "UI/UX Design",
                ].map((service) => (
                  <li key={service}>
                    <motion.span
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base flex items-center group cursor-pointer"
                    >
                      <span className="w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                      {service}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700 hover:border-gray-600 transition-colors duration-300"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center sm:justify-start space-x-3"
              >
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
                  <p className="body-sm text-secondary leading-relaxed">raybalawas@gmail.com</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center sm:justify-start space-x-3"
              >
                <div className="p-3 bg-green-500/20 rounded-full">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Phone</p>
                  <p className="body-sm text-secondary leading-relaxed">+91 8949540232</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center sm:justify-start space-x-3"
              >
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Location</p>
                  <p className="body-sm text-secondary leading-relaxed">Jaipur, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-700"
          >
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Heart className="w-6 h-6 text-red-400" />
                <h4 className="heading-sm font-semibold text-primary mb-4">Stay Connected</h4>
                <Heart className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-gray-300 max-w-md mx-auto">
                Get updates about my latest projects and tech insights. Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 body-md font-semibold"
                >
                  <Send className="w-4 h-4" />
                  <span>Subscribe</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 space-y-4 md:space-y-0"
          >
            <div className="text-center md:text-left space-y-2">
              <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start">
                © 2025 Rahul Yadav. Made with
                <Heart className="w-4 h-4 mx-1 text-red-400" />
                in India
              </p>
              <p className="text-gray-500 text-xs flex items-center justify-center md:justify-start">
                Built with React, Next.js, Tailwind CSS, and Framer Motion
                <Coffee className="w-4 h-4 ml-2 text-amber-400" />
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 body-md font-semibold"
              >
                <Download className="w-4 h-4" />
                <span>Download CV3</span>
              </motion.button>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, rotate: -90 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-blue-400 rounded-full transition-all duration-300 border border-gray-700 hover:border-blue-500/50"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-colors duration-300 body-md font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

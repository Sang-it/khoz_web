"use client"

import { useState, useRef, useEffect } from "react"
import { Download, Keyboard, Zap, Feather, Users, HelpCircle, BarChart, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

export default function LandingPage() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [hoverStyle, setHoverStyle] = useState({})
    const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" })
    const tabRefs = useRef<(HTMLDivElement | null)[]>([])
    const tabs = ["Overview", "Features", "Download", "Testimonials", "Community", "Support"]

    useEffect(() => {
        if (hoveredIndex !== null) {
            const hoveredElement = tabRefs.current[hoveredIndex]
            if (hoveredElement) {
                const { offsetLeft, offsetWidth } = hoveredElement
                setHoverStyle({
                    left: `${offsetLeft}px`,
                    width: `${offsetWidth}px`,
                })
            }
        }
    }, [hoveredIndex])

    useEffect(() => {
        const activeElement = tabRefs.current[activeIndex]
        if (activeElement) {
            const { offsetLeft, offsetWidth } = activeElement
            setActiveStyle({
                left: `${offsetLeft}px`,
                width: `${offsetWidth}px`,
            })
        }
    }, [activeIndex])

    useEffect(() => {
        requestAnimationFrame(() => {
            const overviewElement = tabRefs.current[0]
            if (overviewElement) {
                const { offsetLeft, offsetWidth } = overviewElement
                setActiveStyle({
                    left: `${offsetLeft}px`,
                    width: `${offsetWidth}px`,
                })
            }
        })
    }, [])

    const handleDownload = () => {
        // Create a temporary link and trigger download
        const link = document.createElement("a")
        link.href = "khoz.zip"
        link.download = "khoz.zip"
        document.body.appendChild(link)
        link.click()

        // Clean up
        document.body.removeChild(link)
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.2 },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
            },
        },
    }

    const imageVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 20,
                delay: 0.2,
            },
        },
    }

    // Content sections based on active tab
    const renderContent = () => {
        switch (activeIndex) {
            case 0: // Overview
                return (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="overview"
                            className="flex flex-col h-full justify-center items-center text-center px-4 max-w-4xl mx-auto"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={containerVariants}
                        >
                            <motion.h1
                                className="text-5xl md:text-6xl font-bold mb-4 tracking-tight font-display"
                                variants={itemVariants}
                            >
                                Khoz
                            </motion.h1>
                            <motion.h2
                                className="text-3xl md:text-4xl font-medium mb-6 text-gray-800 font-display"
                                variants={itemVariants}
                            >
                                Find anything. Instantly.
                            </motion.h2>
                            <motion.p
                                className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl leading-relaxed"
                                variants={itemVariants}
                            >
                                A lightning-fast file search app for macOS, built for speed and simplicity.
                            </motion.p>
                            <motion.div variants={itemVariants} className="mb-10">
                                <Button
                                    onClick={handleDownload}
                                    className="bg-gray-900 hover:bg-black text-white px-6 py-5 rounded-lg text-lg flex items-center gap-2 font-medium transition-all duration-300 font-display hover:scale-105"
                                >
                                    <Download className="h-5 w-5" />
                                    Download for macOS
                                </Button>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                )

            case 1: // Features
                return (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="features"
                            className="h-full flex flex-col justify-center items-center px-4 py-8 max-w-5xl mx-auto"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={containerVariants}
                        >
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold text-center mb-12 font-display"
                                variants={itemVariants}
                            >
                                Why Khoz?
                            </motion.h2>
                            <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants}>
                                <motion.div
                                    className="flex flex-col p-8 rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="bg-gray-900 text-white p-3 rounded-lg mb-6 self-start">
                                        <Zap className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3 font-display">Lightning Fast</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Khoz indexes your files and launches results in milliseconds, ensuring you never wait to find what
                                        you need.
                                    </p>
                                </motion.div>
                                <motion.div
                                    className="flex flex-col p-8 rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="bg-gray-900 text-white p-3 rounded-lg mb-6 self-start">
                                        <Keyboard className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3 font-display">Keyboard-Centric</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        No mouse needed. Designed for power users who value efficiency and keyboard-driven workflows.
                                    </p>
                                </motion.div>
                                <motion.div
                                    className="flex flex-col p-8 rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="bg-gray-900 text-white p-3 rounded-lg mb-6 self-start">
                                        <Feather className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3 font-display">Lightweight</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Runs silently in the background with minimal resource usage, preserving your system's performance.
                                    </p>
                                </motion.div>
                                <motion.div
                                    className="flex flex-col p-8 rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="bg-gray-900 text-white p-3 rounded-lg mb-6 self-start">
                                        <BarChart className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3 font-display">Focused Search</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Like Alfred, but focused purely on files. No fluff, just powerful, precise file searching.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                )

            case 2: // Download
                return (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="download"
                            className="h-full flex flex-col justify-center items-center px-4 text-center max-w-4xl mx-auto"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={containerVariants}
                        >
                            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 font-display" variants={itemVariants}>
                                Ready to boost your productivity?
                            </motion.h2>
                            <motion.p className="text-lg text-gray-700 mb-10 max-w-2xl leading-relaxed" variants={itemVariants}>
                                Khoz is free, open-source, and requires macOS 12 or later. The installer is less than 10MB.
                            </motion.p>
                            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    onClick={handleDownload}
                                    className="bg-gray-900 hover:bg-black text-white px-8 py-6 rounded-lg text-lg flex items-center gap-2 mb-12 font-medium transition-all duration-300 font-display"
                                >
                                    <Download className="h-5 w-5" />
                                    Download Khoz for macOS
                                </Button>
                            </motion.div>
                            <motion.div
                                className="bg-gray-50 p-8 rounded-xl border border-gray-100 max-w-2xl shadow-sm"
                                variants={itemVariants}
                            >
                                <h3 className="text-2xl font-semibold mb-6 font-display">System Requirements</h3>
                                <ul className="space-y-4 text-left">
                                    <li className="flex items-start">
                                        <span className="text-gray-900 mr-3 font-bold">•</span>
                                        <span className="text-gray-700">macOS 12 (Monterey) or later</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-900 mr-3 font-bold">•</span>
                                        <span className="text-gray-700">Intel or Apple Silicon processor</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-900 mr-3 font-bold">•</span>
                                        <span className="text-gray-700">Minimal disk space (less than 10MB)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-900 mr-3 font-bold">•</span>
                                        <span className="text-gray-700">Low memory footprint</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                )

            case 3: // Testimonials
                return (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="testimonials"
                            className="h-full flex flex-col justify-center items-center px-4 max-w-6xl mx-auto"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={containerVariants}
                        >
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold text-center mb-12 font-display"
                                variants={itemVariants}
                            >
                                What Users Say
                            </motion.h2>
                            <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
                                <motion.div
                                    className="p-8 rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                                    variants={itemVariants}
                                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                >
                                    <p className="italic mb-6 text-gray-700 leading-relaxed">
                                        "Khoz is the fastest file search app I've ever used. It's become an essential part of my workflow
                                        and saves me hours every week."
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                                        <div>
                                            <p className="font-semibold">Alex Chen</p>
                                            <p className="text-sm text-gray-600">Software Developer</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="p-8 rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                                    variants={itemVariants}
                                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                >
                                    <p className="italic mb-6 text-gray-700 leading-relaxed">
                                        "As someone who works with thousands of files daily, Khoz has transformed how I navigate my
                                        projects and documents."
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                                        <div>
                                            <p className="font-semibold">Sarah Johnson</p>
                                            <p className="text-sm text-gray-600">UX Designer</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="p-8 rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                                    variants={itemVariants}
                                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                >
                                    <p className="italic mb-6 text-gray-700 leading-relaxed">
                                        "The keyboard-centric approach is perfect. I can find and open files without ever touching my mouse.
                                        Truly efficient."
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                                        <div>
                                            <p className="font-semibold">Michael Torres</p>
                                            <p className="text-sm text-gray-600">Product Manager</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                )

            case 4: // Community
                return (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="community"
                            className="h-full flex flex-col justify-center items-center px-4 text-center max-w-4xl mx-auto"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={containerVariants}
                        >
                            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 font-display" variants={itemVariants}>
                                Join Our Community
                            </motion.h2>
                            <motion.p className="text-lg text-gray-700 mb-12 max-w-2xl leading-relaxed" variants={itemVariants}>
                                Khoz is built by developers for developers. Join our growing community to contribute, report bugs, or
                                suggest features.
                            </motion.p>
                            <motion.div className="grid md:grid-cols-2 gap-8 w-full" variants={containerVariants}>
                                <motion.div
                                    className="p-8 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center shadow-sm hover:shadow-lg transition-all duration-300"
                                    variants={itemVariants}
                                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                >
                                    <Github className="h-12 w-12 mb-6 text-gray-900" />
                                    <h3 className="text-2xl font-semibold mb-3 font-display">GitHub</h3>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        Star our repository, report issues, or contribute code to help improve Khoz.
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="mt-auto border-2 font-medium font-display transition-all duration-300 hover:bg-gray-900 hover:text-white"
                                    >
                                        Visit GitHub
                                    </Button>
                                </motion.div>
                                <motion.div
                                    className="p-8 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center shadow-sm hover:shadow-lg transition-all duration-300"
                                    variants={itemVariants}
                                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                >
                                    <Users className="h-12 w-12 mb-6 text-gray-900" />
                                    <h3 className="text-2xl font-semibold mb-3 font-display">Discord</h3>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        Join our Discord server to chat with other users and developers about Khoz.
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="mt-auto border-2 font-medium font-display transition-all duration-300 hover:bg-gray-900 hover:text-white"
                                    >
                                        Join Discord
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                )

            case 5: // Support
                return (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="support"
                            className="h-full flex flex-col justify-center items-center px-4 max-w-4xl mx-auto"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={containerVariants}
                        >
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold text-center mb-10 font-display"
                                variants={itemVariants}
                            >
                                Support
                            </motion.h2>
                            <motion.div
                                className="bg-gray-50 p-8 rounded-xl border border-gray-100 w-full shadow-sm"
                                variants={itemVariants}
                            >
                                <h3 className="text-2xl font-semibold mb-6 font-display">Frequently Asked Questions</h3>
                                <div className="space-y-8">
                                    <motion.div
                                        variants={itemVariants}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                    >
                                        <h4 className="text-lg font-semibold mb-3 font-display">
                                            How does Khoz compare to Spotlight or Alfred?
                                        </h4>
                                        <p className="text-gray-700 leading-relaxed">
                                            Khoz is focused solely on file search, making it faster and more efficient than general-purpose
                                            tools like Spotlight. Unlike Alfred, Khoz is completely free and open-source.
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        variants={itemVariants}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                    >
                                        <h4 className="text-lg font-semibold mb-3 font-display">Does Khoz impact system performance?</h4>
                                        <p className="text-gray-700 leading-relaxed">
                                            No, Khoz is designed to be lightweight and uses minimal system resources. It runs silently in the
                                            background without slowing down your Mac.
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        variants={itemVariants}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                    >
                                        <h4 className="text-lg font-semibold mb-3 font-display">
                                            How do I report a bug or request a feature?
                                        </h4>
                                        <p className="text-gray-700 leading-relaxed">
                                            You can report bugs or request features on our GitHub repository. We welcome all feedback and
                                            contributions from our community.
                                        </p>
                                    </motion.div>
                                </div>
                                <motion.div className="mt-10 text-center" variants={itemVariants}>
                                    <p className="mb-4 text-gray-700">Need more help?</p>
                                    <Button
                                        variant="outline"
                                        className="flex items-center gap-2 border-2 font-medium font-display transition-all duration-300 hover:bg-gray-900 hover:text-white"
                                    >
                                        <HelpCircle className="h-4 w-4" />
                                        Contact Support
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                )

            default:
                return null
        }
    }

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Number keys 1-6 to navigate tabs
            if (e.key >= "1" && e.key <= "6") {
                const index = Number.parseInt(e.key) - 1
                if (index >= 0 && index < tabs.length) {
                    setActiveIndex(index)
                }
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [tabs.length])

    return (
        <div className="h-screen flex flex-col bg-white">
            {/* Main Content Area */}
            <div className="flex-1 overflow-hidden flex items-center justify-center">{renderContent()}</div>

            {/* Tabs at the bottom */}
            <div className="border-t border-gray-200">
                <Card className="w-full max-w-[1200px] h-[80px] border-none shadow-none relative flex items-center justify-center mx-auto">
                    <CardContent className="p-0">
                        <div className="relative">
                            {/* Hover Highlight */}
                            <motion.div
                                className="absolute h-[30px] bg-[#0e0f1114] rounded-[6px] flex items-center"
                                style={{
                                    ...hoverStyle,
                                    opacity: hoveredIndex !== null ? 1 : 0,
                                }}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: hoveredIndex !== null ? 1 : 0,
                                    transition: { duration: 0.2 },
                                }}
                            />

                            {/* Active Indicator */}
                            <motion.div
                                className="absolute top-[-6px] h-[2px] bg-[#0e0f11]"
                                style={activeStyle}
                                layoutId="activeTab"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />

                            {/* Tabs */}
                            <div className="relative flex space-x-[6px] items-center">
                                {tabs.map((tab, index) => (
                                    <div
                                        key={index}
                                        ref={(el) => { if (el) { tabRefs.current[index] = el } }}
                                        className={`px-4 py-2 cursor-pointer transition-colors duration-300 h-[30px] ${index === activeIndex ? "text-[#0e0e10]" : "text-[#0e0f1199]"
                                            }`}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        <motion.div
                                            className="text-sm font-medium leading-5 whitespace-nowrap flex items-center justify-center h-full font-display"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {tab}
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

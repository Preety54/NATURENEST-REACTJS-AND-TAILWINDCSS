import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
                {/* About Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4">About Nature Nest</h3>
                    <p className="text-gray-400">
                        At Nature Nest, we bring the beauty of nature into your home with eco-friendly products and designs. Let’s create a greener planet together.
                    </p>
                </div>
                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#Home" className="text-gray-400 hover:text-green-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#About" className="text-gray-400 hover:text-green-400">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#Popular" className="text-gray-400 hover:text-green-400">
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-400 hover:text-green-400">
                                Contact Us
                            </a>
                        </li>

                        
                    </ul>
                </div>

                
                {/* Contact Information */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                    <p className="text-gray-400">
                        <strong>Email:</strong> support@naturnest.com
                    </p>
                    <p className="text-gray-400">
                        <strong>Phone:</strong> +91 123-456-7890
                    </p>
                    <p className="text-gray-400">
                        <strong>Address:</strong> 7852 Jorhat, Assam, India
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p className="text-gray-500">
                    © 2024 Nature Nest. All Rights Reserved. | Designed with 💚 by Nature Nest Team.
                </p>
            </div>
        </footer>
    )
}

export default Footer

import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

export default function Footer() {
    return (
        <div>
            <footer class="bg-[#214d3e] text-white py-12 px-4 md:px-10 font-sans">

                <div class="max-w-7xl mx-auto flex flex-col items-center text-center">

                    <h2 class="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                        KeenKeeper
                    </h2>

                    <p class="text-gray-300 text-sm md:text-lg max-w-2xl mb-8 leading-relaxed">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>

                    <div class="flex flex-col items-center gap-4 mb-12">
                        <span class="text-lg font-medium">Social Links</span>

                        <div className="flex gap-4">
      <a 
        href="#" 
        className="btn btn-circle btn-sm md:btn-md bg-white text-[#214d3e] hover:bg-gray-200 border-none flex items-center justify-center"
      >
        <img 
          src={instagram} 
          alt="Instagram" 
          className="w-6 h-6 md:w-7 md:h-7" 
        />
      </a>

      <a 
        href="#" 
        className="btn btn-circle btn-sm md:btn-md bg-white text-[#214d3e] hover:bg-gray-200 border-none flex items-center justify-center"
      >
        <img 
          src={facebook} 
          alt="Facebook" 
          className="w-6 h-6 md:w-7 md:h-7" 
        />
      </a>

      <a 
        href="#" 
        className="btn btn-circle btn-sm md:btn-md bg-white text-[#214d3e] hover:bg-gray-200 border-none flex items-center justify-center"
      >
        <img 
          src={twitter} 
          alt="Twitter" 
          className="w-6 h-6 md:w-7 md:h-7" 
        />
      </a>
    </div>
                    </div>

                    <div class="w-full border-t border-white opacity-20 mb-8"></div>

                    <div class="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-300">

                        <div class="order-2 md:order-1">
                            © 2026 KeenKeeper. All rights reserved.
                        </div>

                        <div class="flex gap-6 md:gap-10 order-1 md:order-2">
                            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" class="hover:text-white transition-colors">Cookies</a>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

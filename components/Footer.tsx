import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center text-sm font-semibold tracking-tighter text-white">
                A
              </div>
              <span className="text-sm font-medium tracking-tight text-white">
                Agentic26
              </span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed">
              AI automation subscription for small and medium-sized businesses
              in the United States.
            </p>
          </div>
          <div>
            <div className="text-sm font-medium mb-6 text-white">Services</div>
            <ul className="space-y-3.5 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sales Agents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Operations Agents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Business Analysis
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium mb-6 text-white">Company</div>
            <ul className="space-y-3.5 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium mb-6 text-white">Contact</div>
            <ul className="space-y-3.5 text-sm text-neutral-400">
              <li className="flex items-center gap-3">
                <Icon icon="solar:phone-linear" className="text-neutral-500" />
                +1 (800) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:letter-linear"
                  className="text-neutral-500"
                />
                hello@agentic26.com
              </li>
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:map-point-linear"
                  className="text-neutral-500"
                />
                United States
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © 2025 Agentic26. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TabBar = () => {
    const pathname = usePathname();

    const tabs = [
        { name: 'Home', path: '/home' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Collection', path: '/collection' },
    ];

    return (
        <div className="w-full bg-white shadow-sm mb-6">
            <div className="max-w-2xl mx-auto">
                <nav className="flex">
                    {tabs.map((tab) => {
                        const isActive = pathname === tab.path;
                        return (
                            <Link
                                key={tab.path}
                                href={tab.path}
                                className={`px-4 py-2 text-sm font-medium border-b-2 flex-1 text-center transition-colors
                                    ${isActive 
                                        ? 'border-blue-500 text-blue-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                {tab.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default TabBar; 
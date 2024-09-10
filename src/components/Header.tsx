'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import * as Logo from './SVGLogos'

export default function Header() {
    const [menu, setMenu] = useState<Boolean>(false);

    const burgerHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        setMenu(true)
    };

    return (
    <header className='w-[100vw] p-2 md:p-4 text-6xl md:text-8xl flex justify-end text-gray-600'>
        <div className='flex gap-2 md:gap-4'>
            <Link href={'https://x.com/'} passHref legacyBehavior>
                <a target='_blank'>
                    <Logo.Twitter className="w-12 h-12 md:w-16 md:h-16 hover:text-gray-800"/>
                </a>
            </Link>
            <Link href={'https://github.com/'} passHref legacyBehavior>
                <a target='_blank'>
                    <Logo.Github className="w-12 h-12 md:w-16 md:h-16 p-1 hover:text-gray-800"/>
                </a>
            </Link>
        </div>
    </header>
    );
}

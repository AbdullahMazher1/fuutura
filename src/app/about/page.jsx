import { Direction } from '@/components/about/Direction'
import Mission from '@/components/about/Mission'
import Philosophy from '@/components/about/Philosophy'
import Values from '@/components/about/Values'
import Why from '@/components/about/Why'
import Hero from '@/components/about/Hero'
import React from 'react'

function page() {
    return (
        <div>
            <Hero />
            <Philosophy />
            <Values />
            <Why />
            <Direction />
            <Mission />
        </div>
    )
}

export default page

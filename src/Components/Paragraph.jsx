import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Paragraph({ value }) {
    const element = useRef(null);

    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.25"]
    });

    const words = value.split(" ");
    return (
        <p
            className="flex flex-wrap bg-black text-[#fafafa] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl leading-tight sm:leading-loose md:leading-tight tracking-tighter font-matter mb-20 relative"
            ref={element}
        >
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                    <Word key={i} range={[start, end]} progress={scrollYProgress}>
                        {word}
                    </Word>
                );
            })}
        </p>
    );
}

const Word = ({ range, children, progress }) => {
    const characters = children.split("");
    const amount = range[1] - range[0];
    const step = amount / characters.length;

    return (
        <span className="mt-1 sm:mt-2 md:mt-3 mr-1 sm:mr-2 md:mr-3 relative">
            {characters.map((char, i) => {
                const start = range[0] + step * i;
                const end = range[0] + step * (i + 1);
                return (
                    <Character key={i} range={[start, end]} progress={progress}>
                        {char}
                    </Character>
                );
            })}
        </span>
    );
};

const Character = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0.1, 1]); // Use a valid range

    return (
        <span>
            <span className="absolute opacity-10">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
};


export default Paragraph;

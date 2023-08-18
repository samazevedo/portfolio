import { animated, useTransition, config } from '@react-spring/web'
import { state } from '@/store/store'

interface SectionProps {
    // isVisible: boolean
    children: React.ReactNode
    delay?: number
}

export const Section = ({ children, delay }: SectionProps) => {
    const transitions = useTransition((state.isVisible = true), {
        from: { opacity: 0, transform: 'translateY(30px)' },
        enter: { opacity: 1, transform: 'translateY(0)' },
        // config:config.gentle
        config: {
            tension: 280,
            friction: 120,
            duration: 1000,
        },
        delay: delay,
    })

    return transitions((styles, item) =>
        item ? <animated.div style={styles}>{children}</animated.div> : null
    )
}

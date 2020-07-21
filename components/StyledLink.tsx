import Link from 'next/link'
import React, { useRef, useEffect, useState } from "react"
import { useSpring, animated } from 'react-spring'

import Divider from './Divider'

type StyledLinkProps = {
  href: string,
  as?: string,
  text: string | React.ReactNode,
  anchorOnly?: boolean,
  isAnimated?: boolean
}

export default ({href, as, text, anchorOnly=false, isAnimated=true}: StyledLinkProps) => {

  const targetRef = useRef<HTMLAnchorElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (targetRef.current) {
      setWidth(targetRef.current.offsetWidth);
    }
  }, []);

  const [isUnderlined, setUnderlined] = useState(false)
  const linkSpring = useSpring({ width: isUnderlined ? width : 0 })

  return (
    <>
      {anchorOnly ? (
        <a
          href={href}
          ref={targetRef}
          onMouseEnter={() => setUnderlined(!isUnderlined)}
          onMouseLeave={() => setUnderlined(!isUnderlined)}
          target="_blank"
        >
          {text}
        </a>
      ) : (
        <Link href={href} as={as}>
          <a
            ref={targetRef}
            onMouseEnter={() => setUnderlined(!isUnderlined)}
            onMouseLeave={() => setUnderlined(!isUnderlined)}
          >
            {text}
          </a>
        </Link>
      )}
      {isAnimated ? (
        <animated.div style={linkSpring}>
          <Divider isLink={true} />
        </animated.div>
      ) : <></>}
    </>
  );
}
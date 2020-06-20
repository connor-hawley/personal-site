import { useState, useEffect } from 'react'
import { Box, Text } from 'rebass'
import Link from 'next/link'

interface NavItemProps {
  link: string,
  text: string
}

export default ({ link, text }: NavItemProps) => {
  const [currentPath, setPath] = useState('')

  useEffect(() => {
    setPath(window.location.pathname)
  });

  return (
    <Box
      p={[1, 3]}
    >
      {link !== currentPath ? (
        <Link
          href={link}
        >
          <a>
            {text}
          </a>
        </Link>
      ) : (
        <Text
          fontWeight='bold'
        >
          {text}
        </Text>
      )}
    </Box>
  )
}
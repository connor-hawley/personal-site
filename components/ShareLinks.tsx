import { Flex, Box, Text } from 'rebass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from './StyledLink'
import { useEffect, useState } from "react";

export default () => {

  const [url, setUrl] = useState<string | undefined>()

  useEffect(() => {
    console.log(window)
    setUrl(window.location.href)
  }, [])


  const twitterParams = new URLSearchParams({
    text: `Interesting read! ${url}`,
  }).toString();


  return (
    <Flex flexDirection="row" p={2}>
      <Text
        m={1}
      >
        <b>Share:</b>{" "}
      </Text>
      <Box m={2}>
        <Link
          href={`https://twitter.com/intent/tweet?${twitterParams}`}
          text={
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              width="20"
            />
          }
          anchorOnly={true}
          isAnimated={false}
        />
      </Box>
      <Box m={2}>
        <CopyToClipboard text={url}>
          <a href="javascript:void(0)">
            <FontAwesomeIcon
              icon={"link"}
              width="20"
            />
          </a>
        </CopyToClipboard>
      </Box>
    </Flex>
  );
}
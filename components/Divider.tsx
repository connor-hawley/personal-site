import { Box } from 'rebass'

interface DividerProps {
  isLink?: boolean
}

export default ({ isLink=false }: DividerProps) => (
  <Box
    sx={{
      'borderBottomColor': `${isLink ? 'highlight_primary' : 'text_primary'}`,
      'borderBottomStyle': 'solid',
      'borderBottomWidth': '1px'
    }}
  />
)
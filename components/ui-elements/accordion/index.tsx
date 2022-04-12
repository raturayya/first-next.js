import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '5px',
  padding: '12px',
  backgroundColor: '#FEF7F6',
  marginBottom: '12px',
  '&:before': {
    display: 'none'
  }
}));

export default Accordion;

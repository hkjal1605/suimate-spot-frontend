import ContactPageModule from '@/modules/ContactPage';

export async function generateMetadata() {
  return {
    title: 'SuiMate - Copy Trading on Sui',
    description:
      'Explore, analyze, and evaluate on-chain traders from from the perpetual DEXs built on Sui'
  };
}

export default function Index() {
  return <ContactPageModule />;
}

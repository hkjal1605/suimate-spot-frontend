import HomePageModule from "@/modules/HomePage";

export async function generateMetadata() {
  return {
    title: "SuiMate Spot - Copy Trading on Sui",
    description:
      "Explore, analyze, and evaluate on-chain traders from the perpetual DEXs built on Sui",
  };
}

export default function Index() {
  return <HomePageModule />;
}

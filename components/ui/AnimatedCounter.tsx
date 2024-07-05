'use client'
import CountUp from "react-countup";
import { formatAmount } from "@/lib/utils";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <CountUp 
      end={amount}
      duration={2} 
      formattingFn={(value) => formatAmount(value)} 
    />
  );
};

export default AnimatedCounter;

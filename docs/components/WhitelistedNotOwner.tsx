import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { phase1Contract } from "../constants";
import { useEffect } from "react";
import type { QueryKey } from "@tanstack/react-query";
import { queryClient } from "./Web3Provider";

interface WhitelistedNotOwnerProps {
  accessQuery: QueryKey;
}

export const WhitelistedNotOwner = ({
  accessQuery,
}: WhitelistedNotOwnerProps) => {
  const { data: hash, writeContract, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });
  const disabled = isConfirming || isPending;
  const buttonClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  useEffect(() => {
    if (isConfirmed) {
      queryClient.invalidateQueries({ queryKey: accessQuery });
    }
  }, [isConfirmed]);

  return (
    <div className="flex flex-col gap-6 items-center">
      <span>
        Congrats, you have been whitelisted. Mint this NFT before you start
        deploying rollups
      </span>
      <button
        className={`bg-teal-primary w-44 h-9 px-4 rounded-lg ring-2 ring-teal-primary/25 text-black font-jetbrains font-bold ${buttonClass}`}
        onClick={() => {
          writeContract({
            ...phase1Contract,
            functionName: "mint",
            args: [],
          });
        }}
        disabled={disabled}
      >
        {disabled ? "Minting..." : "Mint NFT"}
      </button>
    </div>
  );
};
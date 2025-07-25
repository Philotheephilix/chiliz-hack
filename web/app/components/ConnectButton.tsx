import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";

export const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                      className="relative h-12 px-8 py-2 text-white font-mono font-bold uppercase tracking-wide overflow-hidden group"
                    style={{
                      background: "linear-gradient(90deg, rgba(207, 10, 10, 0.2) 0%, rgba(207, 10, 10, 0.4) 100%)",
                      clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)",
                      border: "1px solid rgba(207, 10, 10, 0.5)",
                      boxShadow: "0 0 20px rgba(207, 10, 10, 0.4)",
                    }}
                  >
                    <span className="relative z-10">Connect Wallet</span>
                    <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="relative h-12 px-8 py-2 text-white font-mono font-bold uppercase tracking-wide overflow-hidden group"
                    style={{
                      background: "linear-gradient(90deg, rgba(207, 10, 10, 0.2) 0%, rgba(207, 10, 10, 0.4) 100%)",
                      clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
                      border: "1px solid rgba(207, 10, 10, 0.5)",
                      boxShadow: "0 0 20px rgba(207, 10, 10, 0.4)",
                    }}
                  >
                    <span className="relative z-10">Wrong network</span>
                    <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </button>
                );
              }
              return (
                <div className="flex items-center gap-4">
                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="relative h-12 px-8 py-2 text-white font-mono font-bold uppercase tracking-wide overflow-hidden group"
                    style={{
                      background: "linear-gradient(90deg, rgba(207, 10, 10, 0.2) 0%, rgba(207, 10, 10, 0.4) 100%)",
                      clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)",
                      border: "1px solid rgba(207, 10, 10, 0.5)",
                      boxShadow: "0 0 20px rgba(207, 10, 10, 0.4)",
                    }}
                  >
                    <span className="relative z-10">
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ""}
                    </span>
                    <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

import {
  BellIcon,
  HomeIcon,
  Link2Icon,
  RefreshCwIcon,
  SettingsIcon,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const MainContentSection = (): JSX.Element => {
  return (
    <header className="w-full h-[72px] flex items-center justify-between gap-4 bg-[#101010] border-b border-[#2f2f2f] px-7">
      <div className="inline-flex items-center gap-2">
        <HomeIcon className="w-6 h-6 text-white" />
        <h1 className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-xl tracking-[0] leading-normal">
          Dashboard
        </h1>
      </div>

      <div className="inline-flex items-center gap-5 flex-1 justify-end">
        <div className="inline-flex h-12 items-center gap-2.5 px-2.5 py-1.5 rounded-md overflow-hidden border border-solid border-[#2f2f2f] bg-[linear-gradient(174deg,rgba(0,0,0,1)_0%,rgba(70,180,141,1)_100%)]">
          <div className="inline-flex items-center gap-1">
            <div className="inline-flex items-center gap-1">
              <img
                className="w-[35.13px] h-[34px]"
                alt="Margin Available Icon"
                src="/image-20.png"
              />

              <div className="inline-flex flex-col items-start justify-center gap-2.5">
                <div className="inline-flex items-start gap-1">
                  <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-sm tracking-[0] leading-normal whitespace-nowrap">
                    Margin Available
                  </span>

                  <RefreshCwIcon className="w-3 h-3 text-white" />
                </div>

                <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#e7e7e7] text-[10px] tracking-[0] leading-normal whitespace-nowrap">
                  Token Expiry: 30th Dec 25 | 12:22 AM
                </span>
              </div>
            </div>

            <div className="flex flex-col w-[100px] items-end gap-0.5">
              <span className="self-stretch [font-family:'Inter',Helvetica] font-semibold text-white text-sm tracking-[0] leading-normal">
                ₹20,00,764.64
              </span>

              <div className="flex items-center justify-end gap-[4.15px] self-stretch">
                <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#22d606] text-[8.3px] tracking-[0] leading-[12.4px] whitespace-nowrap">
                  Connected
                </span>

                <Link2Icon className="w-[8.99px] h-[8.99px] text-[#22d606]" />
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="w-4 h-3.5 p-0 hover:bg-transparent"
          >
            <img
              className="w-1 h-3.5"
              alt="More options"
              src="/bi-three-dots.svg"
            />
          </Button>
        </div>

        <div className="inline-flex items-center justify-end gap-6">
          <div className="inline-flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative w-10 h-10 p-0 hover:bg-transparent"
            >
              <BellIcon className="w-6 h-6 text-white" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative w-9 h-9 bg-[#2b2b2b] rounded-[7px] hover:bg-[#2b2b2b]"
            >
              <SettingsIcon className="w-4 h-[18px] text-white" />
              <Badge className="absolute -top-[5px] -right-[5px] w-[15px] h-[15px] bg-[#6f9aff] rounded-[7.5px] flex items-center justify-center p-0 hover:bg-[#6f9aff]">
                <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-[10px] text-center tracking-[0] leading-normal">
                  1
                </span>
              </Badge>
            </Button>
          </div>

          <Separator orientation="vertical" className="h-12 bg-[#2f2f2f]" />

          <div className="flex items-center gap-3 relative">
            <div className="relative">
              <Avatar className="w-10 h-10 rounded-full">
                <AvatarImage src="/67-1.png" alt="John Smith" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="absolute w-[6.67px] h-[9px] top-[2.5px] left-[7.7px] bg-[#22d606] rounded-[4.5px]" />
            </div>

            <div className="inline-flex flex-col items-end justify-center gap-0">
              <span className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-base tracking-[0] leading-[22px] whitespace-nowrap">
                John Smith
              </span>
              <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#c7c7c7] text-[10px] tracking-[0] leading-[22px]">
                @alphatrader
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

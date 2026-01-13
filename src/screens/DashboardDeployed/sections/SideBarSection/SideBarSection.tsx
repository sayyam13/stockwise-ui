import { SearchIcon, SettingsIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const navigationItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "/frame-1686554687-3.svg",
    isActive: true,
    hasDropdown: false,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: "/frame-1686554688.svg",
    isActive: false,
    hasDropdown: false,
  },
  {
    id: "pre-built-algos",
    label: "Pre-Built Algos",
    icon: "/frame-1686554687-1.svg",
    isActive: false,
    hasDropdown: true,
  },
  {
    id: "my-algos",
    label: "My Algos",
    icon: "/frame-1686554687.svg",
    isActive: false,
    hasDropdown: false,
  },
  {
    id: "my-account",
    label: "My Account",
    icon: "/frame-1686554687-2.svg",
    isActive: false,
    hasDropdown: false,
  },
];

export const SideBarSection = (): JSX.Element => {
  return (
    <aside className="w-[271px] h-screen flex flex-col bg-[#101010] relative">
      <img
        className="ml-5 w-[95px] h-[24.24px] mt-5"
        alt="Strykex white"
        src="/strykex-white-3.svg"
      />

      <div className="flex ml-5 w-[232px] h-11 relative mt-[24.8px] flex-col items-start justify-center gap-2.5 p-3.5 bg-[#2b2b2b] rounded-md">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px]">
          <div className="relative w-fit mt-[-1.00px] font-font-sizes-14-regular font-[number:var(--font-sizes-14-regular-font-weight)] text-[#c7c7c7] text-[length:var(--font-sizes-14-regular-font-size)] tracking-[var(--font-sizes-14-regular-letter-spacing)] leading-[var(--font-sizes-14-regular-line-height)] whitespace-nowrap [font-style:var(--font-sizes-14-regular-font-style)]">
            SearchIcon
          </div>

          <SearchIcon className="w-5 h-5 text-[#c7c7c7]" />
        </div>
      </div>

      <nav className="flex w-[251px] h-72 relative mt-6 flex-col items-end gap-3">
        {navigationItems.map((item) => (
          <div
            key={item.id}
            className="flex w-[251px] items-center justify-between relative flex-[0_0_auto]"
          >
            <div
              className={`relative w-1.5 h-12 rounded-[0px_11px_12px_0px] ${
                item.isActive ? "bg-[#407aff]" : ""
              }`}
            />

            <div
              className={`relative w-[232px] h-12 rounded-lg overflow-hidden ${
                item.isActive ? "bg-[#00162d]" : ""
              }`}
            >
              <div
                className={`flex w-[216px] h-8 items-center ${
                  item.hasDropdown ? "justify-between" : "gap-2"
                } absolute top-2 left-2`}
              >
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <img
                    className="relative w-8 h-8"
                    alt={item.label}
                    src={item.icon}
                  />

                  <div
                    className={`relative w-fit [font-family:'DM_Sans',Helvetica] font-medium text-base tracking-[0] leading-[normal] ${
                      item.isActive ? "text-white" : "text-[#c7c7c7]"
                    }`}
                  >
                    {item.label}
                  </div>
                </div>

                {item.hasDropdown && (
                  <img
                    className="relative w-[22px] h-[22px]"
                    alt="Dropdown"
                    src="/frame-1686554691.svg"
                  />
                )}
              </div>

              {item.isActive && (
                <div className="absolute top-[-34px] left-[131px] w-[74px] h-[63px] bg-[#407aff] rounded-[37px/31.5px] blur-[25px] opacity-60" />
              )}
            </div>
          </div>
        ))}
      </nav>

      <div className="flex ml-5 w-[231px] h-[241px] relative mt-[251px] flex-col items-start gap-4">
        <Card className="relative self-stretch w-full h-[166px] bg-white rounded-[15px] border-0">
          <CardContent className="p-0">
            <div className="absolute -top-px left-0 w-[231px] h-[168px] bg-[#00206b] rounded-[8.98px] overflow-hidden border-[0.22px] border-solid border-[#000000bf] shadow-[0px_0.9px_3.14px_#00000040]">
              <img
                className="absolute top-[calc(50.00%_-_84px)] left-[calc(50.00%_-_116px)] w-[231px] h-[154px]"
                alt="Pixels mask"
                src="/pixels-mask.png"
              />

              <div className="absolute top-16 left-[103px] w-[195px] h-[133px] bg-[#4a3aff] rounded-[97.32px/66.42px] rotate-[-15.46deg] blur-[44.92px] opacity-[0.88]" />

              <div className="top-16 left-[-67px] w-[195px] h-[133px] bg-[#4079ffd6] rounded-[97.32px/66.42px] rotate-[-164.54deg] blur-[44.92px] absolute opacity-[0.88]" />

              <div className="top-7 left-[calc(50.00%_-_103px)] w-[206px] h-[139px] rounded-[102.84px/69.4px] blur-[30.55px] bg-[linear-gradient(180deg,rgba(35,136,255,0.31)_0%,rgba(35,136,255,0)_100%)] absolute opacity-[0.88]" />

              <img
                className="absolute top-0 left-0 w-[231px] h-[168px]"
                alt="Lines"
                src="/lines.png"
              />

              <img
                className="absolute w-[12.41%] h-[16.27%] top-[7.23%] left-[5.26%]"
                alt="Vector"
                src="/vector-26.svg"
              />

              <Button className="flex w-[211px] h-[34px] items-center justify-center gap-[10.13px] p-[10.13px] absolute top-[126px] left-[calc(50.00%_-_105px)] bg-white rounded-[68.89px] hover:bg-white/90">
                <div className="relative w-fit mt-[-2.92px] mb-[-0.89px] [font-family:'DM_Sans',Helvetica] font-medium text-black text-[14.2px] tracking-[0] leading-[normal]">
                  Support
                </div>
              </Button>
            </div>

            <div className="absolute w-[47.37%] h-[15.66%] top-[26.51%] left-[5.26%] [font-family:'DM_Sans',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal]">
              Contact Us
            </div>

            <div className="absolute w-[89.04%] h-[19.28%] top-[45.78%] left-[5.26%] [font-family:'DM_Sans',Helvetica] font-normal text-[#c7c7c7] text-xs tracking-[0] leading-[normal]">
              A.I Trading Bots Trading Bots Lorem Ipsum
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col items-start gap-2.5 p-3 relative self-stretch w-full flex-[0_0_auto] bg-[#2b2b2b] rounded-lg overflow-hidden border-0">
          <CardContent className="p-0 w-full">
            <div className="flex items-center justify-between self-stretch w-full relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <img
                  className="relative w-[29.76px] h-[31px]"
                  alt="Mdi star four points"
                  src="/mdi-star-four-points-box.svg"
                />

                <div className="font-bold text-white text-base relative w-fit [font-family:'DM_Sans',Helvetica] tracking-[0] leading-[normal]">
                  Live Credits
                </div>
              </div>

              <Badge className="inline-flex items-center justify-center gap-2.5 px-[13px] py-2 relative flex-[0_0_auto] bg-[#ffffff14] rounded-[4.69px] hover:bg-[#ffffff14] border-0">
                <div className="w-[34px] mt-[-1.17px] [font-family:'Inter',Helvetica] font-normal text-transparent text-[25.5px] relative tracking-[0] leading-[normal]">
                  <span className="font-semibold text-white">2</span>

                  <span className="font-medium text-[#ffffffbf] text-[17px]">
                    /4
                  </span>
                </div>
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex ml-[19px] w-[232px] h-10 relative mt-6 items-center justify-between">
        <div className="flex w-[166px] items-center gap-2.5 relative h-10">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/67-1.png" alt="John Smith" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>

          <div className="w-fit font-font-sizes-16-medium font-[number:var(--font-sizes-16-medium-font-weight)] text-white text-[length:var(--font-sizes-16-medium-font-size)] whitespace-nowrap relative tracking-[var(--font-sizes-16-medium-letter-spacing)] leading-[var(--font-sizes-16-medium-line-height)] [font-style:var(--font-sizes-16-medium-font-style)]">
            John Smith
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="w-[39.45px] h-[39.33px] p-0"
        >
          <SettingsIcon className="w-6 h-6 text-white" />
        </Button>
      </div>

      <img
        className="absolute top-[77px] right-[-37px] w-[37px] h-[37px]"
        alt="Frame"
        src="/frame-1686556308.svg"
      />
    </aside>
  );
};

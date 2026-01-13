import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

const marketIndices = [
  {
    name: "Nifty",
    value: "23,508.40",
    change: "+258.90 (+1.11%)",
    isPositive: true,
  },
  {
    name: "Bank Nifty",
    value: "23,508.40",
    change: "+258.90 (+1.11%)",
    isPositive: true,
  },
  {
    name: "Midcap Nifty",
    value: "23,508.40",
    change: "-258.90 (-1.11%)",
    isPositive: false,
  },
  {
    name: "Nifty500",
    value: "23,508.40",
    change: "+258.90 (+1.11%)",
    isPositive: true,
  },
  {
    name: "INDIA VIX",
    value: "13.78",
    change: "+258.90 (+1.11%)",
    isPositive: true,
  },
];

const algoTableData = [
  {
    icon: "/frame-1686556199-1.svg",
    name: "Momentum Surge",
    multiplier: "2X",
    pnl: "+₹1,50,000",
    hasSquareOff: true,
    hasViewDetails: false,
    highlighted: false,
  },
  {
    icon: "/frame-1686556023.svg",
    name: "Momentum Surge",
    multiplier: "2X",
    pnl: "+₹1,50,000",
    hasSquareOff: false,
    hasViewDetails: true,
    highlighted: true,
  },
  {
    icon: "/frame-1686556200-2.svg",
    name: "Momentum Surge",
    multiplier: "2X",
    pnl: "+₹1,50,000",
    hasSquareOff: true,
    hasViewDetails: false,
    highlighted: false,
  },
  {
    icon: "/frame-1686556199-1.svg",
    name: "Momentum Surge",
    multiplier: "2X",
    pnl: "+₹1,50,000",
    hasSquareOff: true,
    hasViewDetails: false,
    highlighted: false,
  },
  {
    icon: "/frame-1686556023.svg",
    name: "Momentum Surge",
    multiplier: "2X",
    pnl: "+₹1,50,000",
    hasSquareOff: true,
    hasViewDetails: false,
    highlighted: false,
  },
];

const deployedAlgos = [
  {
    icon: "/frame-1686556200.svg",
    name: "Momentum AlgoFolio",
    status: "Live",
    statusColor: "bg-[#e01212]",
    deployedOn: "20th Nov 25 | 12:00 PM",
    deploymentType: "Live",
    deploymentBg: "bg-[#244ba5]",
    deploymentIcon: "/vector-3.svg",
    pnl: "+₹11,50,000",
  },
  {
    icon: "/frame-1686556023-1.svg",
    name: "Bank Nifty Monthly Straddle 2.0",
    status: "Waiting for next Signal",
    statusColor: "bg-[#3a2d00]",
    deployedOn: "20th Nov 25 | 12:00 PM",
    deploymentType: "Virtual",
    deploymentBg: "bg-[#612a00]",
    deploymentIcon: "/mingcute-laptop-line.svg",
    pnl: "+₹1,50,000",
  },
  {
    icon: "/frame-1686556199.svg",
    name: "Trend Individual Algo",
    status: "Live",
    statusColor: "bg-[#e01212]",
    deployedOn: "20th Nov 25 | 12:00 PM",
    deploymentType: "Live",
    deploymentBg: "bg-[#244ba5]",
    deploymentIcon: "/vector-3.svg",
    pnl: "+₹1,50,000",
  },
  {
    icon: "/frame-1686556200.svg",
    name: "SMC AlgoFolio",
    status: "Waiting for next Signal",
    statusColor: "bg-[#3a2d00]",
    deployedOn: "20th Nov 25 | 12:00 PM",
    deploymentType: "Virtual",
    deploymentBg: "bg-[#612a00]",
    deploymentIcon: "/mingcute-laptop-line.svg",
    pnl: "+₹1,50,000",
  },
  {
    icon: "/frame-1686556199.svg",
    name: "Trend Individual Algo",
    status: "Live",
    statusColor: "bg-[#e01212]",
    deployedOn: "20th Nov 25 | 12:00 PM",
    deploymentType: "Live",
    deploymentBg: "bg-[#244ba5]",
    deploymentIcon: "/vector-3.svg",
    pnl: "+₹1,50,000",
  },
  {
    icon: "/frame-1686556199.svg",
    name: "Trend Individual Algo",
    status: "Live",
    statusColor: "bg-[#e01212]",
    deployedOn: "20th Nov 25 | 12:00 PM",
    deploymentType: "Live",
    deploymentBg: "bg-[#244ba5]",
    deploymentIcon: "/vector-3.svg",
    pnl: "+₹1,50,000",
  },
  {
    icon: "/frame-1686556199.svg",
    name: "Trend Individual Algo",
    status: "Stopped",
    statusColor: "bg-[#3c0101]",
    deployedOn: "20th Nov 25 | 12:00 PM",
    deploymentType: "Live",
    deploymentBg: "bg-[#244ba5]",
    deploymentIcon: "/vector-3.svg",
    pnl: "+₹1,50,000",
  },
];

const featuredAlgos = [
  {
    badge: "Highest Win Rate",
    badgeBg:
      "bg-[linear-gradient(142deg,rgba(63,114,255,1)_0%,rgba(0,54,178,1)_49%,rgba(71,180,180,1)_100%)]",
    badgeIcon: "/vector-17.svg",
    bgColor: "bg-[#00081f]",
    bgImage: "/frame-1686555509.svg",
    vectorImage: "/vector-17.svg",
    icon: "/breakout-blitz.svg",
    name: "Midcap Nifty Option Scalper CE",
    creator: "By Stockwiz Tech. LLP",
    metricLabel: "Win Rate:",
    metricValue: "+80.89%",
    metricColor: "text-[#22d606]",
    metricBg:
      "bg-[linear-gradient(139deg,rgba(0,188,53,0.17)_0%,rgba(0,255,38,0.17)_100%)]",
    buttonText: "View Details",
    buttonBg: "border border-solid border-[#474747]",
  },
  {
    badge: "Most Deployed",
    badgeBg:
      "bg-[linear-gradient(136deg,rgba(0,102,177,1)_0%,rgba(227,77,255,1)_100%)]",
    badgeIcon: "/vector-20.svg",
    bgColor: "bg-[#150026]",
    bgImage: "/rectangle-39540.svg",
    vectorImage: "/vector-20.svg",
    icon: "/breakout-blitz.svg",
    name: "Midcap Nifty Option Scalper CE",
    creator: "By Stockwiz Tech. LLP",
    metricLabel: "Most Deployed:",
    metricValue: "2,480 Users",
    metricColor:
      "bg-[linear-gradient(146deg,rgba(137,205,255,1)_0%,rgba(227,77,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent]",
    metricBg:
      "bg-[linear-gradient(136deg,rgba(0,102,177,0.17)_0%,rgba(227,77,255,0.17)_100%)]",
    buttonText: "Deploy Now",
    buttonBg:
      "bg-[linear-gradient(136deg,rgba(0,102,177,1)_0%,rgba(227,77,255,1)_100%)]",
  },
  {
    badge: "Most Profitable",
    badgeBg:
      "bg-[linear-gradient(140deg,rgba(2,161,12,1)_0%,rgba(161,118,0,1)_100%)]",
    badgeIcon: "/vector-3.svg",
    bgColor: "bg-[#001506]",
    bgImage: null,
    vectorImage: "/vector-3.svg",
    icon: "/breakout-blitz.svg",
    name: "Midcap Nifty Option Scalper CE",
    creator: "By Stockwiz Tech. LLP",
    metricLabel: "Most Profitable:",
    metricValue: "+₹2,480",
    metricColor: "text-[#22d606]",
    metricBg:
      "bg-[linear-gradient(140deg,rgba(2,161,12,0.12)_0%,rgba(161,118,0,0.12)_100%)]",
    buttonText: "Deploy Now",
    buttonBg:
      "bg-[linear-gradient(140deg,rgba(2,161,12,1)_0%,rgba(161,118,0,1)_100%)]",
  },
];

export const DashboardOverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-6">
      <div className="w-full bg-[#3c0101] rounded-xl overflow-hidden p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              className="w-6 h-6"
              alt="Material symbols"
              src="/material-symbols-error-outline.svg"
            />
            <div className="flex items-center gap-1">
              <div className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
                Order failed
              </div>
              <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#c7c7c7] text-xl tracking-[0] leading-[normal]">
                Order failed in 3 strategies have failed orders
              </div>
            </div>
          </div>
          <Button className="h-7 px-3 py-[3px] bg-white text-black hover:bg-white/90 rounded-md">
            <span className="font-semibold text-base [font-family:'DM_Sans',Helvetica]">
              View All
            </span>
          </Button>
        </div>
      </div>

      <div className="[font-family:'DM_Sans',Helvetica] font-normal text-transparent text-4xl tracking-[0] leading-[normal]">
        <span className="font-semibold text-[#ffffff99]">👋</span>
        <span className="font-medium text-[#ffffffbf]"> Good Morning</span>
        <span className="font-semibold text-white">, Sambhav Singhv</span>
        <span className="font-semibold text-[#ffffff99]">i</span>
      </div>

      <div className="flex flex-col items-start gap-4 w-full">
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex-1 bg-[#101010] rounded-lg overflow-hidden border border-solid border-[#474747] p-4">
            <div className="flex items-center gap-3.5">
              {marketIndices.map((index, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <div className="flex flex-col gap-2.5">
                    <div className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                      {index.name}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-lg tracking-[0] leading-[normal]">
                        {index.value}
                      </div>
                      <div
                        className={`[font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-[normal] ${
                          index.isPositive ? "text-[#22d606]" : "text-[#e01212]"
                        }`}
                      >
                        {index.change}
                      </div>
                    </div>
                  </div>
                  {idx < marketIndices.length - 1 && (
                    <img
                      className="h-11 w-px object-cover"
                      alt="Line"
                      src="/line-273.svg"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-[243px] h-[77px] rounded-[10.67px] overflow-hidden bg-[linear-gradient(173deg,rgba(0,0,0,1)_0%,rgba(60,255,73,1)_100%)] relative">
            <img
              className="absolute top-[-72px] left-[calc(50.00%_-_140px)] w-[244px] h-[239px]"
              alt="Pattern"
              src="/pattern.svg"
            />
            <div className="flex flex-col gap-1 absolute top-[calc(50.00%_-_26px)] left-3.5">
              <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#ffffffbf] text-base tracking-[0] leading-[normal]">
                Market Sentiment
              </div>
              <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[21.3px] tracking-[0] leading-[normal]">
                Bullish
              </div>
            </div>
            <img
              className="absolute top-2.5 left-[135px] w-[108px] h-[76px]"
              alt="Vector"
              src="/vector-5.svg"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-2.5 p-4 w-full bg-[#101010] rounded-xl overflow-hidden border border-solid border-[#2f2f2f]">
          <div className="flex items-start justify-between w-full gap-4">
            <Card className="w-[600px] h-[537px] rounded-xl overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(0,10,38,1)_0%,rgba(0,0,0,1)_100%)] border-0">
              <CardContent className="p-3">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2.5 p-2.5 bg-[#ffffff12] rounded-lg">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                              <div className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal]">
                                Overall Profit/Loss
                              </div>
                            </div>
                            <img
                              className="w-[16.67px] h-[16.67px]"
                              alt="Vector"
                              src="/vector-6.svg"
                            />
                            <div className="font-normal text-white text-sm whitespace-nowrap [font-family:'DM_Sans',Helvetica] tracking-[0] leading-[normal]">
                              View More
                            </div>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <div className="[font-family:'Inter',Helvetica] font-bold text-[#22d606] text-2xl whitespace-nowrap tracking-[0] leading-[normal]">
                              +₹1,50,000.84
                            </div>
                            <div className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] underline">
                              in 5 transactions
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <div className="flex flex-col items-start gap-2.5 p-0.5 bg-[#2b2b2b] rounded-[5px] overflow-hidden">
                            <div className="flex items-center">
                              <div className="flex w-[74px] items-center justify-center gap-1 px-3 py-[3px] bg-white rounded-[3px] overflow-hidden">
                                <div className="font-medium text-black text-sm [font-family:'DM_Sans',Helvetica] tracking-[0] leading-[normal]">
                                  Live
                                </div>
                                <img
                                  className="w-[14.12px] h-[7.06px]"
                                  alt="Vector"
                                  src="/vector-3.svg"
                                />
                              </div>
                              <div className="flex items-center justify-center gap-1 px-[11px] py-[3px] rounded-[3px] overflow-hidden">
                                <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#ffffffbf] text-sm tracking-[0] leading-[normal]">
                                  Virtual
                                </div>
                                <img
                                  className="w-[11.76px] h-2.5"
                                  alt="Vector"
                                  src="/vector-9.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <img
                            className="w-10"
                            alt="Frame"
                            src="/frame-1686555851.svg"
                          />
                        </div>
                      </div>
                      <div className="[font-family:'DM_Sans',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                        <span className="text-[#ffffffbf]">Last Updated: </span>
                        <span className="font-semibold text-white">
                          25th Oct 2025 | 11:53 PM
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 px-[9px] py-2 bg-black rounded border border-solid border-[#474747]">
                          <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#c7c7c7] text-sm tracking-[0] leading-[normal]">
                            Booked P&amp;L
                          </div>
                          <div className="flex items-start gap-1.5">
                            <div className="[font-family:'Inter',Helvetica] font-bold text-[#22d606] text-sm whitespace-nowrap tracking-[0] leading-[normal]">
                              +₹1,50,000.84
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 px-[9px] py-2 bg-black rounded border border-solid border-[#474747]">
                          <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#c7c7c7] text-sm tracking-[0] leading-[normal]">
                            Cap Deployed
                          </div>
                          <div className="flex items-start gap-1.5">
                            <div className="[font-family:'Inter',Helvetica] font-bold text-white text-sm whitespace-nowrap tracking-[0] leading-[normal]">
                              ₹1,50,000.84
                            </div>
                          </div>
                        </div>
                        <div className="flex h-[34px] items-center gap-1.5 pt-2 pb-2.5 px-[9px] bg-black rounded border border-solid border-[#474747]">
                          <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#c7c7c7] text-sm tracking-[0] leading-[normal]">
                            Active Algos
                          </div>
                          <div className="flex items-start gap-1.5">
                            <div className="[font-family:'Inter',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                              4
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#ffffff12] rounded-lg overflow-hidden">
                    <div className="flex flex-col items-center p-3">
                      <div className="flex items-center justify-between w-full mb-3">
                        <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#c7c7c7] text-base tracking-[0] leading-[normal]">
                          Algo Name
                        </div>
                        <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#c7c7c7] text-base tracking-[0] leading-[normal]">
                          Multiplier
                        </div>
                        <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#c7c7c7] text-base tracking-[0] leading-[normal]">
                          P&amp;L
                        </div>
                      </div>
                      <div className="flex flex-col w-full">
                        {algoTableData.map((algo, index) => (
                          <div
                            key={index}
                            className={`flex items-center justify-between w-full h-[60px] px-4 border-b border-[#474747] ${
                              algo.highlighted ? "bg-[#ffffff14]" : ""
                            }`}
                          >
                            <div className="flex items-center gap-1 w-[169px]">
                              <img
                                className="w-7 h-7"
                                alt="Frame"
                                src={algo.icon}
                              />
                              <div
                                className={`[font-family:'DM_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] ${
                                  algo.hasViewDetails ? "underline" : ""
                                }`}
                              >
                                {algo.name}
                              </div>
                            </div>
                            <div className="[font-family:'Inter',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                              {algo.multiplier}
                            </div>
                            <div className="[font-family:'Inter',Helvetica] font-semibold text-[#22d606] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                              {algo.pnl}
                            </div>
                            {algo.hasSquareOff && (
                              <div className="flex items-center gap-[4.96px] p-[8.26px] bg-[#3c0101] rounded-[6.61px] border border-solid border-[#e01212]">
                                <img
                                  className="w-4 h-4"
                                  alt="Ci exit"
                                  src="/ci-exit.svg"
                                />
                                <div className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-xs text-right tracking-[0] leading-[normal]">
                                  Square Off
                                </div>
                              </div>
                            )}
                            {algo.hasViewDetails && (
                              <div className="font-semibold text-white text-xs text-right underline [font-family:'DM_Sans',Helvetica] tracking-[0] leading-[normal]">
                                View Details
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute right-0 top-0 w-[11px] h-full bg-[#3a3a3a]" />
                    <div className="absolute right-0 top-0 w-[11px] h-[86px] bg-[#5c5c5c]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-[780px] h-[537px] bg-black rounded-xl overflow-hidden border border-solid border-[#474747]">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10"
                          alt="Mynaui notification"
                          src="/mynaui-notification-solid.svg"
                        />
                        <div className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
                          Deployed Algos
                        </div>
                      </div>
                      <img
                        className="w-[16.67px] h-[16.67px]"
                        alt="Vector"
                        src="/vector-6.svg"
                      />
                    </div>
                    <div className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                      View More
                    </div>
                  </div>
                  <Tabs defaultValue="all" className="w-auto">
                    <TabsList className="bg-transparent gap-1.5">
                      <TabsTrigger
                        value="all"
                        className="h-[30px] px-3.5 py-2.5 bg-white rounded-[63px] data-[state=inactive]:bg-transparent data-[state=inactive]:border data-[state=inactive]:border-[#ffffff33]"
                      >
                        <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-black text-sm data-[state=inactive]:font-normal data-[state=inactive]:text-white">
                          All
                        </span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="active"
                        className="h-[30px] px-3.5 py-2.5 rounded-[63px] border border-[#ffffff33] data-[state=active]:bg-white"
                      >
                        <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-sm data-[state=active]:font-semibold data-[state=active]:text-black">
                          Active
                        </span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="paused"
                        className="h-[30px] px-3.5 py-2.5 rounded-[63px] border border-[#ffffff33] data-[state=active]:bg-white"
                      >
                        <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-sm data-[state=active]:font-semibold data-[state=active]:text-black">
                          Paused
                        </span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="stopped"
                        className="h-[30px] px-3.5 py-2.5 rounded-[63px] border border-[#ffffff33] data-[state=active]:bg-white"
                      >
                        <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-sm data-[state=active]:font-semibold data-[state=active]:text-black">
                          Stopped
                        </span>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div className="relative">
                  <div className="flex flex-col">
                    {deployedAlgos.map((algo, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between px-4 py-3 border-b border-[#474747]"
                      >
                        <div className="flex items-center gap-2.5">
                          <img
                            className="w-[43.41px] h-[43.41px]"
                            alt="Frame"
                            src={algo.icon}
                          />
                          <div className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-1">
                              <div className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                                {algo.name}
                              </div>
                              <div
                                className={`flex h-[18px] items-center justify-center gap-1 px-1.5 py-1 ${algo.statusColor} rounded-[10.59px]`}
                              >
                                {algo.status === "Live" && (
                                  <div className="w-[7.06px] h-[7.06px] bg-white rounded-[3.53px]" />
                                )}
                                {algo.status === "Waiting for next Signal" && (
                                  <div className="relative w-[13px] h-[13px]">
                                    <div className="absolute top-px left-px w-[11px] h-[11px] bg-[#ffd0003d] rounded-[5.69px]" />
                                    <div className="absolute top-1 left-1 w-[5px] h-[5px] bg-[#ffd000] rounded-[2.44px]" />
                                  </div>
                                )}
                                {algo.status === "Stopped" && (
                                  <div className="relative w-[13px] h-[13px]">
                                    <div className="absolute top-px left-px w-[11px] h-[11px] bg-[#ff00003d] rounded-[5.69px]" />
                                    <div className="absolute top-1 left-1 w-[5px] h-[5px] bg-[#fe0000] rounded-[2.44px]" />
                                  </div>
                                )}
                                <div className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                                  {algo.status}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="flex items-center gap-1">
                                <img
                                  className="w-[8.59px] h-[14.31px]"
                                  alt="Vector"
                                  src="/vector-1.svg"
                                />
                                <div className="[font-family:'DM_Sans',Helvetica] font-normal text-transparent text-xs tracking-[0] leading-[normal]">
                                  <span className="font-medium text-[#c7c7c7]">
                                    Deployed on:{" "}
                                  </span>
                                  <span className="font-semibold text-white">
                                    {algo.deployedOn}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-[21px]">
                          <div className="flex flex-col items-end gap-2">
                            <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#c7c7c7] text-sm text-right tracking-[0] leading-[normal]">
                              Deployment Type
                            </div>
                            <div
                              className={`flex h-[18px] items-center justify-center gap-1 px-1.5 py-1 ${algo.deploymentBg} rounded-[10.59px]`}
                            >
                              <img
                                className="w-3 h-3"
                                alt="Vector"
                                src={algo.deploymentIcon}
                              />
                              <div className="font-semibold text-white text-xs [font-family:'DM_Sans',Helvetica] tracking-[0] leading-[normal]">
                                {algo.deploymentType}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-[5px]">
                            <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#c7c7c7] text-sm text-right tracking-[0] leading-[normal]">
                              Total P&amp;L
                            </div>
                            <div className="[font-family:'Inter',Helvetica] font-bold text-[#22d606] text-lg text-right tracking-[0] leading-[normal]">
                              {algo.pnl}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-3.5 right-0 w-[11px] h-[462px] bg-[#3a3a3a]" />
                  <div className="absolute top-3.5 right-0 w-[11px] h-[117px] bg-[#5c5c5c]" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2.5 p-5 w-full bg-[#101010] rounded-xl overflow-hidden border border-solid border-[#2f2f2f]">
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex items-end gap-3">
              <div className="flex items-center gap-2">
                <img
                  className="w-6 h-6"
                  alt="Basil bag outline"
                  src="/basil-bag-outline.svg"
                />
                <div className="flex items-center gap-1.5">
                  <div className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
                    Featured Algos 🔥
                  </div>
                  <img
                    className="w-[16.67px] h-[16.67px]"
                    alt="Vector"
                    src="/vector-6.svg"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full gap-4">
              {featuredAlgos.map((algo, index) => (
                <Card
                  key={index}
                  className={`w-[447px] h-[254px] ${algo.bgColor} rounded-[12.8px] overflow-hidden backdrop-blur-[2.96px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.96px)_brightness(100%)] border-0 relative ${
                    index === 2
                      ? "before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[12.8px] before:[background:linear-gradient(59deg,rgba(255,228,118,1)_0%,rgba(37,95,75,0)_53%,rgba(74,180,70,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                      : ""
                  }`}
                >
                  <CardContent className="p-0 relative">
                    {algo.bgImage && (
                      <img
                        className="absolute top-0 left-0 w-full h-[247px]"
                        alt="Frame"
                        src={algo.bgImage}
                      />
                    )}
                    {algo.vectorImage && (
                      <img
                        className={`absolute ${
                          index === 0
                            ? "w-[32.66%] h-[55.42%] top-0 left-[70.13%]"
                            : index === 1
                              ? "top-[17px] left-[297px] w-[140px] h-[101px]"
                              : "top-[35px] left-[304px] w-32 h-16"
                        }`}
                        alt="Vector"
                        src={algo.vectorImage}
                      />
                    )}
                    <div
                      className={`flex items-center justify-center gap-2 p-2 absolute -top-0.5 ${
                        index === 0 ? "left-[291px]" : "left-[293px]"
                      } rounded-[0px_8.53px_0px_8.53px] overflow-hidden ${
                        algo.badgeBg
                      }`}
                    >
                      <img
                        className={`${
                          index === 0
                            ? "w-[16.95px] h-[16.95px]"
                            : index === 1
                              ? "w-[21px] h-[15px]"
                              : "w-[21.33px] h-[10.66px]"
                        }`}
                        alt="Vector"
                        src={algo.badgeIcon}
                      />
                      <div className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
                        {algo.badge}
                      </div>
                    </div>
                    <div
                      className={`flex flex-col items-start gap-4 absolute top-4 ${
                        index === 0
                          ? "left-4 w-[415px]"
                          : "left-[18px] w-[414px]"
                      }`}
                    >
                      <div className="flex flex-col items-start gap-[13.86px] w-full">
                        <div className="flex flex-col items-start gap-[5.33px] w-full">
                          <img
                            className="w-[49.93px] h-[49.93px]"
                            alt="Breakout blitz"
                            src={algo.icon}
                          />
                          <div className="flex flex-col items-center gap-[5.7px] w-full">
                            <div className="w-full [font-family:'DM_Sans',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
                              {algo.name}
                            </div>
                            <div className="flex items-start gap-[2.85px] w-full">
                              <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#c7c7c7] text-base tracking-[0] leading-[normal]">
                                {algo.creator}
                              </div>
                              <img
                                className="w-[20.56px] h-[19.63px]"
                                alt="Vector"
                                src="/vector.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className={`flex items-center justify-between px-[13px] py-2 w-full rounded-[8.53px] ${
                            algo.metricBg
                          } ${index === 0 ? "h-auto" : "h-[42px]"}`}
                        >
                          <div className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">
                            {algo.metricLabel}
                          </div>
                          <div
                            className={`[font-family:'DM_Sans',Helvetica] font-bold text-xl tracking-[0] leading-[normal] ${
                              index === 0
                                ? "[text-shadow:0px_0px_25.59px_#22d60696] text-[#22d606]"
                                : index === 1
                                  ? "[text-shadow:0px_-1.07px_24.74px_#a554ea] " +
                                    algo.metricColor
                                  : "[text-shadow:0px_0px_25.59px_#22d60696] text-[#22d606]"
                            }`}
                          >
                            {algo.metricValue}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`absolute ${
                        index === 0
                          ? "top-[198px] left-[calc(50.00%_-_208px)]"
                          : index === 1
                            ? "top-[198px] left-[calc(50.00%_-_208px)]"
                            : "top-[198px] left-[18px]"
                      } w-[415px] h-10 flex items-center justify-center rounded-md overflow-hidden ${
                        algo.buttonBg
                      }`}
                    >
                      <div className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal]">
                        {algo.buttonText}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

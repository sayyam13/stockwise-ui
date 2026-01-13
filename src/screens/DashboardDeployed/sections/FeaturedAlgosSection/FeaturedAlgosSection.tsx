export const FeaturedAlgosSection = (): JSX.Element => {
  const contactItems = [
    {
      icon: "/ic-baseline-phone.svg",
      text: "+91 6377959992",
      alt: "Ic baseline phone",
    },
    {
      icon: "/ic-baseline-phone.svg",
      text: "+91 6377959992",
      alt: "Ic baseline phone",
    },
    {
      icon: "/ic-round-email.svg",
      text: "Sambhav@stryke.tech",
      alt: "Ic round email",
    },
  ];

  return (
    <footer className="w-full h-[45px] flex items-center justify-between px-4 bg-black border-t border-[#474747]">
      <div className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
        © 2025 StrykeX. All rights reserved.
      </div>

      <div className="inline-flex items-center gap-6">
        {contactItems.map((item, index) => (
          <div key={index} className="inline-flex items-center gap-1">
            <img className="w-[21px] h-[21px]" alt={item.alt} src={item.icon} />
            <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#c7c7c7] text-[16.1px] tracking-[0] leading-[normal]">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

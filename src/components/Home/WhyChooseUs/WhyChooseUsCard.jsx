import IconWrapper from "../IconWrapper";

const WhyChooseUsCard = ({ title, description, Icon }) => {
  return (
    <div className="h-full flex flex-col justify-start text-center items-center p-8 bg-brand-neutral  rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <IconWrapper Icon={Icon} />

      <h4 className="h4 mt-2  mb-4">{title}</h4>
      <p className="body-text text-center">{description}</p>
    </div>
  );
};

export default WhyChooseUsCard;

const FeedbackCard = ({ content, name, title }) => (
  <div className="flex justify-between flex-col px-8 py-8 rounded-[20px] w-1/2 mr-0 my-4 feedback-card">
    <div className="flex flex-row">
      <div className="flex flex-col">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-balck">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[15px] leading-[24px] text-blue-400">
          {title}
        </p>
      </div>
    </div>
    <p className="font-poppins font-normal text-[15px] text-balck my-5">
      {content}
    </p>
  </div>
);
0;

export default FeedbackCard;

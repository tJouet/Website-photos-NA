interface Title {
  content: string;
  subText?: string;
}

const Title: React.FC<Title> = ({ content, subText }) => (
  <>
    <div className="flex flex-row w-full px-36 my-16 justify-center items-end">
      <h1 className=" text-6xl font-bold ">{content}</h1>
    </div>
  </>
);
export default Title;

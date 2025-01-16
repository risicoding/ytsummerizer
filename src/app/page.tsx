import UrlForm from "@/components/url-form";

const Page = () => {
  return (
    <div className="flex max-w-2xl flex-col items-center justify-between bg-black pt-24 ">
      <h1 className="bg-gradient-to-br from-neutral-600 via-white to-white bg-clip-text text-center text-6xl font-semibold text-transparent duration-700 animate-in fade-in">
        Summerize youtube videos with ease
      </h1>
      <UrlForm/>
    </div>
  );
};

export default Page;

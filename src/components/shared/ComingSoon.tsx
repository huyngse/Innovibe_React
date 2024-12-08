import ComingSoonImage from "@/assets/imgs/comming-soon.png";
const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center flex flex-col items-center">
        <img src={ComingSoonImage} alt="" width={250} />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Sắp ra mắt!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Chúng tôi đang nỗ lực để mang tính năng này đến với bạn. Hãy theo dõi
          nhé!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;

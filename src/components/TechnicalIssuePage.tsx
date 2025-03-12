const TechnicalIssuePage = () => {
  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Chúng tôi xin lỗi!
        </h1>
        <p className="text-gray-700 mb-6">
          Trang web của chúng tôi hiện đang gặp sự cố kỹ thuật. Chúng tôi đang
          nỗ lực để giải quyết vấn đề.
        </p>
        <p className="text-gray-500">
          Vui lòng kiểm tra lại sau. Cảm ơn sự kiên nhẫn của bạn!
        </p>
      </div>
    </div>
  );
};

export default TechnicalIssuePage;

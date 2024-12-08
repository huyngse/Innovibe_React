const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="mt-4 text-2xl text-gray-800">Không tìm thấy trang</h2>
        <p className="mt-2 text-gray-600">
          Rất tiếc, trang bạn đang tìm kiếm không tồn tại.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
        >
          Quay về trang chủ
        </a>
      </div>
    </div>
  );
};

export default NotFound;

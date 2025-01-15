function getRecordIndices(currentPage, perPage, totalPage) {
  // Kiểm tra nếu currentPage nằm ngoài phạm vi hợp lệ
  if (currentPage < 1 || currentPage > totalPage) {
    return { startIndex: -1, endIndex: -1 };
  }

  // Tính toán chỉ số bản ghi bắt đầu
  const startIndex = (currentPage - 1) * perPage;

  // Tính toán chỉ số bản ghi kết thúc
  let endIndex = startIndex + perPage - 1;

  // Đảm bảo chỉ số bản ghi kết thúc không vượt quá tổng số bản ghi
  const totalRecords = totalPage * perPage;
  if (endIndex >= totalRecords) {
    endIndex = totalRecords - 1;
  }

  return { startIndex, endIndex };
}
self.onmessage = async ($params) => {
  try {
    // fetch from index DB
    let rowsData = [];
    const DBOpenRequest = window.indexedDB.open("toDoList");
    DBOpenRequest.onsuccess = (e) => {
      rowsData = DBOpenRequest.result;
    };
    // pagination
    const search = $params?.data?.search;
    const currentPage = $params?.data?.currentPage;
    const perPage = $params?.data?.perPage;
    const totalPage = rowsData.length;
    const pageIndex = getRecordIndices(currentPage, perPage, totalPage);
    let result = [];
    let filteredData = [];
    if (search) {
      filteredData = rowsData.filter((row) => row.includes(search));
      const filteredTotalPage = Math.ceil(filteredData.length / perPage);
      const filteredPageIndex = getRecordIndices(
        currentPage,
        perPage,
        filteredTotalPage,
      );
      result = filteredData.slice(
        filteredPageIndex.startIndex,
        filteredPageIndex.endIndex + 1,
      );
    } else {
      result = rowsData.slice(pageIndex.startIndex, pageIndex.endIndex + 1);
    }
    self.postMessage({
      data: {
        type: "success",
        data: result.map((item) => {
          return item;
        }),
        totalRows: search ? filteredData.length : rowsData.length,
      },
    });
  } catch (e) {
    /* Pass the error message back */
    self.postMessage({
      data: {
        type: "error",
        data: [],
        totalRows: 0,
      },
    });
  }
};

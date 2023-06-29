import useBrand from "@/src/Hooks/useBrand/useBrand";
import useCategory from "@/src/Hooks/useCategory/useCategory";
import Paginetion from "@/src/Shared/Paginetion/Paginetion";
import React from "react";

const ManageBrand = () => {
  // const {
  //   page,
  //   handlePrevPage,
  //   totalPages,
  //   handleNextPage,
  //   categoriesData,
  //   setPage,
  //   handleDeleteCategory,
  // } = useCategory();

  const {
    page,
    handlePrevPage,
    totalPages,
    handleNextPage,
    brandsData,
    totalBrands,
    pageSize,
    setPage,
    isLoadingBrands,
    handleDeleteBrand,
  } = useBrand();

  return (
    <section>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="  overflow-x-auto sm:-mx-6 ">
            <div className="inline-block w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        S No.
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Brand Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {brandsData &&
                      brandsData?.map((brands, Index) => {
                        return (
                          <tr key={Index}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                <span>{Index + 1}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {brands?.brandName}
                            </td>

                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <div className="flex items-center gap-x-6">
                                <button
                                  className="text-red-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                                  onClick={() => handleDeleteBrand(brands?._id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <Paginetion
          page={page}
          handlePrevPage={handlePrevPage}
          totalPages={totalPages}
          handleNextPage={handleNextPage}
          setPage={setPage}
        />
      </section>
    </section>
  );
};

export default ManageBrand;

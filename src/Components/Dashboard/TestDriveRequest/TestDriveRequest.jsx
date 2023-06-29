import useTestDrive from "@/src/Hooks/useTestDrive/useTestDrive";
import React from "react";

const TestDriveRequest = () => {
  const { testDriveData, handelDelete } = useTestDrive();

  return (
    <section>
      <div className="titleSection">
        <h1 className=" font-bold text-[1.8rem] my-2">Test Drive Request</h1>
        <h2 className="text-[1.5rem]">
          Total Test Drive : {testDriveData?.length}{" "}
        </h2>
      </div>
      <hr className="my-4" />
      <div className="tableContainer">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b bg-white font-medium dark:border-neutral-200 dark:bg-neutral-300">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        S No.
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Customer Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Customer Phone
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Car Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {testDriveData &&
                      testDriveData?.map((testDrive, Index) => {
                        return (
                          <tr
                            key={Index}
                            className="border-b bg-white dark:border-neutral-200 dark:bg-neutral-300"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {Index + 1}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {new Date(testDrive?.date).toLocaleDateString(
                                "en-GB"
                              )}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {testDrive?.customerName}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {testDrive?.phoneNumber}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {testDrive?.productName}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <button
                                onClick={() => handelDelete(testDrive?._id)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                              >
                                Delete
                              </button>
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
      </div>
    </section>
  );
};

export default TestDriveRequest;

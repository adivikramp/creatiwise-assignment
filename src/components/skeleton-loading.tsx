const SkeletonLoading = () => {
    return (
        <div className="flex h-screen bg-[#F0F5FA]">
            <div className="w-16 md:w-64 bg-white shadow-md animate-pulse">
                <div className="p-4 flex items-center space-x-3">
                    <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                    <div className="hidden md:block">
                        <div className="h-4 w-24 bg-gray-200 rounded"></div>
                    </div>
                </div>
                <div className="mt-6 space-y-4 px-2">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center p-2 space-x-3 rounded">
                            <div className="h-6 w-6 bg-gray-200 rounded"></div>
                            <div className="hidden md:block h-4 w-32 bg-gray-200 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 p-6">
                <div className="bg-white rounded-lg shadow-xl h-full animate-pulse overflow-hidden">
                    <div className="p-6 border-b">
                        <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
                        <div className="mt-4 h-4 w-1/2 bg-gray-200 rounded"></div>
                    </div>

                    <div className="p-4 border-b flex justify-between items-center">
                        <div className="h-10 w-48 bg-gray-200 rounded"></div>
                        <div className="flex space-x-2">
                            <div className="h-10 w-24 bg-gray-200 rounded"></div>
                            <div className="h-10 w-10 bg-gray-200 rounded"></div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    {['Article', 'Keywords', 'Words', 'CreatedOn'].map((i) => (
                                        <th
                                            key={i}
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            <div className="h-4 w-3/4 bg-gray-200 rounded mx-auto"></div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {[...Array(5)].map((_, rowIdx) => (
                                    <tr key={rowIdx}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-6 w-6 bg-gray-200 rounded mr-3"></div>
                                                <div className="h-4 w-32 bg-gray-200 rounded"></div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="h-4 w-16 bg-gray-200 rounded"></div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="h-4 w-12 bg-gray-200 rounded"></div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <div className="h-6 w-6 bg-gray-200 rounded ml-auto"></div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="px-6 py-4 border-t flex items-center justify-between">
                        <div className="h-4 w-32 bg-gray-200 rounded"></div>
                        <div className="flex space-x-2">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="h-8 w-8 bg-gray-200 rounded"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkeletonLoading;